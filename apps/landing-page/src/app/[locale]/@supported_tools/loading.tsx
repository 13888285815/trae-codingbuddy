import { Skeleton } from '@/components/ui/skeleton';

const SupportedToolsLoading = () => (
  <section aria-busy="true" aria-label="正在加载支持的工具">
    <span className="sr-only">正在加载支持的工具，请稍候...</span>
    <div className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <Skeleton className="mx-auto h-6 w-48 mb-8" />
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className="h-10 w-32 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupportedToolsLoading;
