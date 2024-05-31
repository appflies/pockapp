import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="password-reset" options={{ headerShown: false }} />
            <Stack.Screen name="password-updated" options={{ headerShown: false }} />
        </Stack>
    );
}