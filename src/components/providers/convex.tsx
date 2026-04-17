import { ConvexProviderWithHerculesAuth } from "@usehercules/auth/convex-react";
import { ConvexReactClient } from "convex/react";

export function ConvexProvider({ children }: { children: React.ReactNode }) {
  const convexUrl = import.meta.env.VITE_CONVEX_URL;

  if (!convexUrl) {
    return <>{children}</>;
  }

  const convex = new ConvexReactClient(convexUrl);

  return (
    <ConvexProviderWithHerculesAuth client={convex}>
      {children}
    </ConvexProviderWithHerculesAuth>
  );
}
