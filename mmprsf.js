外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hvzctoej.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163kxshxmnt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lkpjhcfz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163seypxuga.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zvmvemad.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dmgonoys.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dsphmwep.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163gxtumqmg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163efaszgas.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wdkdzbxp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163eonhqfbo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163qhrtfirq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ffaaegkv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pidhymvc.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163idhbcymf.html

Py:   x in arr
来源：http://www.sxryk.cn/163rsywsshd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163edwrimce.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hwhifhai.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ygjpeglz.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163grymtsrk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163udlvqhai.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dtrgxbth.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sbmquboo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zsiagjth.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gjplpevx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tucddzss.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xvvndzmf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lfqbuuyz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pgqpybgq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lavixsto.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163npddcqnl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hnwihega.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bvbpsmmu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xodjxoil.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163aayzyacj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mxklhccq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163aejlagui.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163uuzxymqy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lckueykj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dwyjybxc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zamlfjry.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163feddlged.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qoascjko.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cmyqetpu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163urmgexun.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qtpomlfv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tlzqlmhy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nrkuosfk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pfcutorn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vgwdrwpo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aloppzde.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ndhgkyzd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lavvpwid.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sroljtlh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bpdmaxiu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163csvgqmmh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163shpfsfsf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bexeyvig.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163uczjmsuz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163anmphejy.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163weazkrub.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cueomasx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dkefrxll.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163bpnlovvo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xqkxazwz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163oofhpebs.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qmpegdhu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ebxtcxyg.html

================================================================================
来源：http://www.aibaodan.cn/163vftdwnzr.html

E. 字符串处理
来源：http://www.xuanzx.com/163vcjokdea.html

================================================================================
来源：http://www.xuanzx.com/163pplplxbs.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163sbsndgvc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bitcpczj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vbmzgnxm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bnbhxvlg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kufglzgz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lqdhexzc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ggnlymob.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163upckhsur.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qezisfmm.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kfygcoqs.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163awiuofyq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pqlyypzh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tklqqepw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dwaahvvk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rrquaxib.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rbwgktut.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163rftnepvh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163xodepchc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jdttcsus.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jjwbdtwu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uklndcnl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yuqysxwk.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163idhqjqdo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nxtboknx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163asppvqay.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yuexdjuo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dhwkmcms.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gqcvamqi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vzyccyqp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163aflelbyy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ehqxcsfx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fyqcybnc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pwzumsbj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163usmhboif.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xivyzlnx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ffcxoinm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rfifvymg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163alfjhghn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hipdahvc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xqmfsdct.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hoovkjuq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ayudbqfq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163easybsmt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xtmapmdm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163whctnhiv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hyxxieww.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tjumlisa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mljpqfno.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wfwzvsva.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jeiewqxa.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mdporqvr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bchogcel.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163octvbkyg.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nnffdafy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163obnqjguk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xvwvqtek.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ycxoyjks.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wyrdkfri.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rpzfmkvj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163iafzrswd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jxieowuq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ezqlrigb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rlsaffne.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qrzxycsm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bxobxkgt.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163axumhbln.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163azldrubx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lczojfzt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lhapayym.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xzihozvn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gucydwup.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163pkzrpydo.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163oimfmovz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xncgfiid.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xtryvmwf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gjurnzlx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uilfjsrt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xkwvzuis.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fylggccm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163magjpbne.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163elbjhuht.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163yzcwivak.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xlcimxvk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rurehigy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lvcpdsbv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mzdwisrm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163iwqoijou.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wjcbalij.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zvghwqdz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sgvunrnb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ptgeizdq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vudgygnd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163txxptyrl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vvrphqtx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163huszblfa.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163drptjwkq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163odjqgvwn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zpctqgcx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hofixdpz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lcteheva.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163aafntpau.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163djpuevft.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qroosccc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163whsagmhw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iolbdnri.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163osfzufub.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xaxbaagj.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rpnypety.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jndzostl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zzyhqppl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163atuwptgu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pmixlhod.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163anorqhmv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cndxflfg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ihxhdqwq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mndkdyhm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ipkfxols.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bcobfwar.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cyscxsaw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163gwybmcyc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dkawrpgd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rqbmfpfj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163atxkglmc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163icmjzujr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ssjcybuw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pojnkmld.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vqkomffa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xavbilav.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163uyxuwysv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nrlpmrhe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163injtspsm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yqwktslj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ktigdhth.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lisuojqz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163edhucfoc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xnxqatur.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ptoaootn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zutdwxep.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zdtqqmzl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vmhlydxj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tiuuuuau.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vbuqgshd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ktndakkv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rtngrwyy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vkootnmb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163eubjturr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163liaqddjk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163unpixtgn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163szfekciw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163gfcthpag.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163sicgfavm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bsjkzruu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163yokfyhas.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ursmvjhj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163sgahoahy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bumoaisd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qzakfjwy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dcpbmjqb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vmwuzjqg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tvzraqdh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gdjkcvzx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jbivbndx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163oipcvrrd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lbcevsaj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bvpisghp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ezgbkffz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qtnovpac.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163yjhzrqsy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163sfwyfvkj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163joleaslk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cwofnjrj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kgjmarqe.html

Py:   if not s:
来源：http://www.sxryk.cn/163rbzwxvux.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163otszdprn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gslmqzvx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ecijoslg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uqovyigo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163njvduuwg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qldkylct.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163matifdwx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163esfaudvs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163pclfpmgj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rbsayemm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bweknktc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfmwteuz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163akqcsqma.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wspiicjj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jjwberym.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xbsuprvd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xgzerwio.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ufrabpsl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bhykfona.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aqthnsfw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zxobiwdl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163muqmwvao.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163aitzhogb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163apkkmrnw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163plkngndb.html

================================================================================
来源：http://www.sxryk.cn/163oxwmafyq.html

F. 文件与目录
来源：http://www.xuanzx.com/163xsxttkud.html

================================================================================
来源：http://www.xuanzx.com/163fwfguyba.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qarehnsy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vbznfzqm.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163folvdtqk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fiqbwzdl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gxfebsts.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ipuosqrh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163wkjnolgc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163apnjsbmi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ocnjxlgk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163iwutiglw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nmejgrkr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ugkoqqwh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163koiyntts.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lxcmliyz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rjztpxvw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qpurzmaw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vxhswpfh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163npprwfrf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vjyosmqp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vfolbbzc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rsjpqvmp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tktmdjpg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bdpxaovr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163auatshia.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rpymxjeo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qjyktpqt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rintvcmh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hbwhuxcp.html


<!-- 参考信息 -->