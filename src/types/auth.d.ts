// src/types/auth.d.ts

import { authClient } from '@/lib/auth-client';

declare global {
  type TSession = typeof authClient.$Infer.Session;

  type TCurrentUser = TSession['user'];
}

export {};
