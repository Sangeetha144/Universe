import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedbComponent } from './createdb.component';

describe('CreatedbComponent', () => {
  let component: CreatedbComponent;
  let fixture: ComponentFixture<CreatedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
