
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const queryClient = new QueryClient();


export function TanstackProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

