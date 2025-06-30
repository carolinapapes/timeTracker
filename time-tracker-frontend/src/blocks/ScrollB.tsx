import React from 'react';

// This component is used to create a scrollable area with rounded bottom corners that matches the card design.

export default function ScrollB({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-b-xl overflow-clip justify-self-end "
            style={{ margin: ' 0 -24px -24px -24px' }}
        >
            <div className="scroll-auto overflow-y-auto px-6 pb-3">{children}</div>
        </div>
    );
}
