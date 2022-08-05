const XLSX = require("xlsx");

// Select workbook
const workbook = XLSX.readFile("5000-common-characters.xlsx");

// Select sheet
const worksheet = workbook.Sheets["All Characters"];

// Sheet to JSON
const characters = XLSX.utils.sheet_to_json(worksheet);

// // Select workbook
// const workbook = XLSX.readFile("Testing Extension.xlsx");

// // Select sheet
// const worksheet = workbook.Sheets["Sheet1"];

// // Sheet to JSON
// const characters = XLSX.utils.sheet_to_json(worksheet);

// chrome.runtime.onMessage.addListener(receiver);

var selectedCharacter = "了";

var index = characters.findIndex(item => item.Character === selectedCharacter);
const pinyin = characters[index]["Pinyin"];
console.log(pinyin);

// function receiver(request, sender, sendResponse) {
//     var word = request.text;
//     var index = characters.findIndex(item => item.Character === word);
//     const pinyin = characters[index]["Pinyin"];
//     console.log(pinyin);
// }