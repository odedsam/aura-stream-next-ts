// Export Netflix Loader
export { default as NetflixLoader } from './AppLoader';

// Export all Skeleton Loader components
export {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
  default as SkeletonLoaders
} from './skeleton-loader';

// You can also create grouped exports for better organization
export * as SkeletonComponents from './skeleton-loader';

// If you add more loaders in the future, export them here:
// export { default as SpinnerLoader } from './spinner-loader';
// export { default as DotsLoader } from './dots-loader';
// export { default as ProgressLoader } from './progress-loader';
