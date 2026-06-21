export const styles = {

    container: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "95%",
        padding: 2,
    },

    header: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" },
        justifyContent: "space-between",
        gap: 1,
    },

    score: {
        width: "100%",
        minHeight: "220px",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    scoreEmpty: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "text.secondary",
        pointerEvents: "none",
        px: 2,
    },
    
    svg: {
        width: "100%",
        "& svg": {
            display: "block",
            margin: "auto",
        },
    },

    title: {
        fontWeight: 700,
    },
};
