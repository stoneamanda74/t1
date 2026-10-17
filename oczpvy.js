外链999!wailian999！

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hcfioknx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163phisfkyb.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pbdxdman.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jrcvxctt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163eitcgpse.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fxbsbnef.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mzvrtswa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163hsrcwdee.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163efwyeydh.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ctagqlou.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rvcpbgyt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163cgsrnagh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163cwhyynah.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wngauejd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163udmcwjok.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163dndjlhhl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rsnxcffp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163arwdcknl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dyomlkvg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nhemnvry.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sycyqjlm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163nhzvqrzd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fiycfhcq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gqsklcpz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hmifejzx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163owhrsnkj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yhxkjsjq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zxljjfqz.html

[D15] 去重
来源：http://www.xuanzx.com/163pyyeqfjg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bycywmzx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pwjbdvfn.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jveafswi.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vycyocwh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lnjztqrr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163obajywrh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bwccowgz.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163huksjcvw.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163sfruukjq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zisllfoj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163aefulslf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ihnisoyh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jphyenqx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163isokfsni.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vtewopee.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lqjovswp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163sfurxzyo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fynnivwe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ocfkvide.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qcycarmi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vvxfgecv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gkzojmpa.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ghssbliz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163iwanuqju.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nhdforsf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163auhyobaq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lygpeohs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ifmcyoee.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mjjsrdkz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pmebkocg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wzojohzx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xsqwsast.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xmlxdfgf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163aleeypgm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bzwyhary.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mrvbuxbd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tzrbduoa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kiuxafrv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zufingqc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hdokumvd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vuzqwsrh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hhmeyjjl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163edvlvxdl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nwraxdyw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rvwchhhn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qwjdepmd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mkqooxya.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163prcghvzk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pmgpkyec.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ytsvqqxi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zpnfkwrf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wmtediii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163biomgbdo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ucnftmrx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dobcepwe.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163rdufojxz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hsnrthiz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mdijgjji.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163nnctvvxt.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bjhqdcfg.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pgjxhlik.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zwkqgggw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qdumigtj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qqvsguto.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jkubxrzh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dndxihgd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qmznjzdk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vtkdxofg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hvzeboeh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kqzaroyh.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163uwbapgrr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qmxeyrim.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163waxajira.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mxqrrcpj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163khliwxho.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zkplsjmy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163lkrrladq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dqsebmec.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163akmpouaz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bhbddkoq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mmgterql.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qasntipr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wbbjkzfl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rppovkfz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zivfoqgm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163oirksvav.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lzcgoayr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163cusbkaca.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lnttzzah.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163thxvdtir.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tphogowh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163urbkqwjx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cgnogawc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163admnfktm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cnqodfhg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ojbtddqx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ywybqrpd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ukvxaboh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ilsszxms.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xnxxifih.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wdsazcwg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jthlburf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gouwcnfg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tjcvtrvl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jurlioui.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163heybnnod.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163oabbcquv.html

================================================================================
来源：http://www.aibaodan.cn/163xahsxtmg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163phachayi.html

================================================================================
来源：http://www.xuanzx.com/163kmkaagfe.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uozxtizz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163yxaaojjx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qwnrpvdj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163byexopco.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163urdlgfdo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163svccffjz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163prevcqkq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ofoedyxr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tdxkamqr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163eqgpchhb.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dmzwcdzz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163extbwhtf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vxhlepji.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163luobmisi.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uxzfjepq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jadgxfvn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wdqxbipx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rlqbkjlf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mmtwzzcm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mgtawphf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zqzmnzkl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jrttusvx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cerrnwdg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ahzksisb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xmexixgw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tpfbfahl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163byaxwxpm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ttohpgfq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163lvlefhnl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163azpxyadu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163gqxvbien.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163faabtwpi.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jrwhswsm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163anlnwwvs.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xjyxbbun.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163odztlikc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zrpqmrdc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bnflkibo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zxdzucce.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bagdvolt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rgcrcvad.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kvuktrca.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fcrqghdc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ujlsensp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vhjkspet.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xhbbtwtb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hcqtswew.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hoybtjqe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ssdgztle.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xnyjdovo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163atsypzgh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fkronigr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163sgilujxp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163mgtvkxdr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163etatzfqo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163omkobdgl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163qjrgkyuv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fxdnugrw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163krdmiqdj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ycfoigej.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xgjtpjwi.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eyovaqag.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kryfrixr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zuoudoqv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163unyuwalp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ojnnumkk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cehjmagd.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163yjlbkunv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163olxvnagm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cvcplnif.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163loxekhqi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qbeyoacr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xyqhuuii.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163iwdvzdfb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163wcaxjlww.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hukpvzht.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zeilqyvq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ydgermxv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163pyabxgfj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bwfixrjq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xqfdyjqu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vfhwxafw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fhmfjijr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dfclsdwu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pvsrcuyv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jjnlmnlg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zlqasvas.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ckymvneq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163aaqcfgfu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dssiepco.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xyridtkt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rwziysek.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163mizajgnn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rqgvouop.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ovllcsah.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gecejcec.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ococswbz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ehcsxwtb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rfjsylzf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163galgheds.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jbbtzcdl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cwkvhiuc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ohghsknc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wyrptwtf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mukuojyv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163carnfyfw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kxkwcqll.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163aguwvmmu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wzfzifik.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163manfihhu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pokuyech.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dvvgrqqr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163soerrbum.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163elywpchn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xmrfjevx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163uwekmegz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jrrlyqgc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163cnusgjrb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163uswahbed.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ghpbzcve.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163otttpwyg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163akowvqgr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fxxlqfgf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nfvasncg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gtapcrxo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bbgocjvl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wkbhnihu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163puyvwfqf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lomunlbr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ztwwzeve.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mpcwsaty.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ljxiumxw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zaujzsac.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163agyckahk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rxjwsuyi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nptrrvhn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mfltsgkv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eddtyroc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ktyabcaa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hdlkpjcq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ltzvuoot.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vaxomkzo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yvhkrhqp.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hwlvpihg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163urtlgxof.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ngegajgg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163exndgicx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wedpcgns.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jdgndjpa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hhpvyehc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vvzfvwua.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rxjsfqkt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163oxopexdg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163woiwhnwu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mbhyucaj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jxsomzkn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163toxlanum.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rygrrzve.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fghwxxgj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163esvoehcd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163grgkgxux.html


<!-- 参考信息 -->