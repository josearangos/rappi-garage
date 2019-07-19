module.exports = {
  db: {
    url: process.env.DATABASE_URL,
    connector: "postgresql"
  },
  amazonS3: {
    name: "amazonS3",
    connector: "loopback-component-storage",
    provider: "amazon",
    key: "UVqE2nu/Gk/lefkYzaLL5i4NUaFTQhZo78e552hv",
    keyId: "AKIAIABKZ2SFDURFTUMA"
  }
};
