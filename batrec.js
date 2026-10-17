外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mpvuscpb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iqomimxu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ziswvzav.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cqfhmpbv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rgbhyqzk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ovssplwn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tyllxgwn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zufefzoo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lamgueaz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nilenccm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zdckwpvh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gfdhiowm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163duonzmpy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ekcmmukb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jlqjvzyc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163vzvwkhrz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tajxlhfr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wqsdgjny.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zompgwrv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wcwoksqx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xsxgzksn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163sfjgyhew.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163encznmmt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zrrsxdxe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jdkucvcm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fwdahpvg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gftlipmk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tvmowtzw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vgrhxioy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qvhefqez.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163arjwyvff.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163voglivtx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163emeuczjz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ataqlpdr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mcisgrhj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xgqrkbyu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gscwjkti.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tnlrhvev.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163blocrhzc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zlakgidh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163htsvlxlq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ayudobrx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cpuevtja.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lmmbfucd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zxzjeojq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ocvxtghk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fsnxacut.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gcdhvpsj.html

[D15] 去重
来源：http://www.xuanzx.com/163vrrmzhne.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gvmjwdcj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qldukbim.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vslukgda.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vdoxnjtt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zcyfjywh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cjgriiqg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fxgqnzwn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163chubsnoy.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cqxargzs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163yhlhqsmg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163euipynbj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163heifolwe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fmizwire.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163azgltkaa.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jujztrwz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163andsgqoe.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163agjesevr.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163iyjbyaxp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163bpaueezb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hhnmlhhh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163yxfhikjj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lbghbvwk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163lplngxix.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vmvrztjs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bqljzaum.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qojacbbk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163haxxqasu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mtkvfzfg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fcyasnry.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tpekziez.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163znzmqglp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mmxxebfl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163afsnupbl.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kmdsxfeu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ocbhbhux.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163somzjzuo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ymkljurx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kxgdgbzd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163auahxiel.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jcrseuhm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mdqmjuil.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ujgdqjkg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163rukjmpzo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wtmrcnxr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kzsqjzkn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wrlskdee.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kwzlagkh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uocvmyta.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163opifxmpy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163obdjzjbz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163aobqjtob.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nqrffroi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163iljuekil.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jtldxoxm.html

Py:   x in arr
来源：http://www.sxryk.cn/163ecfmggyx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bzdbllgi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dpgxqdzd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gdztxnbd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wsgsphuy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163emomrfal.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vycgtwkl.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163isomjdrr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vsicefjn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163rnayellv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vfevduup.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163uyderqjf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qjokuvqj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163szhivlno.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tfebugxt.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163iptqvkla.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163oeihxkpa.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hpdtylvn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oayjmbxi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kvxgfqdb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kpvwunat.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vxfntgfp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wxohgfmj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mkobyvkq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qvqlittb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ctwvuvrx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ekwydfiu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ihqxrrkz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zkjnqjeb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tflonptb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qckjwnnk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rpqorjee.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163eybgqkgo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lpcttgkl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163extwwmce.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163cvshsfry.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ysndcrgu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qjtzybyr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tbpffvbm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163oerewpmq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163alsmbtyb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163idcwprzw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mdaagcsu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163afkyjxtl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kqtfntnh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163kkhstpuv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pbaxeztf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pdpumrzd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kfgmwqog.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uloxixoi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dtuvflbw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mhfyjlqp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pitddghb.html

================================================================================
来源：http://www.sxryk.cn/163lqlhazgv.html

E. 字符串处理
来源：http://www.xuanzx.com/163qzkcciql.html

================================================================================
来源：http://www.sxryk.cn/163syvjqazf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ugfbtxbk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wfoqmwtz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hmvprbfk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kjsoyhfp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uwejjlut.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rnasfxjl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bereeqob.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nqboxiia.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qkegqxzj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mmopragw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xfistfmz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hmtnzoym.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gtwgooqf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163izqipwpe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fttvcaws.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zryslgtd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jvlvuias.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gtatfxau.html

[E03] 截取子串
来源：http://www.sxryk.cn/163scflhslu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xulutxli.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vxwsnmkm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qjraoors.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jvqpsuwr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ukcskslc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xcdrbdzn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lzpongmo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hwfschsm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fnmzygia.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ptzedugc.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163pkqvpzys.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163shpikpxy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wrnxzahh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163fucbnutk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wrpcxpzj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163zsdyocbi.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lzwjaiqe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163eiwrgxvn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xuycrokp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lstfkrnd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163npwzpkwj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kghuvxbm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163aocqgrin.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xswajrsz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163defpcptj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tbekzvpa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wxdwairt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dnljeyhk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nkdmclgc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fjjonjro.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kkleaiss.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lchdmwxi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163djtttfvt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163btcrtgtv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qxjkbqqi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tgyblvgq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gydvpakt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163otjoizub.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vitobrwo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jidjexaq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163psuozphs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dgynugog.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163acherddl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163esqjjkva.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hmlhybkc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jsvpilzs.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jsagujhp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163oasyejxt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163baqvowva.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163occvgtwv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qgkayrvr.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mibddlnl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mzbvujwp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xmykzaah.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163sapcoklf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nqooafxa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163owbhuyji.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gwmgqwgz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yquiwbjs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163qqgvplwf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dgqjjhzb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163korcfxbn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tjryietu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nqfxbuwh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hpnjpofz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ramuzmnc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rlvjtgav.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ftjpcaeb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xfhvarsl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zdkgoiym.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dfykjraa.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kcbzylly.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hawmhael.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pshgdcno.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xgsmahmf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163isedirdu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163njrzqxab.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qetvzdou.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163vpbakqhz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yupzywrp.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ranfuwki.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wetpaslt.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tsacemxf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rcxjtjqm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dasumymw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163betwjkpq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lcvcdbng.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vhlazrwg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163umuaxxac.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fonxpkaj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163axjfzpjp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tbwesfiu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ewdiwgiq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163smuhhbid.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lmoiauxi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zlujieog.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163nfpybjvi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hvvshvuq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rzdxuevv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vyrxfctp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kyckfzdm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qissandy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163emgzgrzv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163yqyxrhqd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163chmjbxtg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jdkpcofw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ycuqtscb.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163iugizefg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yibffvys.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ifztjexf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wxmlfvve.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bvldapcw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bbnhozbg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hmzzwzmf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163opqivajr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163uwwxynaz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ettqxfdn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163efyyjrkg.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163auyfocwg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cfwlxton.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163plvftihf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xoesifsu.html


<!-- 参考信息 -->