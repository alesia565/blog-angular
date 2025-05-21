import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../news.service';
import { AnimatedWrapperComponent } from '../animated-wrapper.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimatedWrapperComponent],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: any[] = [];
  noticias: any[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = '';
  usuarioActual: string | null = localStorage.getItem('usuarioActual');

  private newsService = inject(NewsService);

  ngOnInit(): void {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.posts = savedPosts;
    this.categorias = [...new Set(this.posts.map(p => p.categoria))];

    this.newsService.getNoticias().subscribe({
      next: (data) => {
        this.noticias = data.articles || [];
      },
      error: (error) => {
        console.error('Error al cargar noticias:', error);
        this.noticias = [];
      }
    });
  }

  get postsFiltrados() {
    if (!this.categoriaSeleccionada) return this.posts;
    return this.posts.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  filtrarPorCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
  }

  eliminarPost(id: number) {
    const confirmado = confirm('¿Estás seguro de que quieres eliminar este post?');
    if (!confirmado) return;

    this.posts = this.posts.filter(p => p.id !== id);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  editarPost(post: any) {
    // En esta versión simple, lo guardamos en localStorage y redirigimos al formulario
    localStorage.setItem('postEditar', JSON.stringify(post));
    window.location.href = '/nuevo'; // o usa this.router.navigate(['/nuevo']) si tienes Router
  }
}