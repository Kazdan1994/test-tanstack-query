import { PropsWithChildren } from "react";
import { expect, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCustomHook } from "../../../tests/helpers";

it("should be hello", async () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useCustomHook(), { wrapper });

  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.data).toEqual("Hello");
  });
});
