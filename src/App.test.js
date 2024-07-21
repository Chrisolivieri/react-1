import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContextProvider";

test("renders Welcome component", () => {
  //rendering
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  //selezione
  const titleElement = screen.getByText(/horror books/i);
  //assertion
  expect(titleElement).toBeInTheDocument();
});



test("check 150 cards", () => {
  //rendering
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  expect(bookCards).toHaveLength(150);
});



test("renders commentArea", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
});



describe("filter book by navbar", () => {
  test("search1", () => {
    render(
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    );
    const filterInput = screen.getByPlaceholderText("Search book");
    fireEvent.change(filterInput, { target: { value: "vol" } });
    const bookCards = screen.getAllByTestId("bookCards");
    expect(bookCards).toHaveLength(5);
  });
  test("search2", () => {
    render(
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    );
    const filterInput = screen.getByPlaceholderText("Search book");
    fireEvent.change(filterInput, { target: { value: "ari" } });
    const bookCards = screen.getAllByTestId("bookCards");
    expect(bookCards).toHaveLength(1);
  });
});



test("red border cards", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  expect(bookCards[0]).toHaveClass("redBorder");
});



test("not border red card after click another card", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  fireEvent.click(bookCards[1]);
  expect(bookCards[0]).not.toHaveClass("redBorder");
});



test("no instances in singlecomment",()=>{
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const singleComment = screen.queryAllByTestId("singleComment");
  expect(singleComment).toHaveLength(0);
})



test("correct loading comments", async () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  //usiamo await per rendere il test asincrono perchè cliccando una card stiamo fancedo una fetch che carica i commenti, quindi aspettiamo che finisca
  const review = await screen.findAllByText(/rate/i);
  expect(review).not.toHaveLength(0)
})