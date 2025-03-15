# Jatin Jewellers Website

A luxury jewelry website for Jatin Jewellers that displays products from their Instagram feed.

## Instagram Integration

This website pulls images directly from the Jatin Jewellers Instagram account (@jatinjewellershyd). The integration works as follows:

1. **Image Source**: All product images are sourced from the Instagram feed
2. **Categorization**: Products are automatically categorized based on hashtags and captions
3. **Display**: Images are displayed in the appropriate sections of the website

### How to Update the Website

To add new products to the website, simply:

1. Post new jewelry images to the Instagram account
2. Include appropriate hashtags or keywords in the caption to categorize the product:
   - For rings: Include #ring, #rings, #engagement, #wedding, or #solitaire
   - For earrings: Include #earring, #earrings, #studs, #jhumka, or #jhumkas
   - For pendants: Include #pendant, #pendants, #necklace, or #necklaces
   - For bracelets: Include #bracelet, #bracelets, #bangle, or #bangles

The website will automatically fetch and display the latest images in the appropriate categories.

### Technical Implementation

In a production environment, you would need to:

1. Set up Instagram Graph API access
2. Create a server-side function to fetch Instagram data
3. Store the access token securely
4. Implement proper caching to avoid rate limits

The current implementation uses mock data that simulates Instagram posts. To implement the actual Instagram API integration, you'll need to update the `fetchInstagramPosts` function in `src/lib/instagram.ts`.

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is built using Next.js and can be deployed to Vercel or any other hosting platform that supports Next.js applications.
