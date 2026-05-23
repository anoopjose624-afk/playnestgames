import 'regenerator-runtime/runtime';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiKey = 'GRzadLatZp2NcDHxIoxp';
const LOCAL_KEY = 'playnest-endless-runner-scores';

function loadLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveLocalScores(list) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(list.slice(-50)));
  } catch {
    /* ignore */
  }
}

const postScores = async (url, data = {}) => {
  const entry = { user: data.user || 'Player', score: data.score || 0 };
  const local = loadLocalScores();
  local.push(entry);
  saveLocalScores(local);

  try {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    };
    const req = await fetch(url, options);
    return await req.json();
  } catch {
    return { result: 'Saved locally.' };
  }
};

const fetchScores = async (url) => {
  try {
    const req = await fetch(url);
    const res = await req.json();
    if (res?.result?.length) return res;
  } catch {
    /* use local */
  }
  return { result: loadLocalScores() };
};

export {
  apiUrl, apiKey, postScores, fetchScores, loadLocalScores,
};
