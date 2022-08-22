import { Component, OnInit } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {Product} from "../model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  // operators to use : map
  length$: Observable<number> = of(0);

  searchForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) {
    this.searchForm = this.formBuilder.group({
      keyword: '',
      size: 25,
    });
  }

  ngOnInit(): void {
    this.loadProduct();
    // listen for keyword events
    // operators to use : debounceTime, filter, distinctUntilChanged
    this.searchForm.get('keyword')?.valueChanges.subscribe(() => {
      this.loadProduct();
    });
  }

  loadProduct(): void {
    const {keyword, size} = this.searchForm.value;

    this.loading = true;
    this.products$ = this.productService.findAll(size, keyword).pipe(
      map(page => page.content),
      tap(() => {
        this.loading = false;
      }),
    );
  }
}
