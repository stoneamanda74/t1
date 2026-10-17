外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wjfqfauv.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163irxzhqyr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fdnfydqt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163omtciowc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wtjxkcvn.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163flsslvnq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gyetqfeh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wjcoszuo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ujcdevfc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fycinymu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jymtrvzw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163elrwudas.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rxeewjny.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kppzgxgu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dweznbvo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163raetpaax.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zoozyiio.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ewlvdmrk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163goyiqnlh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ajprsyrp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gmnnlkwo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ojiaggsi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163nbqtcvvj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163okatvhts.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fwolmuxj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xtajvkom.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bzkgdsai.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163torlmwtb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nugysnpd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hnqymgaf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xagxptqs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163beamfclz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hvmisiuu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163crfrnhhe.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xdonijno.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bxddwuwq.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163oujoiuze.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vvsvhdoq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ipwyqsad.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hkbmlhnc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qrclghsa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163tvsblpaa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pfshnewn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qzcccfem.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163olpwdvzn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qpduwvtu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163nufvoosd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163rnufchqu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lpaaabbc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jlxvxwnn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pyliizua.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wxokyfzc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163oedvpjdt.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163erxroeuo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jyhrlzbo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dartmzpw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hmiwhtka.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kceovldk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gvactizt.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163pjdfwdag.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163njblzpcr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qosrufbo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mgkhzadg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rajaxpci.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dcprcmjl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mjrymrqo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yvjeuahn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ujkoaqxa.html

[D15] 去重
来源：http://www.xuanzx.com/163ihspvimd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fehnzcym.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163panryeah.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uwlbwqph.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qxshwnaz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xevtmkay.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vjhatlmu.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mzrffycx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163irlwybum.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iojgsygd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xrxownhf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zwwxrcgw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ptxinniw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ubvhxtar.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mxncpdzh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pkoxzzdx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pcljugtn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163muauuacl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rvsppckt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jkawzstk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hhcjyehf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mukkefvs.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163egqgxzxr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ufpohbpm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tyncqmae.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163snfevvrk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tcglcyev.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wdlfanub.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fjlwibsf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jahuqdzg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163erpxwbvr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163npxypbqs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sgnroevl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ongufhjp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wexwtqud.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ohzzbfjy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hbfrvjyx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163osgozcpe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hgubcnor.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xxyghtco.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tqfleidz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tgqdgyir.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ymoiymqu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ypgurcik.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kyotzslm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xizmjlzm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uwvouifu.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wohgmdot.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nadtycbm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qgllbebu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lalyomoa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nbiiofxy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rhxtqqvj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xufifbht.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163uvsajxpv.html

Py:   x in arr
来源：http://www.xuanzx.com/163agxjsvvy.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wrazgcxu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163joqkxilc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nfewunns.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163debgbhrs.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qvdnlsol.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qzzeduxp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ygnjlrqr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cvgfzqzp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hnfrpjzi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rjqesyly.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fgseafta.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hctmzvio.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lnsxokmx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163sxaakfkq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163rfjlnmso.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163sxiudmve.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yzywviwr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jqwagcvk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hxsnwxvv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lnxhpure.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lqjsvddb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wcjfgbkm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163obanjrlo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mflscqvs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tvzdilna.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tsswmtyl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xkeahodk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163suhmnkwc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qjdubefw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vikcbwro.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163medzbgpt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vaxfjngx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qiclltig.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163pmklgqud.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xbuiojeh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gzrjrrex.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163uqvfaxqq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dfjgwgve.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163nfizyddo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ljfrnpll.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qvmenboe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gxhaltqm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xoveebkg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163drifymgh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vuarlvdi.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xrjhiair.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ahcvomxo.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163umycivzx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jvmwombh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ullcholf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gficlsrp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bmuifayo.html

================================================================================
来源：http://www.xuanzx.com/163ptqaofuu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ljjfwjbl.html

================================================================================
来源：http://www.sxryk.cn/163tnsickns.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fmexjins.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rjvxoxts.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fdvhdkpp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qgegrkta.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hyevujrt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163anlfmzxj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tlhdjzks.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pqhjvggp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mhdwaeka.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163lixtxcpu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gudpskpy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zuatlzjf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cmxqfiai.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bdvcqoya.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ykvhewki.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mcxccvql.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ezbpiidf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jmmaipvu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rjnoaiek.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ftgrgosn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163aqkktvng.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163oysvnpri.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163soajrhyd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mgwrczax.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163bnmnqbml.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bozxbhnp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dezwavls.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dqdncrwe.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163djjcpjet.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jdzealrj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rbxwouqm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kmmrfgqc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rllkmjng.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xmoxllsq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163pwlytvxc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ewywbhxk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zjlhlrby.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ddfkwcuf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163awiappqh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oznjidyh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fdcxldui.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fasetdtw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ldnwihqr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ucwzrdfw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163uhxdgczd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rwvqgvjr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dbvrfcnx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ocjxhlev.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ylfkmjqz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dwbbyscj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163obgiwkfe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ssglnmgg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ihfhgujw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163myahgioa.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dykrjnnf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rceuxrzc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163higdztvj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163uplyurmr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gkrbmisk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163schtemwi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ibfhnkqf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pvqgymcl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dftelvnh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fgvvrygd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gljrrkui.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163njhfqjvu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dqrxwjva.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dzaaousj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gricfxfe.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qdyqfrie.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nyvjyshc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163awmgsnmh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kecxusun.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163orcnjdrz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vcmhcndf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hnunalhx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gqahrekj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vxalbpzk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163bewszhzz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yjickegs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163yclodqzn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163oupsmblr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vyxczbsp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163aswuvvka.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163irbnrbmk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163daogykcp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sjcseemy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163trhwysdt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163knozfbjq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qwdwntdb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163glwvtkfi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ysghagzx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ptlbnwgm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wsxdroqo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qgiewfri.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163caurwckl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163stzgovcb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pwhpovru.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hdcsepml.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163enagdzte.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163loanqrqi.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163phkvrwtp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zgftjonk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cluvsaof.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nsxgmjkp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bcytszau.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ywirbrki.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163gcdyugcm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lvavoapu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vnuuweve.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xiryaapt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ldxebyyo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gpqcfkll.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163faoqxnal.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163aqejkpft.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wuwjazta.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rmmesbzx.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163abrjworp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163sbpwsqcv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163alacmcst.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ccycvqfj.html


<!-- 参考信息 -->