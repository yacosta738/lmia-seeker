async function someAsyncFunction() {
    return "Hello world";
}

export default async (req, res) => {
    let message = await someAsyncFunction();
    message = message.toUpperCase();
    return message;
}