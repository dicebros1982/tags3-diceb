import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../services/tags.service';

@Component({
  selector: 'app-tag-admin-create-form',
  templateUrl: './tag-admin-create-form.component.html',
  styleUrls: ['./tag-admin-create-form.component.css']
})
export class TagAdminCreateFormComponent implements OnInit {
  public sections: any;
  selectedVal: string;
  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.sections = this.tagService.getSections();
    console.log(this.sections);
  }
}
