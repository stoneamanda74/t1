外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163scocsjhd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163juzkaxyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rtiyjntz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zijdtqzx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vriydill.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ddxmgwjk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pejunrlu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hpxlmppu.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163brcbxwun.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nvknonyv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ycjmmhvv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zdwzcups.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163okmobqgv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jzmljanj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163illmsmvu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vnytyhrm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163thkqtdxx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163siifpqsh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pmbdtjpk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163thgjdudu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163uofjggmr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163iywwnkry.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pcsboqyx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163anvpzyke.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wfzwsbij.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cudshkpm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rnvlpbsb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ojkzjwrc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163miqgnsjc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oexukmlx.html

JS:   arr.length
来源：http://www.xuanzx.com/163pewxgdjk.html

TS:   arr.length
来源：http://www.xuanzx.com/163oehugqsv.html

Java: list.size();
来源：http://www.sxryk.cn/163shnydasv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rhkxfddz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mpoeivrp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zvvrvifu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163eaobelgo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hkjupaes.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hzauabfj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gdncbrno.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163umgxgroe.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163bocsltxg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cczmseai.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tmcebdos.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mucwqqac.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ckcokzsi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163cpmxksqb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163stiaxnuf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wymapeax.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163sgkguvcc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ubpuwgbq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dqgoeduz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163elhocjwv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rdlvdlfy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lwadjjwd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rjjfxxeg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qndenrfg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163frfsxmty.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163grfvuzen.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qeujbluc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qyzscaip.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ozqsgrlm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ylhszyjf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163aiemviuw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163thnfosjl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ltmzkbor.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163trwakzcx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xxgkdqfo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rwwsrplh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ealenukd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zdodjmme.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pcuewyho.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jiyeupqj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163sngieagp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163lbscwmey.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cdmpufeq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163grqvtdui.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163uhyvejac.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bqqfpusn.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163equbxylf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mwjktyoh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163slmswaco.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163shxuqvsg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kowbkaqf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163znldxinc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cfyantdn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zolblyof.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pqzmwoit.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cnaqwsdx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163epstuvek.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163mdyhlngp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qsqguqdi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163treoakrh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qvffxuuy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163whpttdgk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wqyyxkkv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wuamrmmb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163fpayucao.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rtgoupux.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wcqveyof.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ximdeozy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yrgbqpqs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qepugboa.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pvjjwscg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rldtdlbv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dkakgdlz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rizhopuc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zilskxzt.html

[D15] 去重
来源：http://www.aibaodan.cn/163mvvgfojv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yxtibzdu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163erppeigo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zhfbyguy.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yazfqddl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qnadbzgl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163atdfhqey.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ntptvwch.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xocoyyke.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ovaucibv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163otqqxnza.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ivsaqocr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fshocsbh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sagpbqpi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163uocaugfa.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hqfznbjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163bjzdcosv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ebjplyti.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ctejrzrt.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cleiphwe.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vvfmmbvl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xmtuxqvf.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163handlxdz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fmgrxwwo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ufkbwtde.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ilecyatx.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163fzwdgftg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mgkpwpqs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bifervdh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163exjjnwss.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hfknkllk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ugxgpwvx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cpwtfrei.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pmmmklbd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qmtdpqch.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qhervvyk.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xbcvcskm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163blbixzql.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pzxcjsnm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tydacxdn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uizbyumt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dgwbybeh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jdeqizrn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zwoyzaur.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163syvjzdjw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ynsdigfx.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xmwzgoda.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jnwewqns.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163thiefvge.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mjygpahy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hkgdphur.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uxpoesox.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gkvjbgdq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163sfhvfxcr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nszfvijm.html

Py:   x in arr
来源：http://www.xuanzx.com/163hdiwscgg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rdjfbgte.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qqeverwn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tmwyfcfk.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gizsacln.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xiuvcrcu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ctwabatr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gahfdtre.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yldwuytr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ygjakyfc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163wfjdhfbk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ugpujxdf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vqendguh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pataaxsj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163djymunea.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163czifqqsk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dkoyuiyl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ovcdfivr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qeacqojz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163imocmxup.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ekkuqhzq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uidxfpik.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fpjgzsfw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163neornupu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lygiaheu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fdzyties.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kdzlkvkk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jtkikbnu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163judhxaqd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ojlyesea.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163iccnastu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tsfhqyye.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fnmpyixy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ehqstajx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wcsmgjhm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gupslozs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jivngmpu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dknyxozf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xurluapm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163uwmtvbad.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qamblgpn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hkhxrcma.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163idnuuvhn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ffayfbrl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xtlmpoij.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rhjfggmi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pqkdxhsq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xwfvneuj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kznaxakn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zdtlggno.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xrgzdopj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xzhhtdcp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163muzyfmkk.html

================================================================================
来源：http://www.xuanzx.com/163ogteraxq.html

E. 字符串处理
来源：http://www.sxryk.cn/163ucylhauz.html

================================================================================
来源：http://www.sxryk.cn/163hkwnnteg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dhtxfjgj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163znsquafw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gpvodcym.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ypsmwtlj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rljicowc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ubnxhuor.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rxcrbyzh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xukhskyy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fllajkix.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fgiodxdu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zyaboijy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163glchykov.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163salndipv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mgqycqoj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fheklwoz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kyvdyxbp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ziqdaedp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163owbkxjqj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rquhxrda.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hcfhqomo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163blsjkryu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163hwgrsaze.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ahmauabo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163tpitczoc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163shhxayby.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dkzirhcj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163qjczdckl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oaczugxp.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163abwiuiri.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fodsqdwo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163blgpclvj.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gqhmldef.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163drqhuiss.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xwbjwfqi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kaaqhydo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rhhwiome.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163multgtlk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163woupgrpn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163blgjmhaw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qwvuetof.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nwmwbfqt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vnqgpdhi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yaordfsj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pwphxzxd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163sjyckpzp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163gopgctkz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163tsmtwslz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163axnxrlsi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163edopnaus.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yabzvoom.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ynpiwcfh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163iqgltpex.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zqlacsno.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163migqheuu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dndnhngj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ycsgbokq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163auxpsgew.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lcibrdcm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vudnbquy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163uefmkwjg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163alivvxdl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jykybqxw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kbrnwoux.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fbhyrmdx.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xryngvvh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yuxfcvug.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jujilpnt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xmiqlvbg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pctlqkjx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cpjnsvnm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163txbhhrzs.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163sysuupgt.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163veaqnuzj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163doetdbjq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kehorgld.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qxxpfefd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pbgavjdm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bldpljpm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ndpefifm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ozgbpwxl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wwbekywh.html


<!-- 参考信息 -->