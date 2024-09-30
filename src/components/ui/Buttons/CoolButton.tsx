"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  type?: string;
  email?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ children, href }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.15, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-custom text-center px-3 border-b text-cyan-700 hover:text-cyan-600 font-bold border-cyan-700 hover:border-cyan-600 overflow-hidden"
    >
      <Link
        href={href}
        className="cursor-custom flex items-center justify-center h-full"
      >
        {children}
      </Link>
    </motion.li>
  );
};

const CircleButton: React.FC<NavButtonProps> = ({
  children,
  href,
  target,
  email,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `mailto:${href}`;
  };

  return (
    <motion.li
      whileHover={{ scale: 1.15, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-custom rounded-full w-10 h-10 flex justify-center items-center p-1 border border-cyan-800"
    >
      {email ? (
        <span onClick={handleClick} className="cursor-custom text-cyan-800">
          {children}
        </span>
      ) : (
        <Link
          href={href}
          target={target}
          className="cursor-custom text-cyan-800"
        >
          {children}
        </Link>
      )}
    </motion.li>
  );
};

const SquareButton: React.FC<NavButtonProps> = ({ children, href }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-custom text-center py-2 px-3 mb-3 border text-cyan-700 hover:text-cyan-600 font-bold border-cyan-700 hover:border-cyan-600 overflow-hidden"
    >
      <Link
        href={href}
        className="cursor-custom flex items-center justify-center h-full"
      >
        {children}
      </Link>
    </motion.li>
  );
};

const PlainButton: React.FC<NavButtonProps> = ({ children, href, target }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-custom text-center py-2 px-3 mb-3 text-cyan-700 hover:text-cyan-600 font-bold overflow-hidden"
    >
      <Link
        href={href}
        target={target}
        className="cursor-custom flex items-center justify-center h-full"
      >
        {children}
      </Link>
    </motion.li>
  );
};

const CoolButton: React.FC<NavButtonProps> = (props) => {
  const { type = "square" } = props;
  if (type === "circle") {
    return <CircleButton {...props} />;
  }
  if (type === "underlined") {
    return <NavButton {...props} />;
  }
  if (type === "plain") {
    return <PlainButton {...props} />;
  }
  return <SquareButton {...props} />;
};

export { CoolButton };
