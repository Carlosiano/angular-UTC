import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {
  @Input() gambar: any
  @Input() infoPMB: any
  @Input() kampus:any
  @Input() categories:any
  @Input() fasilitas:any
  constructor() { }

  ngOnInit() {}

}
