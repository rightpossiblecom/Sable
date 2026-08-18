"use server";

import { revalidatePath } from "next/cache";
import { DEMO_BUDGET, getDemoBudget } from "@/lib/demo-data";

export async function getCurrentBudget(accountId) {
  return getDemoBudget(accountId);
}

export async function updateBudget(amount) {
  revalidatePath("/dashboard");
  return {
    success: true,
    data: { ...DEMO_BUDGET, amount: Number(amount) },
  };
}
