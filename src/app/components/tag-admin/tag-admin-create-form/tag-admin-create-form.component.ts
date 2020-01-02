import { Component, OnInit } from "@angular/core";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  sections: Observable<any[]>;
  parents: Observable<any[]>;
  relationOptions: Object = {};
  sectionOptions: String;
  parentOptions: Object = {};

  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.sections = this.getSections();
  }

  getSections() {
    return this.tagService.getSections();
  }
  getParentTags(input) {
    this.parents = this.tagService.getParentTags(input);
  }
}
