const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "x5ERboe_RhJoORBSQTPbQ",
    APISecret: "CUlhIgvhnOCju72XdaAi32yhgUAwH4Cl",
  },
  production: {
    APIKey: "x5ERboe_RhJoORBSQTPbQ",
    APISecret: "CUlhIgvhnOCju72XdaAi32yhgUAwH4Cl",
  },
};

module.exports = config[env];
