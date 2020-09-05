module.exports = class CustomSuccess {
    constructor(message) {
        this.name = 'CustomSuccess';
        this.message = message;
        this.status = 200;
    }
}