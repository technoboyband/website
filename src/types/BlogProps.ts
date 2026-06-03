import type { BearBlogPost } from "./BearBlogPost";

export type BlogProps = {
    blogPosts: BearBlogPost[];
    error: string | null;
}