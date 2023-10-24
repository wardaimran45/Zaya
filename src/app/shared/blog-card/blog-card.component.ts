import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent{
  @Input() image = ''
  @Input() title = ''
  @Input() desc = ''
  @Input() date = ''
  @Input() comment = ''
 
  dateIcon = faCalendarDays;
  commentIcon = faComment
  constructor(private blogService: BlogService){}

 
}
