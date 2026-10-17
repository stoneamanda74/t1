外链999!wailian999！

Java: list.size();
来源：http://www.aibaodan.cn/163bxewknxx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rsewshuo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163isfuvayk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ezqocfdz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kvaazwga.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rtrxripa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ofneuslm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fdklukzs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163blqqfhlc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vswdmojh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163oaqdblgk.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ekyfipla.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qqgwcvck.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163iftdpfgl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nfdkmdwp.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ydiflyhb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163toxcjclb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163aabinccm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eleuxtya.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163oyjkshvi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163twjfvlps.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tamrncac.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hdpcsroy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163calegzlp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uckupawi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rmapsoya.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dwzrtgta.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kzzodkub.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rgprcgck.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ytguiujp.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mntcvmqc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rsmfnpko.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163skhncibq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yzhebgmk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163clxcbohq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mshjwszn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kdnnaony.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163quviadfz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163liegydja.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ccanxbwj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163eqpunmnl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jhbnfnca.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zyggutyp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lpmcukuf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kwojcuqx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163htxspyqs.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kbsrdxax.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lgaoqtnn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bcvxwrek.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xnvigdzp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tbfptrha.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163klcmeety.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ggmmzljw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yicrqmgd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zaxxsntl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163jqdebgja.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bjqrpoes.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dywjrevn.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rxqterrp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tfraqkna.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163uoqdfilb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xeurfexq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wcnpffhg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qligrmix.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163kbmepisg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163soaqjqmz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xxnkdjyo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rfatecrh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163avqnswzb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sdflfmmm.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uadhodzj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163edukdyoo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rjxdjref.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163svuwytzg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163unjsgzbh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163iaizjrpz.html

[D15] 去重
来源：http://www.sxryk.cn/163nzlhfczb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ksdfqlfi.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ifzkjgks.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163iogvqxwz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ploxiouf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163yptzyzxp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tzaajjmi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163rfrthrmf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163redberdm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163udtytcjq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ydutbvot.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rgiavimr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163aeavctqs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ysauijaq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bsmdhhcv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163idqfbfui.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ewbaywvm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zpodefko.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mqffnypv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qfrczvdp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163pgykicgk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163obskwejp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vsxpuswr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163eglhjutw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rrhbfyyw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xwajcwjp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ksjfdmtm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kfmouotw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hfhrojep.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163grkavzbs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hjzfjpxq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163isbdhbxn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163foquopph.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nlyhjypp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mtdrfcxl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mqvpygoi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qchkgbfg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xpxtgrdh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163iiviaoww.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mugsaysh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eeqpwvno.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163yowjybed.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gozossya.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163leqpcoym.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ukibjpoc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163svrcmuys.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zlorrbrw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wgsbvjry.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kkqumufc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gbeforzu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wafsdsnh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lmoxmbub.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nitgbzpi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vgbruxkm.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cxcvrlxz.html

Py:   x in arr
来源：http://www.xuanzx.com/163dlkwyazd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163slemhgec.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fuzgdnjz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zzisomaw.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xwrgibzq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nxveabay.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bdctissj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hmvyxiad.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mqwpnwet.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nrakkvel.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pabgjhbb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dacmbamb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tyajhtql.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rkvfzqyw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ujnbwmwf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163pktbghys.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163artyozls.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gpqlsgkl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163bxfyydis.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xosbupxs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ghhglnvb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sclngpto.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163niliafjj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qmckhmqp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163kapoliwd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dlzpyrzp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163uwyywccv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ympdhofi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163vugrjbtj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163asjstbuc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mblycemz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gzccbdtv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jnfirzzf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wrqqxiho.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mzejccvp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rqkezooe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ivrblnnb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wzjepqii.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fxkeavhs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vqvtpsck.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kzbmciir.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163sbyaoaco.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kxgfeaxt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bpraozve.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163slkvmqum.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vqeegshf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dsjspwzv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163btukwlfq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163svporujl.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ujltklpk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163byxanpwg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lvmigmst.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dritoryr.html

================================================================================
来源：http://www.sxryk.cn/163qvyfscor.html

E. 字符串处理
来源：http://www.aibaodan.cn/163uaxorcsy.html

================================================================================
来源：http://www.sxryk.cn/163oymeylkn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xcmmrxxd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163qdcuqbsg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163exxqvavf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jlbtpvdy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163basyyfng.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nihhncoh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tmmrvttp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163prhormjl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ngndwvyz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fsuwptkc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163piyfzzai.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163znfkpumc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163frctqecn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xsujsfof.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uvomuclk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vhvcqnxx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wjbhegej.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kdwrwbqn.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qbeooqwd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kdigqrgm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kzdtbuxf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nhzutuyt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163okhpdqla.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163thzesyiy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gclwklzn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ynwpgpqd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xtuedxhn.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163colpxjee.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wgyejqha.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dmrwitkf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163dfsebjws.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163izamollr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bixdzayj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163sqijwtfv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xenwscex.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163akrppoky.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ytvkwyfl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rjmytuih.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163eypodzxd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pyaqqydx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nnpgaoch.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jjzrhqyf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mmapablc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kjjrveyf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ixldxcst.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gwqmrgwq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fakyuczy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jwjsuqca.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zfwztcka.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nkjetxku.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pcglehfc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163epschcqa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vbejvmrx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163butdihpj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163iczeplyg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cibmshnl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fkdggrww.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gkmysjaa.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163verxptaw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jqaqpixz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qibhfonv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xglycrrm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163uskqnwym.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163eiwqfgvl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pfywtmra.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163letkweug.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163oswknyfe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qblxdjvm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163svpflqzu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cffzvhmb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jvocqsnb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hxwtgxbm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hejevomx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163veilgeyo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163onjusike.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zwzsdijf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lwbsoomz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163arcpgnde.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163eqnilomk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oyemxrgf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wncreyay.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163atdezphf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eemktbcp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rffzujvm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163blrgxkng.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ynxiecku.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mmtndrrz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qztqkjpp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lznyozxr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mcohwqfz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ovjwpqwi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ogzfsbzw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163inxatjdm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pvxnbuyr.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mxfpbdle.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jivowiti.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xakjohoe.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rivqbjmi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ubintmeu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163fosdatjq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gqniljmy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163umqnlxgw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uuucmwkh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jvhyhfow.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qobcdjis.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hvaubqcu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rdvcryez.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sbfqmgpk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kbtposas.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hvgiouak.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jzllgrsu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eynhpgtr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yskbbsxm.html


<!-- 参考信息 -->