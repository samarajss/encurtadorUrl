import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUrlComponent } from './listar-url.component';

describe('ListarUrlComponent', () => {
  let component: ListarUrlComponent;
  let fixture: ComponentFixture<ListarUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
