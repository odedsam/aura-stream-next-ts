const fs = require('fs');
const path = require('path');

function buildSearchIndex() {
  // Load your TV data
  const showsData = JSON.parse(fs.readFileSync('data/tv-api/shows.json', 'utf8'));
  const episodesData = JSON.parse(fs.readFileSync('data/tv-api/episodes.json', 'utf8'));

  const index = {
    metadata: {
      version: '1.0',
      buildDate: new Date().toISOString(),
      totalShows: showsData.length,
      totalEpisodes: episodesData.length,
    },
    wordIndex: {},
    phraseIndex: {},
    categoryIndex: {
      genres: {},
      years: {},
      networks: {},
      ratings: {},
    },
    suggestionIndex: {},
    popularQueries: [],
  };

  // Build word index from shows
  showsData.forEach((show) => {
    const searchText = `${show.title} ${show.description} ${show.genres?.join(' ') || ''}`.toLowerCase();
    const words = searchText.match(/\b\w+\b/g) || [];

    words.forEach((word) => {
      if (word.length > 2) {
        if (!index.wordIndex[word]) {
          index.wordIndex[word] = [];
        }
        if (!index.wordIndex[word].includes(`show_${show.id}`)) {
          index.wordIndex[word].push(`show_${show.id}`);
        }
      }
    });

    // Build phrase index
    const title = show.title.toLowerCase();
    if (!index.phraseIndex[title]) {
      index.phraseIndex[title] = [];
    }
    index.phraseIndex[title].push(`show_${show.id}`);

    // Build category indexes
    if (show.genres) {
      show.genres.forEach((genre) => {
        const genreKey = genre.toLowerCase();
        if (!index.categoryIndex.genres[genreKey]) {
          index.categoryIndex.genres[genreKey] = [];
        }
        index.categoryIndex.genres[genreKey].push(`show_${show.id}`);
      });
    }

    if (show.year) {
      if (!index.categoryIndex.years[show.year]) {
        index.categoryIndex.years[show.year] = [];
      }
      index.categoryIndex.years[show.year].push(`show_${show.id}`);
    }
  });

  // Build suggestion index (first 2-3 characters)
  Object.keys(index.wordIndex).forEach((word) => {
    const prefix = word.substring(0, 2);
    if (!index.suggestionIndex[prefix]) {
      index.suggestionIndex[prefix] = [];
    }
    if (!index.suggestionIndex[prefix].includes(word)) {
      index.suggestionIndex[prefix].push(word);
    }
  });

  // Sort suggestions by frequency
  Object.keys(index.suggestionIndex).forEach((prefix) => {
    index.suggestionIndex[prefix] = index.suggestionIndex[prefix]
      .sort((a, b) => (index.wordIndex[b]?.length || 0) - (index.wordIndex[a]?.length || 0))
      .slice(0, 10); // Keep top 10 suggestions per prefix
  });

  // Save the index
  fs.writeFileSync('data/tv-api/search-index.json', JSON.stringify(index, null, 2));
  console.log('Search index built successfully!');
}

buildSearchIndex();
