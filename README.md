# Jatin Jewellers Website

A luxury jewelry website for Jatin Jewellers that displays products from their Instagram feed.

## Instagram Integration

This website displays images from the Jatin Jewellers Instagram account (@jatinjewellershyd). Unlike typical Instagram integrations that fetch images dynamically, this website uses a static approach where images are downloaded once and stored locally.

### How It Works

1. **One-Time Image Fetch**: Images are fetched from Instagram only once (or when you add new pictures)
2. **Local Storage**: Images are saved to the `public/images/instagram` directory
3. **Static Data**: Image metadata is stored in a static data file
4. **Automatic Categorization**: Products are categorized based on hashtags and captions

### How to Update the Website with New Instagram Posts

When you add new jewelry images to your Instagram account:

1. **Post to Instagram**: Add new jewelry images to your Instagram account with appropriate hashtags
2. **Run the Update Script**: Execute the Instagram fetch script:
   ```bash
   # Install dependencies (first time only)
   npm install dotenv axios
   
   # Create a .env file with your Instagram access token (first time only)
   echo "INSTAGRAM_ACCESS_TOKEN=your_token_here" > .env
   
   # Run the script
   node scripts/fetch-instagram-complete.js
   ```
3. **Deploy the Changes**: Commit and push the changes to your repository

### Categorization Guidelines

Include appropriate hashtags or keywords in your Instagram captions to categorize products:

- For rings: Include #ring, #rings, #engagement, #wedding, or #solitaire
- For earrings: Include #earring, #earrings, #studs, #jhumka, or #jhumkas
- For pendants: Include #pendant, #pendants, #necklace, or #necklaces
- For bracelets: Include #bracelet, #bracelets, #bangle, or #bangles

### Setting Up Instagram API Access (One-Time Setup)

To fetch images from Instagram, you'll need to set up API access:

1. Create a Facebook Developer account at [developers.facebook.com](https://developers.facebook.com/)
2. Create a Facebook App
3. Set up Instagram Basic Display API
4. Generate a long-lived access token
5. Add the token to your `.env` file

Detailed instructions can be found in the [Facebook Developer Documentation](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started).

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
