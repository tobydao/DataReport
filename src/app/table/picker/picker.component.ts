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
      this.companyEvent.emit(comp);
   }
}