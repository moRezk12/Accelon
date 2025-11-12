import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revenuehero',
  templateUrl: './revenuehero.component.html',
  styleUrls: ['./revenuehero.component.css']
})
export class RevenueheroComponent {

  @Input() title : string = ''
  @Input() subtitle : string = ''
  @Input() url : string = ''

}
