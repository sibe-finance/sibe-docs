Your staked SOL is delegated to chosen validators from our white list. This list is formed according to a special algorithm. To help Solana’s decentralization grow and resist censorship, we use the Solana Foundation strategy. It aims to spread the stake among validators who show high performance, have low commissions, and are not concentrated.

## Solana Foundation delegation strategy

We try to encourage the existence of more validators; that’s why our target is to stake to smaller validators. This stands for delegating SOL to nodes who are NOT part of the security group.

As those nodes are no longer included next parameters are used to choose validators:

- [APY](/FAQ/Glossary/#APY)

- Commission

- Delinquency

- Decentralization objectives

- Version of the node

Most of the information is extracted from Solana itself. The exceptions are only APY, which is gathered from [StakeView](https://stakeview.app/) and data center concentration for which we use Validators.app

The idea is to be completely transparent and open to all validators. We aspire not only to meet our users' needs but also to invest in Solana’s decentralization and resist censorship.

## Delegation formula

Validators’ scores depend on their performance, commission, and decentralization objectives. This score is calculated with open-source code.

Since we aim to promote less concentrated validators, points will be deducted for validators who have a high score but already are one of the top in the Solana ecosystem.

The percentage of total stake is nominated according to the validator’s score.

## Open source calculation

:::info

This section is in progress.

:::

## Calculation details

To calculate and post-process score to determine staking and unstaking operations:

1. All validators are getting scored according to their performance during the last 5 epochs.  Epoch credits, decentralization, node version and commission are taken into account.

2. Only 300 validators with top scores are chosen. Those validators vary from epoch to epoch. Validators who didn’t get on this list are getting a 0 score.

3. When it comes to stake operations chosen for the ongoing epoch validators are examined and next factors are considered:

    - **Credits** within the epoch in regard to all validators on the blockchain. An emergency unstake is performed if the credits are below 80% of the average. When the credits are below 90% the score is divided by two.
    - **APY** within the epoch (in regards to all validators with APY more when 4%). An emergency unstake is performed if the APY is less than 50% of the average. When the APY is less than 80% the score is divided by two.
    - **Delinquency.** Delinquent validators are always unstated.

4. For accuracy, those calculations are completed twice during the epoch.

## Staking/Unstaking operations

The last step is finding a good balance between staking and unstaking operations; it is done by the bot which adjusts scores depending on available options.

- For validators who were caught cheating or those who have changed fees at the not appropriate time of epoch, there is a black list. Any blacklisted validator’s stake is unstaked immediately.

- In case of validators with 0 scores (but not in top 300) and being delegated by Sibe more than 0.45% of total stake, its stake is getting unstaked until more than 20% of their total stake is being represented by Sibe.

- Maximum Stake cap is 1.5% of the total Sibe stake.

- Stake received over an epoch cannot exceed 0.1% of the total staked amount currently delegated to validators. Unless the validator is severely understaked.

## Who is Sibe delegating to?

:::info

This section is in progress.

:::

## How are stake accounts handled?

For those who have already staked SOL before, there is a possibility to deposit stake account on Sibe and receive Sibe tokens, since this stake account is linked to a particular validator. Stake account can only be accepted in case if the validator wasn't delinquent and has a commission under 30%. Before depositing to Sibe SOL is supposed to be unstaked and retrieved.