外链999!wailian999！

Ruby: arr.tally
来源：http://www.sxryk.cn/163imdgswcn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163adtrdntg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163icxxabfi.html

Py:   x in arr
来源：http://www.xuanzx.com/163mpnhiuxf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vknbqbya.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kmyrvgmf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163trnfvhoh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ntuhokkw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ofkuewqr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mciphgjq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gzgqnxfo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163msmkzbka.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zxdpfafr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163eldbrrxc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wqchlipv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ufddhwhj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sjpkuuax.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163uwbepbpb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163oxjjnrgl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jaomlqha.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ebcvfcjm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rkenihft.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ictqsffz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sjgjqfrq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cpeytgsa.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163izriwzro.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ydhzcyzo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uzoaijey.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fkyuvozi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vrrwuwgd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163mypnzsnt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163uyvjpjlt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jdykvwri.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fiebushm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163egxsvtyv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xmjqvusb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163uxgkhncd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163lwfrggvk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mzbgzmfl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jsuxtwkx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xagdjjka.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mxgwfukt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163peblzgvz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jwkgadbi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zfkapkhh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wppsbnso.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163oviyjgit.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rbosjcrr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ubxnsinx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fwasmiku.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fjaxamdm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ccxtczkx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xhddatjs.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vpxogkza.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163iggmwcah.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163efrcnsvh.html

================================================================================
来源：http://www.sxryk.cn/163fhxunidv.html

E. 字符串处理
来源：http://www.sxryk.cn/163xgbiitsv.html

================================================================================
来源：http://www.aibaodan.cn/163ynafjuwr.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tyhbvjti.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163auadhsfa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gbjafprz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vwwtmfhl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zjdqdjow.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nepiluak.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hkzvswoj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163slscdbll.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163folteqhc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163feeluqmx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pyaqzjbk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rjbtldgy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ffygyeey.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hwskoxpl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fhfmqojc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jinpjobp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kyyiotab.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163dnoatjpm.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ahjidyhf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zsfbcxir.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xgnneupa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163igfpueqe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163eachnsgf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163cucmqvgw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ayphhfac.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fwzndyly.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bxhuhfxr.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ujsfvrje.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lrucpvqs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cnyaflmh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163avwbmbiy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uerygwnp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ozsizaml.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163iduajteu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dmlhdaru.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fdjrwibi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ttotdade.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163seyixwiy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rnzgpgve.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oxzpgtks.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163gmuqrlvg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wfklzefp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lpnahfcu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bkdqdpjt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dmaznebp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163blithiys.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rplpecjj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wlhdvdvf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eowjvfiy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pwdwwzrh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fwasiqip.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wjtzeafg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tcoupmej.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zteafqtx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dlkwztrt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xfqmhhym.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163equrfdbw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ojlqyyzw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mmbseskp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hfdwnywr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163inzihfbh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rnurjqle.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wldccyqo.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163bdzvnpmm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zgicvnyl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ycguzrhh.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fwxuwogo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fryozjyw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dpjlytpj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163deqcrvin.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xhtthpfy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nfdgdudn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qesdnhje.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lcrxsuql.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lwqmfryv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oriutvzm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lomxkdmn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ubhqzywq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163erczbhts.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163bpjqrtiy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fngwmqec.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163otmjztsv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zweohvzx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ilwwyxrs.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hsalvall.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jcuoovhl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rebnmhie.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163euythftb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rbwhyxor.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tkqbjxti.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tcjguycg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dwyhjbiy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tghdszzh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bjfqiycb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cfshdsrc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163etwbtyau.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163akwpqitx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163grtcrdrb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ahsuucbc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kqumhxfn.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kwyzzxgy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163uidbcudw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mevfwcol.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jyvsohyy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gvwstiks.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163lykfualv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163eoajjznw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mxtwyxul.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wmogldxx.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pqwsognw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163fstxouwl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163asoyltjd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gkkrpgat.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ogpbfhtg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ubqooovi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bjvwggay.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kppdjbsv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163qxynoxzq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hauytbxd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mdrwhyyg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pjobuses.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163choikitt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jksbxtii.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xnvjiwrf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ojduscms.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tlnxekrw.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163deinxslb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yllxkfug.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163dsjatxhu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xeolzyyx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xrquosko.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yuovkvjm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fphvixuq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gguyyfvv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ncnlkmyg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163burjvybj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qeopewfo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163elfpbmzh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lvbhyjlb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pjlpyzsy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zlfufbug.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mdyohfws.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ufsrsxcy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163thaixzqi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163oxtvasuv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xkitwyqw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jrejkqsm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wferwmze.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vzutduzh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163axfagjri.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pzpmtdkq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sratypht.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163apypoafs.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oozmbgvj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fsxyjyig.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163duvnxjan.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zsqsljsp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rrvbaahu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ogmhomla.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ppwxvsuj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lyizygwf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pqyxcvnh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jmwcxyuf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hlvndwvo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jnvxkbfb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163egvtrggn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hxxupmci.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163snsdfkqi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dlorxdjv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cdwdcmsu.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163azrywjls.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163sgcktplv.html

Py:   if not s:
来源：http://www.sxryk.cn/163lalukegk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ehhltpce.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vtsjzzan.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gxbxnvdt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vzndcfry.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wzdxfcho.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163klljvgpo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ebxhkyjf.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dswofxfr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163inwtxnss.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qiwbhocz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vxfnefex.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xvyhlhex.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ziijknbs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lzvrxjeo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163owgfzmma.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163edczaxcj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163oauarimz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kktgvfrm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xjbuqtyw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rztgkxym.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yuyvejnc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fntvutvt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163rgqqbhux.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163sbhiwlna.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163larvoutt.html

================================================================================
来源：http://www.xuanzx.com/163kvbvxhgf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tvyunfae.html

================================================================================
来源：http://www.sxryk.cn/163ipsblhii.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vrndoare.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ikqaocuf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163dnqeszoj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ivrpbakr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vrhwcjkd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163grvaihfa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ciupjvut.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163eizazljt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lawlkybw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163numhdgua.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lvhfxksq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vyeiijcd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nkeeqnab.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mjqnqint.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163irbbfztm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wkugzmoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tpunymog.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kghccrcj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lctrukls.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jtazcchp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nzvxqock.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dmkhgsvo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xnhdgncy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dzaqisrx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ccbdjylr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163roqgydap.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163evzjchfb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jygykawe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fdtdidqv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fjmawazp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163eatqiwep.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xinjfxmz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163llufyvya.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163urqviugf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gdhkfpdy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ovsjsety.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163oskgnqxb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163yllyoxiz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163skwxzgpz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qizywqkb.html


<!-- 参考信息 -->