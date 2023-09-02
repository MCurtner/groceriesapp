import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { GroceriesService } from 'src/app/service/groceries.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  response: Response;

  constructor(private groceryService: GroceriesService) {}

  ngOnInit(): void {
    this.groceryService.getGroceries(1, 20).subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    );
  }

}
