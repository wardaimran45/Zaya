import { Component, Input, OnInit} from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogs$!: Observable<any[]>;
  moreBlogs$!: Observable<any[]>;
  limit: number = 5; // Number of blogs to load initially
  totalBlogs: number = 0;
 constructor(private blogService: BlogService, private router: Router){}
  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs();
   
  }


moreBlogs() {
  console.log("hey");
  this.moreBlogs$ = this.blogService.getBlogs();
}
onBlogClick(blogId: { id: number}) {
  const id = blogId.id;
  const selectedBlog = { ...blogId };
  
  // Set the selected product ID in the service
  this.blogService.setSelectedBlogId(selectedBlog);
  this.router.navigate(['blog-detail', id]);
} 

}
