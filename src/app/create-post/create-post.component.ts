import { Component } from '@angular/core';
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
export class CreatePostComponent {
  title = '';
  content = '';

  constructor(private router: Router) {}

  crearPost() {
    const usuario = localStorage.getItem('usuarioActual');
    if (!usuario) {
      alert('Debes iniciar sesión para crear un post.');
      return;
    }
  
    if (this.title && this.content) {
      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      const nuevo = {
        id: posts.length + 1,
        title: this.title,
        content: this.content,
        autor: usuario
      };
      posts.push(nuevo);
      localStorage.setItem('posts', JSON.stringify(posts));
      this.router.navigate(['/']);
    }
  }
}