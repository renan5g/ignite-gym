import { IInputProps, Input as InputNativeBase } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNativeBase
      bg="gray.700"
      h={14}
      px={4}
      mb={4}
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.700',
        borderWidth: 1.5,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  );
}
