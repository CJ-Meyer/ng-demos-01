import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title = "list component";
  displayable: boolean = false;
  fruits: string[] = ["apple", "orange", "kiwi"];
  newFruit: string = "";

  addFruit(){
    this.fruits.push(this.newFruit);
  }
}
