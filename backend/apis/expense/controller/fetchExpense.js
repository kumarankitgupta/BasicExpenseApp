const fetchExpenseService = require("../services/fetchExpenseService");
const fetchExpense = async (req, res) => {
  try {
    const { year } = req.params;
    if (!year) return res.status(400).json({ message: "Please provide year" });
    const expenses = await fetchExpenseService(year);
    return res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = fetchExpense;
