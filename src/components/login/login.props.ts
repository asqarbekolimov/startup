export interface LoginProps {
  onNavigateStateComponent: (
    component: "login" | "register" | "verify"
  ) => void;
}
