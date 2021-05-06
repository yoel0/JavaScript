/* Fetch Utility Helper Function, TypeScript
* Here we create a utility function for fetch.
* This is a very basic construct that can be expanded on,
* dependant on need and use case.
* The purpose is that when we use fetch() to do multiple API calls
* we can barbeque (destroy) the additional and or redundant steps
* of code, by calling in our utility function that will automatically
* get the response and return our data as JSON.
*/


export const fetch = async (url: RequestInfo, info?: RequestInit)
: Promise<any> => {
  const res = await window.fetch(url, info);
  const data = await res.json();
  return data;
};