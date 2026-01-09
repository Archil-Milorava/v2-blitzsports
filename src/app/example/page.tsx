import { createArticles } from "@/features/Articles/actions"

const ExampleForm = () => {
  return (
    <div className="p-10 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Article Test</h2>
      
      <form action={createArticles} className="flex flex-col gap-4">
        {/* Title */}
        <input 
          name="title" 
          placeholder="Article Title" 
          className="border p-2 rounded text-black" 
          required 
        />

        {/* Category */}
        <input 
          name="category" 
          placeholder="Category (e.g. Politics)" 
          className="border p-2 rounded text-black" 
        />

        {/* Badge Selector */}
        <select name="badge" className="border p-2 rounded text-black">
          <option value="NEWS">NEWS</option>
          <option value="HISTORY">HISTORY</option>
        </select>

        {/* Content */}
        <textarea 
          name="content" 
          placeholder="Write content here..." 
          className="border p-2 rounded text-black h-32" 
          required 
        />

        {/* Temporary Author ID Input */}
        <input 
          name="authorId" 
          placeholder="Paste a User ID from your DB" 
          className="border p-2 rounded text-black text-xs" 
          required 
        />

        <button 
          type="submit" 
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Article
        </button>
      </form>
    </div>
  )
}

export default ExampleForm