import { test } from "vitest";
import "vitest-dom/extend-expect";
import { render, screen } from "@testing-library/svelte";
import HomeWithRouter from "./HomeWithRouter.svelte";

// Note this cannot be in the same file as any tests which depend
// on other ComponentWithRouter files due to bad interaction between
// our router and the testing setup
// https://github.com/EmilTholin/svelte-routing/issues/104

test("homepage", () => {
  render(HomeWithRouter);
  const servicesLink = screen
    .getAllByRole("link")
    .find((elem) => elem.textContent === "Student Services")!;
  servicesLink.click();
});
