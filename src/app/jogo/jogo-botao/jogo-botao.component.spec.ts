import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoBotaoComponent } from './jogo-botao.component';

describe('JogoBotaoComponent', () => {
  let component: JogoBotaoComponent;
  let fixture: ComponentFixture<JogoBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoBotaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
