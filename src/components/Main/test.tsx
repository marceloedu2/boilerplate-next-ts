import Main from '.'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
  it('should render the heading', function () {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
  })
})
