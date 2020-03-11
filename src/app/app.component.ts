import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  object = {
    'prop3': 'value5', 
    'prop2': 'value1', 
    'prop5': 'value4', 
    'prop1': 'value2', 
    'prop4': 'value3', 
  };

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  valueOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }
}
