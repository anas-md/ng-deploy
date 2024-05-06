import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News3Component } from './news3.component';

describe('News3Component', () => {
  let component: News3Component;
  let fixture: ComponentFixture<News3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [News3Component]
    });
    fixture = TestBed.createComponent(News3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
