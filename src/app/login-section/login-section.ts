import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-section.html',
  styleUrl: './login-section.css'
})
export class LoginSectionComponent {

  email: string = '';
  password: string = '';

  /**
   * Sign in
   */
  signIn(): void {

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Add your actual login API/service here
  }


  /**
   * Apply for an account
   */
  applyForAccount(): void {

    window.location.href =
      'https://shop.drivemedical.com/us/en/register';
  }


  /**
   * Request access
   */
  requestAccess(): void {

    // Add your request access URL here
    console.log('Request Access clicked');
  }


  /**
   * Locate provider
   */
  locateProvider(): void {

    window.location.href =
      'https://www.drivemedical.com/locate-provider';
  }

}