import { Skeleton } from '@/components/ui/skeleton';

const AgentsLoading = () => (
  <section aria-busy="true" aria-label="正在加载代理列表">
    <span className="sr-only">正在加载代理列表，请稍候...</span>
    <Skeleton className="h-8 w-48 mb-4" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="h-32 w-full rounded-lg" />
      ))}
    </div>
  </section>
);

export default AgentsLoading;
