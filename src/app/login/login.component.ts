import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre = '';

  constructor(private router: Router) {}

  login() {
    const lista = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const existe = lista.includes(this.nombre.trim());
  
    if (existe) {
      localStorage.setItem('usuarioActual', this.nombre.trim());
      this.router.navigate(['/']);
    } else {
      alert('Usuario no encontrado. Regístrate primero.');
    }
  }
}