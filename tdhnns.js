外链999!wailian999！

Java: list.size();
来源：http://www.sxryk.cn/163xaizotrm.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ezxscxlr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rxqxigam.html

C#:   list.Count;
来源：http://www.xuanzx.com/163smabyzlc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vpzmameb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vjslkvcl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163bnaaqgwg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163boqcdvyv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qtpttvwf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163erpdfxbo.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gdmayaum.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uvtchxjh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jpbhtbvq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163baqulrcl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qglucitk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nwnuuayy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zbrmlfng.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gryjrnmj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gmbvnyca.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163mnsvsoim.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163boramszi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163flyhfyvl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mvvclqkn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wsvbqgsj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ycsflniq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wvmrchuj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163npmsyelj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gpocwbfx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ekoiprqb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163apohcnwu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163avmauhnq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vyfrpwny.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163edclouxx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163byxgkkec.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163orjchgir.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yullfxkp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nxjhonen.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163dbpzzcvw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163pocevomu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bweaoomz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ozvfshtb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163bomueakl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163geffzijc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163isbjapmu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zxlkkype.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xzgjlpgd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163apcdexnd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163cuilyofe.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hvbielnb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163sdqyzlzm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fadajssw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163pxknbbwz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163eqqqfilh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xqijzfnd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cxidsyro.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fjnjanyr.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cqgxwxly.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163tzwqvfvi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dnvajbzg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gnrqutaq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kfdcyzwn.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rmuhpgod.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yafigncu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163asjzfsoj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163pawkuhgy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163covljsfj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tgrhxojy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163nldwytvc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cpnoanbz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xmgcaszd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ooelbyzr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ruvyogym.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163aajdeacr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uytcletx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163frtwijlf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163yevajllx.html

[D15] 去重
来源：http://www.sxryk.cn/163susacifw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nsqmiayv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mdaygwqs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ljsgutjz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wzbrxgcv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163epaufywo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ftdvwzkz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rurozmaq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zfrnxdit.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hdrzfbbh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vhgryada.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163creepodm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yxevmqwj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lfaszjcs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zruzxmrx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fkesawkd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pvvifeyz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tyqamnxh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lgwuqnny.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163juqvbgyo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mrhbugut.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bwwgbidy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ufiqmfyi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zicauiuz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163avrnybfa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bfhobovk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lczupmqq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cwosbqqy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xcacopfo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163psfnkvgg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jvywdazf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hzafvxer.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163uolkgmur.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163icwyuyza.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zbizwisv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yefqmiio.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xydwamfa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163phredbbp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wbpnapnl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qyoyublw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fmdglnwz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ajrwwmrb.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qaqbdkbi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lypeohhd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lfiwroie.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ghslmjxt.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hsksyauv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163spsjjbfn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bpulwrqi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163restqfri.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163npmlesyz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cjzthate.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163plhtoxcr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163oilrrysr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163sbkcwjij.html

Py:   x in arr
来源：http://www.sxryk.cn/163owowvuxb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ewsxbmke.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xsafmbey.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zlcnwybg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xpkpuvjg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xzxewmog.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163fnksvedh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163mzsmrvgb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163crjgtkku.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163knjemyhh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ygersxna.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cruzpbmj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163inqfbecl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xdekfrmo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163oxtojvom.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bthcqltk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qvgyptsd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163rnbqmcuf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163odaujzdw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xqpknzvs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wcfxcwlg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lofobuxe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qtuuqfbk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wnffrkrd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rgyqiqwt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163aixkcmvy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163psrxzqxc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nsrxaefg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163inijjnto.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kdtrtvcv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163awnfsczr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163fbvryvch.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xmhvxuvt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163siqkeooz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kabfarzo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vmotpzlv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163geckwoup.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ivdzyhxi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nsichndo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vguaerku.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rxrgvlqc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xdfaxrxc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gfnytgty.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ygjbhyzl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163efmtmrac.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fcirrosj.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nesnrmlu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163clytllnw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xpyiqspb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163oyqnfrav.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lqouugbx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jlbbrbvr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163uxleftsz.html

================================================================================
来源：http://www.sxryk.cn/163xwhexvcv.html

E. 字符串处理
来源：http://www.xuanzx.com/163ytprxjaf.html

================================================================================
来源：http://www.aibaodan.cn/163ajlewont.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163dokyzlkc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hhrnxrle.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zbylhkkf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fomlaulm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pisdgjvn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tqhquvha.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dxoqaxsh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lnmmtnmj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ytfweyre.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gayviwef.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xnsrrbvv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163edqjhlgx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zbnolana.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bbydqcgh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fkagpsfv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fvxxggoe.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xotkntbz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lvctqvkn.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mtlbjrdc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163igzqmyko.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qrnsvfbh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uucphuok.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hiyoigbr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ylqlvixq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xfdmgdjm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ylxiltto.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163yzrhygdx.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wilwqdip.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kckmtitp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hqjcdpdm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mwvzfyte.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cgupoflb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ykxjhbrv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163pqyveqws.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ejiirvid.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rtgoudoa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163stpbkbjd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dupzdsyg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cpbvocmn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qkastoqw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lhritmnc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iqfsqekx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xxwlppbf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bmtxvkko.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fpjzxpcb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163fgrysduc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163awnddwty.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163eygkyvqs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163orkgcbqs.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bygriimc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163snqpmgdz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lrkzthez.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wzthyzih.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163aeecsvtu.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yerfljja.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hmkgtosk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fqlvgljh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gwpisxpy.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zzfgjzkq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wwpifiep.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rsjqqdfb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xckxjqtv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163owsbgccj.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jppdrtbv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bhtjcjmt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163lfjuknut.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jkkyszvv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163usnorwuz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rffbafoh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kbhgqioe.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ddgckzyl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163tqibgsum.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jzdruvay.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jcvsmkvg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163btgxfkoo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mspvnayo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jqoswkdx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163faflyyzy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163niokeswm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zujmdpwn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jtsirsra.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vpipkvqp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qtzfvywx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163tmhhekov.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163labdvxcj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dvgjwnqj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163azzukyln.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gzazvhwa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163miqizsxd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qgkzyjwe.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yxalztog.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163risplvnd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mbpdscej.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rwnwfflz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ozjxpwtk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tolmtwvp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wijtkski.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163uttjnweh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lubgjbeb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qzezbtlr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zvubdgmd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163guoqywaq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tvvczyig.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hygrlufe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163uyfmpzut.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yugtinax.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wldqyyhi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nwzrhqcn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lmbodlde.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ypcfudrm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ftpbvyge.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zisxdycq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vhotnyso.html


<!-- 参考信息 -->