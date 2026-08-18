"use server";

import { revalidatePath } from "next/cache";
import {
  getDemoAccountWithTransactions,
  getDemoAccounts,
} from "@/lib/demo-data";

export async function getAccountWithTransactions(accountId) {
  return getDemoAccountWithTransactions(accountId);
}

export async function bulkDeleteTransactions() {
  revalidatePath("/dashboard");
  revalidatePath("/account/[id]");
  return { success: true };
}

export async function updateDefaultAccount(accountId) {
  const account = getDemoAccounts().find((item) => item.id === accountId);
  revalidatePath("/dashboard");
  return {
    success: true,
    data: account ? { ...account, isDefault: true } : { id: accountId, isDefault: true },
  };
}
