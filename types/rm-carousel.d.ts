import * as _angular_core from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

interface ISlides {
    url: string;
    title: string;
    description: string;
}
declare class RmCarousel implements OnInit, OnDestroy {
    readonly slides: _angular_core.InputSignal<ISlides[]>;
    readonly indicatorsVisible: _angular_core.InputSignal<boolean>;
    readonly animationSpeed: _angular_core.InputSignal<number>;
    readonly autoPlay: _angular_core.InputSignal<boolean>;
    readonly autoPlaySpeed: _angular_core.InputSignal<number>;
    currentIndex: number;
    nextIndex: number;
    currentOpacity: number;
    nextOpacity: number;
    currentScale: number;
    nextScale: number;
    transitionStyle: string;
    private transitionTimer;
    private autoPlayTimer;
    private isTransitioning;
    next(): void;
    prev(): void;
    goTo(index: number): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RmCarousel, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<RmCarousel, "rm-carousel", never, { "slides": { "alias": "slides"; "required": false; "isSignal": true; }; "indicatorsVisible": { "alias": "indicatorsVisible"; "required": false; "isSignal": true; }; "animationSpeed": { "alias": "animationSpeed"; "required": false; "isSignal": true; }; "autoPlay": { "alias": "autoPlay"; "required": false; "isSignal": true; }; "autoPlaySpeed": { "alias": "autoPlaySpeed"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { RmCarousel };
export type { ISlides };
