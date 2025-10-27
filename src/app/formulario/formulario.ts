import { Component } from '@angular/core';
import { Productoservice } from '../core/services/productoservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nuevoProducto = { nombre: '', precio: 0 };

  constructor(private productoService: Productoservice) {}

  agregarProducto(): void {
    this.productoService.crearProducto(this.nuevoProducto).subscribe({
      next: (data) => {
        console.log('Producto agregado:', data);
        this.nuevoProducto = { nombre: '', precio: 0 };
      },
      error: (err) => console.error('Error al agregar producto', err)
    });
  }
}
