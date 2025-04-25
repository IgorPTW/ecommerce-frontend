import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html', // ok
  styleUrl: './product-category-menu.component.css' // ok
})
export class ProductCategoryMenuComponent implements OnInit { // READ!

  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {} 

  ngOnInit() { // ok
    this.listProductCategories();
  }

  listProductCategories() { // ok

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }
}
