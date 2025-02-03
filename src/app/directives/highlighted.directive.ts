import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input() highlighted: boolean = false;

  @Output() toggleHighlight = new EventEmitter<boolean>();

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.highlighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    console.log($event);

    this.highlighted = true;
    this.toggleHighlight.emit(this.highlighted);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.highlighted = false;
    this.toggleHighlight.emit(this.highlighted);
  }

  toggle() {
    this.highlighted = !this.highlighted;
    this.toggleHighlight.emit(this.highlighted);
  }
}
