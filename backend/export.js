const { createObjectCsvWriter } = require("csv-writer");

async function exportCSV(leads) {
  const csvWriter = createObjectCsvWriter({
    path: "leads.csv",
    header: [
      { id: "name", title: "Name" },
      { id: "services", title: "Services" },
      { id: "emailGuess", title: "Email" },
      { id: "score", title: "Score" }
    ]
  });

  await csvWriter.writeRecords(leads);
}

module.exports = exportCSV;
