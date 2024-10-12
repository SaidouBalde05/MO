import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MoElement } from '../models/element.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private apiUrl = 'https://abc.monimba.com/api/elements';

  constructor(private http: HttpClient) {}

  getElements(isActif: true): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.authToken}` // Ajout du token ici
    });

    return this.http.get(`${this.apiUrl}?isActif=${isActif}`, { headers })
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des éléments:', error);
          throw error; // Gérer l'erreur comme vous le souhaitez
        })
      );
  }
}
