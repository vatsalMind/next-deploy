import React from 'react';
import {Pagination, PaginationItem} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // '@global':{
  //   ".MuiPagination-ul":{
  //    "& $li":{
  //      "&:first-child>button":{
  //         border: "none",
  //      },
  //      "&:last-child>button":{
  //        border: "none",
  //      }
  //    }
  //   }
  // },
  ul: {
    "& $li": {
      "&:first-child>button": {
        border: "none",
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }
      },
      "&:last-child>button": {
        border: "none",
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }
      }
    }
  },
  root: {
    color: theme.palette.type === "dark" ? theme.palette.common.white : theme.palette.grey[500],
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Nunito",
    fontStyle: "normal",
  },
  selected: {
    color: '#FFFFFF'
  },
  outline: {
    border: `1px solid #E5E5E5`
  },
  icon: {
    border: 0,
  },
  ellipsis: {
    border: `1px solid #E5E5E5`,
    padding: "4px 0",
    borderRadius: "3px",
  }
}));

const CustomPagination = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Pagination classes={{ul: classes.ul}} count={props.count} variant="outlined" shape="rounded" page={props.page}
                  onChange={props.onChange}
                  getItemAriaLabel={(type, page, selected) => {
                    if (type === "previous") {
                      return 'previous'
                    } else if (type === "next") {
                      return 'next'
                    } else {
                      return page
                    }
                  }}
                  renderItem={(item) => <PaginationItem {...item}
                                                        classes={{
                                                          root: classes.root,
                                                          selected: classes.selected,
                                                          outlined: classes.outline,
                                                          ellipsis: classes.ellipsis
                                                        }}/>}
      />
    </div>
  );
};

export default CustomPagination;
