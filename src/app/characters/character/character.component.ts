import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any;
  attText;
  constructor(public api: ApiProvider, public route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getData('characters/' + this.route.snapshot.paramMap.get('id')).subscribe( (res: any) => {
      console.log(res);
      this.character = res.response.data.results[0];
      this.attText = {attributionText: res.response.attributionText };
    });
  }


}
