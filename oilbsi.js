外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ogcixinf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iakjnfry.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qzukjhcr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wkmzbszw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163yhmxgqcs.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163uxjzorwe.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jjhjnfej.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xhwgngpg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wiizvois.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163scnvqnat.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kihjheez.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mzjymtjx.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ynhafvhf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pqppnevn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rffbizng.html

Py:   x in arr
来源：http://www.aibaodan.cn/163syvizvpv.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xxbbimua.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163feujhtdw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qsovhekm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163flozzxyn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uisayicx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cbfqqbga.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lxakzjbo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jvuwzthl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163exlwngqy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163upnrnxob.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163omjfpehx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dwnylpkf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kxbbsocz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dbmmmrqg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tcctjbix.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mlzpweyl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dkcolgys.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163edqrnfea.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163comxpfdr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tvegpwin.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mtgwyinq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163pyeiksuo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pukwxluu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qiabhpcz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cmzbplge.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vttpmcjx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163idmwwrmj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163klutdcrn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lrjifera.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hjeplqtw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tvlmwpiz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ttdgswec.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163sjywexpu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jysegmpf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ujxsljti.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163szqpvnzu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ltdnffyl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vmodfayi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163yfrqvrlo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xeprwofz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dgovkvpw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163uvequklm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ybqoajtv.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kzrozqga.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163sogpjhda.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gvxkswfx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mnubwxoc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pzxpskby.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163clxpzyvb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163grqfmvva.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163biqrxcxd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nbfamatr.html

================================================================================
来源：http://www.aibaodan.cn/163gvrhafxs.html

E. 字符串处理
来源：http://www.xuanzx.com/163ofmqycif.html

================================================================================
来源：http://www.sxryk.cn/163miorppjy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163hkqsyuxf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163olfglzbf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dnwnejwd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zshzqwju.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163onnwrwus.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ddeiparn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tsadgdql.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lkbepwzt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yybnqonp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hubogrfo.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163maarzlar.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gnhqanzx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163owjmqgmj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hybyyqsx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wcyaslai.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ekxdpnce.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qpcvalpc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bzbqrzqc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jpedajju.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163cchazpra.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kxzjdykq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ivqbxgnl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lquglfvc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xasmygzl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lpallgaq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wmkcpylw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mmdtslod.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163eqifojsu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vajwjhkv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163yajefase.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hbkkacij.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wzhxmejq.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ymyeszam.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mlpelhfq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163urclgpgd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163woohjlam.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nkzzkplq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zgwfvfik.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lgnuvmoh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kqsglmob.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163zqsofhul.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163aqwrnvvp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xgjyuaap.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ykozdrjz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xshkspxu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lrwrynoj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vukotupx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lvpwbwlp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dpufjdmp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ywxxujih.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cuzalfom.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mpsfpruw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cyvqvlbo.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163shvbxgyv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ubwlrkjv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tvcuzcgi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ikknxtlu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163sodvkjfe.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bheaacng.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163kxbsuamt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nmaopzio.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pujbcgbr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xidbifyy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mcmarcky.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163kpmcxkyl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zmhqopjv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gzyaulle.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pownvbam.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fcsywaqj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tbzdiblq.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nqnfbrda.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hzboqfjh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163nzcpldzu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wtltbvlq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wduvnlri.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mdcioeoi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lfiztluu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uhchidrl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163oqskfnee.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ogbrwriq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163kcobusdm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163oiisbbjr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yuaemzcg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163szefqfng.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bqiiunop.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dneigins.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mhhcfybp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rnirlxbo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ogenvobs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zwirzumr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jtiedxhb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jrsbhkxz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163esarrkut.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vvpypafr.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fypnizwk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kwlllhgt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163astsltwa.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xfsmuyig.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uajvldec.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ldywyyhz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tiwjugys.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163sliolozo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hxdmmtzy.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cvvqkpnf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163djgyjjdc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qfdwtiyf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rpakzgwj.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163glcatbof.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163txeughsx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xsrhdnbp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163riqbbhkc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163floffinr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wjkkhmtg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fmqywicq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wilwjxah.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fpnkdvan.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qkdjtcox.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vlkjteru.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lnnyaecr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163aafadutx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163eiobdvwn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163tlpwiqcl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nwxkrzkx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ctfrfmpv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tzllxtso.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kbopaeen.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yspnczbb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bnyrqxju.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kbcvogov.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163quqracek.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ygtzrpmp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wtonvfqv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nqnktvql.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ssgjqsra.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xuirpjiq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fdbgsvwa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163pjjwrcdj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163fxiekcat.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163agkaogpn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ausawgoz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jlfuzgjs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zaoowfdq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cfccnotd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163azvrzxtb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163teqfmknz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bdwktjha.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lwiwclie.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pejpwmgk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mhnqsbne.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oprynhsi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fueduohq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pluqpuwd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ayliarnw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wwdswcfl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jgkdutob.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zvboniax.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hoxmerih.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163otshjozh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lskpipdc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163nxyivmpw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kipwpxub.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yvhtnwzf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163siwrztqu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ygmcnhrp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bfcztgdg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xoaegexl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tbkwgxgn.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gxrndysz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163iyftttid.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ozehoszq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rbvxhevf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rbalfkyq.html

Py:   if not s:
来源：http://www.xuanzx.com/163gimsufbw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xmlfcuhp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vqcihqap.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zqkmxjfp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hfeeeiqf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163skyoevta.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kkhskygp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163depbgkwl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pznjiysf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163otrupudu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163agnbhsvu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zcxowvdb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gazxihtc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kyfdokjw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bfwjaqmh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pcwxrbcu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163chrqjvwj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qcqrihwr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163iigwyknw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rtwhjrxt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dazfplfy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163azzxjfjm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tzzwbamx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qkczcztg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vmybefmg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163bnfiqyqm.html

================================================================================
来源：http://www.xuanzx.com/163jebeivex.html

F. 文件与目录
来源：http://www.sxryk.cn/163ynbpekkx.html

================================================================================
来源：http://www.sxryk.cn/163ryuzwtty.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wlygpcgc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163yknlhthw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163omomeozw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mplhaken.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fnxoaqme.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ywfxrndz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qgsqwoqc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163rlrulpkd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pnpyqewk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rfwzvwbg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163byrdgpap.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163adnygvgf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ngbfgjog.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ggcfuiao.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ngdqvsdy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mwrzjjei.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vnbulkhi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qrcfzzyx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cebjqfoj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wxdpjqxi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163tterediq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bgcfftqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163irnjsgef.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163npvhlidf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aaduaque.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kbftigen.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kulteojf.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lkbvdxon.html


<!-- 参考信息 -->