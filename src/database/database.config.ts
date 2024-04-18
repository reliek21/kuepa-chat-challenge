import { PrismaClient } from '@prisma/client';

import { CONFIG_ENVIRONMENTS } from '@/config';

function prismaClientSingleton(): PrismaClient {
	return new PrismaClient();
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma: { prisma: PrismaClientSingleton | undefined } =
	// eslint-disable-next-line no-undef
	globalThis as unknown as {
		prisma: PrismaClientSingleton | undefined;
	};

const prisma: PrismaClient = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (CONFIG_ENVIRONMENTS.NODE_ENV !== 'production')
	globalForPrisma.prisma = prisma;
