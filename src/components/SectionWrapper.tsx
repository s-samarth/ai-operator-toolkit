import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <section id={id} className={`py-24 md:py-32 lg:py-40 px-4 sm:px-6 ${className}`}>
    <div className="max-w-[1200px] mx-auto">
      {children}
    </div>
  </section>
);

export default SectionWrapper;
