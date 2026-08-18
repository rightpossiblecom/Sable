const aj = {
  protect: async () => ({
    isDenied: () => false,
    reason: { isRateLimit: () => false },
  }),
};

export default aj;
