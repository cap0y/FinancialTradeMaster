import { users, messages, downloads, type User, type InsertUser, type Message, type InsertMessage, type Download, type InsertDownload } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Message methods
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  
  // Download tracking methods
  trackDownload(download: InsertDownload): Promise<Download>;
  getDownloadStats(): Promise<{ ios: number, android: number }>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Message methods
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db
      .insert(messages)
      .values(message)
      .returning();
    return newMessage;
  }
  
  async getMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(messages.createdAt);
  }
  
  // Download tracking methods
  async trackDownload(download: InsertDownload): Promise<Download> {
    const [newDownload] = await db
      .insert(downloads)
      .values(download)
      .returning();
    return newDownload;
  }
  
  async getDownloadStats(): Promise<{ ios: number, android: number }> {
    const allDownloads = await db.select().from(downloads);
    
    const iosDownloads = allDownloads.filter(d => d.platform === 'ios').length;
    const androidDownloads = allDownloads.filter(d => d.platform === 'android').length;
    
    return {
      ios: iosDownloads,
      android: androidDownloads
    };
  }
}

export const storage = new DatabaseStorage();
