import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const CustomizedProductTables = ({ header, rows, onDeleteProduct, onEdit }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {header.map((column, index) => (
                            <StyledTableCell key={index} align="left">
                                {column}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            <StyledTableCell align="left">{row._id}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.description}</StyledTableCell>
                            <StyledTableCell align="left">{row.price}</StyledTableCell>
                            <StyledTableCell align="left">{row.categoryId.name}</StyledTableCell>
                            <StyledTableCell align="left">
                                        <Button variant="contained" color="secondary" onClick={() => onDeleteProduct(row._id)}>
                                            Eliminar
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={() => onEdit(row._id)}>
                                            Editar
                                        </Button>
                                    </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const CustomizedOrderList = ({ header, rows, onDeleteProduct, onDeleteOrder, onEdit }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {header.map((column, index) => (
                            <StyledTableCell key={index} align="left">
                                {column}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((order) => (
                        <React.Fragment key={order._id}>
                            <StyledTableRow>{order._id}
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Button variant="contained" color="secondary" onClick={() => onDeleteOrder(order._id)}>
                                        Eliminar
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                            {order.products.map((product, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="left"> </StyledTableCell>
                                    <StyledTableCell align="left">{product.productId._id}</StyledTableCell>
                                    <StyledTableCell align="left">{product.productId.name}</StyledTableCell>
                                    <StyledTableCell align="left">{product.productId.description}</StyledTableCell>
                                    <StyledTableCell align="left">{product.quantity}</StyledTableCell>
                                    <StyledTableCell align="left">{product.productId.price}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Button variant="contained" color="secondary" onClick={() => onDeleteProduct(order._id, product.productId._id)}>
                                            Eliminar
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={() => onEdit(product.productId._id)}>
                                            Editar
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            <StyledTableRow>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                                <StyledTableCell align="right">Total:</StyledTableCell>
                                <StyledTableCell align="left">{order.totalprice}</StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                            </StyledTableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const CustomizedOrderTables = ({ header, rows }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {header.map((column, index) => (
                            <StyledTableCell key={index} align="left">
                                {column}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.products.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            <StyledTableCell align="left">{row.productId.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.productId.description}</StyledTableCell>
                            <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                            <StyledTableCell align="left">{row.productId.price}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                    <StyledTableRow>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">Total:</StyledTableCell>
                        <StyledTableCell align="left">{rows.totalprice}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>

            </Table>
        </TableContainer>
    );
};

const CustomizedCategoryList = ({ header, rows, onDeleteCategory, onEdit }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {header.map((column, index) => (
                            <StyledTableCell key={index} align="left">
                                {column}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            <StyledTableCell align="left">{row._id}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">
                                        <Button variant="contained" color="secondary" onClick={() => onDeleteCategory(row._id)}>
                                            Eliminar
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={() => onEdit(row._id)}>
                                            Editar
                                        </Button>
                                    </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default {
    CustomizedProductTables,
    CustomizedOrderTables,
    CustomizedOrderList,
    CustomizedCategoryList
};