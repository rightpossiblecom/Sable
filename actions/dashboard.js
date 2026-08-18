"use server";

import { revalidatePath } from "next/cache";
import { getDemoAccounts, getDemoTransactions } from "@/lib/demo-data";

export async function getUserAccounts() {
  return getDemoAccounts();
}

export async function createAccount(data) {
  const balanceFloat = parseFloat(data.balance);
  if (isNaN(balanceFloat)) {
    throw new Error("Invalid balance amount");
  }

  const account = {
    id: `acct-${Date.now()}`,
    name: data.name,
    type: data.type,
    balance: balanceFloat,
    isDefault: Boolean(data.isDefault),
    userId: "user-sable-amara",
    createdAt: new Date(),
    updatedAt: new Date(),
    _count: { transactions: 0 },
  };

  revalidatePath("/dashboard");
  return { success: true, data: account };
}

export async function getDashboardData() {
  return getDemoTransactions();
}
