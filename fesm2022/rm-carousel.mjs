import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class RmCarouselComponent {
    constructor() {
        this.slides = [];
        this.indicatorsVisible = true;
        this.animationSpeed = 500;
        this.autoPlay = false;
        this.autoPlaySpeed = 3000;
        this.currentSlide = 0;
        // faArrowRight = faArrowRight;
        // faArrowLeft = faArrowLeft;
        this.hidden = false;
    }
    next() {
        let currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.jumpToSlide(currentSlide);
    }
    previous() {
        let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.jumpToSlide(currentSlide);
    }
    jumpToSlide(index) {
        this.hidden = true;
        this.jumpToSlideClearTime = setTimeout(() => {
            this.currentSlide = index;
            this.hidden = false;
        }, this.animationSpeed);
    }
    ngOnInit() {
        if (this.autoPlay) {
            this.ngOnInitClearTime = setInterval(() => {
                this.next();
            }, this.autoPlaySpeed);
        }
    }
    ngOnDestroy() {
        clearInterval(this.ngOnInitClearTime);
        clearTimeout(this.jumpToSlideClearTime);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.3", ngImport: i0, type: RmCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.3", type: RmCarouselComponent, isStandalone: true, selector: "rm-carousel", inputs: { slides: "slides", indicatorsVisible: "indicatorsVisible", animationSpeed: "animationSpeed", autoPlay: "autoPlay", autoPlaySpeed: "autoPlaySpeed" }, ngImport: i0, template: `
    <div class="slides">
      <div
        class="slide"
        [ngStyle]="{
          'background-image': 'url(' + slides[currentSlide].url + ')',
          opacity: hidden ? 0 : 1,
          transition: 'opacity ' + animationSpeed + 'ms ease-in-out'
        }"
      ></div>

      @if (indicatorsVisible) {
      <div id="indicators">
        @for (slide of slides; track $index; ) {
        <div
          (click)="jumpToSlide($index)"
          class="indicator"
          [ngClass]="{ active: $index == currentSlide }"
        ></div>
        }
      </div>
      }

      <button (click)="next()" class="nextButton">></button>
      <button (click)="previous()" class="previousButton"><</button>
    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides .nextButton,:host .slides .previousButton{position:absolute;top:50%;border:0px;background-color:transparent;font-size:40px;color:#fff;cursor:pointer}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.3", ngImport: i0, type: RmCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-carousel', imports: [CommonModule], template: `
    <div class="slides">
      <div
        class="slide"
        [ngStyle]="{
          'background-image': 'url(' + slides[currentSlide].url + ')',
          opacity: hidden ? 0 : 1,
          transition: 'opacity ' + animationSpeed + 'ms ease-in-out'
        }"
      ></div>

      @if (indicatorsVisible) {
      <div id="indicators">
        @for (slide of slides; track $index; ) {
        <div
          (click)="jumpToSlide($index)"
          class="indicator"
          [ngClass]="{ active: $index == currentSlide }"
        ></div>
        }
      </div>
      }

      <button (click)="next()" class="nextButton">></button>
      <button (click)="previous()" class="previousButton"><</button>
    </div>
  `, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides .nextButton,:host .slides .previousButton{position:absolute;top:50%;border:0px;background-color:transparent;font-size:40px;color:#fff;cursor:pointer}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"] }]
        }], propDecorators: { slides: [{
                type: Input
            }], indicatorsVisible: [{
                type: Input
            }], animationSpeed: [{
                type: Input
            }], autoPlay: [{
                type: Input
            }], autoPlaySpeed: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { RmCarouselComponent };
//# sourceMappingURL=rm-carousel.mjs.map
