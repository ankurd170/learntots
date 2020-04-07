import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsknowComponent } from './factsknow.component';

describe('FactsknowComponent', () => {
  let component: FactsknowComponent;
  let fixture: ComponentFixture<FactsknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
