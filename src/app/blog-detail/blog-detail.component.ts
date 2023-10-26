import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit{
  selectedBlog: any;
  fIcon = faFacebookF;
  instaIcon = faInstagram;
  linkedIcon = faLinkedin;
  twitterIcon = faTwitter
  calenderIcon = faCalendar;
  userIcon = faUser;
  blogs: any[] = [];
  comments$!: Observable<any[]>;

  commentIcon = faComment
  constructor(private blogDetailService: BlogService, private reviewService: ReviewsService){}

  ngOnInit(): void {
    this.blogDetailService.selectedBlogId$.subscribe((selectedBlog: any) => {
      this.selectedBlog = selectedBlog;
      if (this.selectedBlog.content) {
        this.selectedBlog.content = this.selectedBlog.content.replace(/\\n/g, '\n').split('\n').filter((p:string) => p.trim() !== '');
      }
    });
    this.comments$ = this.reviewService.getComments();
  }
}
