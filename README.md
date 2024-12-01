# brg.mn
> Redirects brg.mn URLs to my various social media profiles

This is an Express server written with TypeScript that redirects domains to
my social media accounts.

**Before you say "it would be better/faster/more efficient to accomplish this with X/Y/Z other technology":**

I realize there are many solutions to this problem. I took this approach because I wanted to:
- Get some experience using TypeScript in Express; previously I've always used JS
- Try out fly.io as a hosting platform; this seemed like a very straightforward first project
- Have full control over redirects, including:
  - Dynamic parameters, for example `https://brg.mn/git/:repo` will link
    directly to the repository URL on my GitHub specified by the `:repo` param
  - Different routing tables for domain names when necessary (in the future)
- Have the ability to log and analyze traffic (in the future)
