"use server";

import { revalidatePath } from "next/cache";
import {
  getDemoAccounts,
  getDemoReceiptScan,
  getDemoTransactions,
} from "@/lib/demo-data";

export async function createTransaction(data) {
  const account = getDemoAccounts().find((item) => item.id === data.accountId);
  const transaction = {
    id: `tx-${Date.now()}`,
    ...data,
    amount: Number(data.amount),
    date: data.date ? new Date(data.date) : new Date(),
    status: "COMPLETED",
    userId: "user-sable-amara",
    createdAt: new Date(),
    updatedAt: new Date(),
    account: account || null,
  };

  revalidatePath("/dashboard");
  if (data.accountId) {
    revalidatePath(`/account/${data.accountId}`);
  }

  return { success: true, data: transaction };
}

export async function getTransaction(id) {
  const transaction = getDemoTransactions().find((item) => item.id === id);
  if (!transaction) {
    throw new Error("Transaction not found");
  }
  return transaction;
}

export async function updateTransaction(id, data) {
  const transaction = {
    id,
    ...data,
    amount: Number(data.amount),
    updatedAt: new Date(),
  };
  revalidatePath("/dashboard");
  if (data.accountId) {
    revalidatePath(`/account/${data.accountId}`);
  }
  return { success: true, data: transaction };
}

export async function getUserTransactions() {
  return { success: true, data: getDemoTransactions() };
}

export async function scanReceipt() {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return getDemoReceiptScan();
}
