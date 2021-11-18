const path = require("path");

console.log("Путь к файлу: ", __filename);

console.log("Название директории ", path.dirname(__filename));

console.log("Название файла: ", path.basename(__filename));

console.log("Расширение файла: ", path.extname(__filename));

// Возвращает объект, свойствами которого являются элементы пути к файлу
console.log(path.parse(__filename));
