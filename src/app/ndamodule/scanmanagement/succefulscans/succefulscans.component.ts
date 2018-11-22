import { Component, OnInit } from '@angular/core';

import { listStagger } from '../../animated';

@Component({
  selector: 'app-succefulscans',
  templateUrl: './succefulscans.component.html',
  styleUrls: ['./succefulscans.component.scss'],
  animations: [
    listStagger
  ]
})
export class SuccefulscansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
