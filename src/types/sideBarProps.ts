import type { BearBlogPost } from "./BearBlogPost";

export type sideBarProps = {
    blogPosts: BearBlogPost[];
    error: string | null;
}