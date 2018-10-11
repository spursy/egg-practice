exports.schedule = {
    interval: '10s',
    type: 'worker'
};

exports.task = async ctx => {
    const needRefresh = await ctx.service.source.checkUpdate();
    if (!needRefresh) return;

    ctx.app.message.sendToApp('refresh', 'pull');
};