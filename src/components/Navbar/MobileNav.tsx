"use client"
import React, { useState } from 'react'
import {
  Drawer,
  Portal,
  CloseButton,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import Link from 'next/link' // or 'react-router-dom' if not using Next.js
import PrimaryButton from '../reusable/PrimaryButton'
import { navData } from '../data/navData'

// export const navData = [
//   { label: "SUMMER COLLECTIONS", href: "/summer-collections" },
//   { label: "NEW ARRIVALS", href: "/new-arrivals" },
//   { label: "MEN", href: "/men" },
//   { label: "WOMEN", href: "/women" },
//   { label: "KIDS", href: "/kids" },
//   { label: "REVIEWS", href: "/reviews" },
//   { label: "FOOTWEAR", href: "/footwear" },
//   { label: "ACCESSORIES", href: "/accessories" }
// ]

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="start">
      <Drawer.Trigger asChild>
       <PrimaryButton
          variant="outline"
          border="none"
          size="md"
          display={{ base: "inline-flex", lg: "none" }}
          aria-label="Open menu"
        >
          <HiMenu size={32} />
        </PrimaryButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxWidth="300px">
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              <VStack gap={4} align="stretch">
                {navData?.map(({ label, href }) => (
                  <ChakraLink
                    as={Link}
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    fontWeight="semibold"
                    fontSize="lg"
                  >
                    {label}
                  </ChakraLink>
                ))}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default MobileNav
