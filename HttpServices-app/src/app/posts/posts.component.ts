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
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }


  addObject(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    
    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          
          console.log(response.json());
        }, 
        (error: AppError) => {
          if(error instanceof BadInputError)
          // this.form.setError(error.OriginalError);
            alert('Cant Insert!');
          else throw error;
      })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(
        response => {
          let index=this.posts.indexOf(post);
          post.title = "updated";
        });
  }

  deletePost(post){
    this.service.delete(345)
      .subscribe(
        resonse => {
          let index= this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
       (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('Name alredy been taken!');
          else throw error;
      });
  }
}
