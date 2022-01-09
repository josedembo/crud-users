

class AppError extends Error {

    public readonly message: string;
    public readonly statusCode: number
    // public readonly error : any;

    constructor(message: string, statusCode: number = 400) {
        super(message)
        this.statusCode = statusCode;
    }
}

export { AppError }