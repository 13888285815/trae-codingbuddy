import { Skeleton } from '@/components/ui/skeleton';

const HeroLoading = () => (
  <section aria-busy="true" aria-label="正在加载首屏">
    <span className="sr-only">正在加载首屏，请稍候...</span>
    <div className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Skeleton className="mx-auto h-12 w-96 mb-4" />
        <Skeleton className="mx-auto h-6 w-64 mb-10" />
        <Skeleton className="mx-auto h-64 w-full max-w-2xl rounded-lg mb-10" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-40 rounded-md" />
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroLoading;
