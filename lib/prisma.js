import { isDemoMode } from "@/lib/demo";

let prismaClient = null;

export const db = new Proxy(
  {},
  {
    get(_target, prop) {
      if (isDemoMode()) {
        throw new Error("Sable is in demo mode. The live ledger is not connected.");
      }

      if (!prismaClient) {
        const { PrismaClient } = require("@prisma/client");
        prismaClient = globalThis.prisma || new PrismaClient();
        if (process.env.NODE_ENV !== "production") {
          globalThis.prisma = prismaClient;
        }
      }

      return prismaClient[prop];
    },
  }
);
