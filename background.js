const XLSX = require("xlsx");

// Select workbook
const workbook = XLSX.readFile("5000-common-characters.xlsx");

// Select sheet
const worksheet = workbook.Sheets["1-5000"];

// Sheet to JSON
const characters = XLSX.utils.sheet_to_json(worksheet);

// // Select workbook
// const workbook = XLSX.readFile("Testing Extension.xlsx");

// // Select sheet
// const worksheet = workbook.Sheets["Sheet1"];

// // Sheet to JSON
// const characters = XLSX.utils.sheet_to_json(worksheet);

console.log(characters[0]["501 "]);