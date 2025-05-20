import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre = '';

  constructor(private router: Router) {}

  registrar() {
    if (this.nombre.trim()) {
      const lista = JSON.parse(localStorage.getItem('usuarios') || '[]');
      lista.push(this.nombre.trim());
      localStorage.setItem('usuarios', JSON.stringify(lista));
      localStorage.setItem('usuarioActual', this.nombre.trim());
      this.router.navigate(['/']);
    }
  }
}