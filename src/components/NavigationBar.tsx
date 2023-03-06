import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../Routes';
import Button from '@mui/material/Button';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className={'mih-50 flex flex-row flex-wrap items-center justify-between'}>
        <div>
          {Object.entries(pathNames)?.map(([key, value], index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  navigate(value);
                }}
                className={'btn btn--primary capitalize'}
                variant="contained"
              >
                {key}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
