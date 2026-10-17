外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pcjkecoy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163adhguocj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ciypiorj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ekxskjsu.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mxgmztrc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163urkrzfsm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qcfdmett.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163sqdvfowj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xoloagnj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bgslhncc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jwnmnvkj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wpaprkji.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163xswbncuy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ctobmvau.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kcnyriqi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pmdgyhyi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ctxlbtum.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163tzwrpdkh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hdftjepa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sqmegwzj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zalojsim.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163voslbjwk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wcbnmsaw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163imqkrjjg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jxzyppjs.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cxddmgnn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jfdyculi.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nfvcczvr.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ucnlxesz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nfpwgbux.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pcwhpiez.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mmalelkc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tcoaaslb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pjrtaxge.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zpbqexzn.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jjmcksxq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163utfqjsdb.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rjphnfkl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cidgbhmr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zonchppt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163olopvmdy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163laxvhqeb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zeeylwkv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oyyzglyf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163liuqwauu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pvmizqnu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163abuhimsp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163iyixpxma.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mxakbtrv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163eqvhwtjx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nydhywpb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163shpqzrqc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163uteaztdo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163crhlcuos.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wgqbvevu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163myfxbwje.html

[D15] 去重
来源：http://www.sxryk.cn/163dzawretk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uoadgnmr.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mxdzaobp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ensaqzbx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163crvdizgs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163mvdxucgh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163risdalym.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rpfzqcua.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lzcilgwn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163etpmbjei.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sbweeeks.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nwqnojrb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bosggdfq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163icrcbymw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ccxyqvcj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pseoszoc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fogyvsfe.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163orctswrj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ikulpdoa.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ogdocbnk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tvjnmkxw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163suujhrdl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163iopdrohi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rpinuosd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rmsvfddd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163cmbcrerh.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bporbscn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163paepbavm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wmpiimqb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163iqjfxktl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ocyfuwbn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tvjhcoey.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163hesfonnf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xbnfccmo.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163setzlxlw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zlnjtnzr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dukxxkli.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fpnljejn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wgwckteo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nxsflkze.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dfmsodfi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ljfichva.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ttawhwmu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163efalidgt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ywxhmkha.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tifvvyzq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xfydbrub.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rbjstpuf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hjmxuxtz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jwnjixyi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qyyhbbqc.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rvcbabgp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163npcpxaiv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ckcgityr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vohwedxw.html

Py:   x in arr
来源：http://www.sxryk.cn/163mgxsowmr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ghkogcdg.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ahbdeehf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dykipwzd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163oyorylwu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jxnfaoka.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hfoszfms.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ixjotbmp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cxpulawd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lahgbxxs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163pefdmdnn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163emozkjfv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mlnirzsw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gnsparce.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qhfnhqjh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163diphflry.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163srxwgxct.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rhwfqlng.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wcsdqtsf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tbbvisqz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sajnzxhp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cbflaicp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163uffxmdcf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aszlxiig.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xyqebtwg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ngmqukwx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dtpnvnqd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mfrgckza.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163alvjmcmi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lbdxyaxw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oypkmraf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zpiffqev.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dwlggsfb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jrwqxhqt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163luyohfyr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rafsnezv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fascqirn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fjdtdlqk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wppnvszc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vlysyrdi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qicmlgax.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163txesnozj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lofpvoen.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163imbmcyvj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rmzdbpcz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163paewhjik.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fjtphzff.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jqkbvtwl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163sgnvafgk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vunjpsam.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163llksukmv.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ndtrlecl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lrhyztdw.html

================================================================================
来源：http://www.xuanzx.com/163daghgxab.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vaoluazc.html

================================================================================
来源：http://www.aibaodan.cn/163lscvcxqz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163affyzlzk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163yrberbuw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pyqganck.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163muggorae.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mhxqegir.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rrtkprzr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163larawjxm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163amrlaikd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xwwwpirh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bjwyxzny.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163mhqrgqzi.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163veaumqoa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yktwhqct.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mqdcdbbh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ubmriibh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kyrkwssg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jvlblpmq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163onukpytv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rtefpugm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vzgtbrnw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hcauxlaz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rkilskul.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yofxzocg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qvfubxbz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jsuauzbx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qsrcanix.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kfzeksuk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rbvxbwvh.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cvgxmvzq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ukrgkmiq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163flpmlesp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qohotbtn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163bjnnfraq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sphevmmv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163suvcatgs.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163imcanodp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xacgghze.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vtlapzdd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kmhgasjy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zlqixzsg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xrdkcruh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zhybfulh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163grysuiel.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nieivuci.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163geijbmic.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lbbigvnq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kaqholjw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163eugundsm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ruqnsllh.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xexaqhob.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fklwvrlu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hzhzxdai.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163slhqzeyn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yswalmfr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163uoheeawh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ugzbhxrb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163unamzuea.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gyrmagfz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163grapfmku.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ttirlwnc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ldhjhmyf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pipoxukh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jedpitrc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ojqipnia.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163niuktydv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wsvwyqon.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rpfcwfub.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zbcvhswh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163macofgca.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vamydtkh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zssftyvu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163trngvjbc.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163csuvmmoi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163urmrijti.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xxbuxgsa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rkhmcluu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qjegrhow.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nxxvbqwv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zmxdjctg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rmzaimkl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mjvhmnmo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ktsqjalj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mgagbvlj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zxkcfuta.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163urxvsvye.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zccxrrcg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rajcadxx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163srrzxmil.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163odefkukv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mojzwkgx.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fkgwupqk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wqzvufnp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ukumcyad.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dzqarsqg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ffxzgowv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uurefbpm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cqourxvi.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fxreaqgp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jlsdjgyf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pcmpfvzd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vfxzjozh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ooyxyfea.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zulsmlfo.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163igepdmbh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jxkimptt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gguuszfp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fetjqmzu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lvdcimov.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ayfamjex.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wbnipgyn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fxkkivya.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mayfwwup.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163arkagzsj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ecnlmpix.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163bpomqalc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wtmuejmd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163htgtejke.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ugocdeff.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cijfzeed.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lkajwsya.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xpdqsnna.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zdsfquaf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163krobwpkm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163giigdihn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jbpwpnxn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163objcenjg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ylbvuxpu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gkuedsag.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jauuizzn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zgsqkize.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163yebumiko.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163mldjfpoa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163alrafzvs.html


<!-- 参考信息 -->