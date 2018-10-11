const Service = require('egg').Service;

class UserService extends Service {
    async find() {
        let userName = "yy";
        let passWord = "123456";
        
        let res = await this.ctx.model.User.create({
            userName,
            passWord,
        });
        
        return res;
    }
}

module.exports = UserService;