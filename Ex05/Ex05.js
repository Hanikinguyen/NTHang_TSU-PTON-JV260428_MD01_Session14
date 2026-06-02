let students = [];

// 1. Thêm sinh viên mới
function addStudent(id, name, age) {
  students.push({id, name, age});
}

// 2. Hiển thị danh sách sinh viên
function showStudents() {
  for (let student of students) {
    console.log(student);
  }
}

// 3. Xóa sinh viên theo ID
function deleteStudent(id) {
  const oldLength = students.length;

  students = students.filter(s => s.id !== id);

  if (students.length === oldLength) {
    console.log("Không tìm thấy sinh viên");
  } else {
    console.log("Đã xóa sinh viên có ID =", id);
  }
}

addStudent(1, "An", 20);
addStudent(2, "Bình", 21);
addStudent(3, "Chi", 22);

console.log(students);

deleteStudent(2);
console.log(students);