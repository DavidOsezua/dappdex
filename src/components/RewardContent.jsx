import React from "react";
import { usdt } from "../assets";
import { NavLink } from "react-router-dom";
import styles from "./RewardContent.module.css";

const RewardContent = () => {
  return (
    <section className="bg-[#08023c] py-[3rem]">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.textContainer}>
            <div className="flex gap-2 justify-center">
              <h2 className={styles.title}>300</h2>
              <img src={usdt} className="w-[20px]" />
              <h2 className={styles.title}>Rewards!!</h2>
            </div>
            <p>
              Register your wallet today and receive{" "}
              <span className={styles.title}>300 USDT.</span>within the next 24
              hours. invite friends nad family, and earn
              <span className={styles.title}>100 USDT</span>as a referral
              reward.
            </p>
          </div>

          <div className="flex gap-1 justify-center mt-[1rem]">
            <NavLink to="wallet">
              <button
                className={`bg-[#FFC107] text-[#000000] px-[1rem] py-[0.5rem] rounded-md`}
              >
                Register Now
              </button>
            </NavLink>

            <NavLink to="wallet">
              <button
                className={`bg-[#fff] text-[#000000] px-[1rem] py-[0.5rem] rounded-md`}
              >
                Refer Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardContent;
