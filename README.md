# RmCarousel for Angular

A highly optimized and fully customizable pure angular standalone component and solution for horizontal scrolling images with lazy loading.

## Installation

Install the npm package.

```
  npm: npm i rm-carousel
  yarn: yarn add rm-carousel
```

Import in component:

```ts
 import { RmCarouselComponent, ISlides } from 'rm-carousel';

  @Component({
      imports: [RmCarouselComponent]
  })
```

## Sample

Then use in your component:

```html
<rm-carousel [indicatorsVisible]="false" [animationSpeed]="100" [slides]="slides" [autoPlay]="true" [autoPlaySpeed]="4000"> </rm-carousel>
```

Or prepare an image array for the carousel. If necessary, specify in the settings the sizes of the cells and the carousel container. And also select the method of arranging images inside the cells using the objectFit property.

```html
<rm-carousel [slides]="slides"> </rm-carousel>
```

```ts
 slides: ISlides[] = [
    {
      url: '/assets/images/image1.avif',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: '/assets/images/image2.avif',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: '/assets/images/image3.avif',
      title: 'Third slide',
      description: 'This is the third slide',
    },
    {
      url: '/assets/images/image4.avif',
      title: 'Fourth slide',
      description: 'This is the fourth slide',
    },
    {
      url: '/assets/images/image5.avif',
      title: 'Fifth slide',
      description: 'This is the fifth slide',
    },
  ];
```

## Lazy loading

To use lazy loading, pass the carousel an array of images, as shown in the example above. Images will be uploaded only as needed, this will save you traffic. Using the `overflowCellsLimit` property.

### Version Mapping

| Slider | Ng   |
| ------ | ---- |
| 0.0.x  | 17.x |

## Properties

| name              | type    | default | description                                                      |
| ----------------- | ------- | ------- | ---------------------------------------------------------------- |
| indicatorsVisible | boolean | true    | Display circle at bottom of Carousel to go back and forth        |
| autoPlay          | boolean | true    | When true Carousel will start automatically                      |
| autoPlaySpeed     | number  | 3000    | Speed of images to change in slider                              |
| animationSpeed    | number  | 500     | Speed of a images to change in slider                            |
| slides            | ISlides | []      | It is an array of images and property that we pass to RmCarousel |

## Author services

Are you interested in this library but lacks features? Write to the author, he can do it for you.

## Roadmap

`fade` - fade in and fade out animation.
