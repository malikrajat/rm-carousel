import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class RmCarouselComponent {
    constructor() {
        this.slides = [];
        this.indicatorsVisible = true;
        this.animationSpeed = 500;
        this.autoPlay = false;
        this.autoPlaySpeed = 3000;
        this.currentSlide = 0;
        this.faArrowRight = faArrowRight;
        this.faArrowLeft = faArrowLeft;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: RmCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.3", type: RmCarouselComponent, isStandalone: true, selector: "rm-carousel", inputs: { slides: "slides", indicatorsVisible: "indicatorsVisible", animationSpeed: "animationSpeed", autoPlay: "autoPlay", autoPlaySpeed: "autoPlaySpeed" }, ngImport: i0, template: `
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

      <button (click)="next()" class="nextButton">
        <fa-icon [icon]="faArrowRight"></fa-icon>
      </button>
      <button (click)="previous()" class="previousButton">
        <fa-icon [icon]="faArrowLeft"></fa-icon>
      </button>
    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides :is(.nextButton,.previousButton){position:absolute;top:50%;border:0px;background-color:transparent;font-size:30px;color:#fff}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: FontAwesomeModule }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: RmCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-carousel', standalone: true, imports: [CommonModule, FontAwesomeModule], template: `
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

      <button (click)="next()" class="nextButton">
        <fa-icon [icon]="faArrowRight"></fa-icon>
      </button>
      <button (click)="previous()" class="previousButton">
        <fa-icon [icon]="faArrowLeft"></fa-icon>
      </button>
    </div>
  `, styles: [":host{display:block;width:100%}:host .slides{width:100%;height:700px;border-radius:10px;overflow:hidden;position:relative}:host .slides .slide{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}:host .slides :is(.nextButton,.previousButton){position:absolute;top:50%;border:0px;background-color:transparent;font-size:30px;color:#fff}:host .slides .nextButton{right:20px}:host .slides .previousButton{left:20px}:host .slides #indicators{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px}:host .slides #indicators .indicator{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}:host .slides #indicators .indicator.active{background-color:#4f4f4f}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tY2Fyb3VzZWwvc3JjL2xpYi9ybS1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBMkc5RSxNQUFNLE9BQU8sbUJBQW1CO0lBckdoQztRQXNHVyxXQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FtQ2hCO0lBL0JDLElBQUk7UUFDRixJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksWUFBWSxHQUNkLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OEdBM0NVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLHFPQWpHcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVCw2NEJBL0JTLFlBQVksaU5BQUUsaUJBQWlCOzsyRkFrRzlCLG1CQUFtQjtrQkFyRy9CLFNBQVM7K0JBQ0UsYUFBYSxjQUNYLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxZQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUOzhCQW9FUSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXMge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JtLWNhcm91c2VsJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlc1wiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJzbGlkZVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBzbGlkZXNbY3VycmVudFNsaWRlXS51cmwgKyAnKScsXHJcbiAgICAgICAgICBvcGFjaXR5OiBoaWRkZW4gPyAwIDogMSxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5ICcgKyBhbmltYXRpb25TcGVlZCArICdtcyBlYXNlLWluLW91dCdcclxuICAgICAgICB9XCJcclxuICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgQGlmIChpbmRpY2F0b3JzVmlzaWJsZSkge1xyXG4gICAgICA8ZGl2IGlkPVwiaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgIEBmb3IgKHNsaWRlIG9mIHNsaWRlczsgdHJhY2sgJGluZGV4OyApIHtcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAoY2xpY2spPVwianVtcFRvU2xpZGUoJGluZGV4KVwiXHJcbiAgICAgICAgICBjbGFzcz1cImluZGljYXRvclwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogJGluZGV4ID09IGN1cnJlbnRTbGlkZSB9XCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibmV4dCgpXCIgY2xhc3M9XCJuZXh0QnV0dG9uXCI+XHJcbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd1JpZ2h0XCI+PC9mYS1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXMoKVwiIGNsYXNzPVwicHJldmlvdXNCdXR0b25cIj5cclxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93TGVmdFwiPjwvZmEtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuc2xpZGVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHRCdXR0b24sXHJcbiAgICAgICAgLnByZXZpb3VzQnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHRCdXR0b24ge1xyXG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlvdXNCdXR0b24ge1xyXG4gICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmRpY2F0b3JzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm1DYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzbGlkZXM6IElTbGlkZXNbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGluZGljYXRvcnNWaXNpYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbmltYXRpb25TcGVlZCA9IDUwMDtcclxuICBASW5wdXQoKSBhdXRvUGxheSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9QbGF5U3BlZWQgPSAzMDAwO1xyXG4gIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgZmFBcnJvd1JpZ2h0ID0gZmFBcnJvd1JpZ2h0O1xyXG4gIGZhQXJyb3dMZWZ0ID0gZmFBcnJvd0xlZnQ7XHJcbiAgaGlkZGVuID0gZmFsc2U7XHJcbiAganVtcFRvU2xpZGVDbGVhclRpbWUhOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcclxuICBuZ09uSW5pdENsZWFyVGltZSE6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAodGhpcy5jdXJyZW50U2xpZGUgKyAxKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcclxuICAgIHRoaXMuanVtcFRvU2xpZGUoY3VycmVudFNsaWRlKTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICh0aGlzLmN1cnJlbnRTbGlkZSAtIDEgKyB0aGlzLnNsaWRlcy5sZW5ndGgpICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgdGhpcy5qdW1wVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gIH1cclxuXHJcbiAganVtcFRvU2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5qdW1wVG9TbGlkZUNsZWFyVGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfSwgdGhpcy5hbmltYXRpb25TcGVlZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XHJcbiAgICAgIHRoaXMubmdPbkluaXRDbGVhclRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIH0sIHRoaXMuYXV0b1BsYXlTcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5uZ09uSW5pdENsZWFyVGltZSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5qdW1wVG9TbGlkZUNsZWFyVGltZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==