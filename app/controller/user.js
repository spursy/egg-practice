const Controller = require('egg').Controller;

class UserController extends Controller {
    async find() {
        const user = await this.ctx.service.user.find();
        this.ctx.body = user;
    }
}

module.exports = UserController;