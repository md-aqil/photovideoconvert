# API Structure Rules for FFmpeg Multimedia Suite

## Endpoint Organization
- Group all endpoints by media type under `/api/` prefix
- Use clear, descriptive endpoint names
- Follow RESTful conventions consistently
- Include API versioning for future compatibility

## Video API Endpoints
POST /api/video/convert - Convert video formats
POST /api/video/compress - Compress video file size
POST /api/video/resize - Change video dimensions
POST /api/video/trim - Cut/trim video segments
POST /api/video/merge - Combine multiple videos
POST /api/video/rotate - Rotate video orientation
POST /api/video/watermark - Add text/image watermarks
POST /api/video/extract-frames - Extract frames as images
POST /api/video/from-images - Create video from images
POST /api/video/effects - Apply video filters/effects
GET /api/video/metadata/:id - Get video file information

text

## Audio API Endpoints
POST /api/audio/convert - Convert audio formats
POST /api/audio/extract - Extract audio from video
POST /api/audio/trim - Cut/trim audio segments
POST /api/audio/merge - Combine multiple audio files
POST /api/audio/volume - Adjust volume levels
POST /api/audio/fade - Add fade in/out effects
POST /api/audio/mix - Mix multiple audio tracks
POST /api/audio/effects - Apply audio effects
POST /api/audio/normalize - Normalize audio levels
GET /api/audio/metadata/:id - Get audio file information
GET /api/audio/waveform/:id - Generate waveform data

text

## Image API Endpoints
POST /api/image/convert - Convert image formats
POST /api/image/resize - Resize images
POST /api/image/crop - Crop images to specific dimensions
POST /api/image/rotate - Rotate images
POST /api/image/effects - Apply image filters
POST /api/image/optimize - Optimize image file size
POST /api/image/watermark - Add watermarks to images
POST /api/batch/images - Process multiple images
GET /api/image/metadata/:id - Get image information

text

## Batch Processing Endpoints
POST /api/batch/process - Process multiple files with same operation
GET /api/batch/status/:id - Check batch processing status
GET /api/batch/queue - Get current processing queue
DELETE /api/batch/cancel/:id - Cancel batch operation
GET /api/batch/history - Get processing history

text

## Utility Endpoints
GET /api/health - Server health status
GET /api/formats/supported - List all supported formats
GET /api/download/:filename - Download processed files
DELETE /api/cleanup/:filename - Manually cleanup temp files
GET /api/usage/stats - Get usage statistics
POST /api/upload/chunk - Chunked file upload

text

## Request Structure Standards
- Use consistent parameter names across similar endpoints
- Always include file validation before processing
- Support both single file and batch operations where applicable
- Include progress tracking for long-running operations

## Response Structure Template
// Success Response
{
"success": true,
"data": {
"filename": "converted_1234567890.mp4",
"downloadUrl": "/api/download/converted_1234567890.mp4",
"fileSize": "15.2 MB",
"processingTime": "23.5s",
"originalFormat": "avi",
"outputFormat": "mp4"
},
"message": "Video converted successfully",
"timestamp": "2025-09-19T04:37:00.000Z"
}

// Error Response
{
"success": false,
"error": "Invalid file format",
"message": "Only video files (MP4, AVI, MOV, WebM) are supported",
"code": "INVALID_FORMAT",
"timestamp": "2025-09-19T04:37:00.000Z"
}

// Progress Response (for long operations)
{
"success": true,
"data": {
"progress": 45,
"status": "processing",
"estimatedTimeRemaining": "30s",
"currentOperation": "encoding video"
},
"message": "Processing in progress"
}

text

## Parameter Standards
- Use consistent naming: `format`, `quality`, `width`, `height`
- Support both form data and JSON payloads
- Include optional parameters with sensible defaults
- Validate all parameters before processing

## File Handling Rules
- Accept files via multipart/form-data
- Generate unique output filenames: `{operation}_{timestamp}.{format}`
- Store files in operation-specific directories
- Auto-cleanup files after download or timeout
- Support resume for large file uploads

## Error Code Standards
400 BAD_REQUEST - Invalid parameters or file
401 UNAUTHORIZED - Authentication required
403 FORBIDDEN - Operation not allowed
404 NOT_FOUND - File or endpoint not found
413 FILE_TOO_LARGE - File exceeds size limits
415 UNSUPPORTED_FORMAT - File format not supported
429 RATE_LIMIT_EXCEEDED - Too many requests
500 PROCESSING_ERROR - FFmpeg processing failed
503 SERVICE_UNAVAILABLE - Server overloaded

text

## Middleware Requirements
- CORS enabled for frontend communication
- File upload middleware with size limits
- Request logging and monitoring
- Rate limiting per IP address
- Input validation and sanitization
- Error handling and cleanup

## Quality Presets
// Video Quality Presets
const VIDEO_PRESETS = {
'low': { width: 640, height: 360, bitrate: '500k' },
'medium': { width: 1280, height: 720, bitrate: '1000k' },
'high': { width: 1920, height: 1080, bitrate: '2000k' },
'ultra': { width: 3840, height: 2160, bitrate: '5000k' }
};

// Audio Quality Presets
const AUDIO_PRESETS = {
'low': { bitrate: '96k', sampleRate: '22050' },
'medium': { bitrate: '128k', sampleRate: '44100' },
'high': { bitrate: '192k', sampleRate: '44100' },
'lossless': { bitrate: '320k', sampleRate: '48000' }
};

text

## Security Headers
- Always return appropriate CORS headers
- Set content-type headers correctly
- Include security headers for file downloads
- Validate file signatures, not just extensions
- Sanitize all user input parameters
.kilocode/rules/endpoint_naming.md
text
# Endpoint Naming Conventions

## URL Structure
- Base: `/api/{version}/{resource}/{action}`
- Example: `/api/v1/video/convert`
- Use lowercase with hyphens for multi-word actions
- Keep URLs short but descriptive

## Action Names
- `convert` - Change format or encoding
- `compress` - Reduce file size
- `resize` - Change dimensions
- `trim` - Cut or extract segments
- `merge` - Combine multiple files
- `extract` - Pull out specific content
- `effects` - Apply filters or modifications
- `metadata` - Get file information

## Resource Grouping
- `/video/*` - All video operations
- `/audio/*` - All audio operations  
- `/image/*` - All image operations
- `/batch/*` - Multi-file operations
- `/upload/*` - File upload utilities
- `/download/*` - File retrieval

## Parameter Consistency
- Use same parameter names across endpoints
- `format` for output format
- `quality` for quality presets
- `width`, `height` for dimensions
- `startTime`, `duration` for timing
- `volume` for audio levels