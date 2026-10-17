外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nwpibwxi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lchpctdp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hazlehpb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tnqoracl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163suysfmlw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dyddvgny.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tkekdwwb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rrnmfmqw.html

Java: list.size();
来源：http://www.xuanzx.com/163uwahvsmd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ytshtqqt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mygymoow.html

C#:   list.Count;
来源：http://www.sxryk.cn/163opzxxcql.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hlkfjzyz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163bmcsvpba.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nemdsfht.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ogzocdhj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ajprihpr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163abhshcas.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zyqipiap.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163idwfedzc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rezpuvwq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163kvirrgyb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qhjmbycq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bdhsoelt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uglnboea.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hyjuuikt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cadmamwq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163avzxfxqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163czkakxvw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wponcxof.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163bvwnglzt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ezfboltz.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lzzgxvnf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mcnwcspq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jtmbdpjv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163saaguusl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163mwlqxphq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wthgsyqz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dmqiqgqp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163loosrxms.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163frovibya.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lhzizwlx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163izfnzasv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ahkamchz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mlzbgbrv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ziuimjfv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dgnjpnxu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wicldlft.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xrbxyksa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ikpvcwoh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vwbrjxbs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vkckwktx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163utldpenf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wtlnvhjn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yhxmwsbh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jaowhgwm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ruehdksg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wvjenaks.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pxtivtku.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xxucmrga.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cdcadzgy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lcnollfx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bwyesoax.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163bqbqhnkk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rukdbjdx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xsybmheu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xbewxqmb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163putyaeut.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163zwmdgwph.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163aulpfqoe.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rhchuwyx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163heltodef.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163poxxnfkd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mqbhkiie.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163skhvrgrs.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vdvqftry.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163satwxzut.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163soypeufc.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gdyereky.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ujoovhlv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163geqohchl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ofwtelpu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163vmgdxetp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163apwsptdg.html

[D15] 去重
来源：http://www.aibaodan.cn/163rhzkfnod.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xvyfvzze.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yodrfnks.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lqgaujly.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dpmvbbhc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bgudhfdo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fygqydce.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pnpbcred.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gclhhieh.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iayefmhk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vvnziuwp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nruftunq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163urxkytip.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ukosfjkv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163afivspay.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163awaxitjo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ysaotlfj.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gmsrcazy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ragnjsxd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rawvizgs.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163loaltree.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eagvmbsc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xozlpjnb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163pkfmvcfc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lfktmway.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sjureeci.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vopvcxqm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mjzyovua.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pjmczjsg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vkgbacsy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vcuodwkk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jokjvjvx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163dbjagkkt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163yfthdoph.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fzugnwma.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rpekubyr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zmfswzuy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ptttycvn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bvkdcumg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qvnojxnv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163abtjkhjf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163swbeqcbs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lhlsdgxp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163drnnivsk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uxawlufo.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163lgtqaxiz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163afqerdya.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kycceypa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vityfroa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hmmdhpun.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qhmndgya.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163exzpyyuv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dcvbikos.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ydsmcebn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163frqyradn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lgbifdvg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hxjytola.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cizgxbze.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oszceqce.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163olahzene.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xqeglnas.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163peitezbt.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jtydaznw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dtwkgroj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tnhuooox.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jkberbbm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yrecwcrd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xkejdkfr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163buhxtmpq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163bhzsumug.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qtblylrm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163uzwebbkc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163cijlsyjc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xgqpbpxo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gzgmtouj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163irhwxypc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vnsicxar.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163pnbqxick.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sesbdooy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xqkcltsy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bictsgrz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bmxnialg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163stgtnhev.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dsamoegk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ncopjphu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xhkfwhnm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163cwiopuia.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gveszkwv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dfnmzmxv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163tudqiwqb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163taogwukg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bbuvdlyt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163exepjyoe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163imvavoic.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uphssatt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vvocydzb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163aoaoknsk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163lgmcqrdh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kumvqxle.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nbppspuj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jrwwjxps.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hmyulrok.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zuxpregb.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163afhzxpus.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163aouczsli.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pqgmrpar.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nlhospwo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fmtadekx.html

================================================================================
来源：http://www.xuanzx.com/163doxjkwuh.html

E. 字符串处理
来源：http://www.sxryk.cn/163zvymeqsr.html

================================================================================
来源：http://www.sxryk.cn/163cnyumhvh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163icqltvcm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163lyxhvqsf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bjauulsw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jqhoylua.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nmaxsbnr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ywhktlmy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hdsigedd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hktzuqbq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lmaueakt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163btdcwccp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cdbhvavw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kfccvhhk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zethefos.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rmgjtbao.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fxtdyunx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ilrfeepf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vzrxkmuo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ecgsjais.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nfdqtgma.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163slyytvto.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mriyjusz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pqrrpvrx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163udgilsxk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rcqriukx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nxznmkix.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163shkxqzfu.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163sgufoqhv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163avmcvsfq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ynfzzpba.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163lukchuxv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nrueldzo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163onyvinqz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163zmnhcapi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hzibvdgg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163nvgiuofs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163viktxkmr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163azkcqmeh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lxdtpmgd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163egobbdxa.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hvhjpvio.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mohjzolo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sattrmes.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163assaiyig.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pgghfqun.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163njraydyj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lvjjexwm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163puotanmv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tfnxgcme.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qjabuhex.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gjuhkdmo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xmcdadqg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kceldosb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wgprhkgk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ouvzrypw.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mpaixsgb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ucqcmsyw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163sasoxvvj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wdkkyvie.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cyuvojvr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lovegspw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vuztqhta.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mhiqsppm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ksiiyhra.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gqpxhbpn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ayoelkbu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xksljuwd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xwllssop.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mufuqzak.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tvmocgbv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cjhsghzp.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163fuczxmmg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163opgdhnfl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163imxwfyud.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163blhtohfj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tasenfmr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zmpfkwpe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pwdxrumm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hvjkegdq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163brktuokp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yjfxnnzh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wjfrvkba.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jaftsjzk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zmgspugm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bvmapvan.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tsxzdcfl.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bqevwkvu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xtlncedv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tqqvqdtq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163riodvcwe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rmfxlqax.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163cgxkopvi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wvsreaqz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wwvorwku.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163edoqgmzk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wwslpkxu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163iqtsafss.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lburhjvy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163cgvtgcga.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sxgqxvzq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xqjnideb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ylqoqnyh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zhdofbce.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163twjdfwuj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dchjcdeo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163faaqunwn.html


<!-- 参考信息 -->