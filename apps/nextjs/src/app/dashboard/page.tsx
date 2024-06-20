import { Suspense } from "react";

import { api } from "~/trpc/server";
import { AuthShowcase } from "./_components/auth-showcase";
import {
  CreatePostForm,
  PostCardSkeleton,
  PostList,
} from "./_components/posts";

export const runtime = "edge";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const posts = api.post.all();

  return (
    <div className="flex-1 space-y-4 border-t p-4 pt-2 md:p-6 md:pt-4 lg:p-8 lg:pt-6">
      <CreatePostForm />
      <div className="w-full overflow-y-scroll">
        <Suspense
          fallback={
            <div className="flex w-full flex-col gap-4">
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </div>
          }
        >
          <PostList posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
