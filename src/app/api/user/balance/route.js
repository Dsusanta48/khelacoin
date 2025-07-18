export async function GET() {
  // Mock response — future e database theke asbe
  return Response.json({
    balance: 1200,
    currency: "INR",
  });
}
export async function POST(request) {
  // Mock response — future e database theke asbe
  const { amount } = await request.json();
  if (amount <= 0) {
    return Response.json({ error: "Invalid amount" }, { status: 400 });
  }
  
  // Simulate a successful deposit
  return Response.json({
    message: `Successfully deposited ₹${amount}`,
    newBalance: 1200 + amount, // Mock new balance
  });
}