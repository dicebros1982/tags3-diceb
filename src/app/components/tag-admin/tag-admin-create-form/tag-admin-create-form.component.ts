import { Component, OnInit } from "@angular/core";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  sections: Observable<any>;
  selectedVal: string;
  tagOptions: Object = {};
  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.sections = this.tagService.getSections();
    console.log(this.sections);
  }
}
