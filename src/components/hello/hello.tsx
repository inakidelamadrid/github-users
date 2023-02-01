import React from 'react';

interface HelloProps {
  greeting: string;
  name: string;
}

export function Hello({ greeting, name }:HelloProps) {
  return <h1 className="text-cyan-200">{greeting}, {name}!</h1>;
}