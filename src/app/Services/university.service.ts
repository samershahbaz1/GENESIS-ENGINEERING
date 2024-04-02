
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { University } from '../Models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  apiUrl: string = "http://localhost:5025/api";
  constructor(private http: HttpClient) { }

  getUniversitiesByCountry(country: string) {
    return this.http.get<University[]>(`${this.apiUrl}/Universities/${country}`);
  }
}
