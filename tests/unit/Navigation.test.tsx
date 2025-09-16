import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '@/components/layout/Navigation';

// Mock scrollIntoView
const mockScrollIntoView = jest.fn();
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
});

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: mockScrollTo,
});

describe('Navigation Component', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
    mockScrollTo.mockClear();
  });

  it('renders the logo/home button', () => {
    render(<Navigation />);
    expect(screen.getByRole('button', { name: 'Elvis Ciuffetelli' })).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navigation />);
    
    const desktopNav = screen.getByText('About').closest('div');
    expect(desktopNav).toHaveClass('hidden', 'md:flex');
    
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument();
  });

  it('shows mobile menu button', () => {
    render(<Navigation />);
    const mobileButton = screen.getByLabelText('Toggle navigation menu');
    expect(mobileButton).toBeInTheDocument();
    expect(mobileButton).toHaveClass('md:hidden');
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navigation />);
    
    const mobileButton = screen.getByLabelText('Toggle navigation menu');
    
    // Mobile menu should not be visible initially
    expect(screen.queryByText('About')).not.toBeVisible();
    
    // Click to open menu
    fireEvent.click(mobileButton);
    
    // Now mobile menu items should be visible
    const mobileMenuSection = document.querySelector('.md\\:hidden .border-t');
    expect(mobileMenuSection).toBeInTheDocument();
  });

  it('scrolls to top when logo is clicked', () => {
    render(<Navigation />);
    
    const logoButton = screen.getByRole('button', { name: 'Elvis Ciuffetelli' });
    fireEvent.click(logoButton);
    
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('scrolls to section when navigation link is clicked', () => {
    // Mock querySelector to return a mock element
    const mockElement = { scrollIntoView: mockScrollIntoView };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);
    
    render(<Navigation />);
    
    const aboutButton = screen.getByRole('button', { name: 'About' });
    fireEvent.click(aboutButton);
    
    expect(document.querySelector).toHaveBeenCalledWith('#about');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    
    // Restore mock
    (document.querySelector as jest.Mock).mockRestore();
  });

  it('accepts custom sections prop', () => {
    const customSections = [
      { id: 'custom', label: 'Custom Section', href: '#custom' }
    ];
    
    render(<Navigation sections={customSections} />);
    
    expect(screen.getByRole('button', { name: 'Custom Section' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'About' })).not.toBeInTheDocument();
  });
});