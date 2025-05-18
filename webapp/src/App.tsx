import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "/home/chrysalis/Code/My_Projects/Idnik/webapp/pages/AllIdeasPage/index.tsx";

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  );
};
