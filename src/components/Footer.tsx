import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-16 px-4 sm:px-6 border-t border-border">
    <div className="max-w-[1200px] mx-auto text-center">
      <p className="heading-stencil text-sm text-copper mb-2">
        BUILT BY SAM CATCHES UP
      </p>
      <p className="text-muted-custom text-sm mb-1">@samcatchesup</p>
      <p className="text-muted-custom text-xs mb-6">
        AI explained through analogies that stick.
      </p>
      <div className="flex justify-center mb-6">
        <a
          href="https://www.linkedin.com/in/s-samarth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-custom hover:text-copper transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p className="text-muted-custom text-[10px] font-mono max-w-md mx-auto leading-relaxed">
        No AI subscriptions were harmed in the making of this website. Several context windows were, however, absolutely destroyed.
      </p>
    </div>
  </footer>
);

export default Footer;
