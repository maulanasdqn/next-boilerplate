{ pkgs, ... }:

{
  packages = with pkgs; [
    bun
    nodejs_21

    (writeScriptBin "helpme" ''
      __usage="
      👋 Welcome to NeoSiakad development environment. 🚀
      If you see this message, it means your are inside the Nix shell ❄️.

      [Info]===============================================================>

      NodeJS Version: v${nodejs_21.version}
      Bun Version: v${bun.version}
      Typescript Version: v${typescript.version} 

      Command available:
        - start:            start project in production ( need to run build first  ) 🛹
        - build:            build project for production
        - dev:              start development server
        - start-postgres:   start postgres-db
        - story-dev:        start storybook in development
        - story-build:      build storybook
        - db-gen:           generate drizzle migration
        - db-push:          push migration
        - db-seed:          seed database
        - db-studio:        open drizzle studio
        - helpme:           show this messages

      Repository:
        - https://github.com/maulanasdqn/neo-siakad
      [Info]===============================================================>
      "
      echo "$__usage"
    '')

    (writeScriptBin "dev" ''
      bun dev
    '')

    (writeScriptBin "build" ''
      bun run build
    '')

    (writeScriptBin "start" ''
      node .next/standalone/server.js
    '')

    (writeScriptBin "story-dev" ''
      bun story:dev
    '')

    (writeScriptBin "story-build" ''
      bun story:build
    '')

    (writeScriptBin "db-generate" ''
      bun db:gen
    '')

    (writeScriptBin "db-push" ''
      bun db:push
    '')

    (writeScriptBin "db-seed" ''
      bun db:seed
    '')

    (writeScriptBin "db-studio" ''
      bun db:studio
    '')

  ];

  enterShell = ''
    helpme
  '';

  languages = {
    typescript.enable = true;
    nix.enable = true;
  };

  dotenv.enable = true;

}
