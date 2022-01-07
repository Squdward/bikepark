export interface IBikeCards {
	frameSize: string;
	brand: string;
	image: string;
	name: string;
	price: string;
	id: string;
	addBike: (str: string) => void; 
	removeBikes: (str: string) => void; 
}