export const useAuthority = (auth: any) => {
  // 포트폴리오 프로젝트이므로 권한 체크는 항상 true로 반환하도록 임시 구현합니다.
  return { can: true };
};
