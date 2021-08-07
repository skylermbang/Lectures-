import HttpException from "./HttpException";
class PostNotFoundException extends HttpException {
    constructor(id) {
        super(404, `Post Id ${id} not found `);
    }
}
export default PostNotFoundException;
//# sourceMappingURL=PostNotFoundException.js.map