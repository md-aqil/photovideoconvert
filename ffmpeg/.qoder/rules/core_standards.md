---
trigger: manual
---
# Core Development Standards

## Project Structure
- Backend code in `backend/` directory
- Frontend code in `frontend/` directory  
- Use PascalCase for React components: `VideoConverter.js`
- Use camelCase for utilities: `ffmpegUtils.js`
- Group by feature: `video/`, `audio/`, `image/` folders

## Coding Rules
- Always use async/await with try-catch blocks
- Include console.log for debugging
- Use template literals: `${variable}`
- Add loading states for all operations
- Return consistent API format: `{success: boolean, data: any, error: string}`

## File Handling
- Validate file types and sizes before processing
- Auto-cleanup temporary files after 1 hour
- Support drag & drop uploads
- Show progress bars for all operations
- Include cancel functionality
