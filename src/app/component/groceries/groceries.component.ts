import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Response } from 'src/app/interface/response.interface';
import { GroceriesService } from 'src/app/service/groceries.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  response: Response;
  searchValue = ''
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(private groceryService: GroceriesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.groceryService.getGroceries().subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    );
  }

  fetchData(): void {
    this.groceryService.getGroceries(0, this.searchValue).subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    )
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData()
  }
}
