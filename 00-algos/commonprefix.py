def longestCommonPrefix(strs) -> str:
    common_str = ""
    for i in strs:
        for j in i:
            if i[j[0]] == i+1[j[0]]:
                common_str == i[j[0]]
        
longestCommonPrefix(["flower","flow","flight"])