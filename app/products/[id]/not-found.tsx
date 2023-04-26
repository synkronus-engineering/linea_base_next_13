import ItemNotFound from '@/src/components/utils/dynamic-404';

export default function NotFound() {
  return (
    <ItemNotFound title={`Product Does not Exist!`} urlRedirect="/products" />
  );
}
