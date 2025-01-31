import { useEffect, useRef } from 'react';

interface UseClickOutsideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useClickOutside = ({ isOpen, onClose }: UseClickOutsideProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      const target = event.target as HTMLElement;
      if (target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return modalRef;
};
