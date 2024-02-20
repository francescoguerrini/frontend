import { Link } from "@nextui-org/react";

const LogoutPage = () => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg m-auto p-8">
      <div className="flex flex-col gap-48">
        <div>Logout effettuato con successo</div>
        <div>
          Rieffettua il <Link href="/login/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
