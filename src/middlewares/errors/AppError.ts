export default class AppError {
    constructor(
      message: string,
      name: string,
      status: string,
      ) {
      Object.assign(this, { message, name, status });
    }
  }
