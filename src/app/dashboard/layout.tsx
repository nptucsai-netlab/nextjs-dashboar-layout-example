'use client';

import { useState, useEffect } from 'react';
import { useToggle } from 'react-use';
import { clsx } from 'clsx';
import type { LayoutBaseProp } from '@/interfaces/layoutProps';
import Nav from './_nav';
import Aside from './_Aside';

export default function DashboardLayout({ children }: LayoutBaseProp) {
  const [on, toggle] = useToggle(false);

  return (
    <body>
      <Nav on={on} toggle={toggle} />
      <div className="flex fixed top-[64px] w-full">
        <Aside className={clsx(on ? 'w-[240px]' : 'w-0')} />
        <div
          className={clsx(
            'md:hidden bg-base-300 w-screen fixed h-[calc(100dvh-64px)] z-20 opacity-40',
            { hidden: !on }
          )}
          onClick={() => toggle(false)}
        ></div>
        <main className="h-[calc(100dvh-64px)] w-full flex-1 z-10 overflow-auto">{children}</main>
      </div>
    </body>
  );
}
