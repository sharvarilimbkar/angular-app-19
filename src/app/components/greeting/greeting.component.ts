import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  message = input("Hello hello");
  @Input({ required: true }) message2: string | undefined;
}
