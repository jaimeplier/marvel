import { Component, OnInit, HostListener } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  results;
  page = 1;
  filter = null;
  filters: FormGroup;
  scrolled = false;

  constructor(public api: ApiProvider, public fb: FormBuilder, public user: UserService) { }

  @HostListener('window:scroll', [])
  public loadScroll() {
    if (this.api.bottomReached() && !this.scrolled) {
      this.scrolled = true;
      console.log(this.api.bottomReached());
      this.api.getData('comics', this.filter, this.page ).subscribe( (res: any) => {
        console.log(res);
        this.page++;
        this.results = this.results.concat(res.response.data.results);
        this.scrolled = false;
        });
    }
  }

  ngOnInit() {
    this.filters = this.fb.group({
      format: [''],
      title: [''],
      issueNumber: [''],
      orderBy: [false]
    });
    this.api.getData('comics').subscribe( (res: any) => {
      console.log(res);
      this.results = res.response.data.results;
    });
  }
  encodeObj(obj) {
    let encoded = '&';
    for (const el in obj) {
      if (obj[el]) {
        if (el === 'orderBy') {
          obj[el] = 'issueNumber';
        }
        encoded += el + '=' + obj[el] + '&';
      }
    }
    encoded = encoded.substring(0, encoded.length - 1); // remove last &
    this.filter = encoded;
    return encoded;
  }

  submit() {
    // this.encodeObj(this.filters.value)
    this.api.getData('comics', this.encodeObj(this.filters.value) , null ).subscribe( (res: any) => {
      console.log(res);
      this.results = res.response.data.results;
    });
  }
}
