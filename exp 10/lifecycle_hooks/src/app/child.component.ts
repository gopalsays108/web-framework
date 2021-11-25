import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-child',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  
      <h2>child component</h2>

      <br>
      <!-- Data as a input -->
      Message from Parent via @input {{message}}
      <br><br>
      <!-- Injected Content -->
      Message from Parent via content injection
      <ng-content></ng-content>

      <br><br><br>
      Code :
      <input type="text" name="code" [(ngModel)]="customer.code" autocomplete="off">
      <br><br>
      Name:
      <input type="text" name="name" [(ngModel)]="customer.name" autocomplete="off">

      <app-grand-child [customer]="customer"></app-grand-child>
  
  `
  
})
export class ChildComponent {

  @Input() message:string

  customer:Customer = new Customer()


constructor() {
    console.log("  ChildComponent:Contructed");
  }

  ngOnChanges() {
    console.log("  ChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("  ChildComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("  ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("  ChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("  ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("  ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("  ChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("  ChildComponent:ngOnDestroy");
  }

}