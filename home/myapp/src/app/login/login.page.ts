import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irASesion() {
    this.router.navigate(['/recuperar']); // Navega a la página de inicio de sesión
  }

  irInicio() {
    this.router.navigate(['/inicio']); // Navega a la página de inicio de sesión
  }

}
