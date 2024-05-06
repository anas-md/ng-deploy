import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News4Component } from './news4.component';

describe('News4Component', () => {
  let component: News4Component;
  let fixture: ComponentFixture<News4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [News4Component]
    });
    fixture = TestBed.createComponent(News4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
