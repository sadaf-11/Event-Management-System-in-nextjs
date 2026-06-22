'use server';

import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
import { cacheLife } from 'next/cache';

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        'use cache';
  cacheLife('hours');
        await connectDB();
        const event = await Event.findOne({ slug });

        return await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean();
    } catch {
        return [];
    }
}