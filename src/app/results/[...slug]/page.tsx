import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    slug: (string | undefined)[];
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  const query = slug?.[0] ?? "curated";
  const page = slug?.[1] ?? "1";
  return {
    title: `Results for ${query} - Page ${page}`,
  };
}

export default function SearchResults({ params: { slug } }: Props) {
  const query = slug?.[0] ?? "curated";
  const page = slug?.[1] ?? "1";
  return <Gallery topic={query} page={page} />;
}
