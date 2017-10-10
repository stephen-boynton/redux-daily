
//select book is an action creator, it will need an action type
export function selectBook(book) {
  const BOOK_SELECTED = "BOOK_SELECTED"
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
