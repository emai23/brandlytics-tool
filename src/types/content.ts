/**
 * Content-related type definitions
 */
import { BaseEntity, Status } from './common';

/**
 * Content format types
 */
export enum ContentFormat {
  BLOG_POST = 'blog_post',
  SOCIAL_MEDIA = 'social_media',
  EMAIL = 'email',
  VIDEO_SCRIPT = 'video_script',
  INFOGRAPHIC = 'infographic',
  PODCAST_SCRIPT = 'podcast_script',
  PRESS_RELEASE = 'press_release',
  CASE_STUDY = 'case_study',
  WHITEPAPER = 'whitepaper'
}

/**
 * Social media platform types
 */
export enum SocialPlatform {
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  LINKEDIN = 'linkedin',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
  PINTEREST = 'pinterest'
}

/**
 * Content item interface
 */
export interface ContentItem extends BaseEntity {
  projectId: string;
  title: string;
  format: ContentFormat;
  content: string;
  summary?: string;
  keywords: string[];
  targetAudience: string;
  platforms?: SocialPlatform[];
  status: Status;
  scheduledDate?: string;
  publishedDate?: string;
  author?: string;
  attachments?: ContentAttachment[];
  metrics?: ContentMetrics;
}

/**
 * Content template interface
 */
export interface ContentTemplate extends BaseEntity {
  name: string;
  description: string;
  format: ContentFormat;
  structure: string;
  placeholders: string[];
  example: string;
  tags: string[];
}

/**
 * Content calendar interface
 */
export interface ContentCalendar extends BaseEntity {
  projectId: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  items: ContentCalendarItem[];
}

/**
 * Calendar item interface
 */
export interface ContentCalendarItem {
  id: string;
  contentId?: string;
  title: string;
  description?: string;
  format: ContentFormat;
  date: string;
  status: Status;
  assignedTo?: string;
  platforms?: SocialPlatform[];
}

/**
 * Content attachment interface
 */
export interface ContentAttachment {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document' | 'audio';
  url: string;
  size?: number;
  thumbnailUrl?: string;
}

/**
 * Content metrics interface
 */
export interface ContentMetrics {
  views?: number;
  likes?: number;
  shares?: number;
  comments?: number;
  clicks?: number;
  conversions?: number;
  engagement?: number;
  lastUpdated?: string;
}

/**
 * Content creation request
 */
export interface ContentCreationRequest {
  projectId: string;
  title: string;
  format: ContentFormat;
  targetAudience: string;
  keywords: string[];
  platforms?: SocialPlatform[];
  tone?: string;
  length?: number;
  instructions?: string;
}

/**
 * Content generation result
 */
export interface ContentGenerationResult {
  originalRequest: ContentCreationRequest;
  generatedContent: string;
  alternativeVersions?: string[];
  suggestedHashtags?: string[];
  suggestedImages?: string[];
  generatedAt: string;
}

/**
 * Type guard to check if an object is a ContentItem
 */
export function isContentItem(obj: any): obj is ContentItem {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.projectId === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.format === 'string' &&
    typeof obj.content === 'string' &&
    Array.isArray(obj.keywords) &&
    typeof obj.targetAudience === 'string' &&
    typeof obj.status === 'string'
  );
}

/**
 * Type guard to check if an object is a ContentTemplate
 */
export function isContentTemplate(obj: any): obj is ContentTemplate {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.format === 'string' &&
    typeof obj.structure === 'string' &&
    Array.isArray(obj.placeholders) &&
    typeof obj.example === 'string' &&
    Array.isArray(obj.tags)
  );
}
