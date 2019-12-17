import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPortfolioComponent } from './out-portfolio.component';

describe('OutPortfolioComponent', () => {
  let component: OutPortfolioComponent;
  let fixture: ComponentFixture<OutPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
