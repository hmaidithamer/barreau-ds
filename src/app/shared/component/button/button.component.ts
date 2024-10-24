import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Default Button';
  @Input() class:
    | 'bouton-rectangle-primaire'
    | 'bouton-rectangle-secondaire'
    | 'bouton-rectangle-primaire-blanc'
    | 'bouton-rectangle-secondaire-blanc'
    | 'bouton-arrondi-primaire'
    | 'bouton-arrondi-secondaire'
    | 'bouton-arrondi-primaire-blanc'
    | 'bouton-arrondi-secondaire-blanc'
    | 'bouton-rectangle-noir'
    | 'bouton-arrondi-noir'
    | 'bouton-rectangle-gris'
    | 'bouton-arrondi-gris' = 'bouton-rectangle-primaire';
  @Input() type: 'submit' | 'reset' | 'button' = 'submit';
  @Input() disabled: boolean = false;

}
