import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";
import "vitest-axe/extend-expect";
import { toHaveNoViolations } from "vitest-axe/matchers";

expect.extend({ toHaveNoViolations });

expect.extend(matchers);
