import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const SkeletonImage = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.border};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
`;

const SkeletonLine = styled.div`
  height: ${({ height }) => height || '1em'};
  width: ${({ width }) => width || '100%'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-top: ${({ mt }) => mt || '0'};
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonLine width="90%" height="1.2em" mb="12px" />
        <SkeletonLine width="70%" height="1.2em" mb="24px" />
        <SkeletonLine width="40%" height="1em" mb="16px" />
        <SkeletonLine width="50%" height="1.5em" mt="auto" mb="20px" />
        <SkeletonLine width="100%" height="40px" />
      </SkeletonContent>
    </SkeletonWrapper>
  );
};