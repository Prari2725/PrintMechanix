import { User } from '../types/auth';

export const isAdmin = (user: User | null): boolean => {
  return user?.role === 'ADMIN';
};

export const isUser = (user: User | null): boolean => {
  return user?.role === 'USER';
}; 