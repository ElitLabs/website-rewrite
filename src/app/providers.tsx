'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/shadcn/ui/sonner';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute='class'>
			<Toaster />
			{children}
		</ThemeProvider>
	);
}
