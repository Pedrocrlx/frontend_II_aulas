import '@testing-library/jest-dom'; // Importa os matchers como .toBeInTheDocument
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
// MUDEI AQUI: Em vez de @jest/globals, usamos bun:test
import { describe, it, expect } from 'bun:test'

describe('Navbar Component', () => {
  it('renderiza os links de navegação corretamente', () => {
    render(<Navbar />)

    // O uso de expressões regulares (/home/i) é ótimo!
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /fetch data/i })).toBeInTheDocument()
  })
})