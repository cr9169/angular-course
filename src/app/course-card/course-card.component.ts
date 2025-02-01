import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({
    required: true,
  })
  index: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
