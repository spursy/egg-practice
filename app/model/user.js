module.exports = app => {
    // const mongoose = app.mongoose;
    // // mongoose.connect();
    // const Schema = mongoose.Schema;

    // const UserSchema = new Schema({
    //     userName: {type: String},
    //     passWord: {type: String}
    // });

    // return mongoose.model('User', UserSchema);

    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
      userName: { type: String },
      passWord: { type: String },
    });
  
    return mongoose.model('User', UserSchema);
}