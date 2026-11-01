import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
    return (
        <section style={{ border: '2px dashed #0070f3', padding: '16px', marginTop: '16px' }}>
            <h2>Раздел «Курсы» (Layout)</h2>
            {children}
        </section>
    );
}