import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  enrollees: any[];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAllEnrollees().subscribe((res) => {
      this.enrollees = res;
    });
  }
  handleClick(i: number): void {
    console.log(this.enrollees[i].id);
    this.apiService.setId(this.enrollees[i].id);
    this.router.navigate(['/enrollee']);
  }
}
