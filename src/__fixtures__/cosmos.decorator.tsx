import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function CosmosDecorator({ children }:Props) {
  return <div className="py-8 px-4 bg-white h-screen">{children}</div>
};