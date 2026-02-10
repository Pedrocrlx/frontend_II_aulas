# Project Specification: BarberBrand SaaS

## 1. Overview
A multi-tenant SaaS platform enabling barbershops to have fully customizable, high-performance websites.
**Goal:** Deliver a "White Label" experience where each barber has their own branding, maximizing SEO via SSR, while built on a scalable, containerized infrastructure.

## 2. Tech Stack & Requirements Mapping
* **Runtime & Package Manager:** **Bun**
    * *Why:* Faster package installation and startup times compared to Node/npm.
* **Core Framework:** **Next.js** (App Router)
    * *Satisfies:* SSR, Navigation, SEO capabilities.
* **Language:** **TypeScript**
    * *Satisfies:* Type safety, scalability.
* **HTTP Client:** **Axios**
    * *Satisfies:* Standardized API calls, interceptors for auth tokens, automatic JSON parsing.
* **Testing:** **Jest** + **React Testing Library**
    * *Satisfies:* Unit Testing requirement.
* **Styling:** **Tailwind CSS**
    * *Satisfies:* Responsive design, utility-first styling.
* **Database:** **Prisma** (PostgreSQL)
    * *Satisfies:* Type-safe DB access.
* **Authentication:** **NextAuth.js**
* **State Management:** **React Context API** & **React Query**

## 3. Infrastructure & DevOps (Future Roadmap)
* **Containerization:** **Docker** (Multi-stage builds for optimized Next.js images).
* **Orchestration:** **Kubernetes (K8s)** via **Minikube** (Local) or Managed K8s (Cloud).
* **IaC (Infrastructure as Code):** **Terraform** to provision resources.
* **CI/CD:** **GitHub Actions** for automated testing, building, and deployment (Helm Charts).

## 4. Architecture
* **Rendering Strategy:** **SSR** (Server-Side Rendering) for SEO-critical pages.
* **Multi-tenancy:** Dynamic Routing based on `[slug]` resolving to tenant configuration.
* **API Layer:** Next.js API Routes consumed by Axios services.

## 5. Development Workflow (Chunked)
We strictly follow a chunked development process. A chunk is closed only when requirements + **passing unit tests** + changelog are met.

### Planned Chunks:
* **Chunk 0: Initialization & Config**
    * Setup Next.js with **Bun**.
    * Configure **Jest** environment.
    * Setup **Axios** instance.
    * **Goal:** `bun test` passes a dummy test & app runs.
* **Chunk 1: Database & API Foundation**
    * Setup Prisma schema.
    * Create API endpoints.
    * **Test:** Unit tests for API responses using Jest Mocks.
* **Chunk 2: Dynamic Routing & SSR**
    * Implement `[slug]` pages.
    * **Test:** Verify correct JSON data injection based on URL.
* **Chunk 3: Theming Engine**
    * Implement ThemeContext.
    * **Test:** Verify CSS variables update on state change.
* **Chunk 4: Authentication & Dashboard**
    * Protect routes.
    * **Test:** Verify redirection for unauthenticated users.
* **Chunk 5: DevOps & Containerization (Phase 2)**
    * Create `Dockerfile`.
    * Setup GitHub Actions workflow (Lint -> Test -> Build).