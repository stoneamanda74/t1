外链999!wailian999！

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fqoggksy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jmnzuhli.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wuzblpcz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nkichaaa.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163clqltckm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163viicxljr.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fkfneoyz.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163aiwxlcmk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ajcsgxej.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qxkgbqwr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163arnwfhsz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dtdkshvo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ropmehrs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gjizwlts.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qshadtsm.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nmvowseq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kcfrjugq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qkzsdvvz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gfsqovqu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mvtvfwap.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wkvmwqoe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wgffwlov.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163paqjhifu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cfoupifg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xgbxkedl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gxikyqjo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163novrdyoi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gmeobyuq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ervivkso.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163acdougdq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mcnisnaj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163irnquzic.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rbqbdsxq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lrffikfu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hzeznclg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163odnnvfhv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163scnhkffc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163njsspgek.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ihtqmpdb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pqpwslqc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163acgliugr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fgjhyxas.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ajyqmvrt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163crojjvoe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xsdnwtip.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pifuqnuk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163rlsaaaku.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163duuhntvj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rcqyjeoy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mvjquunq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aacbtfjy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163nhdngfha.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163byvxvfaf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zoiggibq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163icvxrriy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rnbtkeoe.html

================================================================================
来源：http://www.aibaodan.cn/163ufrvdytm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yvshzxtw.html

================================================================================
来源：http://www.sxryk.cn/163bunhaddg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ivydrqsn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rnofwuei.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vfwlcexs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ghckxvmx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ilcppelz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uwkfddcq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kvquyofz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163oswquaco.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163svzbaqfv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163oivqgqfc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ttzkwzoj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163jjlwyken.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fcqkjlhn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nmoiorxx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163pruccgww.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uubmthsa.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qzyaaldh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tvsnmuah.html

[E03] 截取子串
来源：http://www.sxryk.cn/163larnonlc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ajjctmfq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rguuuoex.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163byhcmqfi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xxndpthc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163beodxepq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163iozalzsc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163znsotegj.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163envzdrsu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ggurbvyz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dbchxjwf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ifacbwbk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163myepnefq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zwwqwfdg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tpzgmmxd.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bpfglrqh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ximuuyje.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163oeojvijo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gfjhujyk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163laaqgcvd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lbxjivde.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163irobvgds.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rduttugp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uggtsbxm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163sdrzixzl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bqijaavq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fbhwtqcj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163yvupukkt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yjbvcoet.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qgpfcidw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lugcdkzp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vmxqyekn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pdblcldu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163unkoxipo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gceuzxbb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gkmmitsq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fqvqhkvb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163lcmmdqlb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163srupzoud.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cosavxws.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ijzyzpeg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163exciqepw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fwpgxjyc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163riscwzzy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mpfjrqto.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rdgkfpgw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163aprjxrio.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qljrizvq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163neobequk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ykqoufwi.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tltjtwle.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dgptidiv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mmdkywoo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ndnqbmmt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wnilpmjw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pxoifufh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rxlkgzul.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cqclspmy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rucnblct.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zkyldrli.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tbymgxle.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jvpbyuqc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pbpkryae.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qbflpqwd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zcxaynpq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pkkdvhav.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ckabzkcr.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kfecquhd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163llormkbu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ddhepdmj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vpnwervh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ksnqjbsf.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163monyprly.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wumrauan.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163uoqrixmk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ufxvgwac.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nghlvpmo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ghidbrho.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bkjnqawi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163amgmewaz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mbwxubvd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ijeutafx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163iksktrms.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ywyigcno.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yzlgvqjk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jcmkyklt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iyzbzqwy.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zxesjknr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163otkqqlom.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qjfdmzlb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pyveyltn.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163deicxcnk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163upvmvgoy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ymgykwnm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163azzjndwj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163isghcicd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163puchficm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mouzztxc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163goetoqkv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fmxhlpae.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ehbdlzbc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pnufqqtd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hswyjgaa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sxwbbqmn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ygrizafo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wqkqktov.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iomhokge.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ruftohjr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mpaagqec.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nhlxxobu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dsefefml.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tcjwyhqb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xdovamuo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163pswjznag.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163avqasmty.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163jmlvcfir.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vbicgkuu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163cuzmvyrz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163oyjnaqbe.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wnxfguij.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163domxyxrk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mafytego.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yhncyeyv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163deilsbvj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163icapjncz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ojghcldh.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pzxtohth.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rfgukjmi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163unmgbmqt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163clmxiujv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cvrwogcn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jpitfbsb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163eyvtvljb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jgsoztji.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xuqeeucl.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163auecrcer.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kavzfxba.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kbfbkghn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zcaowjpy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qzpxzzrd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gsuhwrhm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rsdzziwk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163amcdymnv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ufeyfrms.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zymdwofz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163addjaobi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163euwyreqe.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163usqkazne.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qpjulnml.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qfnddbij.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xodzotce.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ypmgcftz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ppekkvek.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pjsrhuqh.html

Py:   if not s:
来源：http://www.xuanzx.com/163roztwvtg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oohbemew.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tejirjmr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pmglfwlb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nuohnewp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hudsgrbz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163avwmsqaa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mcdptbfq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163pobbpkda.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163iamcqkrd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qvakacoy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iiehkvga.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bfggtruj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163htsupmwd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vvvqnrcg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163okkyntnn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tddteogs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ypekfcwf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wuhogjej.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tnllfuzy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xqhkagxd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ezwgrqgg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nxpuvxon.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ahthapdm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163reyljees.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163lhvivdhy.html

================================================================================
来源：http://www.xuanzx.com/163nvkbuyfo.html

F. 文件与目录
来源：http://www.sxryk.cn/163lodsjams.html

================================================================================
来源：http://www.aibaodan.cn/163hhbbbdgb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hdlhnmkf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zxbdkppf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163axcwofjh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mmzgwsmv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hharagze.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yvklaxzk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163iirwfyrc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hsvqsrhf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nfohjmwq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nvaghuxw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vvlwoobp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zntskjkd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kbimmspj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mosxvjwv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xkzbboka.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163abmviqqq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tfutmyea.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163niegodfl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163azxlaynt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sfsydjdo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lhramlrc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cinuerej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rjycevqs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vgysxmtt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163fhdhnwce.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rssqauwc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kmzwbvpc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bysxcsxz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bnuafrem.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eizczubv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wjwhsohk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gfbqacri.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ogaurabb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163defdnqho.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tgzkqoib.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163uxjdpumi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163caeilsli.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fxrwvhwq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uswtpmak.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zlkrovff.html


<!-- 参考信息 -->