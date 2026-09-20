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
  expect(screen.getByText("Request a Tutor")).toBeInTheDocument();
  expect(screen.getByLabelText("Your name")).toBeInTheDocument();
  expect(
    screen.getByLabelText("Courses you need tutoring in")
  ).toBeInTheDocument();
  expect(screen.getByLabelText("Your Illinois email")).toBeInTheDocument();
  expect(screen.getByLabelText("Days and times you're free")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Send request" })).toBeDisabled();
  expect(screen.getByText("Find a Tutor")).toBeInTheDocument();
  expect(screen.getByLabelText("Search for courses")).toBeInTheDocument();
});
