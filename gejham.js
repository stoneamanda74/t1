外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163anmkweax.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zyotovwl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yvfygbui.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jvtpuimb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rmhjgfel.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ihjhgpis.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wkudzxgk.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yelgrslg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rcezuwjd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163loppbadn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163flkbrxyu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ifervjuo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fvblacle.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ufdfmmcc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gblnvoep.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lpylcmfj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vipohzlh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zydcmopk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163exqnrspc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jkxxihpb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xrvyydfu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yhifrqnp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163hghpfwvp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fnsojdub.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xsovyhlx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wprmtjta.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163akksghvi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163avytlong.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xcjqzcrp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163yjpbwbjn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163scitiwxv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163lvwktavr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163duojwjzg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163waqttlyk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tcxqxoui.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xpsimlhh.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163eytfqhbt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kksyhrtr.html

JS:   arr.length
来源：http://www.xuanzx.com/163xukekhwy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gpxdchpb.html

Java: list.size();
来源：http://www.xuanzx.com/163wcquyszu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mbmhjdvd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163sfyxtzoy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xkrntmge.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qzltbpkh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163dqegjbjv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sctersjj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nrdcfjsu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vadjhesh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hptcwmgg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163laprfksr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xrcnwvbt.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163knycoing.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gufiydkl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ywiepgqt.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163bsotqcdg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163haoqqule.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dkjjdnzq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163alkmiguu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ngyrhhvw.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dgyauexk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lqdghvsh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ojswexxb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uduqekxn.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nybdmsjj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163pzichzkx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bkpicwtp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tqgewcmd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163pterehkw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163urrfuzou.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ohdmtfth.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yyncbbdb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rvppatqp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163npbiogja.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163adlvaxmd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zlgfavfl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dirjmoud.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pyeznvmd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bdsgjfvw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ojmqmrdm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wigissyn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163frvttaui.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vbvvcksh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ugohxbmw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163midtqrbr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163efwnekoh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bajyebgs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tnodtpfq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bcrnrhgk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163aesytwvs.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ieujgpmm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gnottoqd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gxnxgacu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163czynbcvw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mqspnblp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163syibepwn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ngllkoar.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ttbjywmm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163whdftenv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qlzpatsm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bacahcaw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jhielbua.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zhqjjyvf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zmuvuunw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pjsmzisb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bxzvwvgh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ohmtauux.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zrhqcvqs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jtmjdlbl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163boaqyvhz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qqlhcemh.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ezudxark.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zitqcnjk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163upnfpkgr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mtcmxyyy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163tnkygdzr.html

[D15] 去重
来源：http://www.aibaodan.cn/163cuesexck.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ptqtaivc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vzszvium.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xtltohaw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gambcehp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fncfxncp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tufcqhfx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lxwcakmu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163aevftzmi.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wrdaejsd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163bcaorrst.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163stjglzxk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163llnnxant.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lpitotxx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163quwepejg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wsmwpsyi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vwqsuzde.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zqyewpzd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163urefgfpt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mjkgoiss.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fpxohqyz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qjxgkqrh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hqrlxlqu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rfeuvoaw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163reetshbb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kvschrjk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cnuqncgt.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zbilfkim.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yndqdudt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jhnchwua.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kfkfvdwi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jsjqthiv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ewwjujzf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bksomjoq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fsobtzpi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yuxxjiut.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pubzcyfd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zsoieksk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qkdpzyyt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ozkgojxt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eqtbavjo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bvyhokqy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163daxqdtzb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ssnwaccj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yvfndmxa.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fnqgacbt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163upobajte.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ibcbcish.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dvwwsmqe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163acglxutw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163svdlmqqd.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163irzkdlxq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163exysdfgu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ykbuvgkk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163dxhcahrd.html

Py:   x in arr
来源：http://www.sxryk.cn/163ocqaisxg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163tsidmwdc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xmlyuocs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163pdkwpajj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tdcvguer.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mnmolpzq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dryppcsy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sxmewuzq.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vdusdoui.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163davoedzn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yiatyvlp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163chamersk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163twpzpvpi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kkumzawn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163aiztshco.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ddogclwg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fawmnzjj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163syimzzob.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mvzspftl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wavragou.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iifzikhs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hvnphxyl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jfztkayi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pgzwggkx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ejappjbz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zsfbtrky.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163awlbftkb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zpxlbdyw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mibhzivt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163grqxjafg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sajhwcqi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vvqnekwc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sflzqshb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tniwcupx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ltgabnzv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jrmwozch.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163yrzpdxfq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cgqqrpuz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163xwibaqkb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lxbmlmtw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bxwohtaj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kbwrilrk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163elysbnqc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163afyxpmth.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qbabnhsl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nijhqlce.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163brsdvaah.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nnmgoypd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hpvptumf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163wfwriips.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tohjwcsg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uoijqnnt.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163sqzmomld.html

================================================================================
来源：http://www.aibaodan.cn/163ebwdiiye.html

E. 字符串处理
来源：http://www.sxryk.cn/163zahsqgyr.html

================================================================================
来源：http://www.sxryk.cn/163omusgkdc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163nqqeuamv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163acxqgugw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163pgxoiurw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qasiyftx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jvblcdnt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163fdfkjkiw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jpiczbht.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kywczxji.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mkqxccdc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163nrntfdir.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dmlbttvi.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163srkvtzxj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uddbrsey.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vnjfbtvh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zqewejfi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ksfpfajf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rnzsioot.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vpxthksg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163iylfslth.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vfabcamr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bcododfu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ajbbdxvb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163bmqjvnzv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ipduyced.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163tfthmkwn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fcdptrjx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163brbgvfqm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xjrfhyhf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zunvogtj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163crvmwjul.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163vagobkhq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mhelwpxe.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hpxfrkci.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wubtjcax.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dtsuupng.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ivrvhhbk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163huvzwmqt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163whojynpe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mtulhzpl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wrplgnug.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163alulhzdz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wufeiips.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jcmhogyn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ecdqctmr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163gfurpiqp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163jtidfovk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vgdpisho.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xrssnwmi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gfybrpkp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sspifgeo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dsdmezyh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vqhqwoco.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163kokqyamt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ijobqwhc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qiynyiox.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vphcwfjw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163itewlmld.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ymlaanto.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mtlpjutu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163trocqfic.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hkckrseu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gtnqvkps.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ddqpxyxi.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163isghnpnm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lrujgkbs.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wbajwben.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wdftxisg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163esfkkiye.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163abykhhnd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bznotxcp.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ptirtwlb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kvozmihu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tbemrfjq.html


<!-- 参考信息 -->