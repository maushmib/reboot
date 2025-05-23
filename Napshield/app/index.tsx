import { useEffect } from 'react';
import { useRouter, useNavigationContainerRef } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Delay the navigation to ensure router is ready
    const timeout = setTimeout(() => {
      router.replace('/appNamePage');
    }, 100); // small delay

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
