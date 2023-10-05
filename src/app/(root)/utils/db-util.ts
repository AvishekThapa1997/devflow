import { startSession, ClientSession } from 'mongoose';

export async function executeWithTransaction<T>(
  task: (session: ClientSession) => Promise<T>,
): Promise<Awaited<ReturnType<typeof task>> | undefined> {
  let session: ClientSession | undefined;
  let result: Awaited<ReturnType<typeof task>> | undefined;
  // const session = await startSession();
  // session.startTransaction();
  // await session.withTransaction(async (session) => {
  //   result = task(session);
  // });
  // await result;
  // session.endSession();
  try {
    session = await startSession();
    session?.startTransaction();
    result = await task(session);
    await session?.commitTransaction();
  } catch (err) {
    if (session) {
      await session.abortTransaction();
    }
  } finally {
    if (session) {
      await session.endSession();
    }
  }
  return result;
}
