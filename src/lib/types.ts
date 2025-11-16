export interface ResourceConfig {
  cpu: number;
  ram: number;
  storage: number;
  gpu: number;
}

export interface UserData {
  id: string;
  username: string;
  group: string;
  permissions: string;
  sessions: number;
  uptime: number;
}

export interface NotificationConfig {
  enabled: boolean;
  telegramId: string;
}

export interface RemoteConfig {
  ip: string;
  port: number;
  username: string;
}

export interface AppConfig {
  resources: ResourceConfig;
  users: UserData[];
  notification: NotificationConfig;
  remote: RemoteConfig;
}

export type DashboardView = 'resources' | 'users' | 'notifications' | 'remote' | 'users-chart';

export const DEFAULT_CONFIG: AppConfig = {
  resources: { cpu: 25, ram: 50, storage: 70, gpu: 10 },
  users: [
    { id: 'user-001', username: 'admin', group: 'sudo', permissions: 'RWX', sessions: 5, uptime: 120 },
    { id: 'user-002', username: 'guest', group: 'users', permissions: 'R--', sessions: 2, uptime: 30 }
  ],
  notification: { enabled: false, telegramId: '' },
  remote: { ip: '', port: 22, username: '' }
};
