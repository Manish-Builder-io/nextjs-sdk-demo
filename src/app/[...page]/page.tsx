import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react-nextjs";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
  searchParams: Promise<Record<string, string>>; 
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  // Use the page path specified in the URL to fetch the content
  const urlPath = "/" + ((await props?.params)?.page?.join("/") || "");
  const searchParams = await props.searchParams;

  const content = await fetchOneEntry({
    // Get the page content from Builder with the specified options
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    options: getBuilderSearchParams(searchParams),
    userAttributes: { urlPath },
  });

  return (
    <RenderBuilderContent content={content} model={builderModelName} />
  );
}

export const revalidate = 1;