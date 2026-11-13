/* Minimal Prism grammar for IBM JCL (used by the JCL & z/OS and COBOL sets). */
(function () {
	if (typeof Prism === 'undefined') return;
	Prism.languages.jcl = {
		comment: { pattern: /^\/\/\*.*$/m, greedy: true },
		delimiter: { pattern: /^\/\*.*$/m, alias: 'comment' },
		statement: {
			pattern: /^\/\/[A-Z@#$][A-Z0-9@#$.]{0,16}(?=\s)|^\/\/(?=\s)/m,
			alias: 'tag'
		},
		keyword: /\b(?:JOB|EXEC|DD|PROC|PEND|SET|IF|THEN|ELSE|ENDIF|INCLUDE|JCLLIB|OUTPUT|EXPORT|CNTL|ENDCNTL)\b/,
		string: { pattern: /'(?:[^']|'')*'/, greedy: true },
		symbol: { pattern: /&&?[A-Z@#$][A-Z0-9@#$]*\.?/, alias: 'variable' },
		parameter: { pattern: /\b[A-Z][A-Z0-9]*(?==)/, alias: 'attr-name' },
		number: /\b\d+\b/,
		punctuation: /[(),=*]/
	};
})();
