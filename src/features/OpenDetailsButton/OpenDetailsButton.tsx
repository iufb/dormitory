import { Button } from "@/shared/ui";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
interface OpenDetailsButtonProps {
  id: number;
}
export const OpenDetailsButton = ({ id }: OpenDetailsButtonProps) => {
  return (
    <>
      <Link href={{ query: { modal: true } }}>
        <FaEye />
      </Link>
    </>
  );
};

const DetailsModal = () => {};
