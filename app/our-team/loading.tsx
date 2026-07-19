export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="relative w-45 h-45">
        <div className="absolute inset-0 rounded-full border-[6px] border-purple-600 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-purple-500 font-semibold text-xl tracking-widest uppercase">
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
