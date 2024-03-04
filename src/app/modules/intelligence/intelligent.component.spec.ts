import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligentComponent } from './intelligent.component';

describe('IntelligentComponent', () => {
  let component: IntelligentComponent;
  let fixture: ComponentFixture<IntelligentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelligentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
