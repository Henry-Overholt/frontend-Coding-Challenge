import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-enrollee',
  templateUrl: './edit-enrollee.component.html',
  styleUrls: ['./edit-enrollee.component.css'],
})
export class EditEnrolleeComponent implements OnInit {
  // enrollee: any;
  enrollee: any = {
    id: '36653835-fbe0-4c42-a93c-3e561823934f',
    active: true,
    name: 'Gabe Newell',
    dateOfBirth: '1962-11-3',
  };
  active: boolean;
  isActive: string;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.enrollee = this.apiService.getEnrolleeToEdit();
    if (this.enrollee != undefined) {
      this.active = this.enrollee.active;
      if (this.active === true) {
        this.isActive = 'Active';
      } else {
        this.isActive = 'Not Active';
      }
    } else {
      this.router.navigate(['/home']);
    }
  }
  toggleActiveStatus(): void {
    this.active = !this.active;
    if (this.active === true) {
      this.isActive = 'Active';
    } else {
      this.isActive = 'Not Active';
    }
  }
  handleFormSubmit(form: NgForm): void {
    const editEnrollee = {
      active: this.active,
      name: form.value.name,
      dateOfBirth: this.enrollee.dateOfBirth,
    };
    this.apiService
      .putEnrollees(this.enrollee.id, editEnrollee)
      .subscribe((res) => {
        if (res) {
          console.log('Success');
        } else {
          console.log("Edit didn't save");
        }
        this.router.navigate(['/enrollee']);
      });
  }
  cancelForm() {
    this.router.navigate(['/enrollee']);
  }
}
