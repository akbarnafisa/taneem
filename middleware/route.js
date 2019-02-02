

export default function ({ app, store, redirect, route }) {
  const paymentId = store.state.order.paymentId;
  if (paymentId === null && (route.name === 'checkout-address-and-payment' || route.name === 'checkout-review')) {
    redirect('/cart');
  }

  if (route.name === 'checkout') {
    redirect('/cart');
  }

  if (route.name === 'collections') {
    redirect('/produk');
  }
}