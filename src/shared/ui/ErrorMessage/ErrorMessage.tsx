import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import './ErrorMessage.scss';

interface Props {
  error?: unknown;
  onRetry?: () => void;
}

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

export default function ErrorMessage({ error, onRetry }: Props) {
  let message = 'Произошла ошибка';

  if (isFetchBaseQueryError(error)) {
    const err = error as FetchBaseQueryError;

    if (typeof err.status === 'number') {
      message = `Ошибка ${err.status}`;
    }

    if ('data' in err && typeof err.data === 'object' && err.data !== null) {
      const data = err.data as { message?: string };
      if (data.message) message = data.message;
    }
  }

  return (
    <div className="error-message">
      <div className="error-message__container">
        <h2 className="error-message__title">Что-то пошло не так</h2>
        <p className="error-message__text">{message}</p>
        {onRetry && (
          <button className="error-message__btn" onClick={onRetry}>
            Попробовать снова
          </button>
        )}
      </div>
    </div>
  );
}
