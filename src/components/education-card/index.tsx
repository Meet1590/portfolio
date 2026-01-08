import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  from,
  to,
  degree,
  institution,
  description,
}: {
  from?: string;
  to?: string;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
  description?: string[];
}) => {
  const time =
    from && to
      ? `${from} — ${to}`
      : to
      ? `${to}`
      : from
      ? `${from}`
      : '';

  return (
    <li className="mb-7 ml-4">

      {/* timeline dot */}
      <div
        className="absolute w-2.5 h-2.5 bg-base-300 rounded-full border border-base-300 mt-1"
        style={{ left: '-5.5px' }}
      />

      {/* date */}
      {time && (
        <div className="text-xs text-base-content/60 tracking-wide mb-1">
          {time}
        </div>
      )}

      {/* degree */}
      {degree && (
        <h3 className="font-semibold text-base leading-snug text-base-content">
          {degree}
        </h3>
      )}

      {/* institution */}
      {institution && (
        <div className="text-sm font-medium text-base-content/80 mb-3">
          {institution}
        </div>
      )}

      {/* bullet points */}
      {description && description.length > 0 && (
        <ul className="list-disc ml-5 space-y-1.5 text-sm leading-relaxed text-base-content/90">
          {description.map((point, i) => (
            <li key={i} className="marker:text-base-content/50">
              {point}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () =>
    Array.from({ length: 2 }).map((_, index) => (
      <ListItem
        key={index}
        degree={skeleton({
          widthCls: 'w-6/12',
          heightCls: 'h-4',
          className: 'my-1.5',
        })}
        institution={skeleton({
          widthCls: 'w-5/12',
          heightCls: 'h-3',
        })}
      />
    ));

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">

        {/* heading */}
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70 tracking-wide">
                Education
              </span>
            )}
          </h5>
        </div>

        {/* timeline */}
        <div className="text-base-content">
          <ol className="relative border-l border-base-300/40 my-3 mx-4">
            {loading
              ? renderSkeleton()
              : educations.map((item, index) => (
                  <ListItem
                    key={index}
                    from={item.from}
                    to={item.to}
                    degree={item.degree}
                    institution={item.institution}
                    description={item.description}
                  />
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
