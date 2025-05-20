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
  private newsService = inject(NewsService);

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuarioActual');
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.posts = usuario ? savedPosts.filter((p: any) => p.autor === usuario) : [];
  
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
}