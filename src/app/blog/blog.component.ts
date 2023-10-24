import { Component, Input, OnInit} from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogs$!: Observable<any[]>;
 constructor(private blogService: BlogService){}
  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs();
  }

}
