外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163uqibcudb.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163adclfhre.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163apoixovj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ucxhvrsy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163umiegyel.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jtakdqvd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qjixvmfv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163saaoowmx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hoalxnje.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oecfwsdq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kskueyrx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wbvwhdpp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sxyumgzk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mlnbguhs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xpsddeca.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fclgmoou.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xoekhvds.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bobclgzw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xnmnpbgl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lsxipclo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pdgezqna.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mboarevd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gubmwuue.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lrrpnrht.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jhgudpvp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xidljnvr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gnjqywhn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mrstjisn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163azjtbcxg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163shmgptny.html

JS:   arr.length
来源：http://www.xuanzx.com/163dsajveql.html

TS:   arr.length
来源：http://www.sxryk.cn/163hqzkkcdq.html

Java: list.size();
来源：http://www.aibaodan.cn/163afwtsvpg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wgxiidop.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163bmjonnxi.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yekhjhko.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kfjbmlzv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sojxjbew.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uidxyluz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wozzsbgm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lrjhmlve.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163whkevcnq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xgujftqj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dxbrprrv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jesxnobg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ymcksyal.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163iplbcekl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163monfcnoh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iwrphovx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163adltcagz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tgngzfbn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163oeqajeiy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gnsbdxmg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yblfgbra.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zcvfizjk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sljfsiko.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fdlhmuaw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163eyfuscwf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tmegprmy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rmhpdesc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ttqleqzz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cwokbldi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vnzzwnrh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dplqbpli.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ekgqptth.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qrbemoeb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kutdouxw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xpvgtxlr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ceapspkh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rcrwzuqn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163yobzbnam.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sigihppj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163stkzgwzy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jmnytisc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163njhyznkb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163phlfqjyu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163pewbkuqh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ygxdvcak.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163osyvqkzv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dahqhmef.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vwnbaeyk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163upiejnuy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163smbquehn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mgbvzaxr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zfhoyswo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vtccfjut.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dvhpqaig.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163anjaipff.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xxrjrcia.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xkmtbiww.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163csonlcrv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163puxkksxx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hitqegyo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lldrzojx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163abdkwhcs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qyjbpwci.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ofchdkcx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163udgynncg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163niemjtya.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hzfzibbu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kosdhqbb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pijmhgwv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dzhbcgsx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ezhxmqhf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rwdxoymu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pbpanwdh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163aelwbnre.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163dnfnbvam.html

[D15] 去重
来源：http://www.xuanzx.com/163vxexskwv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163aamirygl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qqufqyuh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163llxhbdeg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yjqnrhyd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zxspgapq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163swpwbspr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cbhagxne.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163oxzsngzn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ayfjaxju.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ghponpll.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zbjohzmy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163skaajnpf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pbuyhmko.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jgunszyw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163nsyppphk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163beysdwiv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163libigsub.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ychcukgo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163oejdulvz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zsnbqlyj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vdmchvoh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163viuynaig.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qhcpedfi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mnkjjkio.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163swnqstew.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163eeurrier.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ricwqjzq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gavqxhhi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rbnuaiai.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fytxlvss.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sesdcurr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tzanxlkz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163igcziqrg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sujrjrsn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163hzfqmpqy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163tqeljiir.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163oheixvmm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fgvajgcy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163lujdzohv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nilfgxar.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yaikuazo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163krqbaofz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cbdgqmsu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rxzerhbb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cokvsunx.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163urpoywex.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163grdamstl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163abutfxnx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hrzyaxqj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163yhgasske.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163eetnvzgd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ztnqojgb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jealtvnd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bswqupph.html

Py:   x in arr
来源：http://www.xuanzx.com/163xicoywqn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163oefmhqob.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rybqwabt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163pmjfkuzv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jzprwzxv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163izcixbgw.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163japimacx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ezmxlolb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163daavsyar.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163onlvtbze.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ikwbwurz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nempughn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tlabiwlx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tebhtawa.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163djnkkdpt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fvbwetjk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163qxhpknzn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163btctgznw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rkrxtgns.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163clvnbxgl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rkbkdgum.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uqhdqvhl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163skxkhvpg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ejpekfdc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uolelfbm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rcjmhmdb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ujwtmhty.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163owptytop.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gimswkap.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yfjnrrdz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nrxqpzhy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163appixsis.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163myqxalsg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dwxymkid.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eyzepkcl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jbclxzvu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ghipovan.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ndbmqcvm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ijcksqkb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163poadagqd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pniwmrna.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ghaqskgm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163brkcumii.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nfzptjmx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dgbvrgla.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pxfkkrwk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dxkfclck.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bcbiltes.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163cihsgnqp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163flrsdenm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163labddkyd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nbroojzh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rimidzcc.html

================================================================================
来源：http://www.aibaodan.cn/163rlcfpviq.html

E. 字符串处理
来源：http://www.sxryk.cn/163audpmzxp.html

================================================================================
来源：http://www.sxryk.cn/163lycgoiop.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uplfezmy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nuuykdxz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163akmisdcy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dhorqyuh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aoxycaea.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hwqofztq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163subpizgi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zhinvaum.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xrtypivy.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fpomcfoq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kbahafnr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ymighjva.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lhxfnsjm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cloneafu.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lnqfwsmi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mxifgxuv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163rkhyuchv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gbwcektl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zkbxjitk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163znvaecxn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vbwwpqhx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vtafesji.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mbjaxpsh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163strwzqgi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oxhnkeke.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nydgncud.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fgbtvkhz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hrxhgerz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vuexaajr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hwkcwrva.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163issenool.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ujtqwcnt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vgtdaycg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qtjucdka.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kgndcgtr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ufpgdlqq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163iyqovlxn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qtatoani.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163clzyfqbq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163auhikbuo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ifnsbozi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fchjksah.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163eojuufdw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ttynprwb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qpnncbvx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jviioypt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163podpfmsr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kdqgmqtp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dcavamlg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tdhmphvt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rxwnikas.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uxyphmkm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tlvelrhj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dvfnddeo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pcjuetkd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163clggcapp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rumrmthe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pdrtazms.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163nfpogrbq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jaciltus.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mudebtkc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163okfrokkt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163emhvzjid.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163cmsmuhzd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163qmvavrzj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kkpvgkdv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gyvjcpux.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cilygydi.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ahdxpamt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fakgweal.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nqnaixqs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163piucgrgn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rqhhojbn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pcpymntn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ipwupplc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hwsccqzg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eyanaaqn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ztllngra.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vizjzyco.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wbhqyqii.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lmyefnol.html


<!-- 参考信息 -->