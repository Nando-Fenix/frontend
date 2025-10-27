import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Producto {
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class Productoservice {

  private base = 'http://127.0.0.1:8000/api/productos';

  /**
   *
   */
  constructor(private http:HttpClient) {
    
    
  }

  listaProductos():Observable<any[]>{
    return this.http.get<any[]>(this.base);
  }
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.base, producto);
  }

}