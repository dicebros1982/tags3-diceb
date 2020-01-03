import { Component, OnInit } from "@angular/core";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  sections: Observable<any[]>;
  parents: Observable<any[]>;
  isChildTag = false;
  isSectionChosen = false;
  sectionOptions: string;
  parentOptions: string = "";

  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.sections = this.getSections();
  }

  getSections() {
    return this.tagService.getSections();
  }
  getParentTags(input: string) {
    this.parents = this.tagService.getParentTags(input);
    //this.isSectionChosen = true;
  }

  onsubmit() {}
}
