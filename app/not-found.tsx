import "./globals.css";
import { Link, Button } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div className="notFoundBG bg min-h-screen flex flex-col justify-center items-center leading-10">
      <h2 className="text-4xl">Oops!</h2>
      <p className="pb-8">We could not find the page you were looking for.</p>
      <Button
        as={Link}
        href="/"
        className="bg-blue-600 text-white shadow-lg"
        size="lg"
      >
        Back to home
      </Button>
    </div>
  );
}
