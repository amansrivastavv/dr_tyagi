import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthCallback } from "@usehercules/auth/react";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "@/convex/api.js";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function AuthCallback() {
  const isAuthConfigured = Boolean(
    import.meta.env.VITE_CONVEX_URL &&
      import.meta.env.VITE_HERCULES_OIDC_AUTHORITY &&
      import.meta.env.VITE_HERCULES_OIDC_CLIENT_ID,
  );
  if (!isAuthConfigured) {
    return <MissingAuthConfig />;
  }

  return <ConfiguredAuthCallback />;
}

function MissingAuthConfig() {
  const navigate = useNavigate();

  return (
    <div className="flex h-svh flex-col items-center justify-center gap-6 px-4">
      <div className="flex max-w-md flex-col items-center gap-2 text-center">
        <p className="font-medium text-destructive">Authentication is not configured</p>
        <p className="text-sm text-muted-foreground">
          Add the Convex and Hercules auth environment variables before using
          the callback route.
        </p>
      </div>
      <Button variant="secondary" onClick={() => navigate("/", { replace: true })}>
        Return home
      </Button>
    </div>
  );
}

function ConfiguredAuthCallback() {
  const navigate = useNavigate();
  const convexAuth = useConvexAuth();
  const updateCurrentUser = useMutation(api.users.updateCurrentUser);

  const onSync = useCallback(async () => {
    await updateCurrentUser();
  }, [updateCurrentUser]);

  const navigateHome = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  const { status, error, retry } = useAuthCallback({
    isBackendAuthenticated: convexAuth.isAuthenticated,
    onSync,
    onSuccess: navigateHome,
    onNoAuthParams: navigateHome,
  });

  if (status === "error" && error) {
    return (
      <div className="flex flex-col items-center justify-center h-svh gap-6 px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-destructive font-medium">Something went wrong</p>
          <p className="text-sm text-muted-foreground max-w-md">{error}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={navigateHome}>
            Return home
          </Button>
          <Button onClick={retry}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-svh gap-4">
      <Spinner className="size-8" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
