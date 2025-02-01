import {createClient} from 'contentful';

export async function getContent(Content_name) {
  const space_id = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const access_token = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  console.log(space_id);
  console.log(access_token);
  const ContentfulClient = createClient({
    space: space_id,
    accessToken: access_token
  });

  const response = await ContentfulClient.getEntries({
    content_type: Content_name,
  });

  console.log(response.items);
  return response.items || [];
}