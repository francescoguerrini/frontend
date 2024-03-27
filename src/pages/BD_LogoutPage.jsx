import { Link } from "@nextui-org/react";

const LogoutPage = () => {
  return (
    <div className="h-[80%] w-[80%] flex items-center justify-center bg-white rounded-lg shadow-lg m-auto p-8">
      <div className="flex flex-col gap-12">
        <div className="w-[60%]">Sei attualmente disconnesso</div>
        <div>
          Rieffettua il <Link href="/login/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
