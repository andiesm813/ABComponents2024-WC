import { FetchApi } from './FetchApi-service';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';

class DashboardDataService {
	public getTeamGrowthList = async (): Promise<TeamGrowthType[]> => {
		return await FetchApi.fetchApiResponse<TeamGrowthType[]>('https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2', []);
	}
}
export const dashboardDataService: DashboardDataService = new DashboardDataService();
