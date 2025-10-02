import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CompanyServicesService } from './company-services.service';
import { SolutionItem } from '../../../shared/models/solution.model';
import { CompanyCarouselComponent } from './company-carousel/company-carousel.component';

@Component({
  selector: 'app-company-services',
  standalone: true,
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, CompanyCarouselComponent],
})
export class CompanyServicesComponent implements OnInit {
  solutions: SolutionItem[] = [];
  solutionForm!: FormGroup;

  @ViewChild('companycarousel') companycarousel!: CompanyCarouselComponent;

  constructor(
    private companyServicesService: CompanyServicesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.solutions = this.companyServicesService.items;

    this.solutionForm.get('selectedSolution')?.valueChanges.subscribe((selectedTitle: string) => {
      const index = this.solutions.findIndex(solution => solution.title === selectedTitle);
      if (index !== -1) {
        this.companycarousel.moveToSlide(index);
      }
    });
  }

  private initializeForm(): void {
    this.solutionForm = this.fb.group({
      selectedSolution: ['']
    });
  }
}
