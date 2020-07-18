import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('/api/category')
  }

  getSingle(id): Observable<ICategory> {
    return this.http.get<ICategory>(`/api/category/${id}`)
  }
}
