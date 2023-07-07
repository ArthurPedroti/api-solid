- Crie uma pasta com o nome do pacote do padrão "vitest-environment-"
- Entre na pastar e execute "npm init -y"
- Crie um arquivo `prisma-test-environment.ts`
```ts
import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setup')

    return {
      teardown() {
        console.log('Teardown')
      }
    }
  }
}
```

- Ajuste o `package.json` conforme o exemplo abaixo:
```json
{
  "name": "vitest-environment-prisma",
  "version": "1.0.0",
  "description": "",
  "main": "prisma-test-environment.ts",
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

- Ajuste o `vite.config.ts`
```ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']]
  }
})
```

- Va até a pasta do pacote "vitest-environment-" e execute o comando `npm link`
- Volte a pasta raiz e execute o comando `npm link vitest-environment-`
