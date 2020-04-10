import CampaignServices from './Campaign'
import CampaignHistoryServices from './CampaignHistory'
import ParticipationServices from './Participation'
import ProjectServices from './Project'

export default {
    ...CampaignHistoryServices,
    ...CampaignServices,
    ...ParticipationServices,
    ...ProjectServices
}