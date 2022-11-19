def getCountries(s, p):
    my_request = urllib.request.urlopen("https://jsonmock.hackerrank.com/api/countries")
    my_HTML = my_request.read().decode("utf8")
    res=json.loads(my_HTML)
    rd=[]
    i=res["data"]

    for j in  i:
        if s.lower() in j["name"].lower() and p<=j["population"]:
            rd.append(j)
    return rd
        

    