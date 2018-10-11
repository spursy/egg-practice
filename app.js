module.exports = app => {
    app.message.on('refresh', by => {
        app.logger.info("start update by %s", by);

        const ctx = app.createAnonymousContext();
        ctx.runInBackground(async () => {
            await ctx.service.source.update();
            app.lastUpdateBy = by;
        });
    })
}