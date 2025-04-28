import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * Interface définissant les propriétés du composant Modal
 * @interface ModalProps
 * @property {boolean} isOpen - État d'ouverture/fermeture de la modale
 * @property {() => void} onClose - Fonction appelée lors de la fermeture de la modale
 * @property {React.ReactNode} children - Contenu à afficher dans la modale
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Composant Modal réutilisable pour afficher des fenêtres modales
 * 
 * @component
 * @param {ModalProps} props - Les propriétés du composant
 * @returns {React.ReactElement | null} Le composant Modal ou null si isOpen est false
 * 
 * @example
 * ```tsx
 * <Modal isOpen={true} onClose={() => setIsOpen(false)}>
 *   <div>Contenu de la modale</div>
 * </Modal>
 * ```
 */
function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div ref={modalRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;