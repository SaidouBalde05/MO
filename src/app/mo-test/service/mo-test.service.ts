import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoTestService {
  private apiUrl = `${environment.apiUrl}/auth/login`; // Utilisez l'URL de l'API

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
      tap((response: AuthResponse) => {
        environment.authToken = response.token; // Stockez le token dans l'environnement
      }),
      catchError(this.handleError)
    );
  }

  // Récupérez le token
  getToken(): string {
    return environment.authToken; // Renvoie le token stocké dans l'environnement
  }

  // Autres méthodes...
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur inconnue est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Erreur ${error.status}: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
