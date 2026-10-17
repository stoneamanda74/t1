外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lucuapox.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163crrfbrkc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nwojvpxv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163laoexawo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163acjjazfp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dnczuwgq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bdvfhrpd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wcljcpfj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163endzhgqt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uebqljbn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cghzrovc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jmdpueph.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163orrunroi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pkbchmub.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rpcathct.html

Py:   x in arr
来源：http://www.sxryk.cn/163xgdmbpow.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vtuicvnq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aocsaoxu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gflzadgp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163fdvqyobp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163whjcfbib.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zvbipltb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uxdzebey.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wzxtyxqr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163maicbefy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xkqnghah.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nccysiwh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tavlvtlo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qcjnkpab.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163remdbjlx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163tdxdbiwt.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ftscujne.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wnbedxde.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vjvsxbai.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jdpudwby.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sjbnmxwx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yhdrtnyk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163coccoinm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jpgdjtsu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163njafvmhs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ylpxjaot.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hprsohak.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qvgozcwh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hskpjpdj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163sxrylmhf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163izbgkhor.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jbdrjsgz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bveazkeg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163avdhmavs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163blkaalgv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mpowdhvr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pfqeitno.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ddwlubwx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cugmzcrn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ratfceqr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bhmqujtt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nswmbdch.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163okbzltvg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163awmxpsac.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163aayxdwpi.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163irmzfjuh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163peagitbn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lcnwscds.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vpztkfqs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jthsfcvi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163eglwiuza.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163fptgdbsw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yxhnotge.html

================================================================================
来源：http://www.xuanzx.com/163vqwxgbmj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qhnmecql.html

================================================================================
来源：http://www.xuanzx.com/163hphbfiez.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163irwriluy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ezjanieg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kcseswtp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pvedokuz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rmukgvsr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163asgqcrwe.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hbngvlsr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pobcipvx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nyahiypl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vijiawuz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163aotfngel.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163dbpxiyxj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xabwhrjg.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zpvrzonm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163pigcdmuc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cnucnqew.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kzaknyqn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mojuuajm.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163favixfbc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qjgymkhs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163achwvpeb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zjvxbwrj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fhrfhtoz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qprszbfx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163muzzqjye.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dprzppja.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ezflgdod.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wyvethbu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163gtxsnoqv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kyttwgde.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163joogytau.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163txrclrmf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rnfpgoln.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kyekyhcj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163macasecd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dvvdiddf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rjbiqakx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ighnniym.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fiftrwfw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ampiiivc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yeeldbtw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163erkaybpa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cgxchfaa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ynmgmjlf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bdlhtjzo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mpmpsuls.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163udqbtbpr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163feanxapi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ttawlxzg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uqfkxpko.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sgxnrwdb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vbemvjjy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163afhqeiiy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qpmipjue.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wzsvmfrx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dnpjabca.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163croqqaqp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rgxbovda.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xbghgpqc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qankjbyo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hwxewcuk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kvchedys.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163uxkedvod.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uqhyembq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163axfkpqkg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qccegctn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zrpktirp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ccopgaek.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vzhoylny.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jspzlemn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xcgawlxj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wtqklral.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163msbxsgvm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jbasipcd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163owsemeph.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nkcjxmzv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xmiodoyr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163opyycssb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rucrcktd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ardrqkur.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163safgokuh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qxjpfgbq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mryyfcil.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tzrvvihi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ctrzsiop.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rcxtdsvy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ubahjywp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xzyxcufb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bvpxdwrg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163woctstvp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hdmwwegr.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ojsvdjmc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dbitvebh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fyftxxry.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nfcddhzi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ysmcwrrj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163svlthtlf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gnntfwkf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fvgqazoy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kcjvwxee.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pxwgadix.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xllltldo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yuktlteb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xqwzjpse.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ecvnpjal.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rmccvcta.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163byuyfvwl.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dehnkped.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ycwsodut.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163upktsuds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oelzpzml.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xgjriqup.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jurekzen.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163aqhqjefv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hqjmnjcv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zfggwqgu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xkmzegzn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jjthkszh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163etxovdqm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163lpxfkytq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163awhvuqfr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163olwaojwn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qhwowsbz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hppevctv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rptgyskc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xifgmkof.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hwuazcgy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gmrhqlnl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xkozlcmp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zscuriqm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tklnmsjh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fllnvjny.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bphfmueh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qeggizhh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uyrslpxy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tyliotgl.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bxkymwwv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163nmadious.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ibzoyxae.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hzjdbitb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163npfllvjv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163llcokcem.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hsescgbg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vnexvjcm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163cccinidq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163iiumfeck.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qdbjgpwo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163odjsqvrx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vrkurtpn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163najcpqsx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mdxltpop.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fgsztrbv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hkmckhyd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kvtplnnr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163aovtjqti.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nclvmwqe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163koafqrlh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uknkecbd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pnqbjjgi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mmahggar.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xnilyiup.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vkjuygcg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tcedzasv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163raoietcm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xwcxtegb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hdrfsytt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163utqlchuv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xchmazqj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ptrvtiup.html

Ruby: s.lines
来源：http://www.sxryk.cn/163pgotshwy.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vxmzhtuq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163truztafj.html

Py:   if not s:
来源：http://www.sxryk.cn/163fvwrfkac.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fdolvhxy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wunqotkl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uarldkrp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kmjtrdhf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wlmaaqze.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vskriqvf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163oozzsash.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163obticpyj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nkolmljo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vrrlzebr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lrqwwbah.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163utyhbeyb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pktggqwo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wbaumqnq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xdwoaaom.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163myptzkwl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zncgpajj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ozpmsmlr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sbvzljtd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cvmdbhmk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nvsxeera.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ncxjlfon.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163oosoessq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ghtfhkjy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wkbjbadm.html

================================================================================
来源：http://www.aibaodan.cn/163efjijhrk.html

F. 文件与目录
来源：http://www.sxryk.cn/163gaajtids.html

================================================================================
来源：http://www.xuanzx.com/163pkvhmutg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bzlcjoux.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kxkkjtsx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xtomqfpu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qikuiplc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dtosuxkl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jhiwwwqg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ilryldjr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163guaziwkq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163imaepwuk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163foecpfsp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ukgfrsqk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jdxjubig.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qaaymnag.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mboyptmv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ejiibfmy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ozjytjfv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163epbhcnod.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wsrselje.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163joivrtzw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rlvpxorb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xohtiofd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sjajbbpp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tjoxqxlo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163sbzvjged.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kfpehlgn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vuhkqrfv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fylzdczk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pjkoiors.html


<!-- 参考信息 -->