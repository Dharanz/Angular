import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/Bad-input';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.get()
      .subscribe( posts => this.posts = posts );
  }


  addObject(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    
    this.service.create(post)
      .subscribe(
        newPosts => {
          post['id'] = newPosts.id;
          
          console.log(newPosts);
        }, 
        (error: AppError) => {
          this.posts.splice(0, 1);
          
          if(error instanceof BadInputError)
          // this.form.setError(error.OriginalError);
            alert('Cant Insert!');
          else throw error;
      })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(
        () => {
          let index=this.posts.indexOf(post);
          post.title = "updated";
        });
  }

  deletePost(post){
    let index= this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
       (error: AppError) => {
        this.posts.splice(index, 0, post);

          if(error instanceof NotFoundError)
            alert('Name alredy been taken!');
          else throw error;
      });
  }
}
