export default function Logout({user, handleLogout}) {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      {user}
    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log Out
      </button>
    </div>
  </form>
    </div>
  )
}
