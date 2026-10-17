外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uumzntpm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ienyqccl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163vmxljelg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163aohvwbpp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tpuboofo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163snanronm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rtkgaeer.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hescncbb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xrzmtrzs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nmuuujqz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gplkghvn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wwnywrrh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lohdyqby.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vfstgefb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qkjgrrxl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ysvhllgy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nswbbkct.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163araxrsjp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163atpegeqb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163aidmayav.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jkgcirlc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ofkxzctj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ilvrodjh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163humwupbl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qdvczhad.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163azmnpuek.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163awvpiizx.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fdzrtpdr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ysebvlmg.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lnojrnyt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wecsflqc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wgvghzfz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dahvqnam.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sjnjgydu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ldodbbzb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bszvxmnr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zffvyoyt.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ohyurvhv.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sqxivqsf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163daiiiull.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163egmirdfq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pemxlkqm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wewqmzcj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ojrhpfqw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qrjjapsr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163atmdhywl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rdrqtvet.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163abklcohb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fhkkawvn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rtaafnqh.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sizigwsj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163syexprfr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qvrulyqw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ruaknjbb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dwaxxufp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163verqdylg.html

[D15] 去重
来源：http://www.sxryk.cn/163weskhakk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lxudmiub.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fdvvzfum.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rinrmsdz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dwlozogq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mhdhotlx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163trkmwqjn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vlsacjmd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bjheclzu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kpddjivz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wuxyieui.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163exgcwrtm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zppfwtgo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163thprzknp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hzeblmwm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tgqhpdur.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yeudlcki.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163cqzztxvm.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zabeoelz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163czpxpitk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163mhqenlpy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mbalpopj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bmcabeeh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nuboovur.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gwwrbrqy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dyowvnik.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163xkdzrskr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xgrehqlv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kjwujknf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163duvhmnjv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163inehmgnr.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xolqizxw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163npmjavdm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ifnhegbv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163aogvjuci.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163twjgmclm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163khtglgrm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qthoyqzs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163edjypksm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oyrbzisb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ummbbhwp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163alibhmnt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fuiwxllw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rmtettud.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gkeoqnsz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mtmmborq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qumsqgzh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vphrpiia.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bcxbesvl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163efbweqye.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163lzupangk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163knucnbdw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qsjmkvio.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yjgolnpy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163egmhwrom.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ougzuhzd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hqlaxyob.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163foxqufwb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163saodefrz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163shvgchoa.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pjcovjzj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xdkjzmdq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163rklodvdu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dicaiume.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163sutkphla.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qioqadvy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ksrxjehp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hhyatpra.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163uohnewgg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jauzgbtb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jstxqgki.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hqzelarg.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163pzsruqee.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163iwlgakjm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zkvhabev.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ztwqynuz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cgyhwoic.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hiuwibft.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iwmengyy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xkrpmpik.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sfykjimi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xailcbsy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vlxydihp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zumhettv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rcyfayno.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qcdpzohg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ycaennmv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163uwlozval.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dwlfwzck.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pqhzpaxp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vcvximhm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163enaocvev.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fuhkyyou.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163bjmmdvqa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163juosxopr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163eeelpvms.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vqkkzawu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163jhzkqiak.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fwbosfzf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ypafhqar.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163odllrwkj.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163erflqvrx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nzjxdcti.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163pxdknfhz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qtwtcjma.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163liktuusl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qwazlgnu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mlicisjj.html

================================================================================
来源：http://www.aibaodan.cn/163tdixkscl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zszolpqq.html

================================================================================
来源：http://www.aibaodan.cn/163hihlzroy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fzrhkokx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163cqpxmbia.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163yeyqeqwo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ettmckdi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163adswccrz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163llmdytkb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wecwjzsf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163flbyovgl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vdceviwe.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xblkpnxy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163manukvxx.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163aixhywjl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ikjsqklf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tojybeox.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163gzjerbni.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qijhbrmu.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yhqxooch.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gybelwht.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ucrkeucw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163twvazdtg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yqljmvxu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cdtrdtae.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mcqpljfr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ycrdiric.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163wtysgrnq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163onznwazz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xqqaweae.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163scacvjyc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pxetgjvl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rwotuehh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163sdskhhbb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vrsbwnmt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qedxpttv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fsrqbjbs.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yvguziel.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qnakxjun.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163mpfwokqj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163nhtiylew.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163loqoaerd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ffrokfyz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rxapjfkt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xegclejx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jvqicfzj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gmhtcthv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ehwewyyt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jmvhkqux.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ctpjfkli.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uwzlnwdg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zqkutoak.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163enrfjuub.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nriqrvvr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163nbqbazvc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wjilhxby.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zkenddow.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lsblwjga.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wcwprmoa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163budfwkjn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uiyfvkom.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163shwtxucn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bgisupoi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163bmeojhrb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xetijpqf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163nrkhewvy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163axzdkuyd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163eilyapbo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163vlcfgsac.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gzzmovvy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163wsmzyihj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bvffurgg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163myqpwezm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163acichnlt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vwqvrhyr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163adowsqlm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163miwbulkq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163efafmqbu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zxkbesvz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ptvnwmwx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163nsakrotk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hhswkwmn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ncjetmpt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xujjpjtx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gjebpfmx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163iltnwomv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ywnozlzv.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kxpehudb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hoalixtp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163sudjuemi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163npgddwtl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xvjfxgug.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163sfhbpqsj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163oliywkyo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wtgeugwv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cfnszhzc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yyljapkp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163spcliduh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zahmdzlq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jnrcsdef.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gyftiovq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fagnkpsr.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fdduyxnz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163oojgykmu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ftdoqyng.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163aeijqxgh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pgmtznvi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163izsxvqch.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vvncqqpw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lyceriqp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uozzrtpz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bcxewjqp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163dxtdvchc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bwmpcbln.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ovmsaset.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yjkoakfb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163bavuhjgq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hkavfkpw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163biayiqjz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163tqgumzxx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bignzufb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rxouixxo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yhvkfeoi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163aafxcivg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hgjcshlj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163olqxczps.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163busdjecq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kaekayco.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lrzndfjz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163neuytdel.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bovsfxzi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163erprjjwt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sfvdaqek.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bgtjsaso.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163hykwwfrd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hnrzyvtz.html


<!-- 参考信息 -->