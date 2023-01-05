import Movie from ".";

import { render, screen } from "@testing-library/react";

test("renders a movie", () => {
  render(<Movie name="The Matrix Reloaded" />);

  const matrixHeading = screen.getByRole("heading", {
    name: "The Matrix Reloaded",
  });

  expect(matrixHeading).toBeInTheDocument();
});
