import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerHerosComponent } from './clicker-heros.component';

describe('ClickerHerosComponent', () => {
  let component: ClickerHerosComponent;
  let fixture: ComponentFixture<ClickerHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickerHerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickerHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
