import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {

    console.log('Course card....');
    this.courseEmitter.emit(this.course);
  }
}
