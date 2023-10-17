const Request = require("../Models/Request");

exports.createRequest = async (req, res) => {
  try {
    console.log("Request Data:", req.body);

    // Destructure reqstData and date from req.body
    const { reqstData, date } = req.body;

    let request = await Request.create({
      location: reqstData.location,
      date: date,
      passanger: reqstData.passanger,
    });

    const requested = await request.save();
    console.log(requested, "The Data is saved");

    if (!requested) {
      res.status(401).send({
        message: "Invalid Request Data",
      });
    } else {
      return res.status(200).json({
        location: requested.location,
        date: requested.date,
        passanger: requested.passanger,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};
