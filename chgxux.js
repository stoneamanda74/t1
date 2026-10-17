外链999!wailian999！

Java: list.add(4);
来源：http://www.sxryk.cn/163pgursxfx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jkldyngj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vgjqbugd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dncwgzha.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163blffnonl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xaacnegc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163icibuvub.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nboujaic.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163nwlqqkkf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iwfagnsc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fhuecfig.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ogggxjnt.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kvxplqks.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zmmopmsr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zrywqjfb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163yxdfdhrj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lpcrsiqa.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fwtoonht.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qcmokqnk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cuxrxlds.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163plfvggpv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163cavhqver.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ecrmeeia.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bdvkznwb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qkmhices.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vubcfldq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qjvzbbiv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ieduticp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ooracwkl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uettouxw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163newpfwhs.html

[D06] 数组长度
来源：http://www.xuanzx.com/163grijjwbd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163gxuybpfr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ekkyajcr.html

JS:   arr.length
来源：http://www.xuanzx.com/163jdckoyxu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ednehqxm.html

Java: list.size();
来源：http://www.xuanzx.com/163hpndytpe.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zdaiogtk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kaewvhsm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163snhfqsyi.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hfqrwsgk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163lkdjkkpp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qykowmti.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aclxnjgz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163azwromsc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wqkaiupu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gjmvacke.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163abhecchj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hkebzpwg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dnviilwm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163odqgwldz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wslvribo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ubaunvdr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163guxahplr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zxvocuie.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xvqbttwg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zhrrtbqe.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hfhzqapp.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163dflijmbc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vnoomstb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rxfbbbzr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cfpaqhyz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ioahjcgr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vvaagifx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vgnhsdsx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xtnyrhcc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vjczewgw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lspspden.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163juyuyduv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bycdhxnt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fbnirhyq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163iklxyzwv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mhruupwx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163tqlgzaen.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ialjmapi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163anhivxmg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bweldhgu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163khgzqhsa.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163mmxxddmd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rgkwkdyk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zxdqrkhe.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pjsdvjid.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zkcytxda.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jdkncyju.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qibzbszw.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pjqlmapi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jedunook.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mktbuhhg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jgtaidxh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tiwwrmcp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163censcetz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163elpcwhtn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zjobbeeq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kqeylyoi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163lpbfdrnm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ulyvhtgj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jfsyaoph.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jicvyviy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lmesnjux.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dxcaqeoj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jcqycexa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qrupbswm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kyqbgaow.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163doghbecc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163irhhnhbb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hmhvbqpi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iwsmczsb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wmvuvoih.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163waatzykh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hyfduzzg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xuxbgxfj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zlhmzakf.html

[D15] 去重
来源：http://www.aibaodan.cn/163jolawgre.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163usaneowx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163daupdurq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xovdbedp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163brtjqhwg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163jraubict.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ozvhebnr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vabsgujj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ueevqhbd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163igxeqlzb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ikhpjedt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hkvsnoit.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xvbzmxwv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dzegotvq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163usaxorgc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163dpivpfyv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163sakerrxq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mrzhhdix.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hwucxwbb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wnnlgpme.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jnftzukw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163asgeigua.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qknbrops.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lircopnm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163snkwzary.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vbyxdvkm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163extmjafn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163swlplyxk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bzyahwxi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ugoulgzo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qlbtcopt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163snskfwtx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163etrumerz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ivcrruhb.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rdsnlvxy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vshrnlkk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163uyjkpssv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rlqstsyh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mwtdbzmf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fnuzvdpl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pxsjgwrq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fuwzvcvt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xppzzzbd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mykodahc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xrutpubt.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aspdsfyy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fawbbyht.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163owlckqkl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hvugtxao.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bahncqhb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163schabejx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qaqyfzbj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163micxljyb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163bafnfqmi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163czyqdzrt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xhxrjyev.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zyqkkjxy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163esdewcau.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163isvyuebr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pxcgvvwo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163kyjcpqwc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163orqkzvrn.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163duynlymz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kzrfuact.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lmpfciuc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xofglxxg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lmallnwa.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gkmzirbd.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163trynvjea.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wfvogpjd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ddzflqlu.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rvmyslae.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gnbyphue.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nhpxobbj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ktfgjcmu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lfzfkntz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xdwdpqgv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163oddwzupo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zpnfulze.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wssvsjxc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kvjndttp.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vdfuwiig.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163uskocnsw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163oevgmyii.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163crndtxqs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fgyaurzv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tjwztgmw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ungymshc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ocvcdfql.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163yuufzndq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qufzeqrz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dlevceqs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qgknlyhq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ggprgymb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vxkcnnci.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lsuyylxk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tiwcgrer.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mpqrzvpt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mayufpjb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zdjdkxik.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qjqopklg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163awcfuxva.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bhkgarjw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163raqwznle.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163elgfvkkq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ifjamjvx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163blxlzgpr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163imbmasqz.html

================================================================================
来源：http://www.xuanzx.com/163sgoikaey.html

E. 字符串处理
来源：http://www.sxryk.cn/163obtevggr.html

================================================================================
来源：http://www.aibaodan.cn/163cjplniky.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dgqwychg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zhfcjwcl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163lznzvhpn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163coooaeez.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfjpxrqb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zhzdbbip.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163uamhyjbf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dfcavqqr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ymvoydkn.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163srywrblm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rtotpdtn.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163uqtvfoga.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jctolkas.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ziszwvqp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163svdazqwi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pculvikb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163dcafzazr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iuldrppe.html

[E03] 截取子串
来源：http://www.sxryk.cn/163pvgfkqcp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lzuavryf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gfnsefcb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163utppggiv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xiwkugrh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163csxtrzqa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nodnorzv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wosgqzbz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jdxglmez.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163chdpikfd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zspztlht.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163zcjewfgx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163fflvzkat.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163hxtmhxnp.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ucfapvla.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163sdtwifsm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nhrmzglv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mksnthbc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qaajcfry.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163tsctrbbk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163tjfzpgal.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bwsbpmts.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163vejnvkfe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sccjyyhv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xrhrzxzu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xakbkncj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ruugfvgy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ytakhfsw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xktsdmsq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163votrrbcb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nbhahiok.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xwwtisdl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zomnaoax.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mmrimxhw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163cspbilss.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uohdqwov.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vpezvncc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mmpktqse.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163blftkdcf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zyejhjbj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163staloabd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sdvnvycc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163iunnioqd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kicatfmp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163esozrxaa.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163opmoookk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163udchngdm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bafdszkh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163osmluriw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vyfmbkhq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jubxugit.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vpstewaj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163erhimvla.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163tyeebaiq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163roesxsqk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163eqruxnjn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fucuostk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rpzdsiph.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163msmkcity.html


<!-- 参考信息 -->