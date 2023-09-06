import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    query: string;
  };
};

export function generateMetadata({ params: { query } }: Props) {
  return {
    title: `Results for ${query}`,
  };
}

export default function SearchResults({ params: { query } }: Props) {
  return <Gallery topic={query} />;
}
