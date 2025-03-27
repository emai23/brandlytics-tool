/**
 * User-related type definitions
 */
import { BaseEntity } from './common';

/**
 * User roles within the application
 */
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

/**
 * User interface representing a registered user
 */
export interface User extends BaseEntity {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  lastLogin?: string;
  isActive: boolean;
  profileImage?: string;
}

/**
 * User registration data
 */
export interface UserRegistration {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

/**
 * User login credentials
 */
export interface UserCredentials {
  username: string;
  password: string;
}

/**
 * Authentication response with token
 */
export interface AuthResponse {
  user: User;
  token: string;
  expiresAt: string;
}

/**
 * Type guard to check if an object is a User
 */
export function isUser(obj: any): obj is User {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.username === 'string' &&
    typeof obj.email === 'string' &&
    typeof obj.role === 'string' &&
    typeof obj.isActive === 'boolean'
  );
}
