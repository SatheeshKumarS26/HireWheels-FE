import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.css',
    '../login/login.component.css'
  ],
})
export class SignupComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogLoginRef: MatDialogRef<LoginComponent>,
  ) {}

  ngOnInit() {}

  openLoginDialog() {
    if (this.dialog.openDialogs) {
      this.dialog.closeAll();
    }
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '430px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

}
