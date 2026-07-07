import type { CollectionEntry } from 'astro:content';

const MAX_RECOMMENDED = 3;

function sharedTagCount(
  tagsA: string[],
  tagsB: string[],
): number {
  const normalizedB = new Set(tagsB.map((tag) => tag.toLowerCase()));
  return tagsA.filter((tag) => normalizedB.has(tag.toLowerCase())).length;
}

export function getRecommendedPosts(
  posts: CollectionEntry<'blog'>[],
  current: CollectionEntry<'blog'>,
  limit = MAX_RECOMMENDED,
): CollectionEntry<'blog'>[] {
  return posts
    .filter((post) => post.id !== current.id && post.data.kind !== 'curso')
    .map((post) => ({
      post,
      score: sharedTagCount(current.data.tags, post.data.tags),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf();
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
