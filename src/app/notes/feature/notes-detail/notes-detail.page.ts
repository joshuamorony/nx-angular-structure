import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.page.html',
  styleUrls: ['./notes-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesDetailPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
