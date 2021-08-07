import { Schema, model, connect } from 'mongoose';
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});
// 3. Create a Model.
const UserModel = model('User', schema);
run().catch(err => console.log(err));
async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const doc = new UserModel({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await doc.save();
    console.log(doc.email); // 'bill@initech.com'
}
//# sourceMappingURL=db.schema.js.map