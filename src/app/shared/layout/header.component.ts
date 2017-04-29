import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models';
import { UserService, JwtService } from '../services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private router: Router,
  ) { }

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }

  logout() {
    debugger;
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
