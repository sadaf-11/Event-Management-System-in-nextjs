'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('/api/events', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      router.push('/');
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Failed to create event');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
        
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Create Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="text-sm text-gray-300">Event Title</label>
            <input
              name="title"
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              name="description"
              rows={3}
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Overview */}
          <div>
            <label className="text-sm text-gray-300">Overview</label>
            <textarea
              name="overview"
              rows={4}
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm text-gray-300">Event Banner</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="mt-2 w-full text-white"
              required
            />
          </div>

          {/* Grid inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-300">Venue</label>
              <input
                name="venue"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Location</label>
              <input
                name="location"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Time</label>
              <input
                type="time"
                name="time"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Mode</label>
              <select
                name="mode"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              >
                <option value="">Select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-300">Audience</label>
              <input
                name="audience"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
                required
              />
            </div>
          </div>

          {/* Agenda + Tags */}
          <div>
            <label className="text-sm text-gray-300">
              Agenda (comma separated)
            </label>
            <input
              name="agenda"
              placeholder="Intro, Workshop, Q&A"
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
              required
            />
          </div>
          <div>
          <label className="text-sm text-gray-300">
              Organizer
            </label>
            <input
              name="organizer"
              placeholder="Organizer details"
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Tags (comma separated)
            </label>
            <input
              name="tags"
              placeholder="React, Next.js, MongoDB"
              className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-white"
              required
            />
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>

        </form>
      </div>
    </section>
  );
}