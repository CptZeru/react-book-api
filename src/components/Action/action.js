
// export function fetchBookList() {
//     return function(dispatch) {
//       return axios.get("https://fullstack-book.ariefdfaltah.com/book/list?key=gandhi&page=1&per_page=5&sort_by=category&sort_order=desc")
//         .then(({ data }) => {
//         dispatch(setBookList(data));
//       });
//     };
// }
// function setBookList(data) {
//     return {
//       type: SET_BOOK_LIST,
//       payload: data
//     };
// }