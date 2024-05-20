'use client'

import React from 'react'
import {Button} from "@/components/ui/button";

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return (
    <Button variant={"destructive"}
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </Button>
  );
}
