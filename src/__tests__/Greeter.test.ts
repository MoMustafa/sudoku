import { generator } from '../index'

describe('generator', () => {
  it('should run', () => {
    expect(generator('world')).toBe('Hello world')
  })
})
