import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: [ './picker.component.css' ]
})

export class PickerComponent{
  @Input() companies = [];
  @Input() companiesToDisplay = [];
  @Output() companyEvent = new EventEmitter<string>();

  onChange(comp){
    let index = this.companiesToDisplay.indexOf(comp);
    if(index > 0 ){
      this.companiesToDisplay.splice(index, 1);
      this.companyEvent.emit(comp);
    }
   }
}