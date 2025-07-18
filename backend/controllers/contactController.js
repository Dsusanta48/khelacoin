const submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // এখানে তুমি DB তে ইনসার্ট বা ইমেল পাঠাতে পারো।
  console.log("Contact form submitted:", { name, email, message });

  return res.status(200).json({ success: true, message: "Message received!" });
};

module.exports = { submitContactForm };
