import { createTheme } from '@material-ui/core/styles';

export function pxToRem(value) {
    return `${value / 16}rem`;
}

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#383838",
                },
            }
        }
    },
    palette: {
        layout: {
            main: "#010713",
            light: "#2f2fb6",
            lighter: "#313b46",
            unselected: "#ffffff",
            selected: "#55a5ef"
        },
        grey: {
            light: "rgba(124,124,124,0.42)"
        },
        white: {
            main: "#ffffff"
        },
        primary: {
            main: "#191c24",
        },
        secondary: {
            main: "#198754",
            opacity: "rgba(25,135,84,0.5)"
        },
        background: {
            default: "#000000"
        },
        votes: {
            10: "rgb(0,255,8)",
            9: "rgb(0,255,8)",
            8: "rgb(0,255,8)",
            7: "rgb(0,255,8)",
            6: "rgb(0,255,8)",
            5: "#e5dd00",
            4: "rgba(243,112,0,0.65)",
            3: "rgba(243,112,0,0.49)",
            2: "#fd0000",
            1: "rgba(253,0,0)",
            0: "rgba(253,0,0)",
        }
    },
    typography: {
        fontFamily: 'Public Sans, sans-serif',
        sectionTitle: {
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: pxToRem(28),
        },
        movieTitle: {
            color: '#ffffff',
            fontWeight: 600,
            lineHeight: 1.5,
            fontSize: pxToRem(24),
        },
        resume: {
            color: '#baefef',
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: pxToRem(18),
        },
        genre: {
            color: '#a6a6a6',
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: pxToRem(16),
        },
        release: {
            color: '#d3d3d3',
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: pxToRem(14),
        },
        button: {
            fontWeight: 700,
            lineHeight: 24 / 14,
            fontSize: pxToRem(14),
            textTransform: 'capitalize',
        },
    },

});

export default theme;
