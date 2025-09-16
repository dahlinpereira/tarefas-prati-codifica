export const Skeleton = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-slate-50 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="aspect-square w-full animate-pulse bg-gray-300 dark:bg-gray-700"></div>
      <div className="flex flex-grow flex-col p-4">
        <div className="mb-3 h-5 w-11/12 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-9/12 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="my-4 h-4 w-1/3 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="mt-auto mb-4 h-6 w-1/2 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};