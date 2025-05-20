import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'nuevo', component: CreatePostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];