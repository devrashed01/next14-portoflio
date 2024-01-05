import { LoginModal } from "@/features/auth/login.modal";

export default function Home() {
  return (
    <main className="flex text-7xl min-h-screen flex-col items-center justify-between p-24">
      <h2>hi there</h2>
      <h2 className="font-secondary">hi there</h2>

      <LoginModal />
    </main>
  );
}
