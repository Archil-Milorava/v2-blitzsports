import { makePost } from './actions'
import { SubmitButton } from './SubmitButton'

export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-red-300 pt-20">
      <h1 className="mb-6 text-2xl font-bold">Create Test Article</h1>
      <form action={makePost} className="flex w-full max-w-md flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-black p-2"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          className="h-24 border border-black p-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border border-black p-2"
        />
        <select name="badge" className="border border-black p-2">
          <option value="NEWS">NEWS</option>
          <option value="HISTORY">HISTORY</option>
        </select>
        <SubmitButton />
      </form>
    </div>
  )
}
