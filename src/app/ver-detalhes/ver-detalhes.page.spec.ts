import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDetalhesPage } from './ver-detalhes.page';

describe('VerDetalhesPage', () => {
  let component: VerDetalhesPage;
  let fixture: ComponentFixture<VerDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
