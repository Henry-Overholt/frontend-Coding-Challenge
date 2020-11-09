import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.css'],
})
export class EnrolleeComponent implements OnInit {
  id: string = '36653835-fbe0-4c42-a93c-3e561823934f';
  enrollee: any;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.apiService.getId();
    if (this.id != undefined) {
      this.apiService.getEnrolleesById(this.id).subscribe((res) => {
        console.log(res);

        this.enrollee = res;
        this.apiService.setEnrolleeToEdit(this.enrollee);
      });
    } else {
      this.router.navigate(['/home']);
    }
  }
  handleEditClick(): void {
    this.router.navigate(['/enrollee/edit']);
  }
}
