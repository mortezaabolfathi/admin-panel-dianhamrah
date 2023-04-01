// export const customStyles = {
//   headRow:{
//     style : {
//       border: 'none',
//     }
//   },
//   headCells : {
//     style : {
//       color: '#2021124',
//       fontSize : '14px',
//       fontWeight: "bold",
//       backgroundColor: 'rgb(54,170,240)',
//     },
//     rows : {
//       highlightOnHoverStyle : {
//         backgroundColor: 'rgb(30, 24, 244)',
//         borderBottomColor:"#ff2fff",
//         borderRadius:"25px",
//         outline: '1px solid #FFFFFF',
//       },
//       pagination: {
//         style: {
//         		border: 'none',
//         	},
//     	},
//     }
//   }
// }
export const customStyles = (
  singleCol="",
  lgUp="",
  gap="",
  odd="",
  hiddenHeader="",
  cellPx=""
) => {
  return {
    table: {
      style: {
        backgroundColor: "#f5f5f5",
        fontSize: "12px!important",
        height: "100%",
      },
    },
    rows: {
      style: {
        display: singleCol && !lgUp && "inline-block",
        borderBottomWidth: "0!important",
        fontFamily: "iranyekanBold",
        fontSize: "12px!important",
        marginBottom: !lgUp && gap,
        "&:nth-of-type(odd)": {
          backgroundColor: lgUp || odd ? "#FFFBF9" : "#fff",
        },
        "&:hover": {
          border: "0.5px solid #389DF0 !important",
        },
      },
    },

    headRow: {
      style: {
        display: hiddenHeader && !lgUp && "none",
        borderBottomWidth: "0",
        marginBottom: "16px",
        backgroundColor: lgUp ? "white" : "transparent",
        color: lgUp ? "#A6A6A6" : "#000",
      },
    },
    headCells: {
      style: {
        marginBottom: "12px",
      },
    },
    cells: {
      style: {
        padding: !lgUp && cellPx,
      },
    },
    pagination: {
      style: {
        backgroundColor: "transparent",
        borderTopWidth: "0",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0",
      },
      pageButtonsStyle: {
        width: "unset",
        height: "unset",
        padding: "4px",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "0.4s",
        color: "#F47920",
        fill: "#F47920",

        backgroundColor: "transparent",

        "&:hover:not(:disabled)": {
          backgroundColor: "#F47920",
        },
        "&:focus": {
          outline: "none",
          backgroundColor: "#F47920",
          fill: "white",
          borderRadius: "6px",
        },
      },
    },
    noData: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      },
    },
    progress: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      },
    },
  };
};
