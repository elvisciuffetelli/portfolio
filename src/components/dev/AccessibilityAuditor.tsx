'use client';

import { useEffect, useState } from 'react';

interface AccessibilityIssue {
  id: string;
  impact: string;
  description: string;
  help: string;
  helpUrl: string;
  nodeCount: number;
}

export function AccessibilityAuditor() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const runAudit = async () => {
    if (process.env.NODE_ENV !== 'development') return;

    setIsLoading(true);

    try {
      const axe = await import('axe-core');
      const results = await axe.run();

      const violations = results.violations.map(violation => ({
        id: violation.id,
        impact: violation.impact || 'unknown',
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
        nodeCount: violation.nodes.length
      }));

      setIssues(violations);

      if (violations.length > 0) {
        console.group('🔴 Accessibility Issues Found');
        results.violations.forEach(violation => {
          console.warn(`${(violation.impact || 'unknown').toUpperCase()}: ${violation.description}`);
          console.log(`Help: ${violation.help}`);
          console.log(`More info: ${violation.helpUrl}`);
          console.log('Elements:', violation.nodes);
        });
        console.groupEnd();
      } else {
        console.log('✅ No accessibility issues found!');
      }
    } catch (error) {
      console.error('Accessibility audit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Run audit automatically after component mount
    const timer = setTimeout(runAudit, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'serious': return 'text-orange-600 bg-orange-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'minor': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              A11y Audit
            </h3>
            <div className="flex items-center gap-2">
              {issues.length > 0 && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  issues.some(i => i.impact === 'critical' || i.impact === 'serious')
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {issues.length} issues
                </span>
              )}
              <button
                onClick={runAudit}
                disabled={isLoading}
                className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Auditing...' : 'Audit'}
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isExpanded ? '−' : '+'}
              </button>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="p-3 max-h-96 overflow-y-auto">
            {issues.length === 0 ? (
              <div className="text-sm text-green-600">
                ✅ No accessibility issues found!
              </div>
            ) : (
              <div className="space-y-3">
                {issues.map((issue, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-md p-3">
                    <div className="flex items-start justify-between mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(issue.impact)}`}>
                        {issue.impact}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                      {issue.description}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {issue.help}
                    </p>
                    <div className="text-xs">
                      <span className="text-gray-500">Affected elements: {issue.nodeCount}</span>
                      <a
                        href={issue.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}