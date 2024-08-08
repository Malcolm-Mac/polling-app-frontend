import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5pollresultsComponent } from './top5pollresults.component';

describe('Top5pollresultsComponent', () => {
  let component: Top5pollresultsComponent;
  let fixture: ComponentFixture<Top5pollresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top5pollresultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5pollresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
