import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  irASesion() {
    this.router.navigate(['/login']); // Navega a la página de inicio de sesión
  }
  
  

}
