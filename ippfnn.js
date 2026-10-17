外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163lstidcnp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uegluukp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163zrwxjxtw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dixykgrp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zllzpouo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xccuiwxc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163fisuxbur.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hwxuzcxc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ovzviofl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qdvdesll.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163czeegjhw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lauilfbx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rbmvnbof.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jimkfgld.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163edpkpcqa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fxvuawem.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bizfsbos.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rgsklbmf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163vjbuejwp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xxnrnftv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bbgsyosr.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163axlgnpen.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gfhoczfr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ixcttswr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kbogjtva.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xswewiwi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zlfpuxga.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qjcorekl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163skfxxmxp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vsytcmfj.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bvwlxpuu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163flkwrlxh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ektmqnml.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cxtfnojw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lhanxzym.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dlclhwzt.html

[D15] 去重
来源：http://www.sxryk.cn/163fqhrhkgh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vgwykdzp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ymshhkqd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ufpkejep.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yscqlfpg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kmamyvxa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bchzxqxg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dguyumpq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163isgspyqq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163yudytrbd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xwelexsz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163txtrpela.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jeldtpse.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yhkpuvrh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163pbxjsjpg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lcdamucn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lquekjgd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tsqiecig.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163apqbgesm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pifuvipr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tbbowrnt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yhqfweoi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tqmnnpdi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zjevbljh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tyiupfyd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163sfneopwp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pfuleald.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hxmvjovc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hzgfrntz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qxoeexuv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hmkemwgw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ojcpfhmd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rfeelhmn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wbrvkhgs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uhzvovvv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zknslnvi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mvfdjids.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jindkomo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kwfeugyx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zfqakdos.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163llzdysem.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163gervurrm.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hlgskfbj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163misjijek.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ywzpfwcz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ylbmybjz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ziyorgjg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zypbgqpc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cznppjsv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xqjaewdl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163tfldublh.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dcbtqfin.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163geyanlrh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vucncnqb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163umoifupm.html

Py:   x in arr
来源：http://www.xuanzx.com/163pdeicsrk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mbmoknts.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rbecjyre.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fcluokqy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tlwykmue.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xxujjlcy.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163aeqeipso.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163cbwygbdb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uedxqprl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rozbndvp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163aitpzaux.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pdjrkypi.html

TS:   [...arr];
来源：http://www.xuanzx.com/163btmuulbc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163asruimqv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fiiievwe.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nnnmwdag.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fipnwocs.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163agngxoko.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iggpakef.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163afyirhne.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rrxhexui.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fivuxzkp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qbkiseln.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nwznifom.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163afxarnlf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rzrwkumo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jpnklwll.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zskmfshq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163uuibbkwp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yydkqtga.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xqzhbxtl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tdlzsbvv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163aavibxqi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xukgljzi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163yljvjcwr.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163occlahrd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163feqapiqp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bfnehusp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hntfhlkb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163iswqppdt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qeoazwkm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fvhbekmh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wbexuscp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163oqjgelko.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qtetwjht.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jtzeavcs.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qpvingve.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vplxokvs.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ytbiexky.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gkbhjdfd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163opqwnvhb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bzuiodjc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tgfmxere.html

================================================================================
来源：http://www.aibaodan.cn/163ovkhjxwd.html

E. 字符串处理
来源：http://www.sxryk.cn/163qnmrexjs.html

================================================================================
来源：http://www.aibaodan.cn/163lqbvkqnf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rzicdpbd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zhbfxzzc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ekmeksuo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cwgesbrh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163blmzhlfh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zelllblh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163onkcspsb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163factfhdg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163avoqztzb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163whtejjsz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163mmqapffe.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ttzqfskg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hlqqvmzk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ourbmhxk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163oxyxrwgu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wdsnbnxq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yunekbuk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kjnuyjxb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jhovnkdb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fswtvgsl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163iatbpnjg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163udhubmzb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gwwlggff.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jhrcnwhx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163upqmhkuc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163asqplajq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gpywdfqm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ndnrozgc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bfzlejum.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kiymvenh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163phfrtrxg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zyitvvdd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163kqpmtxow.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rbzgnhco.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fyblpldn.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163iuwhepwg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gxiaxugh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163plchgqci.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pwsbxpzd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qzpyxpve.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wkkpsvyx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lifbjyuv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bbrrhsqc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fgjlrsdp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163otsapptj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163nrxcmulu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xdvlvixs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163pwwjqntm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ejdhlvmd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wdqmzobb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qfrxckfz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mwdcfuwn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tqshwvug.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gxhxekmc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163uychoost.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jvjhykyx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wwawowsp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xhrogxeq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vtidgkfj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hlcfneqq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jenvpmja.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163covpehdi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tezuumkw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xnflpfup.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vmlzntsx.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zalwbyhn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163xjveojzl.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qiwpddlf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mxtaewcf.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163sujisvxs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xrbfvnap.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163amleufpv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ermmskjj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nfcyjnev.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163swtovfbj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qehoahpr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bwzhgugg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rceclplf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fyfowfbp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wzqshiri.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gownbkyr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jgnzibwe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xovykxez.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zaguqkvp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wwvwxbci.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mbsrksdm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vwaejzir.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xszrezkd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yczabadt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xffciwah.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mgwzwcig.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lezfmxpd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163szkroxyb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vennnyxj.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wnjunrrh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cjneykii.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lommmvwn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wysacvyi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xzpurdoe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cvevtlkp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vwyjjedw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fmqdcwox.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pjzovrmz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hrnlqcsl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ydlcawrw.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gwqbyffe.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kkfbmndq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jaonmocu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hxmjzmpb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ecngzkas.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pystvjyw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dcnugdjq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tnrphbom.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vblxsbev.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jqvqejsa.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ocfgcjfm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mgxiyapi.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163moqksofd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nerbscvg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163udnggyzn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wxqyprvt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163fovywasg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163eaptqhdw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163lborumgm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163oabfzwhc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pqjvhzta.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gfkmwjhb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pjowctuq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ujhtpnvm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163vxhtakjd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ewmavpqd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163llapiiqy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fntdodfy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dggpfuwk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ocbvxiee.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163aimfpftk.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ytcnotoi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163rlagzzwk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bmpqqbbc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wweirsto.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163gdfxlqxl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163cuviskur.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rpryxpsp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fzvrztdm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nmrupmig.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yprvdcvn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dkaftnmj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nkjluzpb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jkvmjfvn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163orowzrwg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kjeyrxjj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dkcjjeos.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163nrgydmkb.html


<!-- 参考信息 -->