import { UserService } from './../../user.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  results;
  page = 1;
  scrolled = false;
  filters: FormGroup;
  filter = null;


  constructor(public api: ApiProvider, public fb: FormBuilder, public user: UserService) { }

  @HostListener('window:scroll', [])
  public loadScroll() {
    if (this.api.bottomReached() && !this.scrolled) {
      this.scrolled = true;
      console.log(this.api.bottomReached());
      this.api.getData('characters', this.filter , this.page ).subscribe( (res: any) => {
        console.log(res);
        this.page++;
        this.results = this.results.concat(res.response.data.results);
        this.scrolled = false;
      });
    }
  }

  ngOnInit() {
    this.filters = this.fb.group({
      name: [''],
      comics: [''],
      stories: [''],
      orderBy: [false]
    });
    this.api.getData('characters').subscribe( (res: any) => {
      console.log(res);
      this.results = res.response.data.results;
    });
  }

  encodeObj(obj) {
    let encoded = '&';
    for (const el in obj) {
      if (obj[el]) {
        if (el === 'orderBy') {
          obj[el] = 'name';
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
    this.api.getData('characters', this.encodeObj(this.filters.value) , null ).subscribe( (res: any) => {
      console.log(res);
      this.results = res.response.data.results;
    });
  }


}

