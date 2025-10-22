// Run: node sculptureScript.js
const data = require("./data.js");                         // CommonJS import
const sculptureList = Array.isArray(data) ? data : (data.sculptureList || []);

function toLengthObject(sculpture) {
  const result = {};
  for (const key in sculpture) {
    const value = sculpture[key];
    result[key] = typeof value === "string" ? value.length : String(value).length;
  }
  return result;
}

const sculptureListLengths = sculptureList.map(toLengthObject);
console.log(JSON.stringify(sculptureListLengths, null, 2));

module.exports = { sculptureListLengths };
