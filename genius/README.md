# Genius - AI SaaS Platform

Genius is a full-stack Software as a Service (SaaS) AI platform built with the Next.js 13 App Router. It provides five AI-powered tools and features a complete authentication and payment system.

## Features

-   **5 AI Tools**: Conversation, Code Generation, Image Generation, Music Generation, and Video Generation.
-   **Authentication**: Full user authentication using Clerk, including sign-in, sign-up, and social login.
-   **Subscription System**: Freemium model with a free tier (5 generations) and a Pro plan with unlimited access, powered by Stripe.
-   **Database**: User data, API limits, and subscription status are stored in a MySQL database managed with Prisma.
-   **Modern UI**: Built with Tailwind CSS and `shadcn/ui` for a clean and responsive user interface.
-   **Customer Support**: Integrated Crisp chat for live customer support.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   A MySQL database (e.g., from PlanetScale)
-   API keys from Clerk, OpenAI, Replicate, and Stripe.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd genius
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the following environment variables. You need to replace the placeholder values with your actual keys.

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_************************
    CLERK_SECRET_KEY=sk_test_************************

    # OpenAI API
    OPENAI_API_KEY=your_openai_api_key_here

    # Replicate AI API
    REPLICATE_API_TOKEN=your_replicate_api_token_here

    # PlanetScale Database
    DATABASE_URL="mysql://user:password@host/database?sslaccept=strict"

    # Stripe Payments
    STRIPE_API_KEY=sk_test_************************
    STRIPE_WEBHOOK_SECRET=whsec_************************

    # Application URL (for Stripe redirects and other absolute URLs)
    NEXT_PUBLIC_APP_URL=http://localhost:3000

    # Crisp Chat
    NEXT_PUBLIC_CRISP_WEBSITE_ID=your_crisp_website_id_here
    ```

4.  **Push the database schema:**
    Once your `DATABASE_URL` is set, push the Prisma schema to your database. This will create the necessary tables.
    ```bash
    npx prisma db push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application is designed for easy deployment to [Vercel](https://vercel.com/).

1.  Push your code to a Git repository.
2.  Import the repository into Vercel.
3.  Configure all the environment variables listed above in the Vercel project settings.
4.  Deploy! Vercel will automatically detect the Next.js project and build it.
