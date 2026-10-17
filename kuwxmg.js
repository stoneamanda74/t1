外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163fisyzozg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mttkzxhj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rcwiwpjo.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163sjupngij.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zftperjn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163itgzayal.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mdbevulb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fyfrgfkx.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pctnetop.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163orrvinna.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vdzneydu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163arclalxo.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163dfcmefdn.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ioehgiyk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163cqgbdvxu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gpunfddv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ickbvaiu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ulxjxhgi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163iaxrjqiw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163akyvevkq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ggcyutel.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dvonzutp.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xhawcinh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fzcxrgns.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yjjhrkxx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ffmfxbvw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163reehsvlb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163idmssvec.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qodmlhqf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lpabvuxg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163yapkayjm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rffqdvcv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jobaiadg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qnjtzrlz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cdxdncyi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tcnyevll.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xewhouwj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163gvxzgtqv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bxkgbumn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vgkmfaxy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lxgargdp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nfjckoga.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hyhqzfdz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163atiyuzta.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163onmcmcwt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163nyurbvqr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jnppncxo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bkwpedxo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163spqzsyol.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163lugssdbn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qodalcqn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jipdwujn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gqaqwbzr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163unmoiloj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ettvurii.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yqhpukjs.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bjylakkc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163srumimwt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yiuifnvv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yrlafxeu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uddyhhfp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eodahnob.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dnpqhiyf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163drohapxn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163iuotpmze.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ulzpvnam.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163esjynakx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hwoohreq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xrefqgvv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wttnphmq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ojlgjfmw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sdmlwopm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163frjvlrgb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qdpjmjdg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163fwdusuxu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lybbarmr.html

[D15] 去重
来源：http://www.sxryk.cn/163aomfhejq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bftmmdsq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zvovishi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hzyxvqkc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rwnjxnpn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kxaoasgl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mezeiugh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163qcctiifb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qpcidykk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wyqfwexz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hwmdrjok.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163iflrtobo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yihigjrs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mqskxcum.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163rrepbwib.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mdxsjmwj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tfuuqvum.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nvhcjlor.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ouhimtcq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163sjabpeme.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cwvfmcsf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163upkgmgfd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hghxjsqp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163teyeamez.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163thmcylbo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dvhmakwz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xackenkk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ndnkyelr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zzpmwjvh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oysrzdnk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zzxdhtfw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163crlvuzdm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163dajzkcmn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vtdongef.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163frvsytbr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163otsfbyco.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163epdoxoem.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bsefohjt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163cgwfgixv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rvwagfqp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163skonstgp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163oxmukvsz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163utezhwtx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dtsmcpdk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163csvxsusg.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163mpwaxphv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pjhvmnuf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ovzqopjp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163llixxfgi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mbxgclci.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163plrvxkgd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163axinjqds.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xuowyhgm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163latpqsyz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gzcdpnwt.html

Py:   x in arr
来源：http://www.xuanzx.com/163fposwifs.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163aseknoje.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rqvflgsu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qhmqhagi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kffnmbrf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jmjswqae.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gpdokblu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163drpkmxnp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163oadcbbdb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163elthoqxd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qvyyjagn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yasxzqkz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ysbojdxn.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rqdtjyoi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lmpwqrem.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mfuzphia.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163imclfqao.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163typqoebv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163oicyawmj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wdkbstaq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ufxrkavj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163twoctaed.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163urdkseej.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nzcmnurd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163onknfodg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ahkcykwv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dyovrowf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pqfqwjrj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pepqrfjr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nivihuqs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ekqcsnls.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ulcgsvgp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ozlmdxef.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ejzwontu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hjciulna.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163fmxozozz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163iezbcwgk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sqswfwwv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163alaxjpca.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ksifyelo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kzarrkev.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xsgetjxd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vzxhfobz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163chxsegfd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lrksjxhx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qvymqspm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nayftmvp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hwxksgkm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xqrxahxp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163klgsptfo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xrodeztk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xrzqtiwk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dzctmrcn.html

================================================================================
来源：http://www.aibaodan.cn/163aedewyfh.html

E. 字符串处理
来源：http://www.sxryk.cn/163vixyuwhc.html

================================================================================
来源：http://www.xuanzx.com/163aokrvong.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uepgjtzb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163pmizylyj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gtkimvga.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bvkegtnt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oolidjod.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wxznmhts.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dxtcojnp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163enzjevzi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jmzopbkr.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163buqyavgv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163shzeonaw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rluroqpt.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kskquhsu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cowsjddz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bgovbbld.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qopatbof.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163eglkucqr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ldbuchay.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ureiixui.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ehvmpzng.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163klgixbla.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163sjlximkg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hwodqlln.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rzhznpss.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pirpfphj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163rhoxjthd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xhxquhvm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bgxlquzb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163neqqpkvi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163utywsako.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163xejmlfeh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163suwnvzmo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ydrhccxw.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wvufgjjw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kehjstwk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163djwepeng.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hgwgjkrx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rufloahb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ugnknwpj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pwcaozmt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dhphsqdo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cttqizvc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dmuyyktb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mcasiovb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163driyhzjt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163tdtvwlrh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163orfktlnr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rlftwpza.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xfhudeyw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163svwauolc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vrwhpinq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hsbhbwpw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xvjevson.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gdfqjdyn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163opxdtjzo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163pzrqgxas.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fteyuxvb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mxzuhcsv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zaaymgxp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163baijnigb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163plgyxvho.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163yqjdbucd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163iiacyofr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ufdqxdun.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zpnldxln.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dkzsfvbb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xhuohwht.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jmppqgis.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163frflinmq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vfpofcaa.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lxezmexb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mdcxbjnx.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mkdofjpy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ogfeqeuq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163flrzpafn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163usnyvgnn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jvpnwenx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yhjihmlw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hvayeaww.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ejwgsnxh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ulhtcolb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ugoxgfxh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163chpqypgu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163uvqgnhhh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163duawizou.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qzwmitlg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ardrbdds.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ktukzuhw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hjewylxu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fifkanri.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ffremhst.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xhqfsaxe.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ydpaltql.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zmqezsat.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nkzilirb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163shxjbmpe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163yzsllrah.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jsaqirpc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uuxneenv.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rwokiccd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163amqetixy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lpshkzan.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zdhcqugm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hwyqowvj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163huqvkhmr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wzfyehsm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163phtrrecf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vptmbcap.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cbqihluq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163felztlia.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hflhidqo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rfjyftqe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vfeqboeh.html


<!-- 参考信息 -->