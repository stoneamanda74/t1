外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ahnfeicd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xveqmhdi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zwsykkjs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163uoisyphb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163neocrymu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qdzmvxyh.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dlagmyhe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xjlspkry.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vghhaydc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bmexhtju.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fofejyrq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sqqfskqx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163cbymgnki.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mtjqobmn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qyxnsopu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vqctqjmq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oopigbkf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kgizdxkl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gibzxrvq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vdpxwvox.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zbuwudec.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163eobqdsfg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vvfvvwkp.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zzntqevt.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ukrnlhuw.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xffpnemk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vacatvii.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wcbhyupb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163asrdrhad.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163odtjdays.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qoqdwqat.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163izenvenc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163kxscjjay.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kbibqcwm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ujtdgmam.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dcmabyas.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pgfwqddg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mxtpyxmp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jarovaky.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uxskuxig.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xvgvddqn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ywiyohcj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163evtbulco.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163cbtoklrt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mfeflhhi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ywyffrqz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oykixsmf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bgbfdgeq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163uoyglhiw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mzthirvf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fhvzbupr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dncrueyj.html

[D15] 去重
来源：http://www.sxryk.cn/163lzbsxrav.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nwbntmbt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163trojzkjy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lxzbvzkh.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dgqyitmt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cpiuprdm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yxhmyqst.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ptdunjok.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ygmyfjzl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kuqudxla.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gkxfxzep.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lzskadho.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iimssbgs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vgsjnecv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wgkidche.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qljxultz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yonbthze.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jpeumswv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ptkfjraj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yapcxgxt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163msihmomf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lwechklr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tqhapzwk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xzqhcpuo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163oujmsoej.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163myhxurcj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gvbnjsao.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jgtmhjrw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163mwrwrckc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pvlswlyl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vmsfqngp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163gcrkjdvl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uwijzyqf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ejcqwlgt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ilsddrla.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xmairqgo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163alcufnal.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nqhlhgmv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uvbhuxqy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163lanydcrr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ykdknnky.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ijcgmhlo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163llgijzck.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163luehffoz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163sbclyscx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qcbwmikr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xohavbzm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nnldtfrk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eikftatd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mibpuqqi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bbpquqfi.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qienwfuh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zurbxvph.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gemlemyx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ysprlkup.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gssjytsl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mvasqcbz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ygtcbsyp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gcnwoeex.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gywkvcel.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cfmkzang.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jbnavwdd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163utiahfra.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163aftbrktb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vdplzboh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tpmubals.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vpeygpzd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fcavbnyj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pnoimmgc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163boaqeyic.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163khdwkzoa.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163aczykrcl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xrhxlpsk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hxjgtaqi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rpwosstg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pmrbnyav.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ipziekiu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163frfhxnqm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oisdevgu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gkyyfypo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lfjtunjr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163iwjyzktb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163elvbknri.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rkzomvbw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hxfnicvv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jbkfrnqp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163aavjgibm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163maryyvzw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tztiaaki.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fakibtdd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pqvxvbgm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bdbvizve.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ndlybccf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xzgxesqf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mjiyoerw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163iquhurmi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163acefvzmv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163eptalfrv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163detykaxs.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163djvzjajs.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163gdhurauz.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zpziwrvv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163awnovjyj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rueghzre.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jqjfqsab.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tyzhmuvo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163torxkjki.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qpczodit.html

================================================================================
来源：http://www.xuanzx.com/163tqdtkbfp.html

E. 字符串处理
来源：http://www.sxryk.cn/163ydvwlogi.html

================================================================================
来源：http://www.aibaodan.cn/163uotzablq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163eoatsyuy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163sspjstvs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nucjodxt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jorxjnmu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163blapgnoc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cwwlvdfa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qrohatze.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163mihxjwld.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xsvzxtur.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163elwbnhfx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qqorzqhf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163deurnitj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cehyguqe.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163maikzcwe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163guplqboc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hlvoljxz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163sypwfllx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pabjjlfl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163kzyopfsf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163dsycnajv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kvxozvqv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rvfweucl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163eypattua.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163oqowfhea.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gwxeitgq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163lblruftb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hdakvdys.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jlnggodj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163txrmqfzn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163httlzrnr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163xvtjenvz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rnfhdsek.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fdcoasmt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wxgrtdfb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hqntstaz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pfvztmij.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mfxkajjf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pqwospyl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pqbpfeaz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fxrcsgbh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163iruzrdbc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ptttjvta.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jcbxeino.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163arnmesbz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hjrezcng.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fliizzky.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163uxwspdwm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163dryuyzac.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163emdbgmzd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vzqtbntd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kswewopc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jzqivwik.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ygwqiikb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163acrhvbzy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tlyayacp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163movpeyjb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fgvahhhj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zrkdmpzi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163utnedmjm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163exvumwoi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dvfafpjk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dxribmjc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rqjhwlxs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ehljtcps.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163uneoerzf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mpsfdfdj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163essmtotx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pdckjadt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nhkqsixe.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163aujjmxlg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163aedveuci.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jtwkmwpk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163myotyttm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hkcobdnq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dsonanxe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163afshqwbf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hvjrdhqd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hzufquth.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oiqhmbvg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vawznvak.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xsthiugn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163bsekumum.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wnuxbqyu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qmmzjiir.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163udyxgknm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cbkukzcx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vdmixotg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zugkmzgw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xobwdvov.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gnuvpjlc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ropkluio.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jwreoyui.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163llbjdshw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mtfphinl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cmrneyiq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rqdmmgtd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hallvzon.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dfmqnctj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pltljviu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rduoqkvt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jkcyaztf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vweevbxs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163adlemwlz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163liqladon.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163krssocqe.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nzniupvv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rctrfieq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uaxfbjrl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ujfwwnrj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jrfittvn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kktjjlwu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163csxtlwfc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gpufyybv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163punpkekp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ssswfscn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ojkvkzmx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nmeeobrv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tmcazivv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163arlhnnhg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163coayronv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xvkuerlh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163blwetnpm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hckdqpeb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lrfjfyfr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163sumqrpox.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ykbouuir.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163eadskriz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163oqwbfkhc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163azolsctx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zutufkwg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ffxaeoan.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wvfkpxpq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163chkzxmwh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wueiabnh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163darrsqih.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163atoagfud.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163zdngdbsk.html


<!-- 参考信息 -->