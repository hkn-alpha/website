import { expect, test } from "vitest";
import "vitest-dom/extend-expect";
import { render, screen } from "@testing-library/svelte";
import ServicesWithRouter from "./ServicesWithRouter.svelte";

// Note this cannot be in the same file as any tests which depend
// on other ComponentWithRouter files due to bad interaction between
// our router and the testing setup
// https://github.com/EmilTholin/svelte-routing/issues/104

test("student services", async () => {
  render(ServicesWithRouter);
  expect(screen.getByText("Find a Tutor")).toBeInTheDocument();
});
