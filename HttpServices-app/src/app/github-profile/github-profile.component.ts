import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params =>{
        let param = +params.get('id');
        console.log(param);
      });
  }

  submit(){
    this.routes.navigate(['/followers'], {
      queryParams: {page:1, order:'newest'}
    })
  }

}
