const SongController = {
  async getAll(ctx) {
    const songs = await ctx.libS.songs.all();
    return ctx.modS.responses.createSuccessResponse(ctx, {
      songs,
    });
  },
};

export default SongController;
