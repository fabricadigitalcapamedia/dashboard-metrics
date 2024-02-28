import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [DataService],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export default class ServicePageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  InforServices$ = this.dataService.ServiceConfig$;

  ngOnInit(): void {
    this.dataService.getDataApi();
  }

}
