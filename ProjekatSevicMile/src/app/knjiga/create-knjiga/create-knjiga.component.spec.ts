import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnjigaComponent } from './create-knjiga.component';

describe('CreateKnjigaComponent', () => {
  let component: CreateKnjigaComponent;
  let fixture: ComponentFixture<CreateKnjigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKnjigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
