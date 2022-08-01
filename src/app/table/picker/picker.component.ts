import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: [ './picker.component.css' ]
})

export class PickerComponent{
  @Input() companies = [];
  @Input() companiesToDisplay = [];

  showOptions(comp){ 
    if(this.companiesToDisplay.indexOf(comp)){
      console.log(comp); //true or false
    }
    
    let index = this.companiesToDisplay.indexOf(comp);
    this.companiesToDisplay.splice(index, 1)
    console.log(this.companiesToDisplay)
   }
}