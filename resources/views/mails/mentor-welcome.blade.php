<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Fomoedge</title>
</head>

<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; color: #333;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #ddd;">
                    <tr>
                        <!-- Logo Section -->
                        <td style="background-color: #FFC93B; text-align: center; padding: 20px;">
                            <img src="{{ asset('images/logo.jpeg') }}" alt="FOMOEdge Logo" style="display: block; width: 200px; height: 100px;">
                        </td>
                    </tr>
                    <tr>
                        <!-- Welcome Message -->
                        <td style="padding: 20px;">
                            <h1 style="color: #4CAF50; text-align: center; margin: 0;">Hello, {{ $user->full_name }}!</h1>
                            <p style="font-size: 16px; line-height: 1.5; font-weight: bold; font-style: italic; text-align: center; margin: 20px 0;">
                                Thank you for joining Fomoedge! We’re excited to have you on board.
                            </p>
                            <p style="font-size: 16px; line-height: 1.5; margin: 20px 0;">
                                To begin with, let me tell you a bit about what makes Fomoedge special.
                            </p>
                            <h2 style="color: #4CAF50; font-size: 20px; margin: 20px 0;">Why Choose Fomoedge?</h2>
                            <h3 style="font-size: 18px; margin: 20px 0;">For Learners:</h3>
                            <p style="font-size: 16px; font-style: italic; line-height: 1.5; margin: 20px 0;">
                                Fomoedge is a mentorship platform, connecting learners with experts. It is built on a simple belief: In today’s complex world, everyone deserves personalized guidance to navigate their personal and professional journey. We know that real growth comes from learning directly from those who’ve walked the path before you.
                            </p>
                            <p style="font-size: 16px; font-weight: bold; font-style: italic; margin: 20px 0;">
                                Thank you for applying to join Fomoedge.
                            </p>
                            <p style="font-size: 16px; font-style: italic; margin: 20px 0;">
                                Your account has been successfully created.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <!-- Footer -->
                        <td style="padding: 20px; text-align: center;">
                            <p style="font-size: 16px; margin: 0;">Warm regards,</p>
                            <p style="font-size: 16px; margin: 0;">Admin</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
