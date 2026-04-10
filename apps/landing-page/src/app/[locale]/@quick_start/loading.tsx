import { Skeleton } from '@/components/ui/skeleton';

const QuickStartLoading = () => (
  <section aria-busy="true" aria-label="正在加载快速入门指南">
    <span className="sr-only">正在加载快速入门指南，请稍候...</span>
    <Skeleton className="h-8 w-48 mb-4" />
    <div className="space-y-4">
      {Array.from({ length: 3 }, (_, i) => (
        <Skeleton key={i} className="h-24 w-full rounded-lg" />
      ))}
    </div>
  </section>
);

export default QuickStartLoading;
