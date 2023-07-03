## Nomeoclatura de metodos

ex: 
```ts
  export interface CheckInsRepository {
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
    findManyByUserId(userId: string): Promise<CheckIn[]>
    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  }
```

- findBy: retorna um único registro
- findMany: retornar vários registros (uma lista)

## Nomeoclatura dos use cases

get: retorna um único registro
fetch: reornar vários registros (uma lista)