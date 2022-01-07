export interface IBikeCards {
	frameSize: string;
	brand: string;
	image: string;
	name: string;
	price: string;
	id: string;
	available: boolean;
	addBike: (str: string) => void; 
	removeBikes: (str: string) => void; 
}