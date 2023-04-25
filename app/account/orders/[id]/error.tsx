'use client';
import ErrorDynamic from '@/src/components/utils/ErrorDynamic';

export default function Error({ error }: { error: Error }) {
  return (
    <ErrorDynamic
      errorMsg={`${error.message}`}
      urlRedirect={'/account/orders'}
    />
  );
}
