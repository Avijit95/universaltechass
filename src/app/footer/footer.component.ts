import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public click: any;

  constructor(public router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

}
