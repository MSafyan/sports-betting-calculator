import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TableChartIcon from "@material-ui/icons/TableChart";
import FunctionsIcon from "@material-ui/icons/Functions";
import DutchingCalculator from "./DutchingCalculator";
import DutchingTable from "./DutchingTable";
import headerStyle from "../../../jss/Header";

const useStyles = makeStyles(theme => ({ ...headerStyle(theme) }));

const Dutching = () => {
	const classes = useStyles();
	const [mode, setMode] = useState("calculator");

	const toggleMode = () => {
		if (mode === "calculator") setMode("table");
		else if (mode === "table") setMode("calculator");
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">
						Dutching
						<IconButton color="inherit" aria-label="Toggle" edge="start" onClick={toggleMode}>
							{mode === "calculator" ? <TableChartIcon /> : <FunctionsIcon />}
						</IconButton>
					</Typography>
				</Grid>
				{mode === "calculator" ? <DutchingCalculator /> : <DutchingTable />}
			</Grid>
		</div>
	);
};

export default Dutching;