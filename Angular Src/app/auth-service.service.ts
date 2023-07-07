import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7109/api/Doctors'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        // Check if the account is approved
        if (response.approved) {
          // Store the doctor's authentication token in local storage or session storage
          localStorage.setItem('authToken', response.token);
          return true; // Allow the doctor to log in successfully
        } else {
          throw new Error('Account pending approval.'); // Throw an error for pending approval
        }
      }),
      catchError(error => {
        return throwError('Invalid username or password.'); // Handle authentication errors
      })
    );
  }

  logout(): void {
    // Clear the authentication token from local storage or session storage
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    // Check if the doctor is logged in based on the presence of the authentication token
    return !!localStorage.getItem('authToken');
  }
}
