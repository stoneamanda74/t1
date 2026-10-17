外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bbdznzde.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jyunoxis.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qjtresfy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jlkmudld.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tyusbxeo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wqwwxsze.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163nvbysrvj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mkfimfin.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jesaiswc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fpyhoqyn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163mdvggvyp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163dsnceqwu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qynzxlpt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rqxzrfkz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163scazqxtq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163suttxzel.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xmiitohe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jhmcdwhx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163junranuk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qkfcrokg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hvjixlby.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ukjorjdg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gcbmtizp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163hwnvtvld.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nwhqulxw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wexdkkkb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163iiiclnlz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tqdugeyw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jwliubxa.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163eflznzux.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wixagocr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163cknagbvx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163virnjopz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163eveobjle.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163aobhopqb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163iueougsy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ijtffitz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pgjdmeeq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uovzejgm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163spsnuidj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xanvvyvy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rmfojdfx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qysqwzvx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fjwgaafq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wfgmrazx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hnshizwa.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rfcgvmvy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ukalkhxx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rblcqsjv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mspqkcou.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163nznzyiaf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gvxwbuqo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xkqgcikj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163iwcuesso.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163imvtvgpf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qbfldosj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dbgfepjv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rihgkbmp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ylvvepey.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zeikmcrs.html

[D15] 去重
来源：http://www.xuanzx.com/163oopwviio.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xmvaghju.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163sevtatph.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rceglpqp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163voqsvnnb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ctechtbk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163oipisedp.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dfreoikz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163iuhrdyvt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vvyajyys.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163clgjxyqa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163igxnmjsy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qldfymnu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zotpkszk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163glyeyfpf.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vuabyhpq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vbgwunah.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163clhkycml.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uijwajyo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mhngamti.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bspjzqje.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gvqtaqaq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163feiozyhp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163grqhodzb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vwkuzvga.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fnrtjppn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rayztnui.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163btqrxvdt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163toiolxkw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ginshnsu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163derhbhjn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mehcjfbi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tojfbzzy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jvpianyh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qdomkslx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163idzucfpj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ghnftzbd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rvvplucg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rjouxugl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tzndwqvq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ozpnfveh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163scvbvrfs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ugfikcyu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zdqtvfrw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vlaxiupb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163oisntggn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163obldxbom.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sydcwdhe.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aydhcfzx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lxbjaukx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163msgxfqgn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163picunpmo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zvvbqobj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163iffqoumh.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163fjdvmuux.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ejtqdzfn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mrqsvcbd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163onerpofd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jmhpraod.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163evgolzar.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dlauoprk.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jjfztomm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hvmjfkra.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nwmeepjf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lmtxyiie.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163eaustkjy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163zkdugzef.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wvedagrn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hzeiqnvn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nuqcuusx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ilzejyma.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163oqvshhck.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163buiwleyw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wixvryqx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lpgnsczs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bolhlllf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vezsqlvt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gmfhoeqj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hqxidpzv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163sivyjvdw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163psfvezje.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jfgkulbb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163swghkdxw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163etehkloq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163poiyphbk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163yuihvtwl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pggrqvqx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ahkdfzhu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ukvunyoa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sdtcnamc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163fjlyfnnh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nvhrwxsc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163spnfflfk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163euxaewlh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163miruowqt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163drrlohqw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dlnckeuo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qctsrhac.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163haqtpyny.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kjqvolsv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zydlezjl.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zmvfakwp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163drhqqvle.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ewbobajy.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pzxcbvye.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163enotvquo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pdeebqob.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vlfgdimc.html

================================================================================
来源：http://www.xuanzx.com/163ooemfzzg.html

E. 字符串处理
来源：http://www.xuanzx.com/163kyxjkxdq.html

================================================================================
来源：http://www.sxryk.cn/163eritwdpu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wtbsovec.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163onaxljlq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jyxsvjil.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tgpuwqsx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jkecfqjk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dnhqeuks.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lrqvgnoe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163laukoxuv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gwvumyyx.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bhcxpcpl.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ihywzvgg.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163kgxhqxkg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qoojrzwc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rpqfdkpm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fkzquehb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tupefeho.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mcfberhi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bzhksrno.html

[E03] 截取子串
来源：http://www.xuanzx.com/163vklffypz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163plvgzthd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ypfgcmtd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ablitpkx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qeajmmxx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ryzbblug.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jdowdefr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xzzgxygq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hyftgach.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jpjwdlnc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ntgqqsji.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163clnxgxpm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xuqicewb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ikrbqhrg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qtfdxzze.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163uwvbpiry.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dyowxetf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ruzgarxh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ysrmgyol.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lcvmigqb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kfprxpip.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163khhxzgpo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163iwymzuxi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rumblods.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163skuznelf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mxhczfzh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zejeddeo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ukwrlqoo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vocrynmb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jrfphpjc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qlargfsx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hwlmcpcu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ohnltgbn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163suvdqnpk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jmvxfjmd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zqzpxiom.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nkqfczce.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kxohnffk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163aahompnt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gukynygd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163euyygpwv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163acegcngm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163brqsnngj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zvfzddvu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163sugpjxad.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jjliapvb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163frloxaik.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hzonletx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cbtcsntq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gejmkzdc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163thayozka.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ndjryvip.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hlfuxyvf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ladvpfds.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163gcnxoxes.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xnnvdcyv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wipjtcvd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jhhuvgol.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163eonsglps.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gyjztgav.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163luetoyfj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163futfddqq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pjaswlim.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ibckbfuf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vlhhfozi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ekfxtofa.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dsgtjwuj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163miqfrcgo.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163friaeetg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gafcqokp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jmcikows.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gvigwtcr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wtgjlbgh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ekpnhkuy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kyxkoufp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pzevvawk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qpwmfdfq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mbqncppk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vwloaaam.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kkueljzt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163aomwihor.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163unnkgskz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wdgqsyzn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jxxvxbcm.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qiysfajp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lnyyhtsu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mrpteccs.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163sgguqhzw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xynjvjix.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zklgjzxd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nwlkidan.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tmwoydds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ncgzksti.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pvotdytb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xqfkcbvm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163lwcnmqce.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163szexojam.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163otydlffg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vesgzkho.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vdlyyubp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nnlearmq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163htsemyfh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xyhcuafd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ogmuzmfa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vtrztibc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163aynmtrfp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163djowtarg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xymqonnr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163edpeokxa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nsbgmbbg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163aaegugdt.html


<!-- 参考信息 -->