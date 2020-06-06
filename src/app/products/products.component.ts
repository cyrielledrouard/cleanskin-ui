import { Component, OnInit } from '@angular/core';
import { Product } from '../data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  listofproducts = Product;
  ngOnInit() {
  }

}
