import React, { useEffect, useState } from 'react';
import './App.scss';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { calc, Deposit } from './calc-deposit';

function App() {
    const [money, setMoney] = useState<number>(10000);
    const [totalMonths, setTotalMonths] = useState<number>(120);
    const [depositDuration, setDepositDuration] = useState<number>(3);
    const [percentPerYear, setPercentPerYear] = useState<number>(10.8);
    const [deposits, setDeposits] = useState<Deposit[]>([]);

    useEffect(() => {
        const deposits: Deposit[] = calc(money, percentPerYear, depositDuration, totalMonths);
        setDeposits(deposits);
    });

    useEffect(() => {
        const deposits: Deposit[] = calc(money, percentPerYear, depositDuration, totalMonths);
        setDeposits(deposits);
    }, [money])

  return (
      <Box
          sx={{
              display: 'grid',
              gap: 2,
              maxWidth: 960,
              margin: '64px auto',
          }}
      >
          <Box
              component="form"
              autoComplete="off"
              sx={{
                  display: 'grid',
                  gridTemplateColumns: {sm: '1fr 1fr 1fr 1fr'},
                  gap: 2,
              }}
        >
              <TextField
                  type="number"
                  variant="outlined"
                  label="Monthly payment"
                  size="small"
                  fullWidth
                  value={money}
                  onChange={(e) => setMoney(Number(e.target.value))}
              />

              <TextField
                  type="number"
                  variant="outlined"
                  label="Total months"
                  size="small"
                  fullWidth
                  value={totalMonths}
                  onChange={(e) => setTotalMonths(Number(e.target.value))}
              />

              <TextField
                  type="number"
                  variant="outlined"
                  label="Deposit duration"
                  size="small"
                  fullWidth
                  inputProps={
                      {
                          min: 1,
                          max: 24,
                      }
                  }
                  value={depositDuration}
                  onChange={(e) => Number(e.target.value) < 24 && setDepositDuration(Number(e.target.value))}
              />

              <TextField
                  label="Percent per year"
                  type="number"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={percentPerYear}
                  onChange={(e) => setPercentPerYear(Number(e.target.value))}
              />
          </Box>

          <Table stickyHeader sx={{minWidth: 650}} size="small">
                  <TableHead>
                      <TableRow>
                          <TableCell>Month</TableCell>
                          <TableCell align="right">Investment</TableCell>
                          <TableCell align="right">Interests</TableCell>
                          <TableCell align="right">Closed Deposit</TableCell>
                          <TableCell align="right">Interest</TableCell>
                          <TableCell align="right">Total</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {deposits.map((d, i) => (
                          <TableRow key={d.month}>
                              <TableCell>{d.month}</TableCell>
                              <TableCell align="right">{d.investment.toFixed(2)}</TableCell>
                              <TableCell align="right">
                                  {d.interests.map((i) => i.toFixed(2)).join(' + ')}
                              </TableCell>
                              <TableCell align="right">
                                  {
                                      d.closedDeposit
                                          ? <div>{d.closedDeposit.toFixed(2)}</div>
                                          : null
                                  }
                              </TableCell>
                              <TableCell align="right">{d.interest.toFixed(2)}</TableCell>
                              <TableCell align="right">{d.total.toFixed(2)}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
      </Box>
  );
}

export default App;
