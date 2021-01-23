import {makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme) => ({
        media: {
                height: 8,
                paddingTop: '56.25%', // 16:9
        },
        card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        },
        }));
