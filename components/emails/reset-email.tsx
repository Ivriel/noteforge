import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
    username: string;
    resetUrl: string;
}

const PasswordResetEmail = ({ username, resetUrl }: PasswordResetEmailProps) => {

    return (
        <Html lang="en" dir="ltr">
            <Head />
            <Preview>Reset your password - secure link expires in 1 hour</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section>
                            <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[32px]">
                                Password Reset Request
                            </Heading>
                        </Section>

                        {/* Main Content */}
                        <Section>
                            <Text className="text-[16px] text-gray-700 mb-[24px]">
                                Hi {username},
                            </Text>

                            <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                                We received a request to reset the password for your account. If you made this request, click the button below to create a new password.
                            </Text>

                            {/* Reset Button */}
                            <Section className="text-center mb-[32px]">
                                <Button
                                    href={resetUrl}
                                    className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                                >
                                    Reset My Password
                                </Button>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                                If the button above doesn&apos;t work, you can also copy and paste the following link into your browser:
                            </Text>

                            <Text className="text-[14px] text-blue-600 mb-[32px] break-all">
                                <Link href={resetUrl} className="text-blue-600 underline">
                                    {resetUrl}
                                </Link>
                            </Text>

                            {/* Security Information */}
                            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[24px] mb-[32px]">
                                <Text className="text-[14px] text-yellow-800 mb-[12px] font-semibold">
                                    🔒 Security Notice
                                </Text>
                                <Text className="text-[14px] text-yellow-700 mb-[8px] leading-[20px]">
                                    • This reset link will expire in 1 hour for your security
                                </Text>
                                <Text className="text-[14px] text-yellow-700 mb-[8px] leading-[20px]">
                                    • The link can only be used once
                                </Text>
                                <Text className="text-[14px] text-yellow-700 leading-[20px]">
                                    • If you didn&apos;t request this reset, please ignore this email
                                </Text>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                                If you didn&apos;t request a password reset, you can safely ignore this email. Your password will remain unchanged, and no further action is required.
                            </Text>

                            <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                                If you&apos;re having trouble with your account or didn&apos;t request this reset, please contact our support team immediately.
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="border-t border-gray-200 pt-[32px] mt-[40px]">
                            <Text className="text-[12px] text-gray-500 text-center mb-[16px] m-0">
                                This email was sent to {username}
                            </Text>

                            <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                                © {new Date().getFullYear()} Your Company Name. All rights reserved.
                            </Text>

                            <Text className="text-[12px] text-gray-500 text-center m-0">
                                123 Business Street, Suite 100, Jakarta, Indonesia 12345
                            </Text>

                            <Text className="text-[12px] text-gray-500 text-center mt-[16px] m-0">
                                <Link href="#" className="text-gray-500 underline mr-[16px]">Contact Support</Link>
                                <Link href="#" className="text-gray-500 underline">Privacy Policy</Link>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};


export default PasswordResetEmail;