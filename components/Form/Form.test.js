import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("calls the onAddMovie handler with inputs on submit", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);

  const nameInput = screen.getByLabelText("Name");
  const isLikedInput = screen.getByLabelText("Like");
  const submitButton = screen.getByRole("button", { name: "Add" });

  await user.type(nameInput, "The Matrix");
  await user.click(isLikedInput);
  await user.click(submitButton);

  expect(handleAddMovie).toHaveBeenCalledWith({
    name: "The Matrix",
    isLiked: true,
  });
});
