'use client';
import { VStack, Text, EmptyState } from '@chakra-ui/react';
import CartItemCard from './CartItemCard';
import { useCart } from '../contexts/CartContext';
import { LuShoppingCart } from 'react-icons/lu';

const CartItems = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <VStack gap={4} align="stretch">
      {cart.length === 0 ? (
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <LuShoppingCart />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>Your cart is empty</EmptyState.Title>
              <EmptyState.Description>
                Explore our products and add items to your cart
              </EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      ) : (
        cart.map(item => (
          <CartItemCard
            key={`${item.id}-${item.size}`}
            item={item}
            onRemove={() => removeFromCart(item.id, item.size)}
            onUpdateQuantity={(qty: number) =>
              updateQuantity(item.id, item.size, qty)
            }
          />
        ))
      )}
    </VStack>
  );
};

export default CartItems;
