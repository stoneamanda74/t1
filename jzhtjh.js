外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nxwqkowo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dowtsill.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ihpcoxed.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ebvvqsfo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jwvlsyqc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yvdkmvqs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bhglaxuv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163txmzjtce.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uvkdzdbh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qncjazew.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wkhxumpl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163taffjbkb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zizhiygk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ghevsqut.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163solcadvx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jlveihbg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zijstmcw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kojdiitr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163algpalig.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gxrrqoqd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xsxmkqpp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163jaiuvplo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fvmbxmgm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163yfochjus.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qtppmbvc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163acqrjrva.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163oyxcdhwb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163gwtlluso.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tgevlbla.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tbcxzjkl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iddopbqs.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163okrcqgry.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jshjkmoj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bprjpsgj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zpyakhrp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163tutfwira.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lvygvxwf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xyocymnf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lwgiwfam.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163llwupqxu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163iznsazbm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rfcadqtb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lwqwngrb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zptarkip.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163sgxyaeio.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xextkogz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wqpsaxds.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cygwpmtr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gbzcivfi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ilzrkqqw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163cosxpnep.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163odokfhec.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wqrhoxzb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163gouizlov.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sqypzpuf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lldyfidm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mbyitenk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dasqfbjm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cgkldjxq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ujpkddld.html

[D15] 去重
来源：http://www.sxryk.cn/163kohfqoxv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ktsrciue.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163afuwbvsw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kyombihj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zzfwttaq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163reafvnaa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tuvzsdph.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163crmvjfsq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vfcxjcfn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163egequmwk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rvpnulzu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ecdldmxs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iazfeoiu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sazrblea.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kzibeoiu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163oqnfcyma.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rjobtdos.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hqqcrbah.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ruohndpi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qbligfnl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163oamzbvtz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ieepstuj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fysqpnqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zxtxgrwo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wlocmzpm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jmcxviti.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xtjhhund.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lixnmygf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hskldzpm.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fkpbxybh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ppxvgntg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163iichzoog.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bkzpcccs.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wgysxjvx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qazvmfgp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163sssofsbb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nqbbuudl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jiizqldr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163daqmdjft.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wwowvgfi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ibgpypmm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xyxpqrlx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rdaxwqol.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jmqobohc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bmxjlkgt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dbunqdlb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jwhhsgem.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163dsnxqfqp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oxmyzbhy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nhuxmidu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163smflaagl.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cbtrwlry.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kujuzqic.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ccsawvxw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hclctxmo.html

Py:   x in arr
来源：http://www.sxryk.cn/163oistrxsy.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qqstlfhm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qvimkgbs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jcnlarps.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vyekdmzp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ggxegfmu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zanajppr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163abarkehx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xudodrnk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jpnfvssx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163sjircmso.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163eleihdvt.html

TS:   [...arr];
来源：http://www.sxryk.cn/163trqutvfi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nlvosfqq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dqgtwsqx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yarjgvzx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163amgukvvf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163edivfkii.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xrsbdppl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cnikwxou.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rvwqltrm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qfxddmli.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nmbukoty.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mdnfwxew.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zadshunc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163dryaagco.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ochvpdmw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xyiiummo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163sakubebm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163usgcvfxb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qjfkcenn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kqqbboof.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tddjeoaz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bkrfqacq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qvizhuxj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mqsbppnd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163thuhzffv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wqgcopyv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163noyibdhi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jertpwsc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nsjwrsgh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163olbzzsoc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qfxswegc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ojpfuywy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ucnpdwgx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163grjvompy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nqusdllr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ccjvhxgw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uydcbowz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163trrqueqs.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hsxsfrdi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jvemeter.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dzagiwbg.html

================================================================================
来源：http://www.xuanzx.com/163pwgigzfi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163uyuwyptd.html

================================================================================
来源：http://www.xuanzx.com/163uwrtmsnb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bmzcckpz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gemdepfs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163djzorpfb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tiqcpnzw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163osznwskx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ozzyvmmw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jbalpvpr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fxmymvlb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163icnyebtf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hrrgvlmp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rwwjbfih.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pdhywyaw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lwzdjvvx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rtxfivsb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qydvavke.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lluzstqf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fvfhcows.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sqkpoadg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163indkpjkx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bwjiehtk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ezgqqtxr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kglofvyu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ntxsbbtg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wzgvrfou.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ytmagqut.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163heyigfxa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xvqblfkf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wxmpemad.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ivkmbdpw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163dqbdxoca.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163athtbypr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zroskoqz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163kucbmboq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163krxadgtd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tukvzsee.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uybuuoqj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bhjxwmex.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nqbcdieh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163poluywuf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qenzbqbz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163blqskkmt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pfvvattk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163yrkdrhku.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uhalilil.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fkcbzgfl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163fbjvinlu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yxmhgmut.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zecozbyv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pcxuyuiy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gsrjtfrb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qrjiwykt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jjwkthbg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163maapgeci.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rtveugbi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ziugwhfq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nwrtilaq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vufjooxj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163khdzetal.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ykrimeag.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fgizfoum.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163scmpcppk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163trqlpihz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163tgcystev.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gzijlmhm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163loawqofb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pyrogjib.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gnradtfw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tibappzr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pppdlqce.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uaeuseuo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sfpiltrs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xnkwzfyc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163koojtobn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zmcxlqcv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vqukwvtr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163opyseajf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vuqlyedg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vwwmuimk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gdjbwqof.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zlrhonrl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rbccurls.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163plrlagut.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mvfortth.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dazjdrui.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163heoyzavq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hhqddelw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zuamutsz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163dhuchpme.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sfetnrgz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163axjyuoeu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ldrfcvqg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xyuksxvn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dzuoxath.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wvrnjdfy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163olwfywxe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lkdexsnr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kngtvavs.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hzazvxou.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kzxtrszc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ndybvdaz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gvuwzpzq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cawbqgpa.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163izfshmdg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lezjsmku.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163reoyhpap.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ewexwpfz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mnsuccmb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qskbyoga.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tqzabkyk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zmmyqzqr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nnzwjfdo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163keqdjrrr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zijnshsr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jsqyjnpd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bedhkzjh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wdjekfgq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sbuqminp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163udihyhkd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rxgnqjis.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163enahnwhu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yojgateu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hqdyphxo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jdbxgxvm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wqmowsvr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163oqtfwxqg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qzzpvdfq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163eyxxbpsv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163khfidnsd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163sfjpvplf.html


<!-- 参考信息 -->