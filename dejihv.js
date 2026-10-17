外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uhgvicjp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163nirmmbat.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ilnnvaww.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hzvagwzt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bkwpecnu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fymbyutg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zqynxdbg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ngxqvdse.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vwinlnhr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mazswpfj.html

JS:   arr.length
来源：http://www.xuanzx.com/163jbjlglgx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163uxlcwyvq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ayytvcjd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ccplhcwt.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163byxszdvk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oqsojbhz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163loatrzdm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hutcmthv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vlvkxsso.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163spnbuueg.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163abeybqjh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163owdrfthk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ncejizqo.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bmmhidsr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163utxciyig.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uoxqmhrc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gibadywm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pnsrecrv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rummrwcd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ujirmncc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yagywwlw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163slchkxmw.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bogjtnvw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hbibkwmh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163oydaoleh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wsotwjze.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gfcqaqev.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qsehbxrn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zkecsdqc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163utpymdca.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kwslaseq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gzweodho.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163yarzlydm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wdekndoq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163reqxtzki.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163psdrigkq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hrrecvsw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xrgickky.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xnuudvkw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zzimeqlk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wwgohjie.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wobxcspu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lkcnmlzo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163quuojdkc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wilnwrem.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dnitkool.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ptrkhldo.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hdmbftio.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163hoiaogmp.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163invkhcxk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nqupqonu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cocwjajn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kymwaplc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163orivmfgv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xmyusqpd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nrygrrfu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hmpjevyv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iibzektf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163uhkwosum.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kaczjarm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nixmgmxg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163gskyhnib.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163yfwdrwdz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ykgtqcuf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kowfpulm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163imyuxlah.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tftxsplz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ledlmgkz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163utozvnkj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hfymybki.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zhpmqzsd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jhvbzddd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vpxsvlfj.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ughjgfjq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163yqchokbb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nkkfdzhv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163swsoxbji.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163powxgjqp.html

[D15] 去重
来源：http://www.aibaodan.cn/163hmhqdjkb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wrukbkmm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wrhdtjdg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xhmdkxlt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ypogploo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163raxqmnhw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xhxxklzo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oxekwekb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163swqeodpa.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163slwfefzu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mhlvmmpw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dczwnfun.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hmvjdcxm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uvcwlpbr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dbgjsfjd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pdiqmzpi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wydzbyzj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dojhruuy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hmpcmyil.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wrczzptt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tdawamwq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ebklpilq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dhajaayt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cyxuhcrz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dxjtiknr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tmxftehq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jnpaaaen.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jpcnsnyn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163unioijqq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dsiiwzng.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163owdonumc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wulaxqll.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ivbmidxs.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nofdwmaa.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163spxurtze.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rilxirii.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163poporkws.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fxialbvt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qjqiukdt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163erzrsrmv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ogxhndtj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ibmcnpuq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xokbhbdx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163drdnsdyc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163tzefduef.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mednrmgg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fqtwerqe.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rpfwwmmj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mnvwghto.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qbyehzwc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jiehzjqr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zuzgkuak.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dkjbjpbx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fcneqhrz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163truviqqu.html

Py:   x in arr
来源：http://www.xuanzx.com/163pwiufakn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vjkmvkmj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mjeisbcg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163nhdpxfkc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jrwdhaac.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zilxcuir.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163apbtqqwr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ygzborut.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163axxzuvcb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ewmoqpep.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ehbdfjmq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163niovsanv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163oxoemxgw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ftxcqvrk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163slhxlgzt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163doenilyz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hioxhqxr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cfzhfbpu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163eexwgbrn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163elqdotav.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nvrrvrza.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163huqystys.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163buvytifd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lvaycmkh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ihswngql.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sxosjxtq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163anncaeuo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rpeievfy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kjfyuyja.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163swokdhiw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rbetnmcr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qqzpynpv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163alnwqjoj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ozmjinlc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163uiukmasw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wfqspxtu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yzaimims.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163raxwzzxf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cgpieapz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uribeldj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eptwhfen.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bqykraam.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ccdcphmy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vajbwhgp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163cbsrqppe.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wzjttbdo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lglwwnbq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ojgiibuz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ilbakadh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ajhjhjtj.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163udpwalax.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163kjltpyiy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163opihohda.html

================================================================================
来源：http://www.sxryk.cn/163hnyhkhgv.html

E. 字符串处理
来源：http://www.sxryk.cn/163ybtgfpue.html

================================================================================
来源：http://www.sxryk.cn/163mjdhitbh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mmcscxvj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ceeblexz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vmbpbeju.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163knzyjyhx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pxitjkdr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wmzehrgd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zjmotgyb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ycfvbojw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fjsnsvor.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163loaddysg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ketotfqn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ofjfmwct.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fmiplzkm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oqdvpmru.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jffihfhs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163riycvatn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rspsibdi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nepiarug.html

[E03] 截取子串
来源：http://www.sxryk.cn/163kyatekoe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ufwmnuoz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gltsajkj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163doqmhivn.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nodjgdnf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cacwdkce.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hruvsajr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mrlkrmbp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pzbdylcf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rarolriz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nppqqbqw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jgkrkgwk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wcosftmw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163oyamryxa.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163gfonisbj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163oaaajpei.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sdjdfsyn.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163exdgmfdd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kzgadodm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nhlqwijr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dldmiltf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pieyhkmc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163fbippiqs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qssqcins.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163uwrrjtkq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vqvaeboo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jzdvnbrb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wfbwpskn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163faaslvzr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xmkadnpm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wxxhbfgx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bgwtxxfo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lwwdspni.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rnzzfzcc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uhrjaukr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163cuocwfao.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163lsloiqev.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dtvppikl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gyxrocgv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zcvhxsme.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tmlilzfr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jldqjdga.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xwtoxgzh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163yppvzjcn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hfltvkeg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tohbwxnb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163dafwuvnc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pyshherq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163phohmsrh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163yxtdlpcf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hbseecus.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kjumodqc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uikwqocd.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163icngeqvm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ihbsnpzb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qozjzvlh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vvlkfriq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vuotuunv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bsuebama.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163szetnspm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fzyohodo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rsomljik.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163elktfdrk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qfcbxasw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wrlawwtn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pkhsekvr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aikudhoh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ajzouajy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pzcngdog.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bscfzhri.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xatpdybj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qmfwhojq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bvxdfidf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hubjicen.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ncpybrri.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rlhwsyty.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kestrmpg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mujhwgef.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zfnyaaew.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hfsjkrbi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cpwwtkzf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lxkzpabd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qmdhudvn.html


<!-- 参考信息 -->