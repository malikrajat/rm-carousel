import { OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface ISlides {
    url: string;
    title: string;
    description: string;
}
export declare class RmCarouselComponent implements OnInit, OnDestroy {
    slides: ISlides[];
    indicatorsVisible: boolean;
    animationSpeed: number;
    autoPlay: boolean;
    autoPlaySpeed: number;
    currentSlide: number;
    hidden: boolean;
    jumpToSlideClearTime: ReturnType<typeof setTimeout>;
    ngOnInitClearTime: ReturnType<typeof setInterval>;
    next(): void;
    previous(): void;
    jumpToSlide(index: number): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RmCarouselComponent, "rm-carousel", never, { "slides": { "alias": "slides"; "required": false; }; "indicatorsVisible": { "alias": "indicatorsVisible"; "required": false; }; "animationSpeed": { "alias": "animationSpeed"; "required": false; }; "autoPlay": { "alias": "autoPlay"; "required": false; }; "autoPlaySpeed": { "alias": "autoPlaySpeed"; "required": false; }; }, {}, never, never, true, never>;
}
