import React from 'react';
import { CardContent } from './card-content';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({children}: CardProps) =><div>{children}</div>;
Card.Content = CardContent;

export {Card};