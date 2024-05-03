import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/tokens/base.css";
import { Theme } from "@radix-ui/themes";
import appStylesHref from "./app.css?url";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme
          accentColor="indigo"
          panelBackground="translucent"
          grayColor="gray"
          scaling="100%"
          radius="full"
        >
          {children}
        </Theme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
