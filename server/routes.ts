import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertDownloadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate request body using Zod schema
      const result = insertMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: result.error.format() 
        });
      }
      
      // Save message to database
      const message = await storage.createMessage(result.data);
      
      res.status(201).json({ 
        message: "Message sent successfully", 
        data: message 
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // API route for app download tracking
  app.post('/api/download-tracking', async (req: Request, res: Response) => {
    try {
      // Get IP address and user agent from request
      const ipAddress = req.ip || req.socket.remoteAddress || "";
      const userAgent = req.headers["user-agent"] || "";
      const referrer = req.headers.referer || "";
      
      // Combine with request body
      const downloadData = {
        ...req.body,
        ipAddress,
        userAgent,
        referrer
      };
      
      // Validate using Zod schema
      const result = insertDownloadSchema.safeParse(downloadData);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: result.error.format() 
        });
      }
      
      // Track download in database
      const download = await storage.trackDownload(result.data);
      
      res.status(201).json({ 
        message: `Download tracked for ${download.platform}`,
        data: download
      });
    } catch (error) {
      console.error("Error in download tracking:", error);
      res.status(500).json({ message: "Failed to track download" });
    }
  });

  // API route to get download statistics
  app.get('/api/download-stats', async (_req: Request, res: Response) => {
    try {
      const stats = await storage.getDownloadStats();
      res.status(200).json({ data: stats });
    } catch (error) {
      console.error("Error getting download stats:", error);
      res.status(500).json({ message: "Failed to get download statistics" });
    }
  });

  // API route to get all contact messages
  app.get('/api/messages', async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getMessages();
      res.status(200).json({ data: messages });
    } catch (error) {
      console.error("Error getting messages:", error);
      res.status(500).json({ message: "Failed to get messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
