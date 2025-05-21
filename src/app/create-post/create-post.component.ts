import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title = '';
  content = '';
  categoria = '';
  id: number | null = null;
  editando = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const postEditado = localStorage.getItem('postEditar');
    if (postEditado) {
      const post = JSON.parse(postEditado);
      this.title = post.title;
      this.content = post.content;
      this.categoria = post.categoria;
      this.id = post.id;
      this.editando = true;
    }
  }

  guardarPost() {
    const usuario = localStorage.getItem('usuarioActual');
    if (!usuario) {
      alert('Debes iniciar sesión para crear o editar un post.');
      return;
    }

    if (this.title && this.content) {
      let posts = JSON.parse(localStorage.getItem('posts') || '[]');

      if (this.editando && this.id !== null) {
        // Editar post existente
        posts = posts.map((p: any) =>
          p.id === this.id ? { ...p, title: this.title, content: this.content, categoria: this.categoria } : p
        );
        localStorage.removeItem('postEditar');
      } else {
        // Crear post nuevo
        const nuevoPost = {
          id: Date.now(),
          title: this.title,
          content: this.content,
          categoria: this.categoria,
          autor: usuario
        };
        posts.push(nuevoPost);
      }

      localStorage.setItem('posts', JSON.stringify(posts));
      this.router.navigate(['/']);
    } else {
      alert('Completa todos los campos');
    }
  }
}