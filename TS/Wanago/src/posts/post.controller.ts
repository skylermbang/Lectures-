import HttpException from '../exceptions/HttpException';
import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import Post from './post.interface';
import postModel from './posts.model';
 
class PostsController implements Controller {
  public path = '/posts';
  public router = express.Router();
  private post = postModel;
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.patch(`${this.path}/:id`, this.modifyPost);
    this.router.delete(`${this.path}/:id`, this.deletePost);
    this.router.post(this.path, this.createPost);
  }
 
  private getAllPosts = (request: express.Request, response: express.Response) => {
    this.post.find()
      .then((posts) => {
        console.log("Reqeust for user data") 
      })
        .then((posts)=>{
          response.send(posts)    
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

  private getPostById = async (req: express.Request, res: express.Response, next: express.NextFunction)=>{
    const id = req.params.id;
    const post = await this.post.findById(id)

    if (post){
      res.send(post);
    }else{
      next(new HttpException(404, 'Post not found'))
    }
    res.send(post);
  }





 
  private modifyPost = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    const postData: Post = request.body;
    this.post.findByIdAndUpdate(id, postData, { new: true })
      .then((post) => {
        response.send(post);
      });
  }
 
  private createPost = (request: express.Request, response: express.Response) => {
    const postData: Post = request.body;
    const createdPost = new this.post(postData);
    createdPost.save()
      .then((savedPost) => {
        response.send(savedPost);
      });
  }
 
  private deletePost = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    this.post.findByIdAndDelete(id)
      .then((successResponse) => {
        if (successResponse) {
          response.send(200);
        } else {
          response.send(404);
        }
      });
  }
}
 
export default PostsController;