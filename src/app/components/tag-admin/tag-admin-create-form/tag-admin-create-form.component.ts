import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  tagForm: FormGroup;
  sections: Observable<any[]>;
  parents: Observable<any[]>;

  constructor(private fb: FormBuilder, private tagService: TagsService) {}

  ngOnInit() {
    this.buildForm();
    this.sections = this.getSections();
    this.setRelationValidators();
  }
  buildForm() {
    this.tagForm = this.fb.group({
      relation: ["parent"],
      name: ["", [Validators.required, Validators.pattern("#\\w+")]],
      description: ["", [Validators.required]],
      section: ["", [Validators.required]],
      parentTag: [""]
    });
  }

  getSections() {
    return this.tagService.getSections();
  }
  getParentTags(input: string) {
    this.parents = this.tagService.getParentTags(input);
  }
  // dynamically set validators, depending on if it is a parent or a child tag
  setRelationValidators() {
    const parentTagControl = this.tagForm.get("parentTag");

    this.tagForm.get("relation").valueChanges.subscribe(relation => {
      if (relation === "parent") {
        parentTagControl.setValidators(null);
      }
      if (relation === "child") {
        parentTagControl.setValidators([Validators.required]);
      }
      parentTagControl.updateValueAndValidity();
    });
  }
  // getters for displaying validation errors
  get name() {
    return this.tagForm.get("name");
  }
  get description() {
    return this.tagForm.get("description");
  }
  get section() {
    return this.tagForm.get("section");
  }
  get parentTag() {
    return this.tagForm.get("parentTag");
  }

  onsubmit() {}
}
