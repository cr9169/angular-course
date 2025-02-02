import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input({})
  course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChild("CourseImageComponent")
  image: CourseImageComponent;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.image);
  }

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
