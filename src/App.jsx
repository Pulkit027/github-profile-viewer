import { useState } from "react"

function App() {

  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(null)

  async function fetchGitHubUser() {

    const response = await fetch(
      `https://api.github.com/users/${username}`
    )

    const data = await response.json()

    console.log(data)

    setUserData(data)
  }

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

        <button
          onClick={fetchGitHubUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>

      </div>

      {
        userData && (
          <div className="text-white mt-6">
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </div>
        )
      }

    </div>
  )
}

export default App