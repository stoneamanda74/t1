外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jjbtjkwk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tyuyblvu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rjwnvcff.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nugjribt.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fcydzlez.html

[D04] 删除元素
来源：http://www.xuanzx.com/163dzwdlihu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uvdqxopj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163aqyjlsnf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cxvgsxme.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mbfcvgcc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gurifdte.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qtrlilxg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mfrwhshn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hjabjbob.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hfbnrodm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nmcomtvv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mtqpfwds.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bnfinmxq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163mqvyumjh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wxqhiuqh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pcpiobkw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wfsgsaje.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nkuafrum.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jrvcmtki.html

Py:   len(arr)
来源：http://www.sxryk.cn/163shtykitd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tvemmlxc.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wbwqhonf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zetwiiha.html

Java: list.size();
来源：http://www.aibaodan.cn/163bihcrnwy.html

Go:   len(arr)
来源：http://www.xuanzx.com/163zfkzkkli.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vhivxboz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ujueofti.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dwegdnhh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163bdwvhtgg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163tcxghclt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jugidppg.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lbnptcsk.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163crulcffu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163otcjunbx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dohnvfho.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jyxfpwgy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gidkkxfw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kmpbnuiy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wbrlybfn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163adzchnas.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dwywgnfu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jlctboek.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xyukaurl.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gfkemneu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cnsespiu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163llwccqey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xhiwbees.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vregxwoy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163npnxlopl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163purryuxc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ovbkefyi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ufuewdtv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163orgyrtgn.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bvklyogh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ywbhpgur.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163gqptsgng.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ujutrhbb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bvliujnt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163poykfmkf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163dzuwcqfb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zhoflzsr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uxynxtdn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gqkixusq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ixwjarse.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fujaskog.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163aotdmekw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gblsvjvx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mlvavciq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ddagwyxq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jnplxgwj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dqemxuqn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yuynlsuy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xxsevsrz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nhcxchur.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163okuctawa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wfdoqsvs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fulzpdtp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cmttxfdm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hewkpptk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163drrvodpx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kajiixel.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163hozipflb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tnufblsv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lbflrgqp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qtikcoin.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163clmnzdyy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163luhdouiy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cpxjkxyh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kfbsuhhh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163nlxlibtd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163flxehxen.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sdghnqmv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163obzbixke.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163omffjols.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rhiuqatc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rpifjxjh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ocaxkxrt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gdobvgkr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gaijdhqt.html

[D15] 去重
来源：http://www.sxryk.cn/163nwcibaib.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jknwpite.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163klcikzzs.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nehclwmf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vvqczxwa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ridrkqav.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uuqhvsgh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qdwebpzf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rqnnlgro.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163syjvqusx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bolooimp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kwjvgcmd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ndubkjbe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vfxwdwzo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163yzaosgnx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cpamiahb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163afsckook.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163amxohwkj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163oizpwpdk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vmnxgrlk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qcgfidnl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dbxwritr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ttoqyqyl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uzasfgeb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hilspywv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ltupebka.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mtfxiccw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vzhjdojq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nazaqope.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163smqruout.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tbdudzyd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163elpgfvzv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lpyuskbe.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pshgqigs.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kitjgsvd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ycolnret.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ganurhrg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163leldtigt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163sqfmhkvh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163csqxtjdg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163txbfoddx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163osvrdckk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xgkarbta.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tahbzhds.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uenhkvwo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163brznuixe.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kkbmdgxg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163grqeqhnc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kacjkdgi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gwownkbs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wlvubemj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163fptygbus.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163pysgfvau.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cjyfdqaz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mgbkjshr.html

Py:   x in arr
来源：http://www.sxryk.cn/163xvogzgwp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163znzutxgc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wzvsmnav.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163iybeqpxw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kxorqsuk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163txlmgkvi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163cfgjgtsk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gbtcbwum.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bfpstpnr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ynrwgynx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uyppoheg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jyqphgcb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ewdtgsfg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rhuninra.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fxbeomvh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163spszlfsc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163aevxbppt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gxexxvsm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bjkhghje.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ouryqcnp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mkozfemk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ooydtviu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163pmnxucld.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kfghwuit.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163soywfstz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kovstcap.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gzrclxgb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bovibsmy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zysjielo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ntilfdww.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mdnflcit.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163oaeiydnf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uyxkbbwh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rcelmjon.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163cmezwboa.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aqohmgdy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mjxatyrr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163walgzcro.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jvbhajrt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bgbcqbgr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163gumxjdgr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ikxbdawj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163biqiloyt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163llgfsjpa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sddnmvsz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nolqzykx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163udclqflr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ubnunyqo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163illcdsof.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jqrlmgvz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163sxfcbyua.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163svtiymwx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wehrmbdj.html

================================================================================
来源：http://www.xuanzx.com/163eldahqgk.html

E. 字符串处理
来源：http://www.sxryk.cn/163owdgkaqj.html

================================================================================
来源：http://www.xuanzx.com/163tbapzhpn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wqqqgkhv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163nppjvlcn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163owyfwdga.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jeythqva.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bmlrirjk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nljeqfjc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163eifglabb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fkswwcdj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bbytcwot.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163owxpdain.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163coqskbpn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xfptzdbm.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rvsmaugu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zczjjsqs.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hzyvworz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tkbrdept.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zjpvplwi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mgtiqivo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nbkhuupu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163edxslxui.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wdfvvegg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fzslfqax.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vnjcvlki.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ntvznmbr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163klhubudg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ozndqcsd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163askymkdi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kcrutler.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163aauyzraa.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ktvjcdas.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163anzltmwa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pemzycmg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163kjxrqiqy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zwmlvdjc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nyjvxvlf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rnymsbtr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bihoonmj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163oejonutz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pluakmcg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yfhprvur.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163umvhlcqi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hnivawlw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pgzjrnpp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163cabgidcv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ednwouxo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lgcwoawr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jarpbgre.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fimeaise.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zadqjmof.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vkhepdtv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tbwyktoy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xgyyevrk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qbiwbhrv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ejtcoejd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gzkwezvj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rcbbgyqz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dluvsyam.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kiqmhgck.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ssnkksbz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163olpohqae.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hprzzpac.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163nefnqoaq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jblsnpkw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mxnknvnj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ghliofvs.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nchokoey.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fppdsjva.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163cjbqctol.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hscgpcaq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qjlozaie.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rtuakjvx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bsjbrrwm.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dvndkkzn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ssilrwdr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ncaankwo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kfpauynl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ujwfkdiy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jmzsgntp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tcybkgjv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kcxprqtl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zfudbkfc.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fqntndll.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ognqkbll.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lbtkdqgz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nlovqcuf.html


<!-- 参考信息 -->