# step by step 

## 1 - init blank Fresh project by `PowerShell`
> 
> ```PowerShell
> run -Ar jsr:@fresh/init@2.0.0-alpha.16
> ```
>
> ### deno tasks
>
> - ` deno task check ` => `deno fmt --check && deno lint && deno check **/*.ts && deno check **/*.tsx`
> - ` deno task dev ` => `deno run -A --watch=static/,routes/ dev.ts`
> - ` deno task build ` => `deno run -A dev.ts build`
> - ` deno task start ` => `deno run -A main.ts`
> - ` deno task update ` => `deno run -A -r jsr:@fresh/update .`
> ---

