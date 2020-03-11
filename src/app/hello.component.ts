import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>The value is {{value || "unknown"}}</h2>`,
  styles: [`
    h2 { font-family: Lato; }
    :host.has-value { color: green; }
    :host:not(.has-value) { color: red; }`
  ]
})
export class HelloComponent {

  private currentValue;

  @Input()
  get value() { return this.currentValue; }
  set value(value: number) { this.currentValue = value; }

  @HostBinding("class.has-value") get hasValue(): boolean {
    return !!this.currentValue;
  }
}
