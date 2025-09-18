import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Loader2 className="w-full h-full" />
      </div>
      <p className="text-sm text-muted-foreground">
        Genius is thinking...
      </p>
    </div>
  );
};
