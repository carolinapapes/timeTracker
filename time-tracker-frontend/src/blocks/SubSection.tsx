import React from 'react';

export default function SubSection({
    title,
    cta,
    cols,
    children,
    className = '',
}: {
    title?: string;
    cta?: React.ReactElement;
    cols?: number;
    children: React.ReactNode;
    className?: string;
}) {
    const colClasses: Record<number, string> = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
    };

    const columns = cols ? `grid grid-cols-1 ${colClasses[cols] || ''} gap-6` : '';
    return (
        <section className={`mt-10 w-full ${className}`}>
            <div className="flex justify-between">
                {title ? (
                    <p className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance mb-4">
                        {title}
                    </p>
                ) : null}
                {cta ? <div className="flex items-center">{cta}</div> : null}
            </div>
            <div className={columns}>{children}</div>
        </section>
    );
}
