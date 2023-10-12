import BaseError from './base-error';

class UnauthorizedError extends BaseError {
  constructor() {
    super('You are not authorized.Please login again', 401);
  }
}

export default UnauthorizedError;
