import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Fetch User Check-in History Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Gym 01',
      description: null,
      phone: null,
      latitude: -22.0789939,
      longitude: -46.5718404
    })

    await gymsRepository.create({
      title: 'Gym 02',
      description: null,
      phone: null,
      latitude: -22.0789939,
      longitude: -46.5718404
    })

    const { gyms } = await sut.execute({
      query: '01',
      page: 1
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Gym 01' })])
  })

  it('should be able to fetch paginated check-in history', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Gym ${i}`,
        description: null,
        phone: null,
        latitude: -22.0789939,
        longitude: -46.5718404
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 2
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Gym 21' }),
      expect.objectContaining({ title: 'Gym 22' })
    ])
  })
})
