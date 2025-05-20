import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="fade-enter fade-enter-active"><ng-content></ng-content></div>`,
  styles: [`
    .fade-enter {
      opacity: 0;
      transform: translateY(10px);
    }

    .fade-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.4s ease;
    }
  `]
})
export class AnimatedWrapperComponent {}