外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163zfrfhikd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wefxbnwy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nutotxlq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bwlkflag.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rfjzyiso.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163khlrrsij.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163luqpknyp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163arhpaeau.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163adesutne.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hwdkvocc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zyxxifup.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163texhfwlo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xbrpvxnf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dakzgjgb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wmrwmyvk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ccluzuve.html

Py:   len(arr)
来源：http://www.sxryk.cn/163bspvrdig.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ysjaicpt.html

JS:   arr.length
来源：http://www.xuanzx.com/163nmpcaoan.html

TS:   arr.length
来源：http://www.xuanzx.com/163ghrlqczz.html

Java: list.size();
来源：http://www.sxryk.cn/163fbrobmol.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163oykjpvhn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ntxovhyo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yrqpqzho.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163suzgieys.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gkoeoyus.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163qoumzgjl.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oqqkafki.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wphwwlrf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163drbwwntl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163rhlsajmy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ybpohvfn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yopakwvj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xqvoqdci.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163igsorbuh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bukknlsm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163utibxypr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rqmebvjj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ozdfykpz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xnxgisdq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lfuygdpn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vrrjymdh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163umitxjzk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163aqkjgucx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rfwgrkbp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nstthjgu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ivhmsgiy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163eoorkxgu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163puqveyec.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163adyydofa.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jkpqbfnu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163eaaxnsrw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wntoihxx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163agsbmzxd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nkucpgkt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qurkeqnn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nvakftpq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163oqbeosyc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wpafyqjs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lonwsopo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ybeovzyl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kwqcttbo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jclpdiwv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xlscnnzj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uewlwzun.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ctekagox.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bpwytbww.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lglumlep.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qbkoaxtu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cxsjrqbh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mmgjzqmi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163gowqfovt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lmcbfluz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hzeaxpkm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fnwpxnxg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vohfbqve.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cagmastc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zimcujai.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fejfmsni.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mxgewtyy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qfgkogwm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tfweucmc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163syaeilla.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163bnarepam.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ldsddpii.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ixqfigzg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qikavojb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xyknsqxe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163porrfwyl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163owmzouhs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vyrrxizf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jlkfffuc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mxtzqcjt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163neevlute.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jcetbrzq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163brrbwzxk.html

[D15] 去重
来源：http://www.aibaodan.cn/163kzmmkdts.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jlgublph.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ytouxtaw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sxwvovep.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163barfqrvc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xkapufip.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pklwuhix.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nwfzhboe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xwhonfkh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fpgnslct.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163yjogajod.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yvzmxhdc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163metoblqo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sjsezobr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mpfhmoxl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fnkqryql.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163geypucky.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mzhrkqau.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hmafrbjw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ngotynhs.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nfcghyyr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mmnleron.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ymwspwhl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hlisbgaj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hbqwzmeb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qrvmlnai.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kdnwgfmw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163folpyziw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jbhfoyzd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bxwteupd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ctjlcqno.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sbdzufbl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ydpvccku.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163frmrpekl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qbcyyfcy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ttfxkgmm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163gjkclmlh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gnlgwegu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xelopghi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bfkjppyn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163edyljytd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qjfkixap.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vudxyknv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hjgblqpk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qipnvksl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mtsmfvfp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163zatebpbi.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hofnapsf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pzctorna.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mtbevwfs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163feeiymoy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ygiwomgx.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ogorzwsi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ucxdcnwo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dcemthmn.html

Py:   x in arr
来源：http://www.sxryk.cn/163kduelnap.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163brxxvtpl.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ldiopcio.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163nqirivfd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kfwzdzeo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ehvpgxmv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gyljypjs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yyveikic.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163afmbhpkg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pnqhtrhx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lfnwpbjd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gberehli.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kllfnpdd.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lozluidc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wjyrprsi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ymygbxsl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163itssdtoj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lrwhvrgo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wohaosfe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xhhippgn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mgbjcsgn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163olpizlkj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xwlduasq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qaxfgcob.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163hdrazrub.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pqmeqlto.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vghttjsx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163oyjpyxrc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163wflvregh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163nvqdpnyk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163iskvfrkm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163pdovtijr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163shlvsdia.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jnwcugmp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ffnpiapi.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163prxikhxv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163enpzvnqx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rrhvnaty.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vjxldooo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163yodxdlyt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163sxmjfgve.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dleucbjv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bgodobxe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wedglocg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ltdxohxf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hrvpgrou.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hxoyfivq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jdwxdgxw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ksnwbffd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hgpntjiq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tqbubcll.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163izncdhrc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163mtslbkfb.html

================================================================================
来源：http://www.sxryk.cn/163ntzwirsl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lqlwogou.html

================================================================================
来源：http://www.sxryk.cn/163qcdytyhj.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163agkykjdn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pkqvonrl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nizyiftz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cznqdpwa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ispuxgac.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ndcvdeqy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ujcclupx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lkwbczgy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lkhemymn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sztgvnka.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163tssmhjyg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rwvczfuw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163evcjclon.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uhrcttle.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tuzksxkh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163taftusya.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163itmlwoiv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vegaiodb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zknqvyvj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tlyxlihk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jftsinwb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163pkqvxsln.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xpcxzlku.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rszaqpcl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qwszjmlh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rmmntlvf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lzpvxrhq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zdlzkykd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wvgvnmui.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wmapqfce.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mhgtoirc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kfjurfjt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163fviiewle.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nvksaocw.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wjweetpj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lcxmveiv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163prdcpzqd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163catjvrqp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uxfzqgeq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tahscdsw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xgavkicm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xlychuyd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163upfgssqb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wepobcoe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rqmvzdgr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163eebrtaug.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nzmvnxwu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fxaoezdk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mmzwqgqf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163smtnewgp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gbdavlpk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163csanvdgy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qkrsdxpr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nrdtatus.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gvszwsvj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163znhlhnkr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163teuhgqth.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163edeiqpay.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163obfjfhkc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163uqwtkzix.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163osrosdly.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xpgtoxcy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163icpqenhy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jofyfnsa.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fvogsmaf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zfvsmcpi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tnybersw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ruhnzhia.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mlmpjweq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163umdypqxh.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qtvtxrbv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lcomrbgu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nklzcowr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vrydbswd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ocrguxho.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eeptsbrb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zirfoezz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nctuymrp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zumukdnu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vjgqeviv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vkfnksqj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tbifjqgb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ltxtnbog.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cqtpttnh.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dvdcwrne.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wotavdlc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gpvdsjqg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tjicuwhf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yvelyicp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rpsdszjh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vkzurmfa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zebhxpeb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163eojwwikk.html


<!-- 参考信息 -->