import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCategoryComponent } from './title-category.component';

describe('TitleCategoryComponent', () => {
  let component: TitleCategoryComponent;
  let fixture: ComponentFixture<TitleCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
