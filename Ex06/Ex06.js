let books = [];

// 1. Thêm sách mới
function addBook(id, name, author, year) {
  books.push({ id, name, author, year });
}

// 2. Hiển thị danh sách sách
function showBooks() {
  if (books.length === 0) {
    console.log("Danh sách trống");
    return;
  }

  for (let book of books) {
    console.log(book);
  }
}

// 3. Tìm kiếm sách theo tên (không phân biệt hoa thường)
function searchBook(keyword) {
  let result = books.filter(b =>
    b.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (result.length === 0) {
    console.log("Không tìm thấy sách");
  } else {
    console.log("Kết quả tìm kiếm:");
    console.log(result);
  }
}

// 4. Xóa sách theo ID
function deleteBook(id) {
  const oldLength = books.length;

  books = books.filter(b => b.id !== id);

  if (books.length === oldLength) {
    console.log("Không tìm thấy sách");
  } else {
    console.log("Đã xóa sách có ID =", id);
  }
}