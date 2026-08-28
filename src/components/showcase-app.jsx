'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';
import { sampleRecords, toDetailRecord } from '@/lib/data';
import ComponentShowcase from './component-showcase';
import Modal from './modal';

const previewModeKey = 'nexo-ui-preview-mode';
const previewModeEvent = 'nexo-ui-preview-mode-change';
const modalPreviewRecord = {
  ...toDetailRecord(sampleRecords[0]),
  subtitle: sampleRecords[0].product,
  fields: [
    ['Product', sampleRecords[0].product],
    ['Estimated price', sampleRecords[0].price],
  ],
  sections: [],
};

function readPreviewMode() {
  try {
    return window.localStorage.getItem(previewModeKey) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function subscribeToPreviewMode(callback) {
  window.addEventListener('storage', callback);
  window.addEventListener(previewModeEvent, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(previewModeEvent, callback);
  };
}

function getServerPreviewMode() {
  return 'dark';
}

function savePreviewMode(mode) {
  try {
    window.localStorage.setItem(previewModeKey, mode);
  } catch {
    // Keep the in-memory preference available when storage is blocked.
  }

  window.dispatchEvent(new Event(previewModeEvent));
}

export default function ShowcaseApp({ group }) {
  const previewMode = useSyncExternalStore(subscribeToPreviewMode, readPreviewMode, getServerPreviewMode);
  const [selectedRecord, setSelectedRecord] = useState(() => toDetailRecord(sampleRecords[0]));
  const [modalOpen, setModalOpen] = useState(() => group.components.some(({ id }) => id === 'modal'));
  const hasEmbeddedModal = group.components.some(({ id }) => id === 'modal');
  const closeModal = useCallback(() => setModalOpen(false), []);

  function openModal(record = sampleRecords[0]) {
    setSelectedRecord(toDetailRecord(record));
    setModalOpen(true);
  }

  return (
    <>
      <div id={group.id} className="space-y-10">
        {group.components.map((component) => (
          <ComponentShowcase
            key={component.id}
            component={component}
            previewMode={previewMode}
            onSetPreviewMode={savePreviewMode}
            onOpenModal={openModal}
            modalOpen={modalOpen}
            onClose={closeModal}
            modalPreviewRecord={modalPreviewRecord}
          />
        ))}
      </div>
      {!hasEmbeddedModal && <Modal dark={previewMode === 'dark'} record={selectedRecord} open={modalOpen} onClose={closeModal} onPrimaryAction={() => undefined} />}
    </>
  );
}
