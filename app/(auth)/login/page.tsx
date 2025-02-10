export default function Login() {
  return (
    <form className="p-5 rounded bg-white shadow-md">
      <div className="flex flex-col mb-3">
        <label htmlFor="">User name</label>
        <input
          className="p-2 border-b border-slate-300"
          type="text"
          placeholder="user name"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="">password</label>
        <input
          className="p-2 border-b border-slate-300"
          type="password"
          placeholder="password"
        />
      </div>
      <button className="text-white rounded p-2 bg-blue-500">Login</button>
    </form>
  );
}
