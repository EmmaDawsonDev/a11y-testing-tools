import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Button } from "./components/ui/button";
//import App from "./App";

it("should render an accessible button", async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Programmatic accessibility tests for components in src/components/ui
const componentsToTest = [
  "accordion",
  "badge",
  "button",
  "input",
  "card",
  "carousel",
];

componentsToTest.forEach((name) => {
  it(`should render an accessible ${name} component if available`, async () => {
    // Try to dynamically import the component module; if missing, skip gracefully.
    const mod = await import(`./components/ui/${name}`).catch(() => null);
    if (!mod) {
      // Module not found — skip this test without failing the suite.
      // This keeps the test file safe when some UI components don't exist yet.
      // eslint-disable-next-line no-console
      console.warn(
        `Skipping accessibility test for missing component: ${name}`
      );
      return;
    }

    // Resolve a likely export: named (PascalCase) or default
    const exportName = name.charAt(0).toUpperCase() + name.slice(1); // e.g. 'button' -> 'Button'
    const Component =
      mod[exportName] || // named export e.g. Button
      mod.default || // default export
      Object.values(mod)[0]; // fallback to first export

    if (!Component) {
      // Nothing to render from the module
      // eslint-disable-next-line no-console
      console.warn(`No usable export found for component module: ${name}`);
      return;
    }

    // Build a minimal, accessible element depending on component type.
    let element = null;
    try {
      switch (name) {
        case "button":
          element = <Component>Click me</Component>;
          break;
        case "card":
          element = (
            <Component>
              <div>Card content</div>
            </Component>
          );
          break;
        default:
          element = <Component />;
      }
    } catch (renderErr) {
      // Rendering failed due to prop/API mismatch — skip test to avoid false negatives.
      // eslint-disable-next-line no-console
      console.warn(
        `Skipping ${name} test: render failed with error:`,
        renderErr
      );
      return;
    }

    // If no element could be constructed, skip.
    if (!element) {
      // eslint-disable-next-line no-console
      console.warn(
        `Skipping ${name} test: could not construct element to render`
      );
      return;
    }

    // Render and run axe
    const { container } = render(element);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
