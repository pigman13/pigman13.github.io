import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../lib/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

/**
 * app/projects/[slug]/page.tsx
 * 
 * Purpose: Displays detailed information for individual projects with enhanced visual presentation.
 * Contains: Project overview, impact metrics, technology stack, and technical details.
 * Core functionalities: Renders comprehensive project information with animations and professional styling.
 */

/**
 * Generate static params for all project slugs
 * Required for static export with dynamic routes
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}


