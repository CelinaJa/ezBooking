import React from 'react';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

export const Calendar = () => {
  const bookings = [
    {
      title: "Celina's dummy",
      startDate: '2020-09-08T10:30',
      endDate: '2020-09-08T11:30',
    },
    {
      title: "Celina's other dummy",
      startDate: '2020-09-08T15:15',
      endDate: '2020-09-08T18:30',
    },
  ];

  return (
    <Scheduler height={660} data={bookings}>
      <ViewState defaultCurrentViewName="Week" />

      <DayView startDayHour={7} endDayHour={24} />
      <WeekView startDayHour={7} endDayHour={24} />

      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />

      <Appointments />
    </Scheduler>
  );
};
