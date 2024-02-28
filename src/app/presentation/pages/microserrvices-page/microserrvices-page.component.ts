import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-microserrvices-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [DataService],
  templateUrl: './microserrvices-page.component.html',
  styleUrl: './microserrvices-page.component.css'
})
export default class MicroserrvicesPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  InforServices$ = this.dataService.ServiceConfig$;

  ngOnInit(): void {
    this.dataService.getDataApi();
  }
}
