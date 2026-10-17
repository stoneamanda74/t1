外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xxqvrnld.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hpgermot.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bflvrmfh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wydoaxrf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gzjyctvf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fisqhwjb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163szmwdthw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163txhbwbrd.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bwejnsmm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hlcfibpj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nxgjjvcn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lninyedo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zeducixx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uqilcphw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wjfofhpe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ktnmejzj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zxpqlaka.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rqoondoh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gnecphts.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cibiglnp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lkqsxqwq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nvgorfgi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163uskxxuxs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vvaiubqq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mvicipul.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fdssnbpt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rddjvctu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dkuvdkdi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163mbynllyb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rbfadzlk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pjeanlsf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163phitqoqb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nzfickax.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163qudlrwwv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yenjnuys.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hjascfqq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qmcmvavi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163feucuydv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tejpfaqq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wfntdtpp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vlbpsrvv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rrrnxrdh.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gjjmankq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ovcvhmhr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cddquepc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nnchfzcv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163amvoyfsk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163erakgkpj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pczgmlis.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163blpxqdsk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hkqljhjg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gemexgkf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zjkhzqut.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163iwgtukok.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163chkqxfrb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xtyvbmgo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tvoccfzy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163eklvyory.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bzgiaees.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ntfcnlro.html

[D15] 去重
来源：http://www.xuanzx.com/163stjinnzh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163volnpieb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163udhhapoq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163iwiuyxcw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iqjwrnny.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163susewrfb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163euhjrufr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vqysqotr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163uapfinyg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163krukiase.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163znnvbloz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ffenjpsr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163spappxxx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xhjzsagd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wehohite.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163afpgkkxe.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163onokykwq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ejxzesse.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zxzuttmi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hnmfrjwx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wuxmjbga.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163sfvcafhq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fhhimsdu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163oanjbwxj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163asndpzzy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wllsovmk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xswipkru.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xvrfjuky.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163sxmxpcwy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vtdjthhl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163iffiljod.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jdctyqsv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163clhajlar.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163efigdzxz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qyqwxmhf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163oajuzyru.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vlihozca.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jbocsdhh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gazwiykz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xbrtkidg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vdzauspw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nxjhlkca.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163urjgwfdm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gyoxwltq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163frpgyghu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163grirusgh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bhxhpcya.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163inuwhhil.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cxxptdql.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pqotnbot.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163aohuvytr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163wqqbgaeb.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lbibqyoi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163itgpqdda.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163czkawjlm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163sripdlnj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hrozhizu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qsndatnc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qzofinzy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163fttlxqdg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163sxusjbzy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163eagkbspu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qepvyysb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gcrjzyln.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tooxevxp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dcukmhju.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163shskcunp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163eamjioaf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163sacspgny.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163angycudx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bkcqbxwr.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163craegfio.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163oxnutljj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163otfgolwo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dskcduyw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163akntmine.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nmcbgnzl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bzyukedh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dggglxqm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163elydtyyb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163cjjeezcd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rjsudfvf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ynvwhdwr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bkiljtvj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163sihkpmgw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163dxxgqvfy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zqwiavar.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163aruisnfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nniudfmu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kbgeqqvc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jxskmrqg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163afhwrqif.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vvrmxvbb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163doatqghr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qihpvzjf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ghuoertr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fnvavyjx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mtrsxglm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163yziirawe.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163tvedyteo.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163yzvolyqn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rvygwcxp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kmyoxygu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ynmeyjyk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163hjdybwla.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zoozpkjp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tlqmcgfq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ylnncehk.html

================================================================================
来源：http://www.sxryk.cn/163nqirqmnc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zohmezgo.html

================================================================================
来源：http://www.aibaodan.cn/163finxwpai.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fgpelgio.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zaicjkxh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tkqfnnlm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jfgolslj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tcvutmqh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vxfipacw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qviqswdg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nwbfauwp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163jzzmgbxm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163afinxeox.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zmctxsds.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fqmfkizy.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ifirrobd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zbesquda.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163dpnocjzn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163kjmyhekq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163csnjphcl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lhakelzt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163okdsdpjr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163svoiqsfh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163reqapncv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ggntqjqi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163elxzbnhq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xgahrccb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163odouvujt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163idnfudii.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163uohflfqf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zlwuymow.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fkqgnaru.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163nwekqsjh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163clwvydvh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yworhuni.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vlgrvzdq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zlnsiuwg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lurbbowj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hcdzzrdh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gwnxehcd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hquiyzwc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iaytptme.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163giignscz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163huxppkhi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pqyufixg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pxejwqoc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pbaxyoja.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163volvsucc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163upeffeud.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mvnzmdht.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tgexzkot.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jyukuzzw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oovdqfwe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163llkpjcay.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dptmldnc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163bwntseyp.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163oyuiapat.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wwiiawsi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163phcagwrd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hfsfqunc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kiojnzks.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163oqmnhgdl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jebbgtgx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fhoszqpn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163joczsifm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hagkqdle.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mqjvmdgw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163scdoklvq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163sejddozo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uuqiurrr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kyjzyqta.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163frlvivag.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qdvlelgs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ouuybrvq.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xdcidxrg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163igbonmyb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163yhaaeuvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rbrrpvdi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lnlmkrwx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163utcxaykq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dndognko.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163awjcgnwm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ptqywfyf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ilkgekgx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ymgvxhef.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163sdvoffnw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qumltiec.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yqqskblt.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bxkygbuk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dphamoyx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163jwsroaeu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163osojcftr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sfvwuajf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dgbcofhe.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163qlcywhlx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gcvlokjo.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fkvkdpyw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163finivyld.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163oknjvppa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163xfuytaxn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xcqhorvh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zkdjsjiy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163crspgsuj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163rbistsol.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pbvpeqcg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ofwkdnzu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163odprjhim.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zzesomra.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163odrdzcqp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wbqtgjrt.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vaqkgazg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163evagaaeq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163alfcrvnk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oukmgdox.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163efelypej.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ounmwgvy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kefqwmaz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ytvfirth.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pinbrvsp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xxdwzwgb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wgbgexpe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163unctgipz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hxabrdgh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163astzzdry.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163amyqagim.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163guvdqsfx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vxjomnpr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163svzugole.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mjkrtprw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ioidulpq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nfuqkylw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wgbswuoc.html


<!-- 参考信息 -->