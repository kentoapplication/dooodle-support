export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center`}>
        <span className="text-white text-lg">🎨</span>
      </div>
      <h1 className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
        dooodle
      </h1>
    </div>
  );
}
