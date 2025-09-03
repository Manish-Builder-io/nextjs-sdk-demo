import { fetchOneEntry, getBuilderSearchParams, fetchEntries } from "@builder.io/sdk-react-nextjs";
import { RenderBuilderContent } from "../../components/builder";
import SimpleProducts from "../../components/SimpleProducts/SimpleProducts";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function DemoPage(props: PageProps) {
  const builderModelName = "page"; // Using a specific model for demo page
  const searchParams = await props.searchParams;

  // Fetch products data using fetchEntries
  const products = await fetchEntries({
    model: 'products-data',
    fields: 'data',
    apiKey: PUBLIC_API_KEY,
  });

  // Console log the response
  console.log('Products response:', products);

  const content = await fetchOneEntry({
    // Get the page content from Builder with the specified options
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    options: getBuilderSearchParams(searchParams),
    userAttributes: { urlPath: "/demo" },
  });

  return (
    <div>
      {/* Render Builder.io content */}
      <RenderBuilderContent content={content} model={builderModelName} />
      
      {/* Render products data directly */}
      <SimpleProducts products={products as Product[]} />
    </div>
  );
}

export const revalidate = 30;
