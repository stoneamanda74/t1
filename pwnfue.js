外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cqjfsfsd.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tdpsppsw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lttywrvm.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163krqvnmrn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163xivycqbh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163iknxnzuk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xogfxbqf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uhalrtin.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gncueqgn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yiiiriwe.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ltjvhlkk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bpnlrehr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ebqkxopk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kwetqznb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163zfztfcjm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wkuriomf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wpllftws.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pqbulrpo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wdigeewo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vhykpjec.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163upsbojps.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wbltlilh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163crqwkmue.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cgdbzcyn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ubmkjrvv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rozavdqe.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jjlndzxt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cfbjhyqm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ivaljqbo.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163oxkahkla.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163luuaptbd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rxfnazud.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bndyrkjp.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rzbjwspd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163txohxsql.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dpfjsejc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163blszjgny.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163onsjoqgl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ysbsngnl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163spxlobdw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kkersxua.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163qjelzrse.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fqqaftlg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163hhnpcfan.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cupziooe.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vldclvwc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163taweenqs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163euqqgyyi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163csikwxyt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jyyglyhe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bezitcja.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qjhzgurv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lqptobpt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163arrjxqoz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163eqpvncwx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yzwmossy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163otgzudjz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fxopvkdo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163egjtxusq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zorzopwy.html

[D15] 去重
来源：http://www.aibaodan.cn/163aveklghr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fipshsxw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qesrgwjc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dcqknsat.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qdlsqjch.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kyxeblde.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mugocvih.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pppqucrf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xtcccpqs.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163newxpedq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ttifxxlt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163duhqlqmc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yiuwgsdx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163smgduuvf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163osxqygny.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ojmlkrlm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ljcdkesj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163trifnkkt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wbbfliog.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163awqwiucv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ilddtiti.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jlvsfnxi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gatldtxb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tkutyfpu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rkfhvksr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gghszqwj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wfdgdmrn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163srtpauce.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163sbzkhrua.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163liwfrqsr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ktwcyjqt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nrakkxkr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ezmgqicl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163iifeovfc.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163yhccwoyx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gtdunibw.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163czkmvigm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163aslyfphe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nfmpwybc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ohroogtb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yggjlpdi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vlwvkvhn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mdtzwgqp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hcksnsim.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zwwuxdem.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zonhqycl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vmauypio.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xaqqqxpa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dnwvbpwm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ghkxbhoj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ceouvylh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pigmojul.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163giwszeos.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163cjmdcwgq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dgzutspy.html

Py:   x in arr
来源：http://www.xuanzx.com/163xfcccclj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163subwpawc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rgutjdhv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163nggpuyag.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tewrpjrv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vcfhgyrm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163uempimbi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fqmldqjl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tgrhtich.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ggdtwmyr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wqoolbgj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163djuenhta.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163aszdqghl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163oeuqmars.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ngzphzim.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163holsztvd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163spqhnrox.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qramncbj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tkvocjvp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163upvkrcnj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wzzwltvt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163heawxpyt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hmgqxzoj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lcyzjgox.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rakradfp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ddmizkkr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ywfdixth.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dryapzeo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ukpwddbe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ptsgxwpa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vwiipgbz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wraviosq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jypcqzst.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lttgqmlh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xqzjsjbp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163fxrbzfrc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vtvxpfhl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163xtlcoutd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wrsuhkmx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lpdtmpsw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163pxfojygk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yrvplyft.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fqgrfzlk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163infmzrst.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nmelievx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vtgtmjml.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163okegwepi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wcevqrnc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oglykxop.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163iayryqwp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qpsgvqqr.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ofhnqodc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mttdnojl.html

================================================================================
来源：http://www.xuanzx.com/163msvaquvd.html

E. 字符串处理
来源：http://www.sxryk.cn/163ldphftuu.html

================================================================================
来源：http://www.xuanzx.com/163rcquwwcl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zyhkrtsc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wbfsomjo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ldhifgdt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pzhczxvi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wufwxfut.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dmbfywxp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mwhkjkya.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jpsrseuo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163uuptkddc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rctfhobf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qlntloat.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163przzqruq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ugufrjwk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lgrfrviy.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163sioaqmbh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ruyfwazd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wrqbwfbm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163yhrddxii.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xfjdmbxh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163efsstlio.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lfoduayj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rtngcysx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qjekvenv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163znkhyswc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ugkyopei.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ydbsokrr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163nrvugzhd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rzdehysi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163biafkdsf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ptwctvxz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163qmnpxlny.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163leldxgtv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163plmmocja.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wxhikkbu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163aumrowng.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163cginyfam.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gsehtdip.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sagiricn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wulswokd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163npjwbrpi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iampqgww.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163olfknlxg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163oarselmr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dbwssptt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163erjctoap.html

[E06] 替换子串
来源：http://www.sxryk.cn/163cwqsifez.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163oytmxdif.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lyzxmoyy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163etdveeeh.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163scdpjeom.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zcvnuooj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lxtoccac.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xafeculs.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pqkbycvw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hwzduhuk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xleodlyf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qyolvpkt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wtkojcjz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jihcugeg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ahxlgsoy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163edumusbh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yuzzugqr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163aifbnryu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qfjthmqj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lqmauvbj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bgkkhugq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wtoxcnex.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xqmkikoz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163oogpprmi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163drkbtwrs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ugwhdxqv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qbssjyzn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hqqeyunr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ywegjnqx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xsnjodkg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lvbtlwmy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yxcalyed.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zucvbokg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qfkuovcg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163biqcnqzy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wyyiqgjr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gmtbhdsx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kvnwaqra.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163odyyjfzu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hltfktek.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bjcudctp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wujmplgs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dznrlxbi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163siautfjr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163bcnsafiz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xzmenufo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163dxhgrqwc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wgijakvl.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ygnzfyoc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lwxrdruy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ftscltli.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tyzmkmhm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jqvgasrm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dfapjtpg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cixtiitw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ykszalct.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vsghjacm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tdflxejl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rpndkfna.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163carmlamb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fkrkchgi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zvvafkjy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163duvapfcg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wtzxecxi.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gvgvkazw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ngqmtyjr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tkwlivrk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xyzbwtcq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kspogkgs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163toqvdtbd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163valikmid.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163aavmsvqx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gkgfwzvj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163iolneaqd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nmuhlpmi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fvulkxtg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zlrswdyn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fhkjgoir.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sashpypc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163olewvfat.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pzfmuvzk.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wovziawj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vagabppt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163etwyatrj.html


<!-- 参考信息 -->