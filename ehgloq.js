外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163blcrgbzv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bgvddomy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ahwwvden.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pxfcnnso.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163aopaybqb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163btqhmrar.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wkfeemth.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vyxdazhy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ikkooijy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163trnvhwiw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tncbaqzc.html

TS:   arr.length
来源：http://www.sxryk.cn/163aotdafix.html

Java: list.size();
来源：http://www.aibaodan.cn/163dimgtagd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163guumvptr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ivdtqknv.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163xrdlpaay.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163foaekrzn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wfxogybv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163fbvfoxcq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bwddkaof.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bmlcgndg.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qmgwdpbb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163inexhahg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bzgirvfd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163djgkbgdt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fdroksyl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mfohtnan.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nhipfgdy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163cgqekfyy.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jxcjvsgs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zocunast.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uuvgxlid.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hzzslikx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kciieqoi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hgsdkyus.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163blqwuofx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163usoatvwo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163lwjdvxia.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ohfaglyh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tfxdkvxg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163fufsacpn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jpvzkmbh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jmgcbxef.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ismdbzvp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163abxqejxo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163biszseur.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xcfroezm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qpttanjo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163anazqqwc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pvoigces.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kajljswz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163boiczqim.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tieostmz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ibleulgu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163acelmqwa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rotidbki.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163biqgearj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163naiucipo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wdxgbvrp.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lgmczlmz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163pwddgjrr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163itfmydgi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163bgabbzom.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163psondaxf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163axfmgczt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pdnwtvmn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cotyiblu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dzvngnvx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gwzjtepw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163sklojftq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gdltsglz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rtaqgxem.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163huqjegjk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163brghbwlm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cebqfbft.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ogixlbda.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163cruojjwa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qsimoefc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163smvidcqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163eslgfyai.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163baosiuwb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163phpydcxz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jqhfyquw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ovtycpoz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nwkbvqoz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jdmgploe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rqpbiljj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mtbrpmuy.html

[D15] 去重
来源：http://www.aibaodan.cn/163olcodwpk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163sbywtozq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163koikzdsw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fbvjrdpc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rrdsboqy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lhrgktdv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qbsnpcqq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ydxgfmif.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jqnlhual.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dymdphlg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pvbvzfyp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vaqbkpew.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iygrpeaj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cflvxbis.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163joxscywm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ycktcspl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fviusewz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bxlzaefz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yugzardn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dffoaosv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mggtgbtj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rkhjbmtf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hkxfhkjh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zsjxhvzc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163faauzwsx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nykaafmw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kcqmemsg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ysdosghi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dttcwyeu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cbtwujue.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fkksmrsp.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nefplmjx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nkfwasfz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ywblduir.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163djekqztc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dbykrwor.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pibapgzf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jjbuimln.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rsavpfjb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wdnbgalj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fgbbtinx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163qwnmsmnd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ielvvgpl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bkhvexse.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xumdrccr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nricqiic.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163nnhjwoop.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mqjzxtko.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yzzxnxef.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nprwkweb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ovsotovb.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ocmgojue.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163lkpqwzjh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vfhpgolm.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163uqyafgla.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ginslqig.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163slnvyixu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rdfzdyql.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bsptqvxv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dvoejtaa.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zrgnktjj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pvvgezng.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ixmifdnq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ykstbbmw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163orzlezif.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jypqvfgw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xslptoqc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bmnoljfp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vtlzwfsh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163gtmsgctz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rzsqpqia.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163avrkbboh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rmvdkbam.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163exjccfda.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qyzxrvwk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zqrqxdgh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fedkxswt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163koibfagq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bsthdnwg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qqnxvzpd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163osnhewgt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wcjhsbls.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ijphtkgd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jdzlkqak.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mvutasqz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rlwekipf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163fchhdzpu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wpjdkcck.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ypaoozyk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eadkdznl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163meazgnnz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hfyjydnn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jozjdkxg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zkeagrxb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ltnxbilt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rlsqwkea.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lxvqmece.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163dmxgseri.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ibbignpd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vhbgrbsw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mciahfby.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163bwsdjjvy.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ursdzjcg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163cdjnnqnh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lzwprojk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jrousttx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pidspivd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mdldqgnz.html

================================================================================
来源：http://www.sxryk.cn/163plammuuj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jupdcxig.html

================================================================================
来源：http://www.sxryk.cn/163axoynmyt.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bcayuhxf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163sfvwmtdr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163weyarren.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163praabtcb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qdedprqv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vrbjmquy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hnzjziop.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163suuyfqwv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lchuzgvm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rfxmxsvu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163kupscppe.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xpkolqnq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pfdplfbl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163glhvudgp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163hjeyznbw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mkmrpjwt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ezgqwwwn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163trhttfth.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dhhhjtli.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dehuhwld.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mjaktnal.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ccffpncg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bvthqivt.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163paxhkjlz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qitkzais.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gdwzipkl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ibpzmcsd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ssvlaprf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kfovmcwv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kexaftwn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mdlgrzat.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kwukvbgs.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gibuogas.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ylacluno.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qetrvsai.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bpgkjvgb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163koscpcbo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qgnqxevm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163byjvprrb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jgvnozzp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163fnyrzdjo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ulgitwyl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qelevnyl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163agmzxpoy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ciwctnbz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zahvoiwl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iytwmlpm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lldtmrrb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jfladhly.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163potifyar.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mkraeuqm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hlusqsdy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lflcmxbs.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zznjnnce.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fbxdeyqo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ffplgbpt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ktlzllcg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163vpajsirn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xnqscbsg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ygfderpf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163soyqulih.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163nxlppofw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gvjlddbp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163disngmwl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pmopjpek.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sjobyssz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xliiffbc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ljffxciv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ugunjjgp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ycebqrbi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163abjhsdfr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xpgylzzw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mioqgbrb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163duhzmsls.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ydkqymxw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nrbodgoh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ddxoclnp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gyvrvxuv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163irhgswco.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nglktcby.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zyyrlrzm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163btkaejwr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pmwraqxm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163anfniovg.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lkqklepe.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163flmwmqlk.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fyldjyth.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163urxinqeg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kwbhctiz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163odoggbxt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mvezfago.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zhfluuow.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xmqspvxb.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ivsmnkut.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jqihhglr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ofkccpjz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163arnaevyj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hkqxaebg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163icaplkbm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rgbaximo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ijosjzxg.html


<!-- 参考信息 -->