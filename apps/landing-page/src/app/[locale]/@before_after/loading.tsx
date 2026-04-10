import { Skeleton } from '@/components/ui/skeleton';

const BeforeAfterLoading = () => (
  <section aria-busy="true" aria-label="正在加载前后对比">
    <span className="sr-only">正在加载对比内容，请稍候...</span>
    <div className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Skeleton className="mx-auto h-8 w-64 mb-12" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterLoading;
