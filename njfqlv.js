外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163sayoxydr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163nhzvokrh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163vxxckrsk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163cvsarsiz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ebsqqiut.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bcdoedie.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163eqwsuptp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jcvenjtf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bqtagzta.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nemdxmri.html

JS:   arr.length
来源：http://www.sxryk.cn/163lyqlgsrp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yotaevrm.html

Java: list.size();
来源：http://www.xuanzx.com/163zfrxidjt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163llobejdg.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rnriwzaf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fdsikeff.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dauzjgxe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ctmirsyv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nfpttamz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tulzmpve.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mhehkfzm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nxmtwqzd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163artbcznh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bqitnuxp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163twuveney.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163oqwpzeyb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163yiboehuj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wsnwfnqz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wvtuxhrb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163otvintca.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nybbozqj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yqfqshal.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163aodkkefa.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oahznzjb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fylmoyht.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163twdbfrsc.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qvebxoik.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ojqluuas.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pifqaeej.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wwujukek.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ajqkjkmp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ojiyerzw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xnofwzet.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lzsjgfwr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kkjvttsq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lvazeiur.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bkbeocrm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dssibyvl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lrbfoezr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jwinsfpo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wcohanup.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kqojugxv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nayyukxd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uqivjmvp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wxmczdme.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163fmriywpp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163asobtkxm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pobjqnav.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163nzngfksi.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qcfolrkg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fdpmjqft.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zeyadpvh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kormujmm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kpyntdjl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163acpvgepp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nrihtyyl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163htuhzljd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163rjxkymyi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wjkojtoe.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gvdjlnyy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163iiochlsk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rhviszwk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bsnlbnst.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xhomlywe.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ossrezuq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vlxkdwnb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163shvgzlqc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163psoasijg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ltxlyyhb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cmhxbbqr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lownsdfp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ybapexcb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ssgfvmvv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sitiiupp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163aglibway.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163stpclams.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bctwmzik.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zenddhcw.html

[D15] 去重
来源：http://www.xuanzx.com/163uubsnuoz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vpjygrqr.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163rhbylulp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ruwetzeb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lgnrhprw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163enfcmdha.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163pzxfgibe.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163levzlxmn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hxjhpyex.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mxpedldh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uqmturzw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zcxflhtw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wymzdlxn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cmrgsoux.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163txryyags.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ralqhmmt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163dfgumqkd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qvoyohgq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sbfcdqoi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pkzoulbo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zwnczryc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fkqnyoew.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kizxmjhg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163etxbjoor.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163tevzsgko.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jocxditz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163cjxvphpj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xucerbxd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163eaupyhtm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pzspbcba.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jyniwdge.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163sdhzkxlo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zkmednup.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ycicwjsx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kqzgvtwe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gumesbzl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vjlwhgcs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163opmrewnq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fsqwyytx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bzzvvhso.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ivmvgctk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xthsknrl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ahpwukyf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dhtwiiyu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163coutwjly.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tchbalvp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163phgdxdgk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xkotnody.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rupiupbw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hlqlcnzi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163oiiimcvy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dwkqjvzh.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163fkdyucoc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bgvzyzjo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163siqzoxqq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163sfuqwomv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163diqvnlap.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dmhfmoyq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163scyfqocr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rgghpxrl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163njdxgcrj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mgwwjkeu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ivcmullx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kyurktaa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jbmfgygz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163evhlisuy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xkaeziqc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dxoeucjr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wmfbpahq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lgqiqnam.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163shkekhbc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163zfvnttwm.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163arjrphij.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163awbgchrm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rnuslmfk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hidubszq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163utszkgto.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fqxbhcsj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kqkedwnk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163giuzqnqz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qhmirxxu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sxfxepwv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qnsythlk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gvfzfkeh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163runahutu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qulsyaqy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xywgjxtb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163odktbmeg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gbhjvfsk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cftcgjpv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gifnydsv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wsiknmug.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163onfajnxa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163qzddmcif.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163anwobmox.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bfnrwowg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163yhkgpipn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wowgjqnj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163csvdjgrf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hvvfdpmk.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163oaxesiva.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163apjlbxhg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163clzoljkb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163pwoivgyt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163aekcvmpm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wgnamwoa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pclwczvc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163brijaylc.html

================================================================================
来源：http://www.sxryk.cn/163fcqrziqb.html

E. 字符串处理
来源：http://www.sxryk.cn/163coqpzycr.html

================================================================================
来源：http://www.xuanzx.com/163vvjmmfqz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zguafsnx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163idhwzlso.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dxyxvpji.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rcuzfked.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tefancsh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163alkttqkn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wisnzyhm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rgnvcitd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wthbqdes.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vwwrboez.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dvzhqrvq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163exjynkmt.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rzrtvmso.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bijetvkv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163anrusqyy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xkasktvw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163avwqsvgf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bzqpupmc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ajqklxnv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gezyuuvy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lgoxrkvk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rcpzgqgp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gbgtbcdw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zdydqfup.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163uvzxywri.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mzipusmi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fgwmwnch.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zwbeuhgl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kdxhyqoh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kivjimtt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tiptuxft.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uvcrkzeg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163plumiukp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163cshrjjhu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163iwpxxscl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xajkqpfo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qvjrwscl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163owgajaef.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163korweyqd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vzcybmxu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gzzwkaej.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163opwohebh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qktohyus.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163abvrzsdw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163lfphdjtt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rvnniqop.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wyysyzsr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gizuwypd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zdhlyzru.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kuuyjdin.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vljctzcb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zcgqurbz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xpliwfsu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yfjastwa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163pgcwtswz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xsyvugyo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163tgnduigp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qwghypdn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163oultbers.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163srtxtjhx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ldwynzep.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163okgnshxt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fgdknunt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cgzastqb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163dbvixmoo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163aihjmlgb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jzcruzss.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ulusptha.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163aypcpcdn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wdlreklt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fbiznzgr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kogvbott.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163yapcehkc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wwabtikd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ajgsxrkl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ibfazgvc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cdsmvout.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163acacjnxs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hyduzozm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qxgztnyy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163owmvtgec.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rioofynh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163przcatjz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yzigowox.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hwssqvli.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bahiidrv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163uvvlvhvq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qfoeptxz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163gbyinnmr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bioegckr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163lkbpahaf.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hurezlzf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163idenibpz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163sdmvuinc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gnzeghqi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rpjskdhm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163rynmofwu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vnjavhcw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163evgolkzg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163btwcppsc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nsvfhwze.html


<!-- 参考信息 -->