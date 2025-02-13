import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`min-h-screen min-w-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
    >
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <p className="text-2xl font-bold">Avatar Generator</p>
        </div>
      </header>
      <main className="p-4 text-center">{children}</main>
    </div>
  );
};

export default Layout;
