"use client";

/* Sizebay */
import {
  SizebayProvider,
  useSizebay,
  Button,
  Recommendation,
  SizebayModal,
} from "@sizebay/react";

import styles from "./counter.module.css";

export const WrappedCounter = () => {
  const sizebay = useSizebay({
    tenantId: "1039",
    async permalink() {
      return "https://store.sizebay.com/products/nylon-bomber-jacket-in-stone";
    },
  });

  if (!sizebay.isReady) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <div>
        <div className={styles.row}>
          <Recommendation>
            {({ profileName, recommendedSize }) => (
              <div style={{ display: "inline-flex", gap: 8, width: "100%" }}>
                <span>
                  We recommened {recommendedSize} to {profileName}
                </span>
              </div>
            )}
          </Recommendation>
        </div>

        <div className={styles.row}>
          <Button onClick={() => sizebay.openVirtualFittingRoom()}>
            <span className={styles.button}>Open Virtual Fitting Room</span>
          </Button>
        </div>
      </div>

      <SizebayModal />
    </>
  );
};

export const Counter = () => {
  return (
    <SizebayProvider>
      <WrappedCounter />
    </SizebayProvider>
  );
};
