import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSectionComponent } from './login-section';

describe('LoginSectionComponent', () => {
  let component: LoginSectionComponent;
  let fixture: ComponentFixture<LoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
