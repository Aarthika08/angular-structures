// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   // templateUrl: './app.component.html',

//   template:`<div *ngIf="isUserLoggedIn; else loginmessage">
//   welcome,user
// </div>`,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'structures';
//   isUserLoggedIn="True";
// }


// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div *ngIf="isUserLoggedIn; else loginMessage">
      Welcome, User!
    </div>
    <ng-template #loginMessage>
      <div>
        Please log in to access the content.
      </div>
    </ng-template> -->
    <!-- <ul> 
      <li *ngFor="let item of items let i=index">
      {{ item }} -->
      <!-- {{ i+1 }}.{{ item }} -->

<!-- </li>
</ul> --> 

<div [ngSwitch]="userrole">
<div *ngSwitchCase="'admin'">
Welcome, admin!
</div>
<div *ngSwitchCase="'user'">
Welcome,user!
</div><div *ngSwitchCase="'guest'">
Welcome,guest!
</div>
<div *ngSwitchDefault>
Unknown role.please log in</div></div> 
<app-attributes-examples></app-attributes-examples>
<p appHighlight [highlightColor]="'lightblue'">Hover over me highlight</p>

<app-dropdown
      [options]="dropdownOptions"
      [selectedValue]="selectedDropdownValue"
      (selectedValueChanged)="onDropdownSelectionChange($event)">
    </app-dropdown>
`,
  styles: [`
  div {
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
`]
})
export class AppComponent {
  isUserLoggedIn = false; // Ensure this property is defined in your component
items=['a','b','c'];
userrole:string="admin";
// index=0;
dropdownOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

selectedDropdownValue: any = '';

onDropdownSelectionChange(value: any) {
  console.log('Selected dropdown value:', value);
  // You can perform any actions based on the selected value
}
}
