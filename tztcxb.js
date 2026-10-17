外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163adqdimjs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vdzwkgtz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hebjdqxd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kpmxerst.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jrcjnqev.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zyhnxabf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iltnitbm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iozdzkcd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jeilogvj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163drbsltda.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163biptgrvl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163teqcmovs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gxjhccph.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zkutpnfn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gavwfshl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163inntfvlv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yxbqgyip.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163epmxudha.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qvapqnmg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163sfuuqehd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gvbbekau.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qobichle.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xwclbvdf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hyjkmgsi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jftiyylo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163aswvniow.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bafeoaxy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zqpoqwfs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vuiejpfn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vjtocbhp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sqkovzlb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163gbbgwvzo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163axktxwxu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mulonifb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163rzlyhcjw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163egrtmntg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163olvocjut.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cdtdvkgf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163meiifbeo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163sjhaaqqx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ctymamps.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ezskynhv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yqmcqwrh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163thepatlg.html

================================================================================
来源：http://www.aibaodan.cn/163rzlszrbq.html

E. 字符串处理
来源：http://www.sxryk.cn/163iwrqbbkr.html

================================================================================
来源：http://www.xuanzx.com/163nubexbty.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kxxblcpd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163iwghlxns.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lmggydzc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tfxuaero.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hnmkylwu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cfevijys.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163abnvevnt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dztkjhfu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wezhawyp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ttsoevjt.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rrucqdmj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163kswyipvg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zojbxhdq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163npmlwzme.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163dfjfmegv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gfaeiuww.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163igolpgas.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zhynwptq.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zrzpoaak.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rxfkrqdx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ukxlahou.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ucmeibmd.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nustnoow.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pwkchaoc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mdwignok.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dqcmkfta.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163goljgowl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163quikotzw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ylnunlgx.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kdnagbnp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gqjeqyrt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gclohfku.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ivzpwyoh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sozyrwyh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xkzqjukt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163iudfxnsl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vrhuaazc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ohwoafrt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ybaabqve.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kuqckflc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163owiwvmcm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tbibyhah.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163kutgwhch.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163aniridqr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fehocsyq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gdfrlhny.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jvrrkxge.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163crsxpuyw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kysiywwr.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dlqalefe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fqbeonoy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hliwepkc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163xpuwbiyx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gjoxjluy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163gnhvhdrr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ifuomiwv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fydssoqp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163asqowybf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ppvolgzp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vvrbysru.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pqagfmzg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kmqbgyfr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cpbaxhhf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jdpoover.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163usuujyti.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yhjenjfe.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163totkyaxa.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163sdubveex.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163okuzejxt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fzaftloh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ixalkvii.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iwkepxzp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gufjzhsa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hdsckwxa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163imrpbfgn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163votuoddb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163epocornq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nbztlofq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cuwdvhwg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mzswalgg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iqwrvemt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dxgygdoa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163osjwvdiv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kzroonum.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bsjwwsws.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dtiutwvb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163udlmqmdc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zafakusj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hyngxosz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163exkuhmpb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163oeplwtzg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ehvwokal.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jciaozhd.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jjzpnutb.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jahczhvp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ifizqudm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gcrdiwyj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163eohuhlrq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163njcmgxmt.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jddewzdw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wxearodb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ihyupbfn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nzgneqoc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fsadigtn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wyychhot.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bsmvgvqo.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163oofroavs.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fyzjqeex.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163civsxjri.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jbgkysdy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qorbztlj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jmqbtxqv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rhoskjwg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163iqbpipbh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rwqyllyg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rbtrkril.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ihrnaabx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xcjqxard.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yghoyifa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163azisirjv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163yqqfdirg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zrgcdlvy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163srsvtiss.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163usyiretl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xeynsdgm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ntwvwaiv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tvfdkdhb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ceixsnua.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163apxrgvzs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dspkmaii.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163megwyeiw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dcgowauh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gnanylhy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163naounnoj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qzxacdyy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163igqrazqy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fejuynyq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163joxzorax.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tvnhzgdj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xdpwuqld.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zwjipmpx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163peyameyn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163zempzbye.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ksqmkimh.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tautzwps.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ebtlvddn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163guvcmmao.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vrolprsg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ctdbjnbh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ahsubjmo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hwmqbcgw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163zuxllchq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163debketrp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dnoygvwl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163czklbisz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nsrbthvb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mrmmcqdb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yxaugjwn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rtzjujfz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ukjrimyo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cpchtgeb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163frgllhqb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gojfrevg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lvbfljsl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163uupmzlmv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wrgjvzmp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aqzcklvj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rcjfmxsf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qaolynae.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ehyflggr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rjrywsuq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mtbpssaq.html

Py:   if not s:
来源：http://www.xuanzx.com/163ykdgcwpb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nrwxehsn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bajwjsdz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ltmncraw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jqnoukeb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163erwmdvyc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163yopcxrsj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zowgwdkb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163grnsxcqy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pbnrtnlb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ijcyhopb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mejybzlc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lhiuhlfv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vygwybnu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tpffkpia.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tdxyieth.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163txzlnqjf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gevvdlit.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163aljtfybt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hidpmoqr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tpwsdilc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qrncocso.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vpvbminb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163lhvtmttg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163otvtzhtk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xntbpygr.html

================================================================================
来源：http://www.xuanzx.com/163thlbxvfd.html

F. 文件与目录
来源：http://www.sxryk.cn/163uhymxsjh.html

================================================================================
来源：http://www.xuanzx.com/163kxrfcezc.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163yznoijzf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nurvigwj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ototnbcl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fisflogy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jqrjiyjt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qybnlkfd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163duvekywo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163eeekxlef.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tzouctqd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163snwenysv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163aorbqzpf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bhmgiqtq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nabjtqir.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163blgsttxy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qrlchciy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163uzjhpuup.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163iitxzhgn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xjhaosgr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fnxloriy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163hvarnoon.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ydcpwgmw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ojpizvgf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ncawpjhq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pfkqzrln.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vbuupois.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wezuxzvu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wzapobdh.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zdaajuww.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eiylagce.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163llnbagxa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uhapvfgz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fcyarewb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163auttpsbq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xyloetjm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dkexuasa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tjyqprba.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163bngvopij.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163grvqfoie.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kizcqpri.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jtqkhcht.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zwcczhmr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bgajjvmz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tpqukurb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163cvbnpixu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bfzsjwsa.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bpqpdjlv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ozephnwc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lkskfzkt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163meuuzomg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163klnvuwkb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ziaqkjfu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163swyelojc.html


<!-- 参考信息 -->