import { useState } from "react"

function App() {

  const [username, setUsername] = useState("")

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">

      <h1 className="text-white text-4xl font-bold mb-6">
        GitHub Profile Viewer
      </h1>

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Search
        </button>

      </div>

      <p className="text-white mt-4">
        Username: {username}
      </p>

    </div>
  )
}

export default App