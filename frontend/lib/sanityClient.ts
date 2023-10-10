import SanityClient from 'next-sanity-client'

const sanityClient = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Update to the latest API version
  useCdn: true, // Enable CDN caching
})

export default sanityClient
