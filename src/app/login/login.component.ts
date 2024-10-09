import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userData;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data:any) {
    this.user.changeData(data);
  }
}
