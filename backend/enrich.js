async function enrichLead(lead) {
  return {
    ...lead,
    services: "General Dentistry, Cleaning",
    emailGuess: "info@" + lead.name.replace(/\s+/g, "").toLowerCase() + ".com"
  };
}

module.exports = enrichLead;
