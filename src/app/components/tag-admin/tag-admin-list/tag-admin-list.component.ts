import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-admin-list',
  templateUrl: './tag-admin-list.component.html',
  styleUrls: ['./tag-admin-list.component.css']
})
export class TagAdminListComponent implements OnInit {
  sections: Observable<any[]>;

  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.sections = this.getSections();
  }

  getSections() {
    return this.tagService.getSections();
  }
}
