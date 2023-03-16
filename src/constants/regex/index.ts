export const useRegex = () => {
  const usernameCheckHandle = (username: FormDataEntryValue | null) => {
    if (username) {
      const regex = /^.{8,16}$/;
      return regex.test(username as string);
    }
    return;
  };
  const emailCheckHandle = (email: FormDataEntryValue | null) => {
    if (email) {
      const regex =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return regex.test(email as string);
    }
    return;
  };

  const passwordCheckHandle = (password: FormDataEntryValue | null) => {
    if (password) {
      const regex = /^[A-Za-z0-9]{6,12}$/;
      return regex.test(password as string);
    }
    return;
  };

  return { emailCheckHandle, usernameCheckHandle, passwordCheckHandle };
};
