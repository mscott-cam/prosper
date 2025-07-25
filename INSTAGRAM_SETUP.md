# Instagram Feed Integration Setup

This project includes an Instagram feed integration that displays the latest posts from your Instagram account.

## Setup Instructions

### 1. Create a Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as the app type
4. Fill in the app details

### 2. Add Instagram Basic Display
1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App" under Instagram Basic Display
4. Fill in the required fields

### 3. Add Instagram Test User
1. Go to Roles → Roles
2. Add your Instagram account as a test user
3. Accept the invitation from your Instagram account

### 4. Generate Access Token
1. Go to Instagram Basic Display → Basic Display
2. Add your Instagram account under "User Token Generator"
3. Click "Generate Token"
4. Copy the access token

### 5. Configure Environment Variable
1. Create a `.env.local` file in your project root
2. Add your token:
```
INSTAGRAM_ACCESS_TOKEN=your_token_here
```

### 6. Update next.config.mjs (if not already done)
Add Instagram CDN domains to allow external images:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.cdninstagram.com',
    },
    {
      protocol: 'https',
      hostname: '*.fbcdn.net',
    },
  ],
}
```

## Important Notes

- Instagram Basic Display API tokens expire after 60 days
- The feed will show mock data during development if no token is provided
- In production, implement token refresh logic to maintain access
- The component falls back to static images if the API fails

## Troubleshooting

If the feed isn't working:
1. Check that your token is valid in the Facebook Developer Console
2. Ensure your Instagram account is set as a test user
3. Verify the environment variable is loaded correctly
4. Check the browser console for any CORS or API errors

## Resources
- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Getting Started Guide](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)