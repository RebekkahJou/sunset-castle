import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImageSkeleton]',
  standalone: true,
})
export class ImageSkeletonDirective implements AfterViewInit {
  @HostBinding('class.img-skeleton--loaded') private isLoaded = false;
  @HostBinding('class.img-skeleton--settled') private isSettled = false;

  constructor(private readonly elementRef: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    // Without this check the skeleton would shimmer forever for cached photos.
    if (this.elementRef.nativeElement.complete) {
      this.isLoaded = true;
    }
  }

  @HostListener('load')
  onLoad(): void {
    this.isLoaded = true;
  }

  @HostListener('error')
  onError(): void {
    this.isSettled = true;
  }
}
