# Casa Clara

Casa Clara is a fictional property discovery experience for distinctive homes across Barcelona and the Mediterranean coast.

Built as a portfolio project, it explores modern frontend development with Next.js, TypeScript and Contentful, alongside practical AI integration through natural-language property search.

## Features

- Browse a collection of properties managed through Contentful
- View individual property pages with property details, features and related homes
- Filter properties by location, property type, bedrooms and maximum price
- Search for properties using natural language
- Save favourite properties between browser sessions
- Submit enquiries for individual properties
- Responsive layouts across desktop, tablet and mobile
- Optimised property and hero imagery
- Dynamic metadata for individual property pages
- Contentful caching and on-demand revalidation
- Automated tests for core application logic

## Tech Stack

- **Next.js 16** — App Router, Server Actions, caching and dynamic routes
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Contentful** — property content management
- **OpenAI API** — natural-language property search
- **Zod** — structured AI output validation
- **Resend** — property enquiry emails
- **Vitest** — unit testing

## Natural-Language Property Search

One of the main features of Casa Clara is an AI-assisted property search.

Alongside the standard search filters, users can describe the kind of property they are looking for in everyday language.

For example:

> "I'm looking for a 3 bedroom villa under €1.5m"

Rather than using the language model as the search engine itself, Casa Clara uses AI to translate the user's request into a predictable set of structured filters.

The search flow is:

```text
Natural-language query
        ↓
OpenAI API
        ↓
Structured output
        ↓
Zod validation
        ↓
URL search parameters
        ↓
Existing property filtering
```

The structured response can contain:

- location or search query
- property type
- minimum number of bedrooms
- maximum price

The resulting values are converted into URL search parameters and passed into the same deterministic filtering system used by the standard property search form.

This keeps the AI integration focused on interpreting user intent while the application's existing search logic remains responsible for producing the results.

## Content Management

Property content is managed in Contentful and mapped into the application's internal TypeScript property model.

This separates editorial content from the frontend implementation and allows property information to be updated without changing application code.

Contentful data is cached using Next.js caching APIs. A protected revalidation endpoint allows the property cache to be invalidated when content changes, avoiding unnecessary Contentful requests while still allowing updates to appear without a full redeployment.

## Property Search

Casa Clara also includes a traditional property search interface for users who prefer explicit filters.

Search state is represented using URL parameters, making filtered views shareable and allowing both the standard search form and AI-assisted search to use the same underlying filtering system.

Filters include:

- location
- property type
- minimum bedrooms
- maximum price

## Saved Properties

Properties can be saved from property listings and individual property pages.

Saved property IDs are persisted using `localStorage`, allowing favourites to remain available between browser sessions without requiring user accounts or authentication.

Saved-property state uses React's `useSyncExternalStore` to keep changes synchronised between components and browser tabs.

## Property Enquiries

Individual property pages include an enquiry flow for contacting Casa Clara about a property.

The form uses a Next.js Server Action for server-side handling and validation, with Resend used for email delivery.

Property information is resolved server-side from the supplied property slug rather than trusting property details submitted by the browser.

## Testing

The project uses Vitest for unit testing.

Tests cover core application logic including:

- property filtering
- conversion of AI-generated filters into URL search parameters
- saved-property behaviour

Run the test suite with:

```bash
npm test
```

Or run tests in watch mode:

```bash
npm run test:watch
```

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env.local` file containing the required environment variables:

```env
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_ACCESS_TOKEN=
CONTENTFUL_ENVIRONMENT=master

OPENAI_API_KEY=

RESEND_API_KEY=

CONTENTFUL_REVALIDATION_SECRET=
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm run start      # Start the production server
npm run lint       # Run ESLint
npm test           # Run the Vitest test suite
npm run test:watch # Run Vitest in watch mode
```

## Project Structure

```text
app/            Routes, pages, Server Actions and API endpoints
components/     Reusable UI components
hooks/          Client-side React hooks
lib/            Contentful, AI and property-domain logic
types/          Shared TypeScript types
public/         Static assets
```

## About the Project

Casa Clara was created as a portfolio project to explore building a complete content-driven frontend application rather than an isolated UI demo.

The project brings together CMS-managed content, dynamic routing, server and client components, URL-driven search state, persistent client-side state, server-side form handling, automated testing and structured AI output within a single Next.js application.
