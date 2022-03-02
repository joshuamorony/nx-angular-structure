import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-survey',
  templateUrl: './client-survey.component.html',
  styleUrls: ['./client-survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSurveyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
