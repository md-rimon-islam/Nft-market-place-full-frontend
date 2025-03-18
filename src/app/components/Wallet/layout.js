
import React from 'react';

export default function ConnectWalletLayout({ children }) {
  return (
    <div>
      <main className="relative overflow-hidden">
        {children}
      </main>
      
    </div>
  );
}