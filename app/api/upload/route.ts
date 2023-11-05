import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';

// Use-case: uploading images for blog posts
export async function POST(request: Request): Promise<NextResponse> {
    const body = (await request.json()) as HandleUploadBody;
    let blobUrl;

    try {
        const jsonResponse = await handleUpload({
            body,
            request,
            onBeforeGenerateToken: async (
                pathname: string,
                clientPayload?: string,
            ) => {
                // Generate a client token for the browser to upload the file
                // ⚠️ Authenticate and authorize users before generating the token.
                // Otherwise, you're allowing anonymous uploads.

                // ⚠️ When using the clientPayload feature, make sure to valide it
                // otherwise this could introduce security issues for your app
                // like allowing users to modify other users' posts

                return {
                    allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'], // optional, default to all content types
                    // maximumSizeInBytes: number, optional, default to 500MB
                    // validUntil: number, optional, timestamp in ms, by default now + 30s (30,000)
                    // addRandomSuffix: boolean, optional, allows to disable or enable random suffixes (defaults to `true`)
                    // cacheControlMaxAge: number, optional, a duration in seconds to configure the edge and browser caches.
                    tokenPayload: JSON.stringify({
                        // optional, sent to your server on upload completion
                        // you could pass a user id from auth, or a value from clientPayload
                    }),
                };
            },
            onUploadCompleted: async ({ blob, tokenPayload }) => {
                // Get notified of client upload completion
                // ⚠️ This will not work on `localhost` websites,
                // Use ngrok or similar to get the full upload flow

                console.log('blob upload completed', blob, tokenPayload);

                blobUrl = blob.url;

                try {
                    // Run any logic after the file upload completed,
                    // If you've already validated the user and authorization prior, you can
                    // safely update your database
                } catch (error) {
                    throw new Error('Could not update post');
                }
            },
        });

        return NextResponse.json({
            blobUrl,
        });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 }, // The webhook will retry 5 times waiting for a 200
        );
    }
}
