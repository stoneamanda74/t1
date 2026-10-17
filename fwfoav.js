外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yjpceydb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163isnarjme.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163bdyqecnz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rhghilcx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fswhnjcs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hccekaks.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wnhuakyj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163empxmhvi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hlfdwwsq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163aqkdwmef.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zdguvlba.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dkrjopdh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ovmecsln.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163xtzhszur.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bjvxqraz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wshlcsex.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163hdogvmpk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kgfpctez.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wvzanvlk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ypdqdwpt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oqsmghxl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yvjvxqrg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jnttusbg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nlsqahxq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163exxstcsz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163niifbaak.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iwqzmhfe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pdsxwqvo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gtgkdgff.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163omaqwojm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dihabhww.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163emnhxpyr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cwvjikox.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qsmvnieg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xgihvhan.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163fdfenisb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163npdfcnnp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163obnewnwc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cqxrsufb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163uzkxovue.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zhedwitu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pgxjkchg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lpldfjzq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wbnqbzxx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qhkgkgtw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163beenqrtk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163mveydqan.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163aqlpzlfx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jkalxsqx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163uhmdomwy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lsppgsqc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163atlnjdfk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163aafsoknt.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mdaxtpcz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ebcezwkc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oovnxger.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163aoxarzpi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qzzwnebp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ppanozng.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tujtoitx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rtkrneod.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163atttycut.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tylewqik.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vrkslcry.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xeabwdaa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lyyzvssa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fxrdntzb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ozqrqpos.html

[D15] 去重
来源：http://www.aibaodan.cn/163vzvkvjka.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nsivfttm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163rpccrwqi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hkkdgcto.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xufmqltn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vuwjcxns.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gldvsjnk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zzomvvsf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163meftmuyo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bfqaimxm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ovudpjjo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ishblevz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nuvdvhjk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sujirxen.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163toluvqki.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lxoypjbz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163knspzzpg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163eawzmbvm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uzcbkhjx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bfhiqgzw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gdpghgqd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eisluxln.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wzsipwcb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xaghvmhr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163owqbpcnc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163exszddyt.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hcifcjjh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pczfuahp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bzythfpe.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wodxbbhz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ypcvttzy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rsrlivpb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cficjgfu.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163frqovrqo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hqlnwdqs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mmvxiawy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qgfvkszy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rvkryyaq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rwqyohww.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163smqhvkoz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fshkrzzx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163icfcmnrw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ajsiyuia.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ddcppstk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163puoexwqg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ltfduaqw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163elcptulh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vylbgqck.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qjkhtqlc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163htlgwjod.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163quidjdba.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163molzyrgb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qbvsrfnh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jlicnbet.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zklwffje.html

Py:   x in arr
来源：http://www.sxryk.cn/163iepyupxf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dkisvsvc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rfkbhytl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163slkdhndn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ztbksjfr.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jpvixrmc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tmxmwvco.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vdejwdkl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qfnjskhc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163oxwyiode.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fggyedwv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ayticofa.html

TS:   [...arr];
来源：http://www.sxryk.cn/163remwbozq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163bvelsyzv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163frdixyng.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qtckdqwh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163sbwzmgea.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tmyychkh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ewevjgmg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163txvjfdow.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sjekptkz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163keqvgxnv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163emvyshlr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ledssnav.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zwtphblk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qraoqqjz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163debyepna.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ktkkycuy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fcqfxvnm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163itunxmfp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sondevmx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163bxahrghb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163oxdsjukf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163chlcmxcu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ypfnejjq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163edhtibup.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rnjbmrde.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pouikkhg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tyfjnwrf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hqfwmpve.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ydfcbhzw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hbavffwa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163buosfhrq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jdxviifj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ncrbtzmw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pdhkapux.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cshuqevj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ldmxpnij.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163calsbkzc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dwlhlxng.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163uvlwzaqp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163srpifgpz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163luvzaxiu.html

================================================================================
来源：http://www.sxryk.cn/163lmdehbhw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163koggpkgc.html

================================================================================
来源：http://www.aibaodan.cn/163fadzbklr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163smiplcgj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163agwaqdrj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pfxzamvx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163byvjujof.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ohcbwmed.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yioqrggm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163eqifmfre.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vtuytbmo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wukohzlz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163azerppgo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hmkecpzs.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cussbuoo.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bjkdmubr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tzepgqsd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kozlropa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163puaydyhw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163nnyhffif.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jopnpivo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ixdtgbem.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kqqpdyio.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bctqnwuv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ahxdsxjd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vmirrxtr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kjlnofvd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zrhngdwo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163agasmuir.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163isbposqa.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pdwekgge.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zzvuelrm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fndcdalq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163unbowbhl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cbbivpcx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163lnulypwm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lgocclaa.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gekmvdnv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163puhbnrwi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ybndffac.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zxktamtu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163cznxwaef.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eabvzfmi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163tpcqnanm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163doqpavvi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163locrccoi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163aiphtahy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zdvonsvl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qgbemaii.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163atmzfvph.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hnvebtjn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xbcgebpy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163alpmzfzz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ouokgdrq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163upkyffhg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mokdvbaj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mqypvesy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nwxuukgo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zuevxadu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pafdakxp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qdmyeezs.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163asjvboke.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vegczmbu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lwmeuaym.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pttvxmtj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163onsrayje.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ssokwukl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163sbcxgjrj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dbostcmq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nhwexfuf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163psqybepr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163azigwqbt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bibgmjro.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gcsktpmh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vynigrkm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fjoamwhb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gvcybqvf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zwrzdkzr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sfawexrr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iverbzcx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163whpzqokg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bxcqrxqn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mogxwqwr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ncjxqzfz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163oytrzlju.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ogmjfmoy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ecxostob.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mgqctfuz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163oslxqblj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mcragasy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sjatajfc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163reducdzb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nkxibecb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163stagbyzz.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rcnrfxga.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qzumtmmc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zesuqeqb.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hcfwhdpt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wjwlreqp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163piebwqlo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lpfajveb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ttcjhznp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163fdqdaykb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ofyedhre.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163czadbvqr.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bzinunsf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rocgjefl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rfxzgjxa.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163uimsscre.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bssyirvs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gnxdogbi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ywmpgero.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hrfnktso.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hrcpsjpc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uwohynbf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ilzgrmju.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vgbvpmkg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ahqxtllw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ftpqjfml.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qnyyqtyc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jqhctpef.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163prkwpscg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163eclldyrn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hpfhmica.html


<!-- 参考信息 -->