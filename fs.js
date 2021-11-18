const fs = require("fs");
const path = require("path");

//Создание новой папки
fs.mkdir(path.join(__dirname, "files"), (err) => {
  if (err) throw err;

  console.log("Folder created");
});

//Создание файла
const filePath = path.join(__dirname, "files", "1.txt");

fs.writeFile(filePath, "First file", (err) => {
  if (err) throw err;
  console.log("File created");
});

//Добавление контента без перезаписывания файла
fs.appendFile(filePath, "\tSecond file", (err) => {
  if (err) throw err;
  console.log("File updated");
});
