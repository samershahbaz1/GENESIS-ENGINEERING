import { Component } from '@angular/core';
import { UniversityService } from '../Services/university.service';
import { University } from '../Models/university.model';

@Component({
  selector: 'app-university-list',
  standalone: true,
  imports: [],
  templateUrl: './university-list.component.html',
  styleUrl: './university-list.component.css'
})
export class UniversityListComponent {
  universities: University[] | undefined;
  loading: boolean = false;
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
  }

  getUniversities(countryName: string) {
    this.universityService.getUniversitiesByCountry(countryName)
      .subscribe(data => {
        this.universities = data;
        this.loading = !this.loading;
      });

  }

  onChange(event: any) {
    if (event.keyCode == 13) {
      this.loading = !this.loading;
      this.getUniversities(event.target.value);
    }
  }

  toggleDetails(university: any) {
    university.showDetails = !university.showDetails;
  }

}
