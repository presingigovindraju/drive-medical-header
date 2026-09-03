import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { LoginSectionComponent } from './login-section/login-section';


@Component({
  imports: [Navbar, FooterComponent, LoginSectionComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
