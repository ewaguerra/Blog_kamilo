export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
};

const MIN_TOC_HEADINGS = 3;

export function getTocHeadings(headings: TocHeading[]): TocHeading[] {
  const items = headings.filter((heading) => heading.depth >= 2 && heading.depth <= 3);
  return items.length >= MIN_TOC_HEADINGS ? items : [];
}
