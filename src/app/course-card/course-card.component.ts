import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
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
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input({})
  course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren("CourseImageComponent")
  images: QueryList<CourseImageComponent>;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }
  ngAfterViewInit(): void {}

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
