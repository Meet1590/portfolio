import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  description,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  description?: string[];
}) => (
  <li className="mb-7 ml-4">

    {/* timeline dot */}
    <div
      className="absolute w-2.5 h-2.5 bg-base-300 rounded-full border border-base-300 mt-1"
      style={{ left: '-5.5px' }}
    />

    {/* date */}
    <div className="text-xs text-base-content/60 mb-1 tracking-wide">
      {time}
    </div>

    {/* role */}
    <h3 className="font-semibold text-base text-base-content leading-snug">
      {position}
    </h3>

    {/* company */}
    <div className="mb-3 text-sm font-medium text-base-content/80">
      {companyLink ? (
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {company}
        </a>
      ) : (
        company
      )}
    </div>

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

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }
    return array;
  };

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
                Experience
              </span>
            )}
          </h5>
        </div>

        {/* list */}
        <div className="text-base-content">
          <ol className="relative border-l border-base-300/40 my-3 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={
                      experience.from && experience.to
                        ? `${experience.from} — ${experience.to}`
                        : experience.to || experience.from
                    }
                    position={experience.position}
                    company={experience.company}
                    companyLink={experience.companyLink || undefined}
                    description={experience.description}
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
