import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  enrollees: any[];
  filterText: string = '';
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAllEnrollees().subscribe((res) => {
      this.enrollees = res;
    });
  }
  handleClick(i: number): void {
    this.apiService.setId(this.enrollees[i].id);
    this.router.navigate(['/enrollee']);
  }
  resetForm(): void {
    this.filterText = '';
  }
  getFilterEnrollees() {
    if (!this.filterText.trim()) {
      return this.enrollees;
    }
    const match = this.filterText.trim().toLowerCase();
    return this.enrollees.filter((enrollee) =>
      enrollee.name.toLowerCase().includes(match)
    );
  }
}
