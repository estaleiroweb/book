/**
 * Singleton Logger class to ensure a single instance across the application.
 * @see https://evoice/docs/Books/TI/Dev/JS/OO_Example.html
 */
class Logger {
    /** @type {Logger|null} */
    static #instance = null;

    constructor() {
        if (Logger.#instance) {
            return Logger.#instance;
        }
        Logger.#instance = this;
    }

    /**
     * Standard log method.
     * @param {string} message - The message to be displayed.
     */
    log(message) {
        console.log("[LOG]", message);
    }
}

// Instantiate the singleton
const loggerInstance = new Logger();

// Export as the default member
export default loggerInstance;
