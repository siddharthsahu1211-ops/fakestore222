"use client";

import { useState } from "react";

interface ProductFormProps {
  initialData?: any;
  onSubmit: (formData: any) => Promise<void>;
  submitText: string;
}

export default function ProductForm({
  initialData,
  onSubmit,
  submitText,
}: ProductFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await onSubmit({
      title,
      price,
      description,
      thumbnail,
    });

    setLoading(false);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="w-full border border-gray-300 p-3 rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full border border-gray-300 p-3 rounded-lg"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Thumbnail URL"
        className="w-full border border-gray-300 p-3 rounded-lg"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full border border-gray-300 p-3 rounded-lg"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Saving..." : submitText}
      </button>
    </form>
  );
}