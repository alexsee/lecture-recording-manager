import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../services/lecture.service';
import { Recording } from '../shared/recording';

@Component({
  selector: 'app-recording-edit',
  templateUrl: './recording-edit.component.html',
  styleUrls: ['./recording-edit.component.scss']
})
export class RecordingEditComponent implements OnInit {
  form: UntypedFormGroup;
  recording: Recording;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private lectureService: LectureService) {
      this.form = this.fb.group({
        title: [null, [Validators.required]],
        description: [null],
        publishDate: [null]
      });
    }

  ngOnInit(): void {
    const recordingId = this.route.snapshot.paramMap.get('recordingId');

    this.lectureService.getRecording(recordingId).subscribe(recording => {
      this.recording = recording;

      this.form = this.fb.group({
        title: [recording.title, [Validators.required]],
        description: [recording.description],
        publishDate: [recording.publishDate]
      });
    });
  }

  onSubmit(): void {
    const recording: Recording = Object.assign({}, this.form.value);
    recording.id = this.recording.id;

    this.lectureService.putRecording(recording).subscribe(x => {
      this.router.navigate(['/', 'recording', this.recording.id]);
    });
  }

  doCancel(): void {
    this.router.navigate(['/', 'recording', this.recording.id]);
  }
}
