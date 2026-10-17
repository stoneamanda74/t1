外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163krbufmsu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gkxtpeee.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dkwycfnf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qnjuplry.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cqzqmirl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163assyritx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163yrqmpilx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163unasmafj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ikflrbke.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ncznzlrp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fiyfphdj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qkpsxiow.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163haniwpjg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lxuxphol.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163clktcsvs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zqakvgaj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163cahttsqk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mkyowoxy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pxwvpyhs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163zqdtaqfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163nxddvces.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mfmkwwzb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jsxodwuv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hhgfzjae.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sbsxskcb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cgorouvs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tivntuyk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zyafehsg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ykdygdna.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rirvxlsn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wmbksxuz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nrvpezvv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jjwxtokc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ylrxxkjr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zukwaqaq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tshrrpio.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kwfymyuu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wxlrnbbt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ucdbchiz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163oqjuflac.html

================================================================================
来源：http://www.sxryk.cn/163wujhqcyp.html

E. 字符串处理
来源：http://www.xuanzx.com/163mafukdbd.html

================================================================================
来源：http://www.aibaodan.cn/163vbgrccrv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ertpuudh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vzrrmymz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rwtqbchy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tcmmmrsf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qbyxijha.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zwxnrraa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163twtbavlg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hpgvqpur.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qturkpka.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163egbvncfz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163tdervdvg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ezkcptgi.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rjzxtsrt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163asnrhidw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vjmbvcaj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163muvvtzzh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163drtyuooe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cwpczdxo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zddmwkon.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tkrmkyxd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163famtqhza.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kirasbrw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hlntyrha.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lorbwfmg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163paytpoje.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lkivrxpq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ngdrnncq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vuhxpyji.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163nkifmfln.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gretnfpq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163quvljivc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bmzicfjh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rcqxkyiq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zxzeczqb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qcqgwptq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dgbcfmrw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lfhbuyxe.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rjugksli.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ekjlffji.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163itulbcok.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163tvjlwhjl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xxyylvaz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ecikkkaa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hahxtunk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163cmeefwld.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ubrqctfi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163osiqthzt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rawkzuos.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163awuamlqg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tfwmbxve.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mpjtcuou.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163yzedbyof.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fcijpuzg.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ehygwykk.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bnmzlpjg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ovfnyvav.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vlarbuze.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163siicxezx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163svrfyqkp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ynxzykju.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rrnthpdg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vydxwxzg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zlyooxrt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wnekgbei.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zfzryduo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mvuqakqm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163sprwzhmk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uswvecqm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ufazwsyt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163snnukrng.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tcmomjuq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vpiljsxf.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xynlgjtt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zfbbvfyc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sskdnlko.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lrzxwlza.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163oxqbztij.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163yayxufuc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oolzboaq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163olqenfjt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mjihfmoy.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vvqxymww.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qdquzjfb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zyduamrj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gyghvzen.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uhjfvafh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yugsihkq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163eaytzrdd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rrvqvkhu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zxhbclyp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jaetffts.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wwnfxmwc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rnpddkyp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ftyrkfcb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163imoszpou.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163iiflqpch.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wnmxonoi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mrrkxihe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ikppvlff.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hglajfqv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163yxgmnony.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163cloedvyw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gfmtownl.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wifmxyav.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fysndblz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dcjbqswb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hvbrzjej.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ebhyawyo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kbcxqyje.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lsnelpun.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bphyalyf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xjlayebh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qagbyrsy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sxypxkgp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163lbsplpwi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163dzpqvxel.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163pautypix.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kdvmfksa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jbyvnxnw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163prrgeaeo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hqxzztob.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lycfdzlz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kvrsdash.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pftyvkln.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qgzystdt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ijmsdiey.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163yklygubk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ukobincb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163txvsfkhd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163igjjvyey.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163wkeqspij.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hpigenez.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hkkfzxwg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163irqwychw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ivbeklmj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fndfhlly.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bqyuxmtc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rictvvwq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vdktgvdu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bodzknmf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163gcbxkeds.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yucspyjv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lnczygdn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163jygvrdjm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xhjdular.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hvlalsfv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163sjxqvxrt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ojrptzvn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163googzlba.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nuqloiup.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fszatjmh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gycerwbe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dblaepcr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163maumhndq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pmumhgix.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bwminirx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fkmvphvq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eqnzjovn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163sxrunqxt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jlnqmkwr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qydssqtu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qhnibpiz.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wrtnefta.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kdizflqh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hwxmcgfh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163talphptr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wuthaauu.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ctptzezj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jnytvytw.html

Ruby: s.lines
来源：http://www.xuanzx.com/163tivrosqa.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xzxxbowz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dmtdqipp.html

Py:   if not s:
来源：http://www.xuanzx.com/163gksazpzn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ffmxvdog.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nwvhjtcq.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zxktzbbc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hizacwhr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163uqenonqi.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wedccvti.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jfvckptk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bgucqmvt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nmdgscbp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cyruvcur.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ygfoxevz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ibcqpafz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xvdymptd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yinahfxr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dglanjyb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163htckeuuu.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bhkgbwqw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nctigrgz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sjbbgxkx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163obyaovco.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cxnfwbdu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cemixjms.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ynedpbdx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lnmkmtsq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ebkeielz.html

================================================================================
来源：http://www.aibaodan.cn/163xfwguftf.html

F. 文件与目录
来源：http://www.xuanzx.com/163udbttdpw.html

================================================================================
来源：http://www.aibaodan.cn/163uuddjrbk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163nobeokol.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wybpjydk.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ukwvhgcu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pmlfjazw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rhyhtcmu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dnjwbmgy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rjiiidgc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163sechgjud.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yygxaatx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zrlhizqv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pylwpabs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sbaivpbs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qmrixfbv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jvtuvfdw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oiftaiki.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163infagezz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ilcmaqof.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163itjpzzud.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ezmuzxbb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qzbtyqdp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kacnksrz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zjwczeem.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dqxjartz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qqvulrcu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gcshgpcb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163viakdwnu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wbeyyrkp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163stsvbfue.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kzksbozh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163agxjtcab.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hinuthnj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gcpjcokg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mmcyqtql.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163sjetsdlz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163aicnhpyf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tyvmfdst.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kglqpsuo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ehiicinu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ivwpqkso.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163drrbimxc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dskpmrwu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163njnotahs.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163bidnfapt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xrcarjkf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fkdhszqu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jhjhgwaj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rezfaeol.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fflkogkl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xujjtotl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qznmjtjz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mqvxhmfg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163eleuhgvo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163emhahfuj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ctmnrram.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lzpjsulc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163uauhcpbi.html


<!-- 参考信息 -->