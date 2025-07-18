require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { data, error } = await supabase
      .from('contacts') // 🔁 Make sure this matches your Supabase table name
      .insert([{ name, email, message }]);

    if (error) throw error;

    console.log("Inserted to Supabase:", data);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Supabase insert error:", err.message);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
