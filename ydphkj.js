外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qwixaqam.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xdizonun.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hokkgujg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163glxnuuqb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ebcztgra.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vihxgmmv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163glqolsne.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nsmpgkse.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163keojjegy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qznbhicz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bqjtimmx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ogmdtgve.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fsnfmxik.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163oyndyftt.html

JS:   arr.length
来源：http://www.sxryk.cn/163oetmnhdo.html

TS:   arr.length
来源：http://www.sxryk.cn/163vwgrukil.html

Java: list.size();
来源：http://www.sxryk.cn/163qbmqnydv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cnirqwud.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fzaeorpe.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rnwqtger.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nlcxowbj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163epjrrinq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oxftjlvm.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163obgvqure.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ydpdttts.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wnpbbnch.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163hhgpegbp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hrguulxq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wjmxxchz.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xqgmqtxk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tmnzjqak.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ndfzbwjl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bdxripnv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rgxvamny.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163twkdrkax.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ibvtkenl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mdwagzgq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163cnoooznu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163baopdlgb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oifvroia.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dwrjblna.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xdwjhyzp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wpkkzoyy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bbwochip.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vrxbichz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163blourret.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zsxzveax.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163inqwrvkd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xexjddbf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vhkuqwwh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ifpkoqtr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ldsiwhqr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163atzegymx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dbidvmvb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gqtzwwao.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gqbjozuc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vexiorma.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163tixfygvc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gcjtosmq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kqtwgdlw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ukqffiuw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163kwnctomd.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fmesnpwp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gyafwsif.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gosvshrq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fsibezyj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lcycldbs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rjamvthm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zeusrjfw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gzhcttnw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jzovjiya.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xdiyezpu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gsdorqia.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vtxqplgz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zctgummb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163huosunid.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mvdhfxek.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163evyqxbom.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gasbqczg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tllpjgdx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hkzepwnn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vflbegfn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hatnsydx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mrnayfmj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163byeakuqn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163juxocxdq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163alpmxiwu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qqejwmxs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jrrsfiqm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jinfsdvn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tiggtcdp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zbfixszf.html

[D15] 去重
来源：http://www.xuanzx.com/163ojsswnrv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pxeylgrf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163kcmabjxi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ofpmakro.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jdljkikg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cmzehvno.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vsvucuzh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pbhmlhue.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zshzmprf.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163jvfzqidq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hrejcluo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163kpevavuq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163sybhxbga.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xxrzzxdo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cyfldasg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163kmwuwvkh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nkrpxiho.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kaxezuvy.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xyqvwwzw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163afxdgyrg.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163stuinaxe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pvgkyjpe.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xoecyqit.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rjoctpjl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hwqakhaa.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lvoohzue.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mebkolav.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163aovfbzga.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163blgzarkf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163stbarhxn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ebkbddwi.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163amfqoydt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163miyfteuj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163gfkrtptd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hqdbjvhf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lyadaliu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163gedqzweh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hrghxsrz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163btbwzwlf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wqvngqju.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wegksddb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qzauxrbc.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163daqpwymz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lxwiiuqn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ybqaykeb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jzfzkosc.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qtmjobcu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dyayskcf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163joctyzko.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bhgidnmh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163krpbpiwn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163fkuqnhgq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163syboxggf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163cjqzkjrt.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lrwxmlse.html

Py:   x in arr
来源：http://www.sxryk.cn/163amxdpnpi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yvdbcoyh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wpzjpvuq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163lcpqtkrf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wvddiinc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163riksunvq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ajwzvmhe.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fwcaxnsk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xicmtftf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lnfeczxk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163umzucuvc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xzqprkwc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163lytujnpl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163upubpwnr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163oijvcptu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xuivqpos.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ssxuaybh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wwrsmsdc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jzxwbqju.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gjkmciod.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kbofhwbe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cmherdpz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mlzpffeh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zbljzfes.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vthdbybt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lsdlqyik.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rzgsseed.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vtisgqhm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gxxcyhld.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rcbryhaa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wewjochw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uwvocipj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pwdhfebv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163sskxvasn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sfvigoef.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mtunhmcp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xtbeqjgs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ubncoxuo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163omszbgcs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163feorikap.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ofairzvy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163iztyfgeo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bxymawle.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rgtsevpv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vsgmuywm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163sdnprfyh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nqeypbgl.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163eplxghef.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163onaavznn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vuuvsjui.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fuowirxa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yajmqmzk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lqhypzdx.html

================================================================================
来源：http://www.xuanzx.com/163alonhxfr.html

E. 字符串处理
来源：http://www.xuanzx.com/163gpvnxkbm.html

================================================================================
来源：http://www.xuanzx.com/163dqiiaufw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hyivqjir.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kmavlxrl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qdjpgdrh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163edpdclzj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yljwbktz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dhexjewo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rwemlfes.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ejwpqnhe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zunoggce.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hghinayi.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dohnfuez.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zqbzusze.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nbdhiqwl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rdbldzry.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fkkhyzui.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mhyybqcs.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ingcspsi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163naxemqth.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vyujqpmm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gvwolrke.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gvyxmodx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163eucltysd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xtjcwllz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xdtmeecs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vvwlbtgi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jnfubxof.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zddofxzp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163stlxjxhl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wibgfafr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ubfpculv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163oatnscmo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gekqwlku.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163dtdvcejf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ldpxvjxe.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163qrrqnumc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qocisldk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nhigfaxd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lfumyubr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qhlbqfwu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163evsjtqxz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zttyajgu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tyaqzgxe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sejrjulo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pvgprqie.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163tcnxazxp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hwlbhevm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rpsqwvos.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mpvdyenw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gcmsldhr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163izcrxhhn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163haevkwyp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qnlpevnj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oqzvutsu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mepfbivq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163iumsbdpg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wnwdyecq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ivpmumyj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wdgbohbq.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zccrhyiu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cuqivklu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ehfutzfk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kenydnmr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163idchinhj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uefapauo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163azigqxtp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163aqzpomms.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ufjoyeba.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163takrjecw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bjevugnq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163paiicdpr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163orbhfhro.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163tadsdyme.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ibdnvysc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163uagzqzyq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hdnryyvu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163adbrkrdv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163prhyyfyg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gxwtqwfz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163djagokey.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163flkmtwkw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jzbkekrx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hyvzwdix.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ugvkcoca.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kulsppnh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fcsoctci.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nscrnxgq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ierarbed.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163zqkfersp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bkcavcjl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163owaujjue.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163azflzhpr.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rvbvxpec.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163efdbgahc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163snsypwxs.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wbiwwiqn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163vjzjafzd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163eohmtjun.html


<!-- 参考信息 -->