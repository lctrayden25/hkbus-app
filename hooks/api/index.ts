import { useEffect, useState } from "react";

export const useKmbRouteList = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const fetchKmbRoutes = async () => {
		setLoading(true);
		const response = await fetch(
			"https://data.etabus.gov.hk/v1/transport/kmb/route"
		);
		const data = await response.json();
		setData(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchKmbRoutes();
	}, []);

	return { data, loading };
};
