import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'

import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { teacherList,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    scheduleClass,
    message,
    setMessage } = useIndex();

  return (

    <div>aa
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List
          teachers={teacherList}
          onSelect={(teacher) => setSelectedTeacher(teacher)}></List>
      </Box >

      <Dialog
        onClose={() => setSelectedTeacher(null)}
        open={selectedTeacher !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}></TextField>

          </Grid>
          <Grid item xs={12}>
            <TextField
              label="e-mail"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}></TextField>
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
          <Button onClick={() => scheduleClass()}>Schedule</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={message}
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage("")}></Snackbar>
    </div>
  )
}

export default Home
