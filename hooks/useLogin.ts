import { useMutation } from '@tanstack/react-query';

import { supabase } from '~/utils/supabase';

type LoginProps = { email: string; password: string };

const login = async ({ email, password }: LoginProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error('Failed to login in with email and password');
  }

  return data;
};

export default function useLogin() {
  return useMutation({ mutationFn: login });
}
