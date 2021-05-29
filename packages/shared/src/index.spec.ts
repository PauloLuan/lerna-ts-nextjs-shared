import { mindingo } from '.'

describe('mindingo', () => {
  it('should return the test string', async () => {
    expect(mindingo()).toBe('Veio do shared')
  })
})
