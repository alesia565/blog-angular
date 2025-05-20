import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: { id: number; title: string; content: string } | undefined;

  constructor(private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.post = posts.find((p: { id: number; title: string; content: string }) => p.id === id);
  }
}