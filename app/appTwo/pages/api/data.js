// pages/api/data.js
export default function handler(_req, res) {
  res.status(200).json(["Item 1", "Item 2", "Item 3"]);
};
