import type { FC } from "react";
import Partners from "./Partners";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-600 bg-background mt-20">
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 container mx-auto px-4 py-5">
        <Partners />
        <div className="text-muted-foreground">
          <div className="font-medium text-lg">Contact</div>
          <table className="text-sm">
            <tbody>
              <tr>
                <td className="text-left pr-2">Devnith</td>
                <td className="">—</td>
                <td className="text-left pl-2">
                  <a
                    href="tel:+94713116761"
                    className="text-muted-foreground transition-colors hover:text-primary font-mono"
                  >
                    +94 71 311 6761
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-left pr-2">Sajitha</td>
                <td className="">—</td>
                <td className="text-left pl-2">
                  <a
                    href="tel:+94769867887"
                    className="text-muted-foreground transition-colors hover:text-primary font-mono"
                  >
                    +94 76 986 7887
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} IEEE EMBS Student Branch Chapter. All rights
            reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/embsuom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ieeeembs.uom/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.017 0C8.396 0 7.981.013 6.773.06 5.565.107 4.739.273 4.019.644c-.748.29-1.383.68-2.016 1.312-.632.634-1.022 1.27-1.311 2.018C.301 4.695.136 5.52.088 6.729c-.047 1.208-.06 1.623-.06 5.244s.013 4.036.06 5.244c.048 1.209.213 2.034.584 2.755.29.748.68 1.384 1.312 2.016.634.632 1.27 1.022 2.018 1.311.721.371 1.546.537 2.755.584 1.208.047 1.623.06 5.244.06s4.036-.013 5.244-.06c1.209-.047 2.034-.213 2.755-.584.748-.29 1.384-.68 2.016-1.312.632-.634 1.022-1.27 1.311-2.018.371-.721.537-1.546.584-2.755.047-1.208.06-1.623.06-5.244s-.013-4.036-.06-5.244c-.047-1.209-.213-2.034-.584-2.755-.29-.748-.68-1.384-1.312-2.016C20.403 1.321 19.767.931 19.019.642 18.298.271 17.473.105 16.264.058 15.056.011 14.641-.002 12.017-.002zm0 2.165c3.361 0 3.76.014 5.088.06 1.228.056 1.895.26 2.341.433.588.229 1.008.502 1.448.943.441.44.714.86.943 1.448.172.446.377 1.113.433 2.341.046 1.328.06 1.727.06 5.088s-.014 3.76-.06 5.088c-.056 1.228-.261 1.895-.433 2.341-.229.588-.502 1.008-.943 1.448-.44.441-.86.714-1.448.943-.446.172-1.113.377-2.341.433-1.328.046-1.727.06-5.088.06s-3.76-.014-5.088-.06c-1.228-.056-1.895-.261-2.341-.433-.588-.229-1.008-.502-1.448-.943-.441-.44-.714-.86-.943-1.448-.172-.446-.377-1.113-.433-2.341-.046-1.328-.06-1.727-.06-5.088s.014-3.76.06-5.088c.056-1.228.261-1.895.433-2.341.229-.588.502-1.008.943-1.448.44-.441.86-.714 1.448-.943.446-.172 1.113-.377 2.341-.433 1.328-.046 1.727-.06 5.088-.06z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://lk.linkedin.com/company/ieee-embs-at-uom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
