import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAdminCreateFormComponent } from './tag-admin-create-form.component';

describe('TagAdminCreateFormComponent', () => {
  let component: TagAdminCreateFormComponent;
  let fixture: ComponentFixture<TagAdminCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAdminCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAdminCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
