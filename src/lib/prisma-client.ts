import { PrismaClient as PrismaClientEdge } from '@prisma/client/edge';
import { PrismaClient } from '@prisma/client';
const prismaClientEdge = new PrismaClientEdge();
const prismaClient = new PrismaClient();
export { prismaClientEdge, prismaClient };
