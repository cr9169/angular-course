import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  @Input() highlighted: boolean = false;

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.highlighted;
  }

  @HostBinding("attr.disabled")
  get disabled() {
    return true;
  }
}
