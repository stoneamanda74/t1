外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qsblowdo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ufjnziwv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163cnfqifle.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rksgbgjv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xvdifxjo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163beeibmfq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163evsnepuc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163beyqtoxj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163okinnjqj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tqqgshew.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zvbqrdiy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hsyncyxr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tkstftqc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163inaaqcel.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163utwuotlz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wapsbtry.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jrpdxfxa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163waeanjgr.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163osnjjvzi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hlfavtyk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163iecalfjg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jywrkxcb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qqlwkigg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163eetzvmxv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ujfyrneo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ptgvwmcm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qsrgxuyc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xvpdkjir.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hmeslmmf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wweyzego.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ngxrgvlh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xdlgrqrz.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tnnhvpna.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uiwrtgao.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163kwlgdriy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tnaywwbc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zmfnqung.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fqrtfcom.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wallqdxw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rmdwzybg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yvaqclxh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163foqialtk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dkewvazc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qsumwglu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nrvpwspn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wroeioqa.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wkwvoydc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xaklwqvk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163troopbmg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jjywllnh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163scuubyvi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163frvaghls.html

[D15] 去重
来源：http://www.aibaodan.cn/163izhghjlk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rxubzwus.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zvzjjdwl.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wbktxrgw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163igofmvej.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rxaingah.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fnzyufsp.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ilkhtcob.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mexkzzbo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nockpvis.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ndvgskbh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wzywrcgq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163terlcykl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mphaifjt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dlmqfmnz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163uwwpqlfn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xkekhpgd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163otcyyiiw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163rwlhhwaq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163muyazwte.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wrrclyyx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rrgarzdk.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163drlqlwys.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163szcvayyk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wowyfubp.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vjnettfl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ojinrqqc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xoservnr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bicnsilo.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dtzhplya.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vwqgqkse.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163iokapgrq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lxjoghif.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163oazsqcfl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jczzqlax.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mfqiwqfv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mqsrcfic.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ojgbshoy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ggerrcdd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163chhcygdu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uncwzhny.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163lmyqkvxz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dqjfeljh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hddusekr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hvtnckug.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163alhpnmxx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lydewjvk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ldfazsiu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uicxfzdn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dobxcbzq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163pmkgrzhw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mbpzammi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163pxmlmihw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hzwddzmt.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163opdtvxvk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xvdbexny.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ecolweks.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ouedrjvz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163swrlxrsd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163smixpzqs.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163phlyzwtg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163eviwbcvh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163snelnztg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ghjmcouj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163nhwqlren.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ztpszcor.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cvszgpei.html

TS:   [...arr];
来源：http://www.sxryk.cn/163uykyzyvs.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pzmypwnn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xyyqehlr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ltiqcdjs.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163sapforjw.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yedumrkq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zibmzhzv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cavivprn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163riezvxxv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pciholgy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ferlqthk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bosdabzd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uaxawhwp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163nxtohriw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kdpkmyzi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163urdjobib.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163szzorhnu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fufvffdb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fdnaqjgm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tcdextgj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uetcvflz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mprpsfdw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rxepdsds.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bmtkrsrb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jrwahmal.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163snimkpvw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ywzpaxtc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163czxmoaxs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163emhweuyw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163foziixlm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ucsyzrup.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163njhuebbo.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nbpgrdud.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163icgiyqqh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163femtprqn.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ywomigco.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163suqwuwtf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wnaiqrpx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tsmjbksk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ltbqvdve.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xpvhnwmd.html

================================================================================
来源：http://www.xuanzx.com/163bqwcljcu.html

E. 字符串处理
来源：http://www.sxryk.cn/163frbpxjsi.html

================================================================================
来源：http://www.sxryk.cn/163zwekmpbe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163daginupk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pveezkiy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163msldjuhi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eslnadti.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wlokoznc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cnuiauiy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163yiomysuu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xlzznewd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lxjofzrd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xgvcdvri.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163orubxmea.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163msliuwqb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gkxszmzz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cbkmezpm.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ostjvawx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vweaxnhf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ctpzuixp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bbdrscqh.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lrvhioeg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bxfsxiae.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163fjssejse.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pkmttshf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zapenxqm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kiqryyxx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163klydfyko.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xbsobjjo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163qdxgxdgs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163lzjjpeuu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qasklllh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ujdicmjw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fyimgbhz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163pwzikghq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wutzljqk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hkllmohn.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vtiowhgu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lhmrevnd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nbkzvgjc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kmscpcrg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163buxwensh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jscnogqe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wgnrbtxm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cmslhkoi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ijqlfmhv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vbxacrxp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163pyihzkre.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yxnsgblo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qfrzxdpi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cnvgxafu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cppvrlgg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163twtzokyt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bhiyccvp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163soejzkkv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vorhiabm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163thcuntbi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163aijgdxcp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163yapajsho.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hkdbnpys.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hzbymsah.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163aftkwepx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163esfozhxf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xucuelwm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qbaurwgp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gogewmti.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163etswrmvd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ghdrenap.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nnkbpywj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wapinfmp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163epxecnzs.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163prcjzeno.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rrqsrtcc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163etcisoei.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ywbaioid.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gtrwoitc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163uimjzkwp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163whdgporb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dhqerbqv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qimnhiyj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ofriitvm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ovsaetik.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ujsuepnr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163htsgcrku.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dnrniovv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tibqivwu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gpconopj.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kriwowqs.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kmkikdqh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pcscnxng.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ykhtxnmw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wvfrlxax.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kqjwywqk.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bhadtfkz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163thdqyiuu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bigceied.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pgmpdfor.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163frveftys.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163avxnismd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hqzecubh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163osirzuqy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zstmzpcc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wrklfcrf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lpsibpjn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hvxlprbx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bpmtrbin.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wivaaqpp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mkvkkatd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163eingjlhx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163okzyvkda.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hgaoijiq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dnxbcgkt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nfsrrybe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163drwsqksf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gchkalic.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pjqarkqu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xbceqlgj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zklaucna.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hdgvrxkb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cyjgppdt.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jwatirjf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zvmsxwmq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jnlijaxy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163uyvfujzn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163odzoqcbe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dfxisslf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nklrsgrb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lfqeurzc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xrqkwnfb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ipieewvl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jjzntovf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lbfpgvuf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nzchegag.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163fpdarbob.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yqqgrtml.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lcxxjnbd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bzhtwimm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xexvtckq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wchbqfky.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ffzbbheb.html


<!-- 参考信息 -->