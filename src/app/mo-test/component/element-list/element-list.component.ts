import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../service/element.service';
import { CommonModule } from '@angular/common';
import { MoElement } from '../../models/element.model';
// import { MoElement } from '../../models/element.model';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {
  elements: MoElement[] = []; // Déclarez un tableau pour stocker les éléments
  error: string | null = null; // Pour stocker une éventuelle erreur

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.fetchElements();
  }

  fetchElements(): void {
    this.elementService.getElements(true).subscribe({
      next: (response) => {
        this.elements = response['hydra:member']; // Utilisez la clé appropriée pour obtenir les éléments
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des éléments'; // Stocker le message d'erreur
        console.error('Erreur lors de la récupération des éléments:', err);
      }
    });
  
  }
}
