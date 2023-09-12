interface AppErrorInterface {
    message: string;
    name: string;
    status: number;
}
declare class AppError implements AppErrorInterface {
    message: any;
    name: string;
    status: number;
    constructor(message: any, name: string, status: number);
}
export default AppError;
