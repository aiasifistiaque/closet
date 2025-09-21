export interface UserProfile {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: {
		street: string;
		city: string;
		postalCode: string;
		country: string;
	};
}

export interface ProfilePageComponentProps {
	user?: UserProfile;
	onUpdateProfile?: (profile: UserProfile) => void;
	onChangePassword?: () => void;
	onViewOrders?: () => void;
}
