
import React from "react";
import * as LucideIcons from "lucide-react";

type IconProps = {
  name: string;
  fallback?: string;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  color,
  className = "",
}) => {
  // @ts-ignore - dynamic import
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback];

  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
