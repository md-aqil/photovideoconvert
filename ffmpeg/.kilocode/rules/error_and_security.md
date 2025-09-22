# Error Handling & Security

## Error Handling
- Wrap all FFmpeg operations in try-catch blocks
- Return user-friendly error messages
- Log detailed errors to console for debugging
- Show specific error suggestions when possible
- Include retry functionality for failed operations

## Security Rules
- Validate file extensions AND MIME types
- Limit file sizes: Video 500MB, Audio 100MB, Image 50MB
- Sanitize all file names to prevent path traversal
- Use rate limiting to prevent API abuse
- Store uploads in secure temporary directories

## File Management
- Auto-delete processed files after download
- Clean up temporary files every hour
- Monitor disk space usage
- Prevent processing of executable files
- Validate video/audio/image formats only
