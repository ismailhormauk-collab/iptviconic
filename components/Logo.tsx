import Image from "next/image";

export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/branding/iptv-iconic-logo.png"
      alt="IPTV Iconic"
      width={2084}
      height={755}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
