export async function GET() {
  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: 500,
      status: "Success",
      date: "2025-07-11 10:20 AM",
    },
    {
      id: 2,
      type: "Withdraw",
      amount: 300,
      status: "Pending",
      date: "2025-07-10 05:15 PM",
    },
    {
      id: 3,
      type: "Game Win",
      amount: 200,
      status: "Success",
      date: "2025-07-09 07:30 PM",
    },
    {
      id: 4,
      type: "Game Loss",
      amount: -100,
      status: "Complete",
      date: "2025-07-09 07:10 PM",
    },
  ];

  return Response.json({ transactions });
}
export async function POST(request) {
  const { type, amount } = await request.json();

  if (!type || !amount || amount <= 0) {
    return Response.json({ error: "Invalid transaction data" }, { status: 400 });
  }

  // Simulate a successful transaction
  const newTransaction = {
    id: Date.now(),
    type,
    amount,
    status: "Success",
    date: new Date().toISOString(),
  };

  return Response.json({
    message: `Successfully processed ${type} of ₹${amount}`,
    transaction: newTransaction,
  });
}