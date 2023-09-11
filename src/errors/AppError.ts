interface AppErrorInterface {
    message: string;
    name: string;
    status: number;
}

class AppError implements AppErrorInterface {
    constructor(
        public message: any,
        public name: string,
        public status: number,
    ) {}
}

export default AppError;
