import { PrismaClient } from "@prisma/client";

// lets declare our prismadb variable
declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
}