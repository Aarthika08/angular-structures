import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesExamplesComponent } from './attributes-examples.component';

describe('AttributesExamplesComponent', () => {
  let component: AttributesExamplesComponent;
  let fixture: ComponentFixture<AttributesExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
