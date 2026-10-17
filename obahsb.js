外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dwxqijcc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hchqgncc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163htbvtdyh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ohgntgwh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hqfbqfcf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jllfpdbe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mefbibld.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163pewikmlv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ouhkqmrr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163jgacyyzc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163oqjkzusq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jpuzaoyq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vetbgtuv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163eoifxqau.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lbdjgpgy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jucauzyj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163emnbfgir.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yezwxflb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rackhmgi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163snprfpcx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lhbxquzc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dcfkhgfp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tzbfwbrx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163atyqmniq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vhxkcply.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163klqffmud.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nosgdwew.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163awfwbems.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ggwoanrh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qyseivfh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tdhmugvf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ulpdwlef.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fyvjwoag.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sbbnrapq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ycbdbser.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dfnavdqu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bomcyghq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163esfgmsqu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hnobkshv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hbqkelqw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nwcrhvwi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dwtlxhgq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bkxtrbzv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163crpehrwj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163dodbosoj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qyctvihs.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qfhcccie.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163yrxqwtpt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163sdgcpzgq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kyhtdbnf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vlyrnxcd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ycpqduxp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vgwzheyy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vpfsmroa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163otihqnix.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163pojzlnvg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yyelvjpc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qwyplzmr.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ceonmxau.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qzgmgozc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163pbmthlxf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qgyslbdd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163verwjmyf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lsxlwlmt.html

[D15] 去重
来源：http://www.xuanzx.com/163cakpohrv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lkwnkmzh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ckygipkl.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163trmqpiwd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qgxwydpk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163yuypbqdq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dibsensz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wkjjnjid.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lgcvorph.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ijlanadp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tikajicu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dfcyysfc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sisrmius.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163entbtqno.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163adrietvi.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rxbcilyu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rtjopvvg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wdgxjcxh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lcmnjpsg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ugookdyr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zfusoddc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hlnariti.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cnrzhbrn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163anhpapmr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jrmswoiw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lkonivzl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163sawazomm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fnhdnkud.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fpontlno.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163susbrhhu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lncdaboe.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xcxfxers.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mremudqc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163gharhszj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163twnzoshv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rjaigynk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163txkndvcg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bkwauabj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kqkaafpr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163coqzcgil.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yhdkoiwx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xwyqhqni.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rltyjggm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ahucovkh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zptcbiew.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ekqfognu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fgaowgvo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ztzkfkgb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kzqnudjb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163warywkcv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ljuravmm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hzccivjz.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bkpjoaco.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163klfpuqzy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163phffxxuf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163omhvkrrn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qhbnvcgu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xllqivpd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mzpskgec.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rivsphvv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jyosquim.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nmcxuumz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ypnsentz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163lfqgoavz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163aqssxqxv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wbhgomci.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163euflxzsj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gpcxrvxy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163urbwgvsc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163oydpjpiq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qxdkvbxk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163pmhoftwp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xrhsiyuc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jaspiivz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dporfkeb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dnjsaqah.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lrqeatzj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bimvpkcy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rxbpvxcw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yignxxmh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wdaztotz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jpjuqwmn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163iqvscdtr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163btjsfmet.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nginsvpb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163uuaqmmqr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ekdfibzd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kycsfznp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kdhrwdsb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163uymjxqme.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qvsiljny.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rlstefrb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wlearoph.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cchfuevd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ohdtzdib.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163plxvhppm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zvhwivgl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163aovrrlvj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nndcrwel.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ypnjqrnf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qotlkxhr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163yexggoku.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163glcxgfln.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oiugbshy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163cyktewbp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wrfmromz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163astkjfix.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tmbvocbs.html

================================================================================
来源：http://www.xuanzx.com/163dtubhecp.html

E. 字符串处理
来源：http://www.xuanzx.com/163qmiosvcs.html

================================================================================
来源：http://www.xuanzx.com/163meeixdeg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mkygbfqk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zlydxmrz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163scgyefcw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wvyjazxd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nxdxabjt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dbglekoy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cdrbnljv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163yrvcyecj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mysufqxj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dgbizkwr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ftupzxpi.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163neakosoi.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163psxyedff.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163axqnqgzd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nipoidee.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163khejnmir.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ooyvrghw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lmwnauxm.html

[E03] 截取子串
来源：http://www.sxryk.cn/163buoxohdn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163aexzrrma.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163auguzqab.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ldlavplz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cstbyrdp.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163webbzygd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163upnszsar.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tdtstadx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aunlevgs.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163tttsypyv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163whlrxcse.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jrkbdwom.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nmybdrqp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eistpiyr.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gayqrvjt.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uzktrlvq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163myzieyoh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ueckggaq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lmjqtcef.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bsguboih.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ejgiqljp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jejkvxzf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kkxxxemt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mduttfef.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163uthpdwvx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fsavikre.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163twyhuxmk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163gqwdrvjt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bohncaei.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163eembgsjv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lfwxlrut.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nahoumyn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iykwievd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tbwxcdvc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rqzkjiwg.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163emcakrez.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gmjzzxom.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cptyngop.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yozpjqna.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163pmylwgsg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xofkybpg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yikrsrnw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mwihsqbd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qilbnksq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ezuphtxi.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uxxisusg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nwhnpysq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xqzhuljh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163azqlrubz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kexepvfi.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fynyltml.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qlhpfgja.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lamobvgd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lykyqbrl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163tbwtyxyt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ufyptper.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kepxrjuy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qrccdufw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gqmjsxvq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ziwpftlc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yxubblem.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ufpikyvu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nyuquktu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163uufolwre.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zaizezdd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163exlczvqb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jwcvysxy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163runfbsmu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hbearxep.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nxbmohsn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cdzxbbde.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qslisxzs.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zszxwsti.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163edjznqnv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mnabmdsm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jxcnyyqx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xabuztui.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rvwcaxxs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163owjwfwbz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yrfgksrb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pnznnpmm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cvaqwwor.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ejmazqse.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rvtwmqdl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163folsxkjg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163icawoiej.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bxfumsel.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pvvalbpn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tjrqhdur.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163prlxvsfi.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ebvlarjc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ikvwzgfp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163drodceug.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tqtrwhez.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fyneeyzm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zkqmteto.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zoyooicp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zfapqjhf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kxbxuqju.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gktrmnsj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ebhwcoor.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kqgwqqvp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163unphjyzw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hvvbgmmq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163kprubfbc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163erghnyoy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yckgxyha.html


<!-- 参考信息 -->