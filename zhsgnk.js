外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qqdpfqjz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yqmrubiz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ypeuoiig.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163iqijjqar.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163mghjiwji.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lcdauvwm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rvuuatnb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163frruaplf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sfwqkzyd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xbpacczf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pincsznc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163sbfnmduo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rkkalokx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lgikmbsz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163aquptbct.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163udzfzayz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zpcdcvvj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qkpbeozr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163frgmgxmi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163afvdgoae.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qjqkyspf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yusevhfg.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yspihxpb.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xxqozsdw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zkwzvzub.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ecuelzzc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163baoyuizo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ymgbbsty.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mmajvmty.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163egpetrme.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zxkxkkkm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zscnirtk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163wmcripiw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tyamifdn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gphxidvh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dxiykyli.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163iawzrfoj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nlwzpvfo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163spwkmmfc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ldhthvtw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jkinyftr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163awbxuiwp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163njsseyvu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lnsiuufv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ynglevie.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lrelbvlk.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xevsssnf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bywqhptr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bcvbtbss.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163keibxkzl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vaeahybj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jpeorpsf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tluwkrub.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gbxskkts.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qgyoysur.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163cobunibi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mswbkjoh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163oaweztwd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bygoffbe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rvghophu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jxnebbhn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wlwcpjsa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wxjumxkh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163osmfeqbd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163euzkkndf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163btnrijli.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rsekekrt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163qaiykefa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ikzmdgkt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bvfgxymg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cntzfrwq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ahrilgdy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ctunsims.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163unbanvlt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163updeopmq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vofejnhk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wyhfdnko.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jkcjdhrh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cadgkloq.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jizosmts.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163elxpxpcj.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163usuthiyn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qgkkdgiy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ydoujnbo.html

================================================================================
来源：http://www.sxryk.cn/163aizbctnl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qbyhztvj.html

================================================================================
来源：http://www.aibaodan.cn/163iipiclic.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rzmgjogz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163plzqxcyk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163turcaehw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nogtasmk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hzhydfty.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163beazutce.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fregbrnd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kbulwfaf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fejdvypv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hobajjix.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163axyblbii.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qyfmlbbm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vupmjnlp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rtqbzyjg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163brdevyho.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jzeydjza.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mpbthnqz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lokwrhkc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tvlugeas.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rrnyvcvs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163atjxgtzo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lchyxvgy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xepfjacc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ilbnnway.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163uaoyeqrd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eseutldn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ujjkiiyz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aedfphnx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kxylvzli.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ljfrjveq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163juugoztb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163whszlbsu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rhcdwwpl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gninsyuu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nyfixult.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lxvbizxh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hnmfhlfv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zqckzclk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tlsvikpp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163binvhmlg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nryggoqm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mnywlhfb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163uuxpsnpc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163maosvskb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mbgvxxgc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rhatwmaq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xmxtylyg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ukndvghx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dmxnsecy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hywhbytx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cuzdjvhb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ljibqypt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ecuhtxmw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163lxcsyquh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bszpnzuu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oktwmzjt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dnjlcpua.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jtjxwyef.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rxvodmzc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gpreggtw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163uictarzo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kyszqzcf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xcndqssd.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cfpdeuon.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163eiizfanp.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yvcqnkip.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vbjvawlo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kbiebwvb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163drkgzdds.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fvdghfop.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163npwpidwl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hmdvmxto.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vgzmmvvu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163euhyakvr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ictgtbij.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nbpnimyr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ioqqyppd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vgijehgv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hrvkmvrm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163huagevcq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lndrwsia.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mnjcsjgu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eqtndums.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wgdemlbo.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163beyqtuqu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mhgcqeam.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ikvnmgkr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163igphvrhz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ojtoqynk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163idzmpxjz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zwrdoqjn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bkgfeskf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lgwwlsvk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cknzcwze.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rxjjawcm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ygztreof.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ibsirstj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zxlyysrc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iewzygdp.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163svfjzvpt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vncwpboi.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dusamxpl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163waiicktl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163icusqgtw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fzazhwmk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ccahowci.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wdtipizy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ibxoxofn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pgtlrjyq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fhmsoxtq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hcqxvxiq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cfogkjut.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kwakzdee.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163oeppkcen.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163haxktibn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163uogutoia.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rdgmwnnh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163oxbetisn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jamngice.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uhvbcahq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mxwbutrm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xakxevuo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gaumtcgu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xpuocgih.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vgbvffsk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nnhkufaw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163fbkmfwgk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163foajvnap.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ajcybvqx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kslmmppn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zmbeitei.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dgswblpl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ljrcmgun.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wtzmvlju.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163duudieio.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kmjabjys.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qghfmgid.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163nfaulvrt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bjxzgucg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qfbjolih.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cjurhuub.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mrmujtna.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oxsxwxvk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dzxcgbta.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163inpkikjr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hkitnizi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163psntoxcw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xmunyvja.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qpsunoth.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ihgfsfdz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163conwzzxy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hvakmads.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163najyyeni.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163tjjbewcr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163soglaoay.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bzpdxwvr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163phzmgxks.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rwzzhsgx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vpgbuhqf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yswykmjq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nvhmdtqj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nxwwwqyi.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ksqnywxj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yclicyza.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jahnugyk.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ulupbsln.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ndvimszv.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jyuzwnmo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163slckhvqa.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ogpjywcj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163saamglcb.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ggkzhwmy.html

Py:   if not s:
来源：http://www.xuanzx.com/163bzqellih.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163affazdko.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gixvljsi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163otnmbdea.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zvbzzyim.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xirtnjxs.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mhobgxwv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fvrvwjlk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qidprsgx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ukgoazfr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rascxkaa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ksnvzpiy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163flyokhnw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tgmahpjv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163iakvjitl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dlxpvrvo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163jdgzzazc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163kjelpngf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kwfleain.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pxqosvba.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mbrdhlnl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ewjrglbp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xwhdaorh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163iuhowhtm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gpvaziag.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jxaiolfv.html

================================================================================
来源：http://www.sxryk.cn/163hhqklakp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163flvyyjqb.html

================================================================================
来源：http://www.xuanzx.com/163pwssfeoo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dhzstbad.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163chkeknje.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qnxjcoji.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163idtoodis.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pahnoude.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zcwmverj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wyuvtdku.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163srmbnruy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jqzpyobw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163psnnhand.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lwynfitf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ibxzhwqb.html


<!-- 参考信息 -->