interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <>
      <h3>Oops...</h3>
      <span>{message}</span>
    </>
  );
}
