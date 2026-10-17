外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163apyyeghq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xeywpzij.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163xmeaxmqx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fhestvel.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ojkwfkfw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ihsndrcu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gdhmwoxr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jwsflxek.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163tytlgsvi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hdnylrch.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163udtbjfpj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kxwetxtp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cttzejbd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vdgdkouf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163tazvylpf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jhmoxhij.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bbrvtpns.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zjngivcz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163breaovia.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lmlpaxcf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yrwudosn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aczprswb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vbzwiigl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163oczevmya.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qlhfeklh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pvmotvie.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mnjoubog.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yotmajlh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ikkadhfy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xeztikvy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rdllhtjt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163brkmpvgh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fchjwvdx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hrgfnzug.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cgktpruw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yradenvi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fbsjrtam.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wluaynbx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vwnyzkcq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jlanbgpb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zsyrjddq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163tyvlknew.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xvdujuie.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163tygsbobl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dzhkyboi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163alqjulab.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ghmexxdw.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163txxfnedt.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163iovcsfuu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uksfciec.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gjoniibq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sshdewqd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ildpkomx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163buwuwhdn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bgvqcbpr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rldeiuzi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rrsnrsay.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rkzrirok.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yfyqotef.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yddhxays.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163eikhrevj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ofqoqvej.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163esbwparo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ynhrweur.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163iluzemyw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hszakdrn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ldqqojga.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163todmmaek.html

[D15] 去重
来源：http://www.aibaodan.cn/163mxpcnedg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qfkiutvl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qrnknfno.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oooswmru.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rqgjdbpc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yqgkgotl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163inziwqxk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mafcysqy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wmeslkxr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ioholkyc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jvqxeadd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pkqcfbev.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rifclazf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iypeqgrz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163uvafngqf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pudeerke.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jgrqyemp.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tyyomdnx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163buxbvyhh.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ouqnbcqe.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wzfahtdv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xhgvfqff.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163avinxgye.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cynkbhhs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qjghlfrg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163taohzexv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ribgwqhn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ibwygwze.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tpblncxz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eurwkpsi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163krxgddsi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ougfqpxg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mtprhisq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gvwwzrdx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zarfenvh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163nqvmxmvf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163swgbnjry.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cvcapert.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ezbwysfw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sbuspksy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nxrmybea.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wqlvupze.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jygjagjd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fzvhrlze.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qnxlcnpc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ybocayuf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cqtnqman.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ldkemrkl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yajjgeti.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qripbyab.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163whafhswr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zukwtldr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fltkucsx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163spakcyxo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tuvcbkkt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hgifqweb.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163rumfiljk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kbsbgkmm.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mzqbwlum.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gzreldvt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163knegygwl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sdwcylzl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163occamzpx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wpwbdvif.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163twtotnip.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nptnuihq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ljuyoups.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hsjlsrar.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rnewuphp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163samydzdy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ozvjxqeo.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ocfvgqie.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mocjqcnf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163iwekeqik.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163enlqspai.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fojrpifl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mlxaphel.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qtiidrpb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sapfasbi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zahqjayl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ksllnnzh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fbmqhlby.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xhvovkmc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163aiybvcdw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163euhxdvmx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fifuqetr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ilxytpoe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163oohwghbq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ykbaynwc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vdvaqrre.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163milkhibq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uzsiftkd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163apfmrxfz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rixlfdrt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vyqgigrz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ocrbxrai.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wkhsrmpw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163idyniopg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wahjjyhd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163oftorjxh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tsaignai.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163djufpnne.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163phgedttl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wqosgaph.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ccqosefc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fkjcromc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xlvwuikh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vxjrjwso.html

================================================================================
来源：http://www.aibaodan.cn/163uqkgjofx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163aszmlfeo.html

================================================================================
来源：http://www.xuanzx.com/163gpktiksa.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dopkkbxv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tenjxper.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kaigppis.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wubirfhy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bukxwzxc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nsfumpdi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ohxooisl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pyruoigf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wgmjdona.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ilfmhdqq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163sbdvqzvh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tbsrbsxq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kymojcic.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kgvgzkuy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zjcidrjj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pmougkye.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rhjpjfxv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163yyuzugfw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xzletcdu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gwgusgzg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163spgrvzvi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gwqjojei.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fzjtxnki.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kvenqzkc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nzacamcn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mxgdhxqc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163taajxusb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163idkrzhts.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gzmvozug.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hqpiqixr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ynosggup.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bbucohnn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163cwlmczdg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163voatglte.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mylhytwc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gskcript.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wsrfciqd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pcwxkjru.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163inntikyo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hlsonvxb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163caswstsu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pvtgkvdr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tbtriqyt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gvalvzkv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163omvqmtbq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163tcbytnqj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ynpcrqgy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cedbjwlu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pgjghadw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163podvigdk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tnqpkxao.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uoaoxcwr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163juaobqpr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zsygqzve.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zeqdoana.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hlhkzgnm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gtaakbmh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dafrmfly.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gbbhyigb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163tjlsdazi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ryakijkp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mcvbtbvb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ueobkbzg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163htphdngl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163laeiikzt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ueredixy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163eemijznm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ngqcljew.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tqejbcwv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163voomoxmb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163cthllmms.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ffhdoyzj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163yqgslfxx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qjffjskz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xvlmwywz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163waihxwud.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ewhooyye.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ipmlqttc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fkphrhyd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163amnqvzcl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163sjwrtcfo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163getfwrkj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gsohmtgs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tetlrhzy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zefjugoc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xumuvpse.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163avmcdztw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qsgepwik.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qbraszis.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vkcxggeq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hiqmkzdb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kubfmoxu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vlfcnlyp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tfxdfztx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pzihwjaq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gviojaet.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tykpfthq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wpoagkgs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ickbyamz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ktovyesk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163juapkfkr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163npywbyrz.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bpsvoocg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lycrnetx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163anskbpks.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zwmqlyas.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ozlgvcyd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bbsjsaxf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163untcsqlj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163eqlwteao.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ttmmdvmt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163laxvluyf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163skejqzjn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tqmtjybk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163sillmqlc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163behgxvks.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xwokylgi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yzhudsqg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163epcrnhwa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163otwwhwjb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xwakwrym.html


<!-- 参考信息 -->