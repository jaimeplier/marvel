import { Component, OnInit, HostListener } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  results;
  page = 1;
  scrolled = false;

  constructor(public api: ApiProvider, public user: UserService) { }

  ngOnInit() {
    this.api.getData('stories').subscribe( (res: any) => {
      this.results = res.response.data.results;
    });
  }

  @HostListener('window:scroll', [])
  public loadScroll() {
    if (this.api.bottomReached() && !this.scrolled) {
      this.scrolled = true;
      this.api.getData('stories', null, this.page ).subscribe( (res: any) => {
        console.log(res);
        this.page++;
        this.results = this.results.concat(res.response.data.results);
        this.scrolled = false;
        });
    }
  }

}
