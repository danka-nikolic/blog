import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {

  title = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
