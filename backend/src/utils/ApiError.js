class ApiError extends Error {
    constructor(statusCode, message = "Something Went Wrong", data = null, stack = "") {
        super(message);  // Pass message to the Error constructor

        this.statusCode = statusCode || 500;  // Default to 500 if no statusCode is provided
        this.data = data;  // This can store any error-specific data or additional information
        this.success = false;  // Indicates failure status

        if (stack) {
            this.stack = stack;  // If provided, use the custom stack trace
        } else {
            Error.captureStackTrace(this, this.constructor);  // Capture default stack trace
        }
    }
}

export default ApiError;
