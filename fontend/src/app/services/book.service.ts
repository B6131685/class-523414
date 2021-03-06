import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  products: any;
  constructor(private http:HttpClient) { }

  addProduct(product : any){
    return this.http.post<any>('http://localhost:3000/bookstore/addbook', product)
    .pipe(map(data =>{
      return data;
    }))
  }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/bookstore/getbook')
    .pipe(map(data => {
      if (data) {
        this.products = data;
        //console.log(this.products);
      }
      return this.products;
    }))
  }

  deleteProduct(product : any){
    return this.http.post<any>('http://localhost:3000/bookstore/deletebook', product)
    .pipe(map(data =>{
      return data;
    }))
  }

  updateBook(product: any){
    return this.http.post<any>('http://localhost:3000/bookstore/updateQuantityBook', product)
    .pipe(map(data =>{
      return data;
    }))
  }

}
