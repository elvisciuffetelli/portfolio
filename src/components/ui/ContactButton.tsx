import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Mail } from 'lucide-react';
import { getExternalLinkProps } from '@/utils/data';

interface ContactButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  type?: 'email' | 'download' | 'external';
}

export function ContactButton({ 
  href, 
  children, 
  variant = 'default',
  type = 'external'
}: ContactButtonProps) {
  const isEmail = type === 'email' || href.startsWith('mailto:');
  const isDownload = type === 'download';
  const isExternal = !isEmail && !isDownload;

  const getIcon = () => {
    if (isEmail) return <Mail className="w-4 h-4" />;
    if (isDownload) return <Download className="w-4 h-4" />;
    if (isExternal) return <ExternalLink className="w-4 h-4" />;
    return null;
  };

  const linkProps = isExternal ? getExternalLinkProps() : {};

  return (
    <Button
      variant={variant}
      asChild
      className="gap-2"
    >
      <a 
        href={href}
        {...linkProps}
        {...(isDownload && { download: true })}
      >
        {getIcon()}
        {children}
      </a>
    </Button>
  );
}