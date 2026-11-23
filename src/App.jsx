export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Hello, Tailwind!</h2>
        <p className="text-slate-600 mt-2">
          You just styled a React component without writing a single line of custom CSS.
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition">
          Click Me
        </button>
      </div>
    </div>
  );
}
