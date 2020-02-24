const fetchByParams = async (url, params) => {
  try {
    url = new URL(url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    const res = await fetch(url, params)
    const dataArray = await res.json();
    return dataArray
  } catch(error) {
    console.log(error);
  }
};

export default fetchByParams;
