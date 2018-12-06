import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './shared/header/components/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/pagination/components/pagination.component';
import { PaginationService } from './shared/pagination/services/pagination.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    PaginationService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PaginationComponent
  ]
})
export class PagesModule { }
