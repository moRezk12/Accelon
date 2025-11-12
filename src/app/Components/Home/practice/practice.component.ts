import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  @Input() title : string = '';
  @Input() description : string = '';
  @Input() buttonText : string = '';
  @Input() url : string = '';

}
