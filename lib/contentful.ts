import { createClient, ContentfulClientApi } from "contentful";

declare global {
  var contentful: ContentfulClientApi | undefined;
}

const { CONTENTFUL_SPACE = "", CONTENTFUL_ACCESS_TOKEN = "" } = process.env;

const client =
  globalThis.contentful ||
  createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

if (process.env.NODE_ENV !== "production") globalThis.contentful = client;

export default client;
