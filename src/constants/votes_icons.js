import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import MoodSharpIcon from '@mui/icons-material/MoodSharp';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';
import SentimentVeryDissatisfiedSharpIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp';

const VOTES_ICON = {
    10: SentimentVerySatisfiedSharpIcon,
    9: SentimentVerySatisfiedSharpIcon,
    8: MoodSharpIcon,
    7: SentimentSatisfiedSharpIcon,
    6: SentimentSatisfiedSharpIcon,
    5: SentimentDissatisfiedSharpIcon,
    4: SentimentDissatisfiedSharpIcon,
    3: SentimentDissatisfiedSharpIcon,
    2: SentimentVeryDissatisfiedSharpIcon,
    1: SentimentVeryDissatisfiedSharpIcon,
    0: SentimentVeryDissatisfiedSharpIcon
}

const RenderVoteIcon = ({ vote }) => {
    const Icon = VOTES_ICON[vote.toFixed(0)]
    return(
        <Icon sx={{ color: `votes.${vote.toFixed(0)}` }}/>
    )
}

export default RenderVoteIcon;
