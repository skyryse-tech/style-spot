import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  async onModuleInit() {
    this.client = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

    this.client.on('error', (err) => console.error('Redis Client Error', err));
    await this.client.connect();
    console.log('✅ Connected to Redis');
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  getClient(): RedisClientType {
    return this.client;
  }

  async acquireLock(key: string, ttl: number = 5000): Promise<boolean> {
    const result = await this.client.set(key, '1', {
      NX: true,
      PX: ttl,
    });
    return result === 'OK';
  }

  async releaseLock(key: string): Promise<void> {
    await this.client.del(key);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    if (ttl) {
      await this.client.setEx(key, ttl, value);
    } else {
      await this.client.set(key, value);
    }
  }
}
