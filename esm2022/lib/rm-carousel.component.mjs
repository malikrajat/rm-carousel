import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class RmCarouselComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: RmCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.4", type: RmCarouselComponent, isStandalone: true, selector: "rm-carousel", inputs: { slides: "slides", indicatorsVisible: "indicatorsVisible", animationSpeed: "animationSpeed", autoPlay: "autoPlay", autoPlaySpeed: "autoPlaySpeed" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides :is(.nextButton,.previousButton){position:absolute;top:50%;border:0px;background-color:transparent;font-size:40px;color:#fff;cursor:pointer}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: RmCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-carousel', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides :is(.nextButton,.previousButton){position:absolute;top:50%;border:0px;background-color:transparent;font-size:40px;color:#fff;cursor:pointer}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tY2Fyb3VzZWwvc3JjL2xpYi9ybS1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBd0cvQyxNQUFNLE9BQU8sbUJBQW1CO0lBbEdoQztRQW1HVyxXQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLCtCQUErQjtRQUMvQiw2QkFBNkI7UUFDN0IsV0FBTSxHQUFHLEtBQUssQ0FBQztLQW1DaEI7SUEvQkMsSUFBSTtRQUNGLElBQUksWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxZQUFZLEdBQ2QsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OEdBM0NVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLHFPQTlGcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJULDQ1QkEzQlMsWUFBWTs7MkZBK0ZYLG1CQUFtQjtrQkFsRy9CLFNBQVM7K0JBQ0UsYUFBYSxjQUNYLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxZQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDs4QkFxRVEsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlcyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncm0tY2Fyb3VzZWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXNcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwic2xpZGVcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgc2xpZGVzW2N1cnJlbnRTbGlkZV0udXJsICsgJyknLFxyXG4gICAgICAgICAgb3BhY2l0eTogaGlkZGVuID8gMCA6IDEsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAnICsgYW5pbWF0aW9uU3BlZWQgKyAnbXMgZWFzZS1pbi1vdXQnXHJcbiAgICAgICAgfVwiXHJcbiAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgIEBpZiAoaW5kaWNhdG9yc1Zpc2libGUpIHtcclxuICAgICAgPGRpdiBpZD1cImluZGljYXRvcnNcIj5cclxuICAgICAgICBAZm9yIChzbGlkZSBvZiBzbGlkZXM7IHRyYWNrICRpbmRleDsgKSB7XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgKGNsaWNrKT1cImp1bXBUb1NsaWRlKCRpbmRleClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJpbmRpY2F0b3JcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6ICRpbmRleCA9PSBjdXJyZW50U2xpZGUgfVwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHQoKVwiIGNsYXNzPVwibmV4dEJ1dHRvblwiPj48L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXMoKVwiIGNsYXNzPVwicHJldmlvdXNCdXR0b25cIj48PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuc2xpZGVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHRCdXR0b24sXHJcbiAgICAgICAgLnByZXZpb3VzQnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHRCdXR0b24ge1xyXG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlvdXNCdXR0b24ge1xyXG4gICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRpY2F0b3JzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm1DYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzbGlkZXM6IElTbGlkZXNbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGluZGljYXRvcnNWaXNpYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbmltYXRpb25TcGVlZCA9IDUwMDtcclxuICBASW5wdXQoKSBhdXRvUGxheSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9QbGF5U3BlZWQgPSAzMDAwO1xyXG4gIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgLy8gZmFBcnJvd1JpZ2h0ID0gZmFBcnJvd1JpZ2h0O1xyXG4gIC8vIGZhQXJyb3dMZWZ0ID0gZmFBcnJvd0xlZnQ7XHJcbiAgaGlkZGVuID0gZmFsc2U7XHJcbiAganVtcFRvU2xpZGVDbGVhclRpbWUhOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcclxuICBuZ09uSW5pdENsZWFyVGltZSE6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAodGhpcy5jdXJyZW50U2xpZGUgKyAxKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcclxuICAgIHRoaXMuanVtcFRvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICh0aGlzLmN1cnJlbnRTbGlkZSAtIDEgKyB0aGlzLnNsaWRlcy5sZW5ndGgpICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgdGhpcy5qdW1wVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gIH1cclxuXHJcbiAganVtcFRvU2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5qdW1wVG9TbGlkZUNsZWFyVGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfSwgdGhpcy5hbmltYXRpb25TcGVlZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XHJcbiAgICAgIHRoaXMubmdPbkluaXRDbGVhclRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIH0sIHRoaXMuYXV0b1BsYXlTcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5uZ09uSW5pdENsZWFyVGltZSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5qdW1wVG9TbGlkZUNsZWFyVGltZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==