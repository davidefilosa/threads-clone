import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-purple-500">
      Threads <UserButton afterSignOutUrl="/" />
    </div>
  );
}
