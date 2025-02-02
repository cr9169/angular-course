import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
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
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") return "beginner";
  }

  cardTitleStyles() {
    return {
      backgroundImage: `url(${this.course.iconUrl})`,
    };
  }
}
