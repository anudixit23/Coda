import {PrismaClient} from "@prisma/client" // like import mongoose from mongoose

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient}
// globalThis is a nodejs method to declare a global object,so here we are
//declaring globalForPrisma as global object which can be reused even after refresh/reload

export const db = globalForPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

