  const getPlainTextExcerpt = (html: string, length: number = 300) => {
    const plainText = html.replace(/<[^>]*>?/gm, "");
    return plainText.length > length
      ? plainText.substring(0, length) + "..."
      : plainText;
  };


  export default getPlainTextExcerpt