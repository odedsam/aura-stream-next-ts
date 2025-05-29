import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

type LoadingProps = {
  message?: string;
  className?: string;
};

export const Loading = ({ message = "Loading...", className }: LoadingProps) => {
  return (
    <div className={cn("flex items-center justify-center p-6 text-gray-500", className)}>
      <svg
        className="animate-spin h-5 w-5 mr-2 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="sr-only">{message}</span>
      <span>{message}</span>
    </div>
  );
};

type ErrorProps = {
  message?: string;
  className?: string;
};

export const Error = ({ message = "Something went wrong.", className }: ErrorProps) => {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-4 py-3 text-red-700",
        className
      )}
    >
      <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
      <span>{message}</span>
    </div>
  );
};

// usage error :
// export default function PageError({ error }: { error: Error }) {
//   return <Error message={error.message || 'Failed to load content.'} />;
// }

// usage loading:
//export default function PageLoading() {
// return <Loading message="טוען תוכן..." />;
//}
