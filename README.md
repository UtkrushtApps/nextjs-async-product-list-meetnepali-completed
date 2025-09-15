# Task Overview

You are working for a startup building a Next.js e-commerce showcase to help small brands display their products. The company wants to load product listings asynchronously from a remote JSON API, and also log every visit to the product page (for analytics) via a separate background API route call—without impacting the user experience. This will help both in performance optimization and in capturing user traffic statistics for product managers.

## Guidance
- Fetch product data with proper async patterns and typed responses.
- Ensure that analytics calls are fire-and-forget/backgrounded; errors must not block or display to the user.
- Display intuitive loading and error UI to reflect different async/data fetching states.
- Use TypeScript interfaces for all data.
- Render products via reusable components.
- Use good React and Next.js practices with state, hooks, and typing.

## Objectives
- Implement a products page that fetches a remote products.json file asynchronously on the client side and lists the products using a reusable card component.
- After successful product loading, use async/await to call an analytics API route (included in the starter code) to record the page visit in the background (user never waits on this, and analytics errors are silent).
- All interfaces/types must be properly set up in TypeScript files, and the code should compile without TS errors.
- Visibly show loading and error states for fetching products.

## How to Verify
- Visit the products page; confirm products load asynchronously (look for loading UI while fetching).
- Confirm that analytics API is triggered in the background; product listing is not delayed by analytics and user never sees analytics failures.
- Reload and check behavior: loading, error handling (simulate error by breaking remote URL), and silent background analytics.
- Check that all files use TypeScript types and code compiles/run without errors.
