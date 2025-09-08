"use client"
import {
  Container,
  Grid,
} from "@chakra-ui/react";
import PageLayout from "../Layout/PageLayout";
import CheckoutSteps from "./CheckoutSteps";
import OrderSummary from "./OrderSummary";
import BillingForm from "./BillingForm";
import Coupon from "../reusable/Coupon";
const CheckoutPageComponent = () => {
 
  
  return (
    <PageLayout>
      <Container py={10}>
        <CheckoutSteps currentStep={1} />
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={8}
          alignItems="start"
        >
          <BillingForm />
          <OrderSummary />
        </Grid>
        <Coupon />
      </Container>
    </PageLayout>
  )
}

export default CheckoutPageComponent