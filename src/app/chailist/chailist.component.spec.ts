import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChailistComponent } from './chailist.component';

describe('ChailistComponent', () => {
  let component: ChailistComponent;
  let fixture: ComponentFixture<ChailistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChailistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChailistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
