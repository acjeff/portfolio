import React from 'react';
import { IconType } from 'react-icons';

// react-icons' typings clash with React 18's JSX types, so call the icon as a function
const Icon = ({ icon }: { icon: IconType }) => <>{icon({ 'aria-hidden': true })}</>;

export default Icon;
