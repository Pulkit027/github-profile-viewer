function ProfileCard({ userData }) {
  return (
    <div className="bg-white p-6 rounded-xl mt-6 w-80">

      <img
        src={userData.avatar_url}
        alt={userData.name}
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold text-center mt-4">
        {userData.name}
      </h2>

      <p className="text-center text-gray-600">
        {userData.bio}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          Followers: {userData.followers}
        </p>

        <p>
          Following: {userData.following}
        </p>

        <p>
          Public Repos: {userData.public_repos}
        </p>

      </div>

    </div>
  )
}

export default ProfileCard