import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  perfil = {
    nombre: '',
    bio: '',
    experiencia: '',
    foto: ''
  };

  usuarioActual: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuarioActual');
    if (!this.usuarioActual) return;

    const perfiles = JSON.parse(localStorage.getItem('perfiles') || '{}');
    if (perfiles[this.usuarioActual]) {
      this.perfil = perfiles[this.usuarioActual];
    }
  }

  guardar() {
    if (!this.usuarioActual) return;

    const perfiles = JSON.parse(localStorage.getItem('perfiles') || '{}');
    perfiles[this.usuarioActual] = this.perfil;
    localStorage.setItem('perfiles', JSON.stringify(perfiles));
    alert('Perfil guardado');
  }

  subirFoto(event: any) {
    const archivo = event.target.files[0];
    const lector = new FileReader();
    lector.onload = () => {
      this.perfil.foto = lector.result as string;
    };
    lector.readAsDataURL(archivo);
  }

  logout() {
    localStorage.removeItem('usuarioActual');
    this.router.navigate(['/']);
  }
}