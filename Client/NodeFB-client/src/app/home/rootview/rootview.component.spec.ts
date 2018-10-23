import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootviewComponent } from './rootview.component';

describe('RootviewComponent', () => {
  let component: RootviewComponent;
  let fixture: ComponentFixture<RootviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
