# Add New Video Processing Feature

## Implementation Steps
1. **Backend Route Setup**:
   - Create new endpoint in `backend/routes/video.js`
   - Add FFmpeg command logic in `backend/services/videoProcessor.js`
   - Include proper error handling and progress tracking

2. **Frontend Component**:
   - Create React component in `frontend/src/components/video/`
   - Add drag & drop upload functionality
   - Implement progress bar and preview features

3. **Integration Testing**:
   - Test endpoint with Postman or curl
   - Verify file upload and processing works
   - Test error scenarios (invalid files, large files)

4. **UI Polish**:
   - Add responsive CSS styling
   - Include loading states and error messages
   - Ensure mobile compatibility

## Required Parameters
- Feature name (e.g., "video-merge", "video-effects")
- FFmpeg command to implement
- Input/output file formats supported
- UI requirements and design specs
