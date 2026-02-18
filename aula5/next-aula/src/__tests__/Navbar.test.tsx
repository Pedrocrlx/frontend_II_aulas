import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import { describe, it, expect } from 'bun:test'

describe('Navbar Component', () => {
  it('renderiza os links de navegação corretamente', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /fetch data/i })).toBeInTheDocument()
  })
})