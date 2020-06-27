import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  comic;
  attText;
  constructor(public api: ApiProvider, public route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getData('comics/' + this.route.snapshot.paramMap.get('id')).subscribe( (res: any) => {
      console.log(res);
      this.comic = res.response.data.results[0];
      this.attText = {attributionText: res.response.attributionText };
    });
  }

}
