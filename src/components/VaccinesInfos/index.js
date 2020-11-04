import React from 'react';

import { Container } from './styles';

function VaccinesInfos({ data }) {
  return (
    <Container>
      <h1>See how the vaccines are going</h1>
      <main>
        <p>
          Source :{' '}
          <a href={data.source} target="_blank" rel="noopener noreferrer">
            www.raps.org
          </a>
        </p>
        <strong>
          Total Candidates: <span>{data.totalCandidates}</span>
        </strong>
        <section>
          <div className="phases">
            <h2>Phases and amount of candidates</h2>
            {data.phases.map((phase) => (
              <div key={phase.phase} className="phase">
                <strong>
                  Phase: <span>{phase.phase}</span>
                </strong>
                <br />
                <strong>
                  Candidates: <span>{phase.candidates}</span>
                </strong>
              </div>
            ))}
          </div>
          <div className="candidate">
            <h2>Each candidate</h2>
            {data.data.map((candidate) => (
              <div key={candidate.details} className="candidate">
                <strong>
                  Candidate: <span>{candidate.candidate}</span>
                </strong>
                <strong>
                  Mechanism: <span>{candidate.mechanism}</span>
                </strong>
                <strong>
                  Details: <span>{candidate.details}</span>
                </strong>
                <strong>
                  Trial phase: <span>{candidate.trialPhase}</span>
                </strong>
                <strong>
                  Institutions: <span>{candidate.institutions}</span>
                </strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Container>
  );
}

export default VaccinesInfos;
