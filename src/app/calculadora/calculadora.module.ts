import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
