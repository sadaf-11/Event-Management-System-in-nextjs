import mongoose, { type Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // Cache the connection across hot reloads in development.
  var mongooseCache: MongooseCache | undefined;
}

const globalWithCache = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cached: MongooseCache = globalWithCache.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalWithCache.mongooseCache) {
  globalWithCache.mongooseCache = cached;
}

/**
 * Connect to MongoDB once and reuse the same connection.
 * This avoids creating multiple connections during development.
 */
async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise =mongoose
      .connect(MONGODB_URI!, {
        serverSelectionTimeoutMS: 5000,
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;
