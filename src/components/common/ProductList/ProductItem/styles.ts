import { css } from 'emotion';

export default {
  body: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  rateButtonWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  avatar: css`
    width: 72px;
    height: 72px;
    object-fit: cover;
  `,
};
