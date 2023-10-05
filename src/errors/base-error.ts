class BaseError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public isOperational: boolean = false,
  ) {
    super(message);
    // Error.captureStackTrace(this);
  }
}

export default BaseError;
