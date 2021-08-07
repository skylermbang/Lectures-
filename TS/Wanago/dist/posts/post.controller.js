import HttpException from '../exceptions/HttpException';
import * as express from 'express';
import postModel from './posts.model';
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express.Router();
        this.post = postModel;
        this.getAllPosts = (request, response) => {
            this.post.find()
                .then((posts) => {
                console.log("Reqeust for user data");
            })
                .then((posts) => {
                response.send(posts);
            });
        };
        // private getAllPosts = async (req: express.Request, res : express.Response)=>{
        //   const post = await this.post.find();
        //   console.log("Reqeust for user data")
        //   res.status(200).json(post)
        // }
        // private getPostById = (request: express.Request, response: express.Response) => {
        //   const id = request.params.id;
        //   this.post.findById(id)
        //     .then((post) => {
        //       response.send(post);
        //     });
        // }
        this.getPostById = async (req, res, next) => {
            const id = req.params.id;
            const post = await this.post.findById(id);
            if (post) {
                res.send(post);
            }
            else {
                next(new HttpException(404, 'Post not found'));
            }
            res.send(post);
        };
        this.modifyPost = (request, response) => {
            const id = request.params.id;
            const postData = request.body;
            this.post.findByIdAndUpdate(id, postData, { new: true })
                .then((post) => {
                response.send(post);
            });
        };
        this.createPost = (request, response) => {
            const postData = request.body;
            const createdPost = new this.post(postData);
            createdPost.save()
                .then((savedPost) => {
                response.send(savedPost);
            });
        };
        this.deletePost = (request, response) => {
            const id = request.params.id;
            this.post.findByIdAndDelete(id)
                .then((successResponse) => {
                if (successResponse) {
                    response.send(200);
                }
                else {
                    response.send(404);
                }
            });
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getPostById);
        this.router.patch(`${this.path}/:id`, this.modifyPost);
        this.router.delete(`${this.path}/:id`, this.deletePost);
        this.router.post(this.path, this.createPost);
    }
}
export default PostsController;
//# sourceMappingURL=post.controller.js.map