import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  onSignUpBtnClick() {
    if (this.dialog.openDialogs) {
      this.dialog.closeAll();
    }
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
