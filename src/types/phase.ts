/**
 * Phase-related type definitions
 */
import { BaseEntity, Status } from './common';

/**
 * Phase types in the workflow
 */
export enum PhaseType {
  MARKET_RESEARCH = 'market_research',
  TARGET_AUDIENCE = 'target_audience',
  BRAND_DEVELOPMENT = 'brand_development',
  BRAND_STRATEGY = 'brand_strategy',
  CONTENT_STRATEGY = 'content_strategy'
}

/**
 * Phase interface representing a workflow phase
 */
export interface Phase extends BaseEntity {
  projectId: string;
  type: PhaseType;
  name: string;
  status: Status;
  progress: number; // 0-100
  startedAt?: string;
  completedAt?: string;
  results?: PhaseResults;
  order: number;
}

/**
 * Base interface for phase results
 */
export interface PhaseResults {
  summary: string;
  [key: string]: any;
}

/**
 * Market Research phase results
 */
export interface MarketResearchResults extends PhaseResults {
  trends: TrendData[];
  competitors: CompetitorData[];
  insights: MarketInsight[];
  keywords: string[];
}

/**
 * Target Audience phase results
 */
export interface TargetAudienceResults extends PhaseResults {
  segments: AudienceSegment[];
  personas: AudiencePersona[];
  demographics: DemographicData;
  psychographics: PsychographicData;
}

/**
 * Brand Development phase results
 */
export interface BrandDevelopmentResults extends PhaseResults {
  mission: string;
  vision: string;
  values: string[];
  brandName: string;
  colorPalette: string[];
  typography: TypographyChoices;
  toneOfVoice: string[];
}

/**
 * Brand Strategy phase results
 */
export interface BrandStrategyResults extends PhaseResults {
  uniqueValueProposition: string;
  positioning: string;
  marketingChannels: string[];
  keyMessages: KeyMessage[];
  brandGuide: BrandGuideSection[];
}

/**
 * Content Strategy phase results
 */
export interface ContentStrategyResults extends PhaseResults {
  contentGoals: string[];
  contentThemes: string[];
  contentTypes: ContentType[];
  contentCalendar: CalendarItem[];
  sampleContent: SampleContent[];
}

/**
 * Supporting types for phase results
 */
export interface TrendData {
  keyword: string;
  volume: number;
  growth: number;
  sentiment: number;
  date: string;
  relatedTerms?: string[];
}

export interface CompetitorData {
  name: string;
  strengths: string[];
  weaknesses: string[];
  marketShare?: number;
  positioning: string;
  channels: string[];
}

export interface MarketInsight {
  type: 'opportunity' | 'threat' | 'trend';
  description: string;
  confidence: number;
  source?: string;
}

export interface AudienceSegment {
  name: string;
  size: number;
  description: string;
  characteristics: string[];
  needs: string[];
  painPoints: string[];
}

export interface AudiencePersona {
  name: string;
  age: number;
  occupation: string;
  bio: string;
  goals: string[];
  challenges: string[];
  preferredChannels: string[];
  image?: string;
}

export interface DemographicData {
  ageRanges: {
    range: string;
    percentage: number;
  }[];
  genders: {
    gender: string;
    percentage: number;
  }[];
  locations: {
    location: string;
    percentage: number;
  }[];
  incomeRanges: {
    range: string;
    percentage: number;
  }[];
}

export interface PsychographicData {
  interests: string[];
  values: string[];
  lifestyles: string[];
  behaviors: string[];
}

export interface TypographyChoices {
  headingFont: string;
  bodyFont: string;
  accentFont?: string;
}

export interface KeyMessage {
  audience: string;
  message: string;
  channels: string[];
}

export interface BrandGuideSection {
  title: string;
  content: string;
  images?: string[];
}

export interface ContentType {
  type: string;
  description: string;
  channels: string[];
  frequency: string;
  goals: string[];
}

export interface CalendarItem {
  date: string;
  contentType: string;
  topic: string;
  channels: string[];
  status: Status;
}

export interface SampleContent {
  type: string;
  title: string;
  content: string;
  channels: string[];
  targetAudience: string;
}

/**
 * Type guard to check if an object is a Phase
 */
export function isPhase(obj: any): obj is Phase {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.projectId === 'string' &&
    typeof obj.type === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.status === 'string' &&
    typeof obj.progress === 'number' &&
    typeof obj.order === 'number'
  );
}
