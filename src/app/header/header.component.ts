import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() scrollY = 0;
  @Input() gambar: any;
  @Input() active = false;
  @Input() toggleActiveClass: any;
  @Input() navLinks: any;
  constructor() { }

  ngOnInit() {}
}
