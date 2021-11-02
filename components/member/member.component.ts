import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: any;
  token!: string;

  constructor(public local: LocalStorageService, private ms: MembersService, private router: Router) {
    try {
      this.token = this.local.get('user').token
      this.ms.getAllMember(this.token).subscribe(
        data => {
          this.members = data;
        },
        err => {
          this.router.navigate(['/signin']);
        }
      );
    } catch (error) {
      console.log(error);
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit(): void {
  }

  signout() {
    this.local.clear();
    this.router.navigate(['/signin']);
  }

}
