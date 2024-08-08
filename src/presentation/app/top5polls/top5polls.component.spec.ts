import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5pollsComponent } from './top5polls.component';

describe('Top5pollsComponent', () => {
  let component: Top5pollsComponent;
  let fixture: ComponentFixture<Top5pollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top5pollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5pollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
