import React, { createContext, useState, useContext, ReactNode } from 'react';
import QuoteFormModal from '../components/UI/QuoteFormModal';

interface QuoteContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuoteContext must be used within a QuoteProvider');
  }
  return context;
};

interface QuoteProviderProps {
  children: ReactNode;
}

export const QuoteProvider: React.FC<QuoteProviderProps> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal, isQuoteModalOpen }}>
      {children}
      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </QuoteContext.Provider>
  );
}; 