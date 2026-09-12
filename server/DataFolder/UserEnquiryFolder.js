const { sendEnquiryEmail } = require("../Mailer/mailer");

exports.enquiryInsert = async (req, res) => {
  try {
    const { name, email, phone, service,address, message } = req.body;

    // 1) Validate
    if (!name || !email || !phone || !service || !address || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // 2) Send email to owner
    await sendEnquiryEmail({ name, email, phone, service,address, message });

    // 3) Respond
    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (err) {
    console.error("Enquiry insert error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};