import BaseError from './base-error';

class ServerError extends BaseError {
  constructor() {
    super('Something went wrong again.Please try again later', 500);
  }
}

export default ServerError;
