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

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('perfil');
    if (data) this.perfil = JSON.parse(data);
  }

  guardar() {
    localStorage.setItem('perfil', JSON.stringify(this.perfil));
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