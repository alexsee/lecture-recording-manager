import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../services/semester.service';
import { Semester } from '../shared/semester';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.scss']
})
export class SemesterListComponent implements OnInit {
  public semesters: Semester[] = [];

  public createSemester: Semester = {
    name: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    active: false,
    published: false
  };
  public isCreateModalVisible = false;

  constructor(private semesterService: SemesterService) { }

  ngOnInit(): void {
    this.semesterService.getSemesters().subscribe(x => this.semesters = x);
  }

  showCreate(): void {
    this.isCreateModalVisible = true;
  }

  closeCreate(): void {
    this.isCreateModalVisible = false;
  }

  doCreate(): void {
    this.semesterService.postSemester(this.createSemester).subscribe(x => {
      this.isCreateModalVisible = false;
      this.ngOnInit();
    });
  }

}
