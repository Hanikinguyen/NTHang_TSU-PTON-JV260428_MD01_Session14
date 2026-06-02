const original = {
  name: "Bob",
  age: 30
};

// Sao chép object
const copy = Object.assign({}, original);

// Thay đổi thuộc tính của copy
copy.name = "Charlie";

// In ra cả hai object
console.log("original:", original);
console.log("copy:", copy);