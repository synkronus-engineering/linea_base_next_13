import ItemNotFound from '@/src/components/utils/dynamic-404';

export default function NotFound() {
  return (
    <ItemNotFound
      title={`Order Does not Exist!`}
      urlRedirect="/account/orders"
    />
  );
}
