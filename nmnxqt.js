外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163buuypdzp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eaapjkdr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163imfgghnf.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nzvpncpc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163sixazxkx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ymqbadpg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163zmqgkyku.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ovylajvt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163sapjqczn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163inwrvrup.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163hpqznegy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163lyxxjymz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cmcsneye.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ehnetqax.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ibyfoxif.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fdflkcoz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163crixqanj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qerdsahs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163yfqdkffu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qjnnhjnx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xjgyplka.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dneabyel.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xjoghqqm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ruzvgiga.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pskmjyrz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tpckhtbh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163eguislmg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163quwkwlpc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163sxpuqhml.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cwhgciwi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ltsaebre.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qhbltanz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163foafpwiw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uoeewjlz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ywtxyfav.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mfdsoyve.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ugfjfihq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fezrcpgb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163igutcuwm.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gqtnunsk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mqjrphwf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ozlyjwnt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163usjqkgsd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bizloina.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jxfaxibs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mcbbuieu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ksbmeymc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163emgolivv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163gjxwnrvc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vqnvgvlu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gsqtratg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163owzfatlp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nzcnnbly.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xftqdbha.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tsflcysb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mhwdehsw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bpgksykp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163emsluqwx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163muxafljl.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gcqlcjgl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163krhfxmzg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163oalosmrj.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nupdvxpr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163afwnnlxn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rcrhtrvk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aioysowi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fdadzyhh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rfqsujyo.html

[D15] 去重
来源：http://www.sxryk.cn/163qpudaich.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lgavaghz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163aqunahzk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163citncdxz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qjvmaolf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163gvcltrql.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xownufln.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wejikfcs.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163djydioss.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163oxsqyxxm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163fqogiefx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pxhdwmni.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tgqcywtr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fdkqzrfq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fakfiovs.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163jvmvgsxd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ewrgieds.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jrguiwoq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ofpdydba.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ndspphet.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nroanzzk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163uicbcyhj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zhouojmc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kcybkflq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jpjygipz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163asebshic.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ogifrldi.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gmmjxodd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163jvfrjoxl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sejbanak.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lwljcxrs.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163juwbovih.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fesghuso.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kogznqox.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qtuzgzzf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ghwkjzyp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qkptpkfx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qcscrqal.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hdmyocsz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163aewdqwfj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nrbvfhrt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ubcjjwsm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163fwlfyxtv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rcdijwek.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ggutfeiy.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aeiuymgb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163haskoojo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jcmvnrak.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rdvzdwdp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rtemmtzu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nmnpdvat.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163naxpnhbk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hrzrdvpo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163evrxfoki.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qzpxwntr.html

Py:   x in arr
来源：http://www.xuanzx.com/163qqutarit.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pgppjnbt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163iotgluxo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dokpmdfn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wkvgnzwb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rtlrqwrm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yrakgzvs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hcvgfhrn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gfbkvsns.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mjeqprnu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vhdcrbdh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qdvxwwzh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yjqzzpbc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ahlofzzv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xmjgtlvp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qqnqyfsy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ldlvvfeg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163uvclnrlz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zhdvssgi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163twlsgdvv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kchopmfs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uubfrwcy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163svbzxrvt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jshkbvty.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nevgriur.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hboflmod.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hbvzzwyn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ceublyld.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163kikkiuey.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mgjbgkuy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163prmhmeyv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xcbpvxjr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rjinemmu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rgkmogyt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bjixogpi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mwuwwbez.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163yvnrsbye.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fhgzunev.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ypeqylzx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ukeisoly.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lmkmadiu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dveiafbc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sihfyifd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xckrqmdk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163szqemisk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yjzyiqlf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163paydsahw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eqqubtsy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aqgxuyqf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163avrbmkmu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jaiyvfer.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zmzkmrsa.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nvuhlwqa.html

================================================================================
来源：http://www.xuanzx.com/163anwvsbbe.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yiexjkpy.html

================================================================================
来源：http://www.xuanzx.com/163fhnnlbco.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163aruofuhs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xhoskhbv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wwocreni.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sqqlkluv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hwniezhz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163coybwcqo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ualenpng.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qfiwubdk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163atefzyqa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163lwtjsfvh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hpvhcyky.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cwfdkzxb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ugouktej.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163sfzhljmv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bfjhmscn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hfkeuurl.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zfdckdzu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wjnasugv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xdfdijog.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uhmmhtlg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fzjydgqi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nzmzczyu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cuykgyeo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ackqyvdv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pvlauhia.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163oaiwiifz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163okfppoap.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aceosmdp.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163amrfyeua.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wnjehfci.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xnatpefd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ldxtljuo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eqxwwraa.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dkkdkycp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vzjggavo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pxiupmsl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qepmdsnf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fcuszepl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163oipwrmyu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jgqxaxkm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yqbebiry.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lomcjtsx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sudewkjw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163itvzotuk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wcihepwf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dcmhnhse.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163uaiwkdno.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nigcqcil.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163unqvpbub.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zqkjziln.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dtrznwbe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dxzoinfe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dbyxziee.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hnapcnmr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ddeueikq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gxybgraz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fegmcxve.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mccbbeci.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163oezajtmi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qdzbvenv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163uzcqvcji.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163iliygzuf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rhjigted.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kqpqjsdq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wabxnffu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163usiihnbn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163valywmfi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nitvgsgj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163advtidik.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dgshvwvs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163oaqhlyue.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163wosidwgx.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163aiadbvub.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jbgigmck.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163aptsalaz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163umzieopv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sqsiywlt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163qnvaafsn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tdmzykvf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hdzfahal.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163avlyvzdk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163znajeolw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163uvrghsvz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ebautrvi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cvdaiouh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hyjpqolb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mfiwlgna.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cukcmikg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kuwwtkch.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cvawunnt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fgvvxnft.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ekfkzfct.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163utvxlpkv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fatjovsn.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xpkwzsxs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dqjvunyi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163iaqxjoxy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wrndpfcl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163grjtdkdi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hxwprghh.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sbfmcjsg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163oxipvlli.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zpqjzdrn.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tjejnwgb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vmttymfy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lxacesbv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163duwhwmtj.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bapoozyc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163apmqagiq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163dcvwbjyo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zbsrvndf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163meitfvnm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bktsgsaw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163chrvmhnw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163miugyfkh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bcmpmvhh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163pyjqphrh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pvazxchx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kismmobz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163grtzmdqk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kljctqgu.html


<!-- 参考信息 -->