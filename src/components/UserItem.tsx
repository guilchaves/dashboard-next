"use client";
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div
        className="avatar rounded-full min-h-9 min-w-9 bg-orange-500 text-white font-[700] flex items-center 
        justify-center"
      >
        <p>GD</p>
      </div>
      <div className="grow">
        <p className="text-base font-bold">Guilherme Chaves</p>
        <p className="text-sm text-neutral-500">gchaves.guilherme@gmail.com</p>
      </div>
    </div>
  );
}
