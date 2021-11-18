const os = require("os");

const getComputerUptime = () => {
  return (os.uptime() / 60).toFixed(0);
};

console.log("Компьютер включен:", getComputerUptime(), "minutes");

console.log("Операционая система: ", os.platform());

console.log("Архитектура процессора:", os.arch());

console.log("Всего памяти:", os.totalmem());

console.log("Свободной памяти:", os.freemem());
