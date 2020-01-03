import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tag-admin-create-form-test",
  templateUrl: "./tag-admin-create-form-test.component.html",
  styleUrls: ["./tag-admin-create-form-test.component.css"]
})
export class TagAdminCreateFormTestComponent implements OnInit {
  tagForm: FormGroup;
  sections: Observable<any[]>;
  parents: Observable<any[]>;

  constructor(private fb: FormBuilder, private tagService: TagsService) {}

  ngOnInit() {
    this.tagForm = this.fb.group({
      relation: "",
      name: "",
      description: "",
      section: "",
      parent: ""
    });
    this.tagForm.valueChanges.subscribe(console.log);

    this.sections = this.getSections();
  }

  getSections() {
    return this.tagService.getSections();
  }

  getParentTags(input: string) {
    this.parents = this.tagService.getParentTags(input);
  }
}
