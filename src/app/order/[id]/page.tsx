import { SingleOrderPageComponent } from '@/components/Profile';
import PageLayout from '@/components/Layout/PageLayout';

export default function OrderPage({ params }: any) {
	return (
		<PageLayout>
			<SingleOrderPageComponent orderId={params.id} />
		</PageLayout>
	);
}
