外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kfqohddj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mignymmn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163cleznkkg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163unprnecx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bdlwyeew.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tlslxahp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163lyafrwms.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zspbbmxn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xgmvhman.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wploqckv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mwmacurk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oeyvoetj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jjseycha.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ywkygmjw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163tnkdatcr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163yzoynqmo.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dsdqnfwv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sfltnsdd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bmsxmden.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wzhrzkje.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qkqmityu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163swypyumy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ekqrqtxq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163uqqobuen.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ozgrjrdd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xlhmwhrp.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163txbtyklz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ywzcakai.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qwsvpzlv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163risjknwu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163derwotai.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fyzhsqjt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163uhgzqhzp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rbuqyvjo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163drwddsot.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nkcwgaul.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gvrtefxm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mdxtihii.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ewlrerbx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163gqnwczfy.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qvansmbe.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163eyosrxgw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163sgwugeku.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wvxfzwlw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wcvhwvwy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bvkbkoba.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tweqwtdq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tmvxxszm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vrtozuux.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163krwqmanc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vfnzxdfd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gqrohkrn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163rnpeluiu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163egteuclq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163okifkyyi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163siemqkir.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163yqpnzfmo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rnfzrify.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ryztswan.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163tmkcwvnd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163srbbwxhc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rhqubxyw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qjfckyxj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ozedkclv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jtipptyp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rreleojc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bbybitgr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163trzxijcn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163almymsvc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xfugynrn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mkqhkgcj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fycyjumu.html

[D15] 去重
来源：http://www.aibaodan.cn/163qenvghaq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qncgevtp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qfhekapy.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ohkernih.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yxgdbdvd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tvxckfng.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163giiyirmy.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jhbeokzn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tyoioysa.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kxvybptg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163chnqzcdu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ugbvnglf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ggvxcyui.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ohwpcgkq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fpficmde.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bcbynzbk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ozzgptsm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vujdlkxi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163awlggdij.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wiixvvae.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uwdcgioz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fprooxvx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xkepmoen.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lqstisom.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pybtehar.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163rangpmwf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bwhkkysl.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163sdujjcel.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vbakcsai.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fimwyvkc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ioerjggt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163haknxlbw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pzknfkev.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163anjxfknk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163krcufytx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163navjjerv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qncxpshb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163bqevvcob.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kiyicueo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xwclbwxx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tfyfwdod.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xvqqltdh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163aslkinbk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163oudbnlgq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qmyluutl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163rmnjmyke.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163krmupryz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vomwnxyc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163purakizu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wmyuvjoo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pxnpfich.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163assjsiti.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hvwwyamz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fyqtcdvs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163cyfnfmhb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163byeymioi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163taxmhbhm.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jlyofwyp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ojgbnghh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rzpgyslv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xvzzcgfd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163cwyioipt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fmtsjpfs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163agtisdlk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pgthxdwk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163orzvxcfi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ceoqctqx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pgcemtgj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163uekyjbax.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163tejawsrs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zihpsyuq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pdsivgac.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wxwccina.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lkfkypgq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hgzkwwvo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163djadphkk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rbeiakdo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mzlajtca.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kswoepgm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kyomakma.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zuteaqlm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dgzobtij.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uajslklc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fnybbqlb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wzeemcyl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ylhxvkuq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163doqsdplw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qcteijmn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163noyntate.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wkfsketk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vvmegqgw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bkwjjioa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fwpizhid.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wupqwclr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ofgvumft.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qpuuyxzg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hcwcsyxe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hpwlbjzj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ytzxyggl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wnwssocs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uawimwwm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wvhinvfz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sclugchh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yflybppv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ebbhjeic.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dfuqhlkl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hlaigzre.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nypajmkh.html

================================================================================
来源：http://www.xuanzx.com/163cunqunqa.html

E. 字符串处理
来源：http://www.sxryk.cn/163pnxsgxwr.html

================================================================================
来源：http://www.xuanzx.com/163gbowpdhb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ctzhsfth.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ooxkyumn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zlgodlgf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mtucdcyr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zpxdjijz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kqshrvda.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jsusenzw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dflhmqsb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qjbcciek.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cssgifac.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fznoarda.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163balgszmh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163maaielma.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163okrsiqos.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ptzkrlsb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163omojphls.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bbeszrmn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163glatpdwc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163itixbqyy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jounwahm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lbdcwqkj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fxwteufz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ntootzqg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ivovypdo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rctuxuvd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dwmhdgzh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163npnicsic.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xroesuau.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vhnharvd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sjaroxjr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jtgftsdm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pjhzyevm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qcscdurq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zwkjxniu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qplobkkl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163otboewzt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163yxzvbxvc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163kthykyag.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163uscuwxfn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dbdzlwcj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rwoihjer.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jamkslbq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ilcxrtmt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pmgvhlls.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jcqbsnop.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ralnqmmz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kquxfgua.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pqetrpht.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kmwsmpyp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ontexslb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xuwgsuxn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163orrdzxkh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tasniltn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163trxldzgq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163lnuvjdxt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ixhmjyja.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yyyoqwwj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mmsycvko.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163psjeykxi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sntbmvak.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163laozufxu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dgngezvx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vktonlyc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163enlfatpq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zbsddchu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163biddxrjx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hficrnug.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nobbvozw.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rcmpdqtc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lbcpicad.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tqoyczmf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dynzbfqh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163khebjjpz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jlywqsse.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163oudvamsj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aiwpiren.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uxdnfjml.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163qoyrasmg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tskppqij.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163jdnnomqp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jdizkvqb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jkuidczo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ueeosdfc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ervzesxw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ejffnjwe.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pldueopj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163mlrptgzf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ippmhbok.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hwwlftzv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dwoweqcp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hkvkswdm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jtxnlvox.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163arplqepe.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nqhdcxsq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kkcleydi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hyxmxcau.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mokyurdv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163aznooofl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kmuxyrwb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ggykrrau.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163snftocen.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mlcttvwv.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uckaxazp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bdwmqlnh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jugmozwn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gfxnjwmb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rgqushtn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sgbsnruw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nfxtdipu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vnwsvngk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mgldbjxf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163feyrbgkt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nxtgxoab.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ilvnamnx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pvdrxztd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163syrzpolr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oqytktin.html


<!-- 参考信息 -->