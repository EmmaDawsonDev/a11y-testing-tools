import { expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Button } from "./components/ui/button";
//import App from "./App";

it("should render an accessible button", async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("should render an accessible button", async () => {
  const { container } = render(<Button></Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// it("should render an accessible app", async () => {
//   const { container } = render(<App />);
//   const results = await axe(container);
//   expect(results).toHaveNoViolations();
// });
