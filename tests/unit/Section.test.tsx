import { render, screen } from '@testing-library/react';
import { Section } from '@/components/layout/Section';

describe('Section Component', () => {
  it('renders with title and children', () => {
    render(
      <Section title="Test Section">
        <p>Test content</p>
      </Section>
    );

    expect(screen.getByRole('heading', { name: 'Test Section' })).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom id when provided', () => {
    render(
      <Section id="test-section" title="Test Section">
        <p>Test content</p>
      </Section>
    );

    const section = document.querySelector('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });

  it('applies custom className when provided', () => {
    render(
      <Section title="Test Section" className="custom-class">
        <p>Test content</p>
      </Section>
    );

    const section = document.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  it('has proper semantic structure', () => {
    render(
      <Section title="Test Section">
        <p>Test content</p>
      </Section>
    );

    const section = document.querySelector('section');
    const heading = screen.getByRole('heading', { level: 2 });
    
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});