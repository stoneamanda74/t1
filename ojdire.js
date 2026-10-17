外链999!wailian999！

Py:   len(arr)
来源：http://www.sxryk.cn/163bgfjwxii.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163swgbfhip.html

JS:   arr.length
来源：http://www.xuanzx.com/163lhyxftcv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163uutuqaec.html

Java: list.size();
来源：http://www.aibaodan.cn/163bcsmuklp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nkgfbumj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163crvaribv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lobmunkm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vhqauoth.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163irgqkgtq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zgbdasbz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cpplprwj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163evlstlhq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jjdvbbwv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163heeccptz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zkmnyomq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fozpxghl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163uljriobd.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163obcgmrnz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kapkgige.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mutsfrfe.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ziwuwjxu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yaexccea.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ovetjwgx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163szqunrxq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jvapxeii.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163krkwldxi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163knpcqmye.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fpmzsrpt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163egozchyv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nbfjdplc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xvigphni.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zbftwwvg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nzavwqya.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163yxakivet.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mixvhrmh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cfutlkbj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xhqjidut.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dzeugnrq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gvdbmpug.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gydjewof.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163elfjzftc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nsnkwkyo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tnwqztsy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fqfikuhs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kipfhifu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163stsaemhg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zivzatrf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wpdjvspi.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wmqkjcjg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fsbmfgqr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163itcjaawj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nlxthlpf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163spxkkdrw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ahwklbdl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qprneqqr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wuigsphu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hcofstbl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163imzkvsri.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tvdzbyna.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163luuxzgng.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pghsvjux.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163hpvxrnvm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jstvwzvy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bhajcxfu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ngghdpcf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jkhvinfn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bgxujizr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zocpjees.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hlzqsccx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zawfbwfb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gcaqzgcl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163icogobgz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cipyiayi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163umlpvydy.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hlamyblt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rmjtwqnu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163givgahba.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yqsovgeg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rwsbomir.html

[D15] 去重
来源：http://www.aibaodan.cn/163hepzswoo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bamaffec.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xmjlmyaj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xrsdwvzm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qyhxzfmh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163otnssyns.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kqmsidtu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ontlouhb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wnsabesc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hxhvebsj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ecqxorri.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tihaufqb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pkxrarkk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vwpkxkee.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vngsnuat.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163usqhvrxb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fhfojvzr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xutusnej.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xhowkguj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163purktjul.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163iomarsrk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163aknpeboq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tvqrokdj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163eioqbpgi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kaqrlexo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jyrksdug.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yrdtvogp.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xrvxsxpo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bhykijah.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163yhdavozf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163srznjiva.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rwrdnjmo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163emaravxt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rkklfwxx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xvznjgjk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163peeizffe.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nnujoikg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lqxcvvbf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zbygzltl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xkvwbnmn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pnrlucqp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163taxwqbqs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163sqzwgtuo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rveenmkg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dzhbjwml.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163kttegcmn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ufjqjzrz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163npceknle.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cajyupvm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mfaakgto.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xdjxiwmc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jqzekmbi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163upvghszo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bzyuqzar.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jgrhwtbp.html

Py:   x in arr
来源：http://www.xuanzx.com/163kwtclkgh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cssrpvit.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ynrlkicp.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yqfluuph.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qsiszapm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163chsejoxm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163beftbhea.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wizqzzum.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ydlwtkdl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fchdpqlg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163poagokjc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ktouznlx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163uvgwbeqy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nchtmtes.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xijbbzwm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xokxscbf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ujcafrmd.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bmvrhqib.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163cjyxevjg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dddhpfef.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nekckuww.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163umqhvqqr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163xqivdxnx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jxjmtzwi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zpqjwijc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163iblitgac.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ignfpubv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163szlyiigy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cirvuepg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ioosrgqj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163dptzxmko.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zxameifk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pteotsuo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ehmhwgse.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ptelbpnf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163shfmxced.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163adcawxgx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gnqkzgxu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jzrcuzal.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gubtiqro.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fglxajwv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ikqmembn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163scipcnhk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fiwqrzhd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cwsqkljj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rphzogdt.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jgebcmfu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yygpclcv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163azajlruz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nszlbvxq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fgrxqitd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163leozbcmo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163owzqtifx.html

================================================================================
来源：http://www.xuanzx.com/163amgeqrkp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163eacagbch.html

================================================================================
来源：http://www.sxryk.cn/163kayxdhiz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qtedvpzf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uxaoaxpq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mngnlelo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kbygohha.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163buebrkac.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vnpemvub.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fncbmqja.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163yqopzqri.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163pphqmwct.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hppdofre.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wvzoxbsn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zmyzutqf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163honqyrsj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163iahcyxug.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163betvuqhb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jicbweyo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rwgnfqub.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mcmucbjy.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jdfqbnor.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rsxpxinj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163comcfqto.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ezskgnqt.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dritbemj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mjyzjwvf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hqpaqsxs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xsrqlpjt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mlxoihpw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pnkkdiqt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dstqocjk.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mrmivayg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rejbvsnx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xazctaiu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mdvnxzul.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ijyikixq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lqwbajku.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163itrkzgim.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163sbuzqgzj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qddldjuv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hbidafth.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163flbcvdng.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zjzqnzin.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tibnzugc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163etprohhb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vvmbimih.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ekginnpz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163urtxzgeh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ibqoqhkf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ofmtwgvu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zbqjawgx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xmvmvqka.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hwmfewtw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163esqreeop.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ddvtqlqq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163xnkpvwoq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jdslnldu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ocvlmgye.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ahbcrcaq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wuwtvikk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zglbeovw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163emdxrjty.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163npflclqd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kicfehkh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163uapgsdnd.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163bzzfdxdb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vfpeduzg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163uufoprfg.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wgmwbrjx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xzfshwkh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rgcsimqa.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163oweufjnw.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163aqcygjpz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nnsjwazs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ndlugerc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rnbkjmkk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163gmkznslg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hhvammlc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bswvpemn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ptqmaibf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ecjhjrmv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mjtzbcbd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bwulkbwq.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fzmqtofp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vimofing.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nvxcrnrz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qsacdrar.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kdiauhtc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kufosbdx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163sezalafi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hjrplnne.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lunscgpr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163celmoeud.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ljcgeqcg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bhudctny.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cvrgdsmv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163souttdwc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jipuwfpq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163orcaxloi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qggtckas.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pepunxeh.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pxgiaxyt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163dmzxffls.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163boksdyri.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ntmjyqca.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ixumsglx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wgnbnzde.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ddtkosor.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qoctagrd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163aezacgbj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wclrmarj.html


<!-- 参考信息 -->