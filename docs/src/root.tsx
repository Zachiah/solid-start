// @refresh reload
import { Links, Meta, Outlet, Scripts } from "solid-start/components";
import "./root.css";
import "./code.css";
export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
