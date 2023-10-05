import BaseError from '@src/errors/base-error';
import ServerError from '@src/errors/server-error';

async function tryCatchWrapper<T = void>(
  operation: () => T | Promise<T>,
): Promise<{ error?: Error; data?: Awaited<T> }> {
  try {
    const result = await operation();
    return { data: result };
  } catch (err) {
    const _err = err as BaseError;
    console.log({ _err });
    if (_err.isOperational) {
      return { error: err as Error };
    }
    const serverError = new ServerError();
    return { error: serverError };
  }
}

export default tryCatchWrapper;
