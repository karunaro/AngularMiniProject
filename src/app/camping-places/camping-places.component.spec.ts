import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPlacesComponent } from './camping-places.component';

describe('CampingPlacesComponent', () => {
  let component: CampingPlacesComponent;
  let fixture: ComponentFixture<CampingPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
