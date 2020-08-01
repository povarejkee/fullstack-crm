import { Component, OnInit } from '@angular/core'
import { CategoriesService } from '../../shared/services/categories.service'
import { Observable } from 'rxjs'
import { ICategory } from '../../shared/interfaces/interfaces'

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.component.html',
  styleUrls: ['./order-categories.component.scss'],
})
export class OrderCategoriesComponent implements OnInit {
  public categories$: Observable<ICategory[]>

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAll()
  }
}
