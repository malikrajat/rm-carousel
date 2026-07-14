import * as i0 from '@angular/core';
import { input, ChangeDetectionStrategy, Component } from '@angular/core';

class RmCarouselComponent {
    slides = input([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "slides" }] : /* istanbul ignore next */ []));
    indicatorsVisible = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "indicatorsVisible" }] : /* istanbul ignore next */ []));
    animationSpeed = input(500, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "animationSpeed" }] : /* istanbul ignore next */ []));
    autoPlay = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "autoPlay" }] : /* istanbul ignore next */ []));
    autoPlaySpeed = input(3000, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "autoPlaySpeed" }] : /* istanbul ignore next */ []));
    currentIndex = 0;
    nextIndex = 0;
    currentOpacity = 1;
    nextOpacity = 0;
    currentScale = 1;
    nextScale = 1.08;
    transitionStyle = '';
    transitionTimer = null;
    autoPlayTimer = null;
    isTransitioning = false;
    next() {
        this.goTo((this.currentIndex + 1) % this.slides().length);
    }
    prev() {
        this.goTo((this.currentIndex - 1 + this.slides().length) % this.slides().length);
    }
    goTo(index) {
        if (this.isTransitioning || index === this.currentIndex || this.slides().length === 0) {
            return;
        }
        this.isTransitioning = true;
        // Build the transition string once
        const dur = this.animationSpeed();
        this.transitionStyle = `opacity ${dur}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${dur * 1.2}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        // Incoming slide: start slightly zoomed out, fully transparent
        this.nextIndex = index;
        this.nextOpacity = 0;
        this.nextScale = 1.08;
        // Double rAF: let the browser paint the next slide at its starting state,
        // then trigger both transitions simultaneously
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Current: fade out + zoom in slightly (Ken Burns out)
                this.currentOpacity = 0;
                this.currentScale = 1.05;
                // Next: fade in + zoom back to normal (Ken Burns in)
                this.nextOpacity = 1;
                this.nextScale = 1;
                // After transition completes, promote next → current and reset
                const settleTime = Math.max(dur, dur * 1.2);
                this.transitionTimer = setTimeout(() => {
                    this.currentIndex = this.nextIndex;
                    this.currentOpacity = 1;
                    this.currentScale = 1;
                    this.nextOpacity = 0;
                    this.nextScale = 1.08;
                    this.isTransitioning = false;
                }, settleTime);
            });
        });
    }
    ngOnInit() {
        if (this.autoPlay() && this.slides().length > 1) {
            this.autoPlayTimer = setInterval(() => {
                this.next();
            }, this.autoPlaySpeed());
        }
    }
    ngOnDestroy() {
        if (this.autoPlayTimer !== null) {
            clearInterval(this.autoPlayTimer);
        }
        if (this.transitionTimer !== null) {
            clearTimeout(this.transitionTimer);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.0.2", ngImport: i0, type: RmCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.0.2", type: RmCarouselComponent, isStandalone: true, selector: "rm-carousel", inputs: { slides: { classPropertyName: "slides", publicName: "slides", isSignal: true, isRequired: false, transformFunction: null }, indicatorsVisible: { classPropertyName: "indicatorsVisible", publicName: "indicatorsVisible", isSignal: true, isRequired: false, transformFunction: null }, animationSpeed: { classPropertyName: "animationSpeed", publicName: "animationSpeed", isSignal: true, isRequired: false, transformFunction: null }, autoPlay: { classPropertyName: "autoPlay", publicName: "autoPlay", isSignal: true, isRequired: false, transformFunction: null }, autoPlaySpeed: { classPropertyName: "autoPlaySpeed", publicName: "autoPlaySpeed", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `
    <div class="carousel-container">
      <!-- Current slide (visible) -->
      <div
        class="slide slide-current"
        [style.background-image]="'url(' + slides()[currentIndex].url + ')'"
        [style.opacity]="currentOpacity"
        [style.transform]="'scale(' + currentScale + ')'"
        [style.transition]="transitionStyle"
      ></div>

      <!-- Next slide (hidden, preloaded on top) -->
      <div
        class="slide slide-next"
        [style.background-image]="'url(' + slides()[nextIndex].url + ')'"
        [style.opacity]="nextOpacity"
        [style.transform]="'scale(' + nextScale + ')'"
        [style.transition]="transitionStyle"
      ></div>

      @if (indicatorsVisible()) {
      <div class="indicators">
        @for (slide of slides(); track $index) {
        <span
          (click)="goTo($index)"
          class="dot"
          [class.active]="$index === currentIndex"
        ></span>
        }
      </div>
      }

      <button (click)="prev()" class="nav-btn nav-prev" aria-label="Previous slide">&#10094;</button>
      <button (click)="next()" class="nav-btn nav-next" aria-label="Next slide">&#10095;</button>
    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}.carousel-container{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}.slide{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat}.slide-current{z-index:1}.slide-next{z-index:2}.nav-btn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;border:none;background:#0000004d;color:#fff;font-size:32px;padding:12px 16px;cursor:pointer;border-radius:4px;line-height:1}.nav-btn:hover{background:#0009}.nav-btn:focus-visible{outline:2px solid #fff;outline-offset:2px}.nav-prev{left:16px}.nav-next{right:16px}.indicators{position:absolute;bottom:20px;left:50%;transform:translate(-50%);z-index:10;display:flex;gap:8px}.dot{width:14px;height:14px;border-radius:50%;background:#fff9;cursor:pointer;transition:background-color .3s ease}.dot.active{background:#fff}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.0.2", ngImport: i0, type: RmCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-carousel', changeDetection: ChangeDetectionStrategy.OnPush, imports: [], template: `
    <div class="carousel-container">
      <!-- Current slide (visible) -->
      <div
        class="slide slide-current"
        [style.background-image]="'url(' + slides()[currentIndex].url + ')'"
        [style.opacity]="currentOpacity"
        [style.transform]="'scale(' + currentScale + ')'"
        [style.transition]="transitionStyle"
      ></div>

      <!-- Next slide (hidden, preloaded on top) -->
      <div
        class="slide slide-next"
        [style.background-image]="'url(' + slides()[nextIndex].url + ')'"
        [style.opacity]="nextOpacity"
        [style.transform]="'scale(' + nextScale + ')'"
        [style.transition]="transitionStyle"
      ></div>

      @if (indicatorsVisible()) {
      <div class="indicators">
        @for (slide of slides(); track $index) {
        <span
          (click)="goTo($index)"
          class="dot"
          [class.active]="$index === currentIndex"
        ></span>
        }
      </div>
      }

      <button (click)="prev()" class="nav-btn nav-prev" aria-label="Previous slide">&#10094;</button>
      <button (click)="next()" class="nav-btn nav-next" aria-label="Next slide">&#10095;</button>
    </div>
  `, styles: [":host{display:block;width:100%}.carousel-container{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}.slide{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat}.slide-current{z-index:1}.slide-next{z-index:2}.nav-btn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;border:none;background:#0000004d;color:#fff;font-size:32px;padding:12px 16px;cursor:pointer;border-radius:4px;line-height:1}.nav-btn:hover{background:#0009}.nav-btn:focus-visible{outline:2px solid #fff;outline-offset:2px}.nav-prev{left:16px}.nav-next{right:16px}.indicators{position:absolute;bottom:20px;left:50%;transform:translate(-50%);z-index:10;display:flex;gap:8px}.dot{width:14px;height:14px;border-radius:50%;background:#fff9;cursor:pointer;transition:background-color .3s ease}.dot.active{background:#fff}\n"] }]
        }], propDecorators: { slides: [{ type: i0.Input, args: [{ isSignal: true, alias: "slides", required: false }] }], indicatorsVisible: [{ type: i0.Input, args: [{ isSignal: true, alias: "indicatorsVisible", required: false }] }], animationSpeed: [{ type: i0.Input, args: [{ isSignal: true, alias: "animationSpeed", required: false }] }], autoPlay: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoPlay", required: false }] }], autoPlaySpeed: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoPlaySpeed", required: false }] }] } });

/*
 * Public API Surface of rm-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RmCarouselComponent };
//# sourceMappingURL=rm-carousel.mjs.map
