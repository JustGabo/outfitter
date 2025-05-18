import { supabase } from '@/lib/supabase';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    const handleDeepLink = async () => {
      const { access_token, refresh_token, type } = params;
      
      if (type === 'recovery') {
        // TODO: Handle password recovery
        router.replace('/+not-found');
        return;
      }

      if (access_token && refresh_token) {
        const { error } = await supabase.auth.setSession({
          access_token: access_token as string,
          refresh_token: refresh_token as string,
        });

        if (!error) {
          router.replace('/(tabs)');
        }
      }
    };

    handleDeepLink();
  }, [params]);

  return null;
} 