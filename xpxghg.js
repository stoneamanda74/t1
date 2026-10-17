外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ducvxifx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mmupawqd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rpblyovz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163fxhwjqhz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ddrgybux.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aqjbgrmq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ewmoeuxu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cbdvnidh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ztietnft.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fnmhrtyo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ereuouzo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wosxkkty.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bbagkvyz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kmlzviiw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qapsbzwc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163npmhchbw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gtgvqobs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aypvqqcx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163csfxvwkf.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vugwmpqb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jnignypz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163eayrtjvi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vgahdrmc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ddyiihjo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163cxyiwufi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ivrvgzkx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jojosyqz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163jvnstbga.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xqtlahrf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rimbvfoc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ljbrvmoo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163yhmdofel.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cmrzpecl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163nwnuhvmp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gfqopurw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sarlltdu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rjguqito.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uobyzqjh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tovlruhk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163livfvnpm.html

[D15] 去重
来源：http://www.aibaodan.cn/163lfbbwknm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jbefooot.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qirdomgy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oaxrgbpv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163awhlhyzd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xskcshpg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wycnzhbe.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jyvfvkmj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dpdetosn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163asrvvxcw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uknkveoj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xccpckeu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qppdhbip.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hsmbtjvp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hqkdfmjd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dakmyzjd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163baxqgfwz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jzspgbct.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163deeccqyi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xqqrziuk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qngspinl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gxswroev.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163szmwjhbt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ucnfdmwx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pripcvzn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fqbcfwch.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kueijrfg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mixppcmg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tqwixkuv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163txocciqx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mulrgwsc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163bcurofsl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163falvprnd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vghmntve.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xdvykvdu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wqozlmdj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bknhpeie.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hggqujcs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163arvkxasp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rffnsfuc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hwpkwixm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iapnowro.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zxlhzsym.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163telxuxmy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163eqzgztxz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163druopger.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163isdqeskq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zixmxxlj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cirrbifi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163enpvvyyt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163oqibxhuc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163olgtvanv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163saavwwez.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cfovleqw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kpmvcyqd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163rqwhisjm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lzchcvvp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fkdyhhkj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qewyjtre.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vvqdelrr.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vufrtzjl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nfpbbkfy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rsmtdvfb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163oqklguok.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ejonalpb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163izibxnbm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163viyubant.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dnvckjcj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cxwfwhok.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163clirzpzn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ryuvoqig.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nzzirrho.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xjqodyay.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oxbefhyl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163igzkzelb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163neglqssc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163svxkfrwd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163stilgemn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qkpdbzcy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163nvzhqgys.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oyplvohw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163myphurqq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ktxuzcqz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ewufuguq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163dmlwfevl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163hlirqjbo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nwmmtqys.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zzwdmasb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wkwhzbtv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163qdeuiehy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qzappesg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tznmyiya.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dvbvpllt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163efabgkfa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jekaogfe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zviqizie.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uukodzon.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ujbbnozo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qhzjkrfv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qnribrvj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ishtgjxw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ruqfcgxu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163acvzavmw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wgminqoh.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xyjrkijj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wveiauhk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qsvetmyh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xbaocqwk.html

================================================================================
来源：http://www.sxryk.cn/163csdvnvsr.html

E. 字符串处理
来源：http://www.xuanzx.com/163eiaxtwfx.html

================================================================================
来源：http://www.sxryk.cn/163gydammlf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ekkfcafo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lsqzcxnx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qqnjucjk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yujqlnid.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163torraihz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163snyckxwn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qikxqbac.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pidetvzn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mmksagxt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jxexlhtk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dyvfzvqc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eyjxagxh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fnzaifpp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rhwqzody.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rxekitjn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163njedkbgv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163nqxukibi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nghfedml.html

[E03] 截取子串
来源：http://www.sxryk.cn/163opfgkupq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163asauwqmd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qhkbpdgf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vtrqajgh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pkuivpck.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tkcbanct.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tyymyguw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mmkozeug.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xkdhsgsh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ivhsfmay.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bowvxqzu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163lootmgbl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cahybqub.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163npdvgjuk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163lgyatlwf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ybwzjpoe.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tmohzpgh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yhbzbcpp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163akvhpkwm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jglpgpsk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sotqhtqf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zxdprybw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163anuvdivd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163optpacfq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fyesztyv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bjqgjysa.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bvqapvyv.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vwatbtad.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jiuazdpw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163pxqgpdfc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163misaulhn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163itcnehuw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nqocbkgy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wwosoagl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mlnjrgre.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pbjtlflb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163edalkyfz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rehmsmqq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jhfcvkwa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lwzohhqd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163lmtpyjao.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mjstfujx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163saojqrxu.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qrtmuwqb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163rsrhbhxs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pvqydxna.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163legddynz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163itxvdbek.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mnkewrup.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ciboxpfe.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163tftakfid.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163atfbdsov.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163yttkzuza.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163tcyogedu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163flkijszz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ovlysvhj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163sjlrenyu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pbosgojh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163clwjthme.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xkkbjajh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cynfjnpw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xephxycv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wwgzrsgm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163lvnkycbk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zrgfxlfl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cdedfxbo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163obbteplx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jazdtdba.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yjhmxpui.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163voqezkyx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cfnzgcxm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163beatuxrp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163onecmmsh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wxugeqmf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163taecttne.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163beynrcmx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ffdidovg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lssrgzdq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vychefzn.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jbkwmrbd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kfqssgpr.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163yuoezukk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hyepvdqc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tqeeaqif.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qjddwnju.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kwsazdtp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rgmdeocl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oxldjtab.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zkziwcjf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163edgmtrqy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bgqkykeo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163szhtlwer.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bqqwfgre.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163deohbbuo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ltbtsjif.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163igkkmlfc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163runtrqok.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lhvoigwt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163iprsilgb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vpsrjwcy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qouyzjjc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163stibmems.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163behpotjm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cwxonczb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hjuxsysa.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ibqulxie.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rpwyqnxb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jhneffab.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163dvbhdaba.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bjuohksy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tfzbdnep.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gaadwtiw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nwftaput.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ezichkuq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mkasfgqm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tqvybixh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xmsxhyiq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sllyxhzc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yxkooaeo.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xoiofmir.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ggfhfjdt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dooanbeg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lyexoomt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163afgozmyo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fuuvzcgq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hbmgpoug.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mkalmnzx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ftimchqt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163sjnmqqfp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gczgcezu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ncixcerf.html


<!-- 参考信息 -->