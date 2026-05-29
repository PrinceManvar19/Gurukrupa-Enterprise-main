'use client'

const WHATSAPP_URL = 'https://wa.me/918141840404'

function WhatsAppIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.04 3.2A12.72 12.72 0 0 0 5.08 22.36L3.2 29.2l7-1.84a12.68 12.68 0 0 0 5.84 1.48h.01A12.82 12.82 0 0 0 28.8 16.08 12.78 12.78 0 0 0 16.04 3.2Zm0 23.48h-.01a10.58 10.58 0 0 1-5.4-1.48l-.39-.23-4.15 1.09 1.11-4.04-.26-.42a10.56 10.56 0 1 1 9.1 5.08Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}

export function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#1ebe57] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      href={WHATSAPP_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-colors duration-300 group-hover:bg-[#1ebe57]">
        <WhatsAppIcon />
      </span>
    </a>
  )
}
