import { ID } from './common';
/**
 * Types for dashboard components
 */

/**
 * Dashboard interface
 */
export interface Dashboard {
  id: ID;
  name: string;
  widgets: Widget[];
}

/**
 * Widget interface
 */
export interface Widget {
  id: ID;
  type: 'chart' | 'table' | 'stat';
  data: any;
}

/**
 * Project data structure
 */
export interface DashboardProject {
  id: string;
  name: string;
  status: string;
  completion: number;
}

/**
 * Market data point structure
 */
export interface MarketData {
  month: string;
  value: number;
  market: number;
}

/**
 * Channel data point structure
 */
export interface ChannelData {
  name: string;
  value: number;
}

/**
 * Change indicator for metrics
 */
export interface ChangeIndicator {
  value: number;
  direction: 'up' | 'down' | 'neutral';
}
