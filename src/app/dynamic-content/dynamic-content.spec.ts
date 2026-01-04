import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContent } from './dynamic-content';

describe('DynamicContent', () => {
  let component: DynamicContent;
  let fixture: ComponentFixture<DynamicContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
