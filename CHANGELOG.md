# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2026-07-15

### Major Release - Angular 22 Upgrade

This is a major version release that upgrades the library from Angular 21 to Angular 22, along with significant modernization of the codebase to align with the latest Angular best practices and ecosystem standards.

### Added

- **Angular 22 Support**: Full compatibility with Angular 22.x and its new features, APIs, and performance improvements.
- **Modern Control Flow Syntax**: Migrated from legacy structural directives (`*ngIf`, `*ngFor`) to the new built-in control flow blocks (`@if`, `@for`, `@switch`) for better performance, type safety, and tree-shaking.
- **Standalone Component Architecture**: The carousel component is now a fully standalone component with no `NgModule` dependency, simplifying integration and reducing bundle size.
- **Improved Type Safety**: Enhanced TypeScript types across the public API (`ISlides` interface and component inputs) for stronger compile-time guarantees.
- **Lazy Loading Optimizations**: Refined lazy loading strategy for slide images to reduce initial load time and bandwidth consumption.

### Changed

- **Angular Framework Upgrade**: Upgraded all `@angular/*` dependencies from `^21.x` to `^22.0.2`:
  - `@angular/common`: `^21.x` → `^22.0.2`
  - `@angular/compiler`: `^21.x` → `^22.0.2`
  - `@angular/core`: `^21.x` → `^22.0.2`
  - `@angular/forms`: `^21.x` → `^22.0.2`
  - `@angular/platform-browser`: `^21.x` → `^22.0.2`
  - `@angular/router`: `^21.x` → `^22.0.2`
- **Build System Upgrade**: Updated `@angular/build` to `^22.0.3` and `@angular/cli` to `^22.0.3` for improved build performance and new builder features.
- **TypeScript Upgrade**: Upgraded TypeScript from `~5.x` to `~6.0.3` to align with Angular 22 requirements.
- **ng-packagr Upgrade**: Updated `ng-packagr` to `^22.0.0` for Angular 22 library packaging compatibility.
- **Template Syntax Modernization**: Replaced `*ngFor` with `@for` blocks using the new `track` expression syntax for better rendering performance.
- **Component Decorator**: Updated component metadata to use the modern standalone-first approach with `imports` array instead of `NgModule` declarations.
- **Package Manager**: Project now uses `pnpm@10.11.1` as the package manager for faster, more reliable dependency management.

### Developer Tooling

- **Angular ESLint**: Updated `@angular-eslint/*` packages to `21.1.0` for Angular 22-compatible linting rules.
- **Testing Framework**: Migrated test runner support to align with Angular 22's testing infrastructure:
  - `jasmine-core`: `~5.10.0`
  - `karma`: `~6.4.0`
  - `karma-jasmine`: `~5.1.0`
  - `@types/jasmine`: `~5.1.0`
- **Vitest Integration**: Added `vitest@^4.0.8` as an alternative test runner for faster unit testing.
- **Prettier**: Updated to `^3.6.2` with consistent formatting rules across the project.
- **Code Coverage**: Added `istanbul-lib-instrument@^6.0.3` for improved code coverage reporting.

### Fixed

- **Template Parsing**: Resolved template parsing issues that arose from the Angular 22 template compiler's stricter type checking.
- **Change Detection**: Optimized change detection cycles by leveraging Angular 22's improved signals and OnPush-friendly patterns.
- **Memory Leaks**: Fixed potential memory leaks in slide preloading by ensuring proper cleanup of image references on slide transitions.
- **Bundle Size**: Reduced the published library bundle size by leveraging Angular 22's improved tree-shaking capabilities.

### Breaking Changes

- **Minimum Angular Version**: This version requires Angular 22 or higher. Projects on Angular 21 or earlier must remain on `rm-carousel@5.x`.
- **Node.js Requirement**: Angular 22 requires Node.js 20.11+ or 22.x. Older Node.js versions are no longer supported.
- **Standalone-Only**: The carousel component is now strictly standalone. Consumers must import it directly into their standalone components or via the new `loadComponent` route pattern.
- **Removed Deprecated APIs**: Any APIs deprecated in Angular 21 have been removed in this release.

### Migration Guide

To upgrade from `rm-carousel@4.x` to `rm-carousel@5.0.0`:

1. **Update Angular**: Ensure your application is running Angular 22.x:
   ```bash
   ng update @angular/core@22 @angular/cli@22
   ```

2. **Update the library**:
   ```bash
   npm install rm-carousel@^5.0.0
   # or
   pnpm add rm-carousel@^5.0.0
   ```

3. **Update imports**: If you were importing the carousel via a module, switch to direct standalone imports:
   ```typescript
   // Before (Angular 21)
   import { RmCarouselModule } from 'rm-carousel';

   // After (Angular 22)
   import { RmCarouselComponent } from 'rm-carousel';

   @Component({
     imports: [RmCarouselComponent],
     // ...
   })
   export class MyComponent {}
   ```

4. **Update Node.js**: Ensure you're running Node.js 20.11+ or 22.x.

### Acknowledgments

Thanks to all contributors and the Angular team for their continued work on making Angular faster, more modern, and more developer-friendly.

---

## Previous Versions

For changelog entries prior to v6.0.0, please refer to the [GitHub Releases](https://github.com/malikrajat/rm-carousel/releases) page.
