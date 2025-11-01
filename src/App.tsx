import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create route tree
const routeTree = rootRoute.addChildren([
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
<dyad-problem-report summary="18 problems">
<problem file="src/components/Header.tsx" line="28" column="19" code="2322">Type '&quot;/about&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="31" column="19" code="2322">Type '&quot;/products&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="34" column="19" code="2322">Type '&quot;/services&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="37" column="19" code="2322">Type '&quot;/contact&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="67" column="21" code="2322">Type '&quot;/about&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="70" column="21" code="2322">Type '&quot;/products&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="73" column="21" code="2322">Type '&quot;/services&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Header.tsx" line="76" column="21" code="2322">Type '&quot;/contact&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Hero.tsx" line="25" column="21" code="2322">Type '&quot;/products&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Hero.tsx" line="31" column="21" code="2322">Type '&quot;/contact&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Products.tsx" line="80" column="17" code="2322">Type '&quot;/products&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/ContactCTA.tsx" line="37" column="19" code="2322">Type '&quot;/contact&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Footer.tsx" line="29" column="21" code="2322">Type '&quot;/about&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Footer.tsx" line="30" column="21" code="2322">Type '&quot;/products&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Footer.tsx" line="31" column="21" code="2322">Type '&quot;/services&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/components/Footer.tsx" line="32" column="21" code="2322">Type '&quot;/contact&quot;' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/&quot;'.</problem>
<problem file="src/pages/NotFound.tsx" line="1" column="29" code="2307">Cannot find module 'react-router-dom' or its corresponding type declarations.</problem>
<problem file="src/pages/Contact.tsx" line="2" column="20" code="2307">Cannot find module '@/Footer' or its corresponding type declarations.</problem>
</dyad-problem-report>I'll fix all the TypeScript errors. The main issues are with TanStack Router routes and some import paths.

<applaa-update-file path="src/App.tsx">
import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create route tree
const routeTree = rootRoute.addChildren([
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
    component: Products,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: Contact,
  }),
  createTanStackRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFound,
  }),
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;