interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'default' | 'gray' | 'white';
  className?: string;
}

export function Section({ 
  children, 
  id, 
  background = 'default',
  className = '' 
}: SectionProps) {
  const backgroundClasses = {
    default: '',
    gray: 'bg-gray-50',
    white: 'bg-white'
  };

  return (
    <section 
      id={id} 
      className={`py-20 px-4 ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
