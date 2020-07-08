import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '430px',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openSignupDialog() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
