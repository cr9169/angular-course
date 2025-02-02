import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild("cardRef", { read: ElementRef })
  card: CourseCardComponent;

  @ViewChild("courseImage")
  courseImage: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log("courseImage", this.courseImage);
  }

  onCourseSelected(course: Course) {}
}
