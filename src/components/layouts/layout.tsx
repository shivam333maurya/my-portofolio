import Link from "next/link";
import React from "react";

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <nav className="py-3 px-4">
          <ul className="flex gap-4 justify-end">
            {[{ title: "Home", path: "", elId: "#home" }].map((key) => (
              <li key={`${key.title}}`} className="text-gray-300 ">
                <Link href={key.path || key.elId}>{key.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { Layout };
