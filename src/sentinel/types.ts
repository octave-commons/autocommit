export interface SentinelEvent {
  type: 'fs' | 'synthetic';
  path: string;
  relative?: string | null;
  watcher?: {
    key: string;
    path: string;
    'abs-path': string;
  };
  rule?: {
    id: string;
    on: string;
    glob: string;
  };
  ts: number;
}

export interface SentinelClientOptions {
  url?: string;
  topics?: string[];
  logger?: {
    info: (msg: string, ...args: any[]) => void;
    error: (msg: string, ...args: any[]) => void;
    warn: (msg: string, ...args: any[]) => void;
    debug: (msg: string, ...args: any[]) => void;
  };
  reconnect?: boolean;
  mock?: boolean;
}

export interface SentinelClient {
  subscribe(fn: (event: SentinelEvent) => void): void;
  close(): Promise<void>;
}
