import type { FC } from "react";
import { useState } from "react";
//@ts-expect-error
import Lightbox from "react-datatrans-light-box";

interface Props {
  transactionId: string;
  onLoaded: () => void;
  onOpened: () => void;
  onCancelled: () => void;
}

const LightBox: FC<Props> = (props) => {
  const { transactionId, onLoaded, onOpened, onCancelled } = props;

  const onError = (data: any) => {
    console.log("Error:", data);
  };

  return (
    <Lightbox
      transactionId={transactionId}
      production={false}
      onLoaded={onLoaded}
      onOpened={onOpened}
      onCancelled={onCancelled}
      onError={onError}
    />
  );
};

export default LightBox;
