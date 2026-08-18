const now = Date.now();
const daysAgo = (days) => new Date(now - days * 24 * 60 * 60 * 1000);

export const DEMO_USER = {
  id: "user-sable-amara",
  clerkUserId: "user-sable-amara",
  email: "amara.okonkwo@sable.house",
  name: "Amara Okonkwo",
  imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  createdAt: daysAgo(420),
  updatedAt: daysAgo(1),
};

export const DEMO_ACCOUNTS = [
  {
    id: "acct-vi-operating",
    name: "Victoria Island Operating",
    type: "CURRENT",
    balance: 428650.4,
    isDefault: true,
    userId: DEMO_USER.id,
    createdAt: daysAgo(400),
    updatedAt: daysAgo(1),
    _count: { transactions: 12 },
  },
  {
    id: "acct-family-reserve",
    name: "Family Reserve",
    type: "SAVINGS",
    balance: 1864200.0,
    isDefault: false,
    userId: DEMO_USER.id,
    createdAt: daysAgo(380),
    updatedAt: daysAgo(3),
    _count: { transactions: 6 },
  },
  {
    id: "acct-accra-desk",
    name: "Accra Trading Desk",
    type: "CURRENT",
    balance: 214880.75,
    isDefault: false,
    userId: DEMO_USER.id,
    createdAt: daysAgo(210),
    updatedAt: daysAgo(2),
    _count: { transactions: 8 },
  },
  {
    id: "acct-land-trust",
    name: "Land Trust",
    type: "SAVINGS",
    balance: 975000.0,
    isDefault: false,
    userId: DEMO_USER.id,
    createdAt: daysAgo(300),
    updatedAt: daysAgo(8),
    _count: { transactions: 4 },
  },
];

export const DEMO_TRANSACTIONS = [
  {
    id: "tx-001",
    type: "INCOME",
    amount: 185000,
    description: "Lagos logistics dividend — Q1",
    date: daysAgo(2),
    category: "income",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-28),
    lastProcessed: daysAgo(2),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(2),
    updatedAt: daysAgo(2),
  },
  {
    id: "tx-002",
    type: "EXPENSE",
    amount: 12480.5,
    description: "Shoprite Ikeja — household stores",
    date: daysAgo(3),
    category: "groceries",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(3),
    updatedAt: daysAgo(3),
  },
  {
    id: "tx-003",
    type: "EXPENSE",
    amount: 42000,
    description: "Corona School — third-term fees",
    date: daysAgo(5),
    category: "education",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "YEARLY",
    nextRecurringDate: daysAgo(-360),
    lastProcessed: daysAgo(5),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(5),
    updatedAt: daysAgo(5),
  },
  {
    id: "tx-004",
    type: "EXPENSE",
    amount: 8500,
    description: "DSTV + IKEDC — Banana Island house",
    date: daysAgo(6),
    category: "utilities",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-24),
    lastProcessed: daysAgo(6),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(6),
    updatedAt: daysAgo(6),
  },
  {
    id: "tx-005",
    type: "INCOME",
    amount: 64000,
    description: "Accra cocoa desk — weekly settlement",
    date: daysAgo(7),
    category: "income",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "WEEKLY",
    nextRecurringDate: daysAgo(-0),
    lastProcessed: daysAgo(7),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-accra-desk",
    createdAt: daysAgo(7),
    updatedAt: daysAgo(7),
  },
  {
    id: "tx-006",
    type: "EXPENSE",
    amount: 18500,
    description: "Flutterwave payout — Tema warehouse crew",
    date: daysAgo(8),
    category: "bills",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-accra-desk",
    createdAt: daysAgo(8),
    updatedAt: daysAgo(8),
  },
  {
    id: "tx-007",
    type: "EXPENSE",
    amount: 220000,
    description: "Title survey — Lekki Phase I plot",
    date: daysAgo(12),
    category: "housing",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-land-trust",
    createdAt: daysAgo(12),
    updatedAt: daysAgo(12),
  },
  {
    id: "tx-008",
    type: "INCOME",
    amount: 95000,
    description: "Nairobi rental — Kilimani flat 4B",
    date: daysAgo(14),
    category: "income",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-16),
    lastProcessed: daysAgo(14),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-family-reserve",
    createdAt: daysAgo(14),
    updatedAt: daysAgo(14),
  },
  {
    id: "tx-009",
    type: "EXPENSE",
    amount: 6100,
    description: "Uber + fuel — VI to Lekki week",
    date: daysAgo(15),
    category: "transportation",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(15),
    updatedAt: daysAgo(15),
  },
  {
    id: "tx-010",
    type: "EXPENSE",
    amount: 3400,
    description: "The Place — family Sunday table",
    date: daysAgo(16),
    category: "food",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(16),
    updatedAt: daysAgo(16),
  },
  {
    id: "tx-011",
    type: "INCOME",
    amount: 250000,
    description: "Standard Bank money-market coupon",
    date: daysAgo(18),
    category: "income",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-12),
    lastProcessed: daysAgo(18),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-family-reserve",
    createdAt: daysAgo(18),
    updatedAt: daysAgo(18),
  },
  {
    id: "tx-012",
    type: "EXPENSE",
    amount: 27500,
    description: "Axa Mansard — family medical cover",
    date: daysAgo(20),
    category: "insurance",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "YEARLY",
    nextRecurringDate: daysAgo(-345),
    lastProcessed: daysAgo(20),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-family-reserve",
    createdAt: daysAgo(20),
    updatedAt: daysAgo(20),
  },
  {
    id: "tx-013",
    type: "EXPENSE",
    amount: 9800,
    description: "Pending — Johannesburg counsel retainer",
    date: daysAgo(1),
    category: "bills",
    receiptUrl: null,
    isRecurring: false,
    recurringInterval: null,
    nextRecurringDate: null,
    lastProcessed: null,
    status: "PENDING",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(1),
    updatedAt: daysAgo(1),
  },
  {
    id: "tx-014",
    type: "EXPENSE",
    amount: 15200,
    description: "HealthPlus Ikoyi — monthly pharmacy",
    date: daysAgo(9),
    category: "healthcare",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-21),
    lastProcessed: daysAgo(9),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(9),
    updatedAt: daysAgo(9),
  },
  {
    id: "tx-015",
    type: "INCOME",
    amount: 72000,
    description: "GTBank standing order — family levy",
    date: daysAgo(22),
    category: "income",
    receiptUrl: null,
    isRecurring: true,
    recurringInterval: "MONTHLY",
    nextRecurringDate: daysAgo(-8),
    lastProcessed: daysAgo(22),
    status: "COMPLETED",
    userId: DEMO_USER.id,
    accountId: "acct-vi-operating",
    createdAt: daysAgo(22),
    updatedAt: daysAgo(22),
  },
].map((tx) => ({
  ...tx,
  account: DEMO_ACCOUNTS.find((account) => account.id === tx.accountId) || null,
}));

export const DEMO_BUDGET = {
  id: "budget-sable-house",
  amount: 185000,
  lastAlertSent: daysAgo(10),
  userId: DEMO_USER.id,
  createdAt: daysAgo(90),
  updatedAt: daysAgo(10),
};

export function getDemoAccounts() {
  return DEMO_ACCOUNTS.map((account) => ({ ...account }));
}

export function getDemoTransactions() {
  return DEMO_TRANSACTIONS.map((tx) => ({
    ...tx,
    account: tx.account ? { ...tx.account } : null,
  }));
}

export function getDemoAccountWithTransactions(accountId) {
  const account = DEMO_ACCOUNTS.find((item) => item.id === accountId);
  if (!account) return null;

  const transactions = DEMO_TRANSACTIONS.filter((tx) => tx.accountId === accountId);
  return {
    ...account,
    transactions,
    _count: { transactions: transactions.length },
  };
}

export function getDemoBudget(accountId) {
  const expenses = DEMO_TRANSACTIONS.filter((tx) => {
    if (tx.type !== "EXPENSE") return false;
    if (accountId && tx.accountId !== accountId) return false;
    const date = new Date(tx.date);
    const nowDate = new Date();
    return (
      date.getMonth() === nowDate.getMonth() &&
      date.getFullYear() === nowDate.getFullYear()
    );
  }).reduce((sum, tx) => sum + tx.amount, 0);

  return {
    budget: { ...DEMO_BUDGET },
    currentExpenses: expenses,
  };
}

export function getDemoReceiptScan() {
  return {
    amount: 12480.5,
    date: new Date(),
    description: "Household stores — rice, oil, water, cleaning",
    category: "groceries",
    merchantName: "Shoprite Ikeja City Mall",
  };
}

export function getDemoAssistantReply(input = "") {
  const text = String(input).toLowerCase();
  if (text.includes("land") || text.includes("lekki") || text.includes("plot")) {
    return "The Land Trust still holds the Lekki Phase I survey fee from this month. Leave that book untouched if the title is meant for the children. The Victoria Island operating account can carry the next legal invoice.";
  }
  if (text.includes("budget") || text.includes("spend")) {
    return "This month the house has spent most on education, land, and the Accra crew. Food and transport are inside the line. I would not raise the operating budget — I would move the Johannesburg retainer to the Chamber book.";
  }
  if (text.includes("save") || text.includes("reserve")) {
    return "Family Reserve took the Kilimani rent and the Standard Bank coupon. That is the book that should fund the next plot, not the next dinner. Keep the standing order from GTBank on the first of the month.";
  }
  return "I have the four books in front of me — Victoria Island operating, Family Reserve, the Accra desk, and the Land Trust. Ask about a corridor, a school fee, or a title, and I will read the year from those ledgers.";
}
