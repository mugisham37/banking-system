class SuppressOtelWarningsPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('SuppressOtelWarningsPlugin', (compilation) => {
      compilation.warnings = compilation.warnings.filter((warning) => {
        return !(
          warning.message &&
          warning.message.includes('Critical dependency: the request of a dependency is an expression') &&
          (warning.module?.resource?.includes('@opentelemetry/instrumentation') ||
           warning.module?.resource?.includes('@sentry/node') ||
           warning.module?.resource?.includes('@prisma/instrumentation') ||
           warning.module?.resource?.includes('require-in-the-middle'))
        );
      });
    });
  }
}

export default SuppressOtelWarningsPlugin;
