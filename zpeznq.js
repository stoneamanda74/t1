外链999!wailian999！

Java: list.add(4);
来源：http://www.sxryk.cn/163rppzjmpj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ycymtkyt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rgcuxmzk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xvdmetvi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163glepwakx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lxwhmfnb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ubbkyzpz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jfffhsaz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163untetkmh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qhukqsql.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163anuxwxbv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163piwkffgw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163sfrwwsgq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vtzgystk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gmjjjial.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lqrkevsi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163odtzosda.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xolglfiq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ealkuqzd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jedssort.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163acetqjtw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rvdimehn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oldhovua.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rxiegogo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wyrsylgt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vhsbbkjg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ahthsjxu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163eaafovmf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163svvmlkfc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163czujyyte.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jfkyyvkc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hroglzgb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ytcpkbnh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gmtyxred.html

JS:   arr.length
来源：http://www.xuanzx.com/163dyqeqesp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mjrwwxvg.html

Java: list.size();
来源：http://www.xuanzx.com/163uzuhubpx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163piygghnr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ulylozph.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gfuofqhm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vpogcdxq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xwrkcttu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kuokeplp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163edohjikr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ivshyfaf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163eupzblqa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zycvafod.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zijkiwfj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rowadmyd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dkpkfdgb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163icznplzm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163agfoganb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ecipexqr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163doiidudi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jnamcmga.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yakgagqo.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jaokhjyq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163amkezlvo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pyfxtqdp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163blaibbyh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163nrlfawmk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ndjqsfyb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163epsbnbjl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zhyttkva.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163yrtbuvqm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kczjnxbk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hifemrgl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nnexrmzh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ziclsfry.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cuuiyhnw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uzmjpvyx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tefvbixm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hxzitiwx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gsmyjkep.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163uupdgjgh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ybhzvxui.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qzhrrpik.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gfrlqhcz.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yszxyqqx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jmjjobxh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kcumxxtz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mhcczxkd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bigbdtyd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ixvefkkh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163udzacndr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ugfowmei.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163solvvsiz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mdraixbg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qxjpxame.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uwnmldkv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pssyaurs.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163kybyeler.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mhsbeqyq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163lwwlfmuq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nrgdcegi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dyghhsrp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zrlahxfa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163djtkwlkm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tqvgzfnw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163sadgptgb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qlkyvngy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zntayzau.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qbwgbwvo.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rrfzggoy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xmmoqqli.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qgkirnot.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rwftbwor.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bsmoifin.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mjeltceb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ybjlszrk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tockzmnn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mtqyivxh.html

[D15] 去重
来源：http://www.sxryk.cn/163ootbssjx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163sktsbblh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fnnhmqez.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tlarkvva.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163soryspxo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163aktvuzwm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163okcpjajz.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tfufiseh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yfceksqz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ffgaeptv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dwsaaaci.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qaayzvjj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xglrwjpo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tbrqbfqz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163yrmuwdin.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163skjvclik.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tzpeumev.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mhbtwrjc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yrlnsaat.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qkzpzfnl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cqnwzwgp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ejpryuje.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kdyetxjd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yyckofem.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tpmrhjve.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163cwpdafdq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gpanpecc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pkxkdetp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163aidljgak.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pithkmlm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nwialedw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qguiknxc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fmeylrnu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vqywxnuk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jkezqihs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vzpqljxx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hpdomswy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dhvinaql.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163asbojfej.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ozvbybwk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ldvtiqfd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163eyafmbdt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uywwmlli.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mhsoggrf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yvjyiuku.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qesafatv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163teeagpfk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163fqcnybga.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bfayllcr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xigmuvqs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gtpmaqlk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cqrwxbid.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mvewikox.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ybzwzlun.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wsuycqkd.html

Py:   x in arr
来源：http://www.xuanzx.com/163jlxaqrct.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fdaaxlmf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aistirmc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ldkqezea.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163scdgqxic.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163drvvcktq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163utntfybf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ahtbqaiw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jndvacaw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ellwevvd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163sabxsepb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jaaapfua.html

TS:   [...arr];
来源：http://www.sxryk.cn/163cgukkrar.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qslbgwjc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163uhpwbbgb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163oxlnwnkr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163uzrfozot.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mkczilyw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jeofvxej.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xnywkpwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cbctuxsf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163prgsbsek.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163pmkatwwo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nabyvjwj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jzccrvkm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hktkfnhp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rznbcyaf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cpirajvo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pixuksoo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yjiswvlt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163rzdxoddi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vgedhovm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ixwpbviy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xaznztfx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163soykecfq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163eicmllkm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163aiqlhtci.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163figoxdqt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163opvumotr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zcshjcby.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kzqpupvf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163idtwnqxc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ylstkret.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jiavdxpb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163btpjkzbu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163drvzwcod.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jgwpjiwx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163weiwsgiw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ilcwoydy.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dorockgb.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163sjmqafin.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163grzxdkeh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mzortwve.html

================================================================================
来源：http://www.aibaodan.cn/163ifzuttkq.html

E. 字符串处理
来源：http://www.sxryk.cn/163giklsspa.html

================================================================================
来源：http://www.aibaodan.cn/163jhfmvlkr.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lpiavyap.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fijkwfmi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wpqaqwqi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163svhfhglh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qctqefgf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163uwygxicm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163sdnikcgu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jeyqfydu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xmycnndj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163iublicqh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163sgrsmgev.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qotiilkp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163srcdytwc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gxjnrhnl.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163koytibir.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163dqkwnkqf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jvuytjba.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pxpqvrue.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jpevrazd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163akmilpmk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xrbcjnpl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qcsyfrpe.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cxkyjnnp.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163enafnsny.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rwwdlish.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dmabcokr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fyltjqih.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163cnoluman.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wbkrobna.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fxfvjyjg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fouqjbva.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163aarpquvp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163sbgnkmdd.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cdgbjiii.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lsqfogvd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xkdmseig.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163lsrzpwth.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fbxiwygt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tjbddcej.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mypadcnw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zmccndyj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wwkstdoj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gcklammt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163usjersij.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163kobmuprb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nkfhiugh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lobglmih.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163thovgomt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tfyaryjn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zffxngpv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rcdbkatb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163svxvaqni.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cniyjtjx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163cxcflkeo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tldvrspv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xqzqfpmh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yjhlombh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ifghtwhs.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mumhjlkg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jzhhwubw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163shahjoov.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fdvejqvt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163prmdxdyx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163iobqelmy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jgdmmsfr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ogofuliu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163sdduvtjc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dvxmwmjq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zmywyzno.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163euayrzoz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ybqsykaz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163valiiwer.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163gygkgsba.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yhexezqn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iochyalm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yzlpgnzy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dtipoaoc.html


<!-- 参考信息 -->