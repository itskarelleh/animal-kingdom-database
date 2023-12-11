import { Person } from '@/models';
import { Permit, UserRead } from 'permitio';

export type UserProfile = UserRead & {
    attributes: {
        phoneNumber: string;
        dateOfBirth: string;
    }
};

const permit = new Permit({
    pdp: process.env.PERMIT_PDP_URL,
    apiUrl: process.env.PERMIT_API_URL || 'https://api.permit.io',
});

const permitProfile = (user: UserProfile | undefined): Person => {
    return {
        firstName: user?.first_name || '',
        lastName: user?.last_name || '',
        email: user?.email || '',
        phoneNumber: user?.attributes?.phoneNumber || '',
        dateOfBirth: user?.attributes?.dateOfBirth || '',
        id: user?.key || '',
        relationship: '',
    };
}

export { permit, permitProfile };