import { NextPage } from "next";
import Layout from "Layout/Layout";
import { Order } from "components/Pages/Order";

const OrderPage: NextPage = () => {
	return (
		<Layout>
				<Order/>
		</Layout>
	);
};

export default OrderPage;