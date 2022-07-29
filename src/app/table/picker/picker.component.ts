import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: [ './picker.component.css' ]
})

export class PickerComponent{
  @Input() companies = [];

  showOptions(event){
    console.log(event.value); //true or false
   }
}