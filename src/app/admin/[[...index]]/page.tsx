'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config'; // Adjust path if needed

export default function AdminPage() {
  return <NextStudio config={config} />;
}
