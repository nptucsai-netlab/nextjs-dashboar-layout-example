import { ComponentProps } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { AsideNav, asideNav } from './_navList';

export function AsideItem(props: AsideNav) {
  const { Before, After, name, href } = props;

  if (href)
    return (
      <Link
        key={name}
        href={href}
        className={clsx('btn btn-neutral justify-start flex-nowrap gap-x-4')}
      >
        {Before && <Before className="text-xl" />}
        {name}
        {After && <After />}
      </Link>
    );
  else
    return (
      <span className="mt-3 mb-1 badge w-full">
        {Before && <Before />}
        {name}
        {After && <After />}
      </span>
    );
}

export default function Aside(props: ComponentProps<'aside'>) {
  return (
    <aside
      className={clsx(
        props.className,
        'h-[calc(100dvh-64px)] bg-neutral',
        'transition-all during-100',
        'origin-left overflow-x-hidden',
        'max-md:fixed z-30'
      )}
    >
      <div className="p-5 w-full whitespace-nowrap grid">
        {asideNav.map((n) => (
          <AsideItem key={n.name} {...n} />
        ))}
      </div>
    </aside>
  );
}
