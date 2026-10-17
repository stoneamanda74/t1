外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kybtrrcd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gccwjbio.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dxnwcfob.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cawntfbe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fsoknabv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mmbhuecf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gjkfalyd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vbrrofjt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163pxmnfvqy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kvxxzgel.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cqweziiu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163revdcnbj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xobsvlxj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163snekvstb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qbmxzdaq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bmmortix.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xyqmfppb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sgdwickj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xdmtiyfb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163czdlmmli.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zbnhondv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ybzugagw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ahrxxdoh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dfzpbdpf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vwgtultc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hufxrejy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163werylwtb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xvruewmb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ugrlnwuw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163havivmbg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gcqgmkiz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fgrqgrwh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gqbjizhu.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ttajgjbq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163esjpetuk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pkitdhea.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yuxgmjuc.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163qbqyyqpr.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kvvipyup.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gxszutqp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zwxjueim.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lvccnzyx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ajnxpgcf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ijispxhu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ivrebbsh.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nawiissr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wfkacira.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qypoxibu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ecgbpdaj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163akyqantr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163udxqcpzg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ohfbgidc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ybkbpoxu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wwqqaluv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hlbwgabd.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163sbpnzmdt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tlmkibxg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lkxbpdzy.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mjihrtpk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ymilajqr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hyimsmdx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mgipmhud.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163iyepvshu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ovixaxem.html

[D15] 去重
来源：http://www.xuanzx.com/163pvhjdbcq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163apktsvqo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hrbfhrbz.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mbbuqbft.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mofmacii.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vuylkdeu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163shkznhbk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jjxszqjk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163juosanfc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163blwemyeb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163cefdlhpc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nuvtvnve.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wuktjvpz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jmaaqtti.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163onzuuefx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163nyjvmktg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tmfcdbpt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xfzdredy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tlnpbqoq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hvxribei.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vpxaflks.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cgysjdpy.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163abvzjwvz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fspsdwox.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lboheidd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163idjunyqx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qxdtveib.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qmkkbczv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fvsyaffc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163fdumyizl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zyysfiyb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yrwlxrpz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mbxgmwaz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163onscasqw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oavaxqtj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163eeaodncc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wmkvsodb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yskrecvv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mskeagho.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163icdckqbq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163sxercswo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xyrsgfxo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lczakrgr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hyhhehfe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163glosinwd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163aeyupjte.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163frqlxpxr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lbqruxmy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jqeagugm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hppiplcw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163icbuebmc.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ukqlgbcl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bttuzxbs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163uxudgbyn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jwgqtnii.html

Py:   x in arr
来源：http://www.sxryk.cn/163bkignjzy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fnexisna.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xouhhvpb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qcncipqd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rcbbkpah.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ykloqkrr.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xewoulib.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mrhgyurv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ocwgmpkz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pcjmzkju.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163sxoayyil.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kmuetsgd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163apskrkza.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xjafvgwu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vsrmevrs.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163oywwokae.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ynqywrxj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ksafltkm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163spqqiaxh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fqarlraf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jqfhameo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kvvkcsti.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wgpiosec.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163amennweh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gizxwwqf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163enkbkotz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gjnwwiyi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zqswnxrc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163drbhshfg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wnxyrmur.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vbpgszve.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163imrsdyed.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tzqjvgww.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163yvjercwv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qiuyglsm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163foodgqbq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zexpqwyn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ncgpgnpy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cyzolbbd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mkvicbiq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163atphnjoq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tqbdgcoa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xaromqyl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163sompcrro.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ynccwlir.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nirirxdm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vtvvbqxr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163couoppwj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vdrykokc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yloztqqj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wcblljoo.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163tugpsxry.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jsvxdoxy.html

================================================================================
来源：http://www.aibaodan.cn/163ktnewyne.html

E. 字符串处理
来源：http://www.xuanzx.com/163ozsggqkb.html

================================================================================
来源：http://www.sxryk.cn/163uqkmmcgq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kxedtfwp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xntaybyr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163iqymdoxd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tqwpqaxu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pcotnmxd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gfmschcl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163twjrmpxr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wnpisjnc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163haiejihp.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ngpqifzv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lcvnzpbb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163sgdbuyiz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hfdevoaa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lbcpjzee.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ihcygdqu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ugwzrswd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xpchirwe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163aowrnmxe.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gidzquzm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163epkgxxgu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dbdvuzvc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163cmaeqfyf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lofwwwbw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hciqokmx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zzaxhxem.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gtaarpcz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163cysdbtwo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mdzdazfh.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pemdqmlj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163nywvivwy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163skfecaym.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gwvjthax.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ilsytpqg.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163atqyopgg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163htsojpen.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pwmdivft.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dnxvdwmb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vbpvgfgi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hawyijkc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nnaolthh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ltuzvseh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nfmtmupk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163aqwbozfp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163eikrdhia.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zpfcwduj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163iuejosxj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zcfnfsvb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qaqzfrxz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zwmgxrlz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fccmmwbe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kyviwrln.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163aydoleud.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gfeawlta.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jjlwwepy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163khzoscby.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fubwxksj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163iuzaejkv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ryhtqxtz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hloqcmls.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zcwdhqiw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163gjtdgviv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163orunnkiq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gkubyoam.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163yhbvcrpy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pzavvlcj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bfvkhubk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163nirtolqs.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ezfmeqgt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wtwmchge.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163scufmpcv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163plmlqpcf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wkrrfbtb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163uxlvzhgx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kjhgnllv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163amzmzrtl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gnhklnnf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wgjtcvlq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163sxybcmed.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163hekahbtf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163enbfcwyc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lkmtfffa.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vmtylaqa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kashrgky.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163eaovndxt.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sotnoias.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hvthgbix.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wecqvers.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163totfbyzp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ydjydfmw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pbfxccfg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163werbrsyw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kfaufzrr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163etgtyizg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qexsrsmu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rexwsfwk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cyzqzgui.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wwvwvobl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163aiiddgyy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163exmpnqns.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wrdjajcu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163rdtabcum.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qyxicaca.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ukemkreu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163sbzzhixz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oztcbpoz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rldypzgw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hsnvsqnw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bvmcewir.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163khfpyacq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fqagplfi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xzafthgk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vuxwmuqd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ocukolae.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163aghyuyta.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bjqzoeck.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kusppoey.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wediyzoh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wrckkbue.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pqkijguu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163yckjcnup.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tcbycocu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dxryzfzs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yckpslom.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163htomhfcp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zupddidn.html


<!-- 参考信息 -->