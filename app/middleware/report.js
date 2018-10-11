module.exports = () => {
    return async function(ctx, next) {
        const startTime = Date.now();
        await next();
        console.log(`time interval ${Date.now() - startTime}`);
    }
}