import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  story;
  attText;
  constructor(private api: ApiProvider, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getData('stories/' + this.route.snapshot.paramMap.get('id')).subscribe( (res: any) => {
      console.log(res.response.data.results[0]);
      this.story = res.response.data.results[0];
      this.attText = {attributionText: res.response.attributionText };
    });
  }

}
