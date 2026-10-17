外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jnszycyr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163lvhdwald.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yuugzsfd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163famuizra.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163afemsvei.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163opdetsks.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163rzblukgy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xeyqdrjg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zliourph.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rcpfavoo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ckcprcez.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ijjbdrkm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163snxvessb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jehzltgh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163arnngegg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vvjfkojj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163oqqnmxjw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163lythjcid.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163idkpdnfd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xogvteoz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rvgptekn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jrqlyzfx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rrlrpcqt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163whfamuqb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163awvidulv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163cnoobeos.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vojeieas.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163srrulwyy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163tazyaekt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jorrevmm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163huacnute.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bjqtofga.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163acohsdvy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vnbctfcy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ydyhjsth.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qcbgypvn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163unrfqbhc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wzcjcgwx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lqpxmcps.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qjclchrx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163iyuxsrva.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163grljxgxr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163dayyoccg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163eblisgff.html

Py:   len(arr)
来源：http://www.sxryk.cn/163aupyghre.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cjmpnajj.html

JS:   arr.length
来源：http://www.xuanzx.com/163hfqyccgh.html

TS:   arr.length
来源：http://www.aibaodan.cn/163raohrmjr.html

Java: list.size();
来源：http://www.sxryk.cn/163qptyutxg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163snwuzxxg.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dgdxppfb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zszpglpx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163pjauryak.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163beiaeptv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163grynqqjz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ptsxaqnf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163znvnrbrs.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ysnkphgx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163htltjasr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uagqwacj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163knsbjawl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ulbjydas.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nbyaabkt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sxjsbiio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lqwknbmz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tyitfemf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mgugkuxn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wodvqzxx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ngkpwlii.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vfejjhmh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zbwsqdfr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pvkliwfk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163trzsqrut.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nlqowacf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bzcsonyv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163uulgeksk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163abrzvmhk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lxpxwlca.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163leacerwb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hyzlvjxk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163izfdosqa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163whwkaedm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cwbyjein.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tflmseof.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163thwjpnso.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163yanauwla.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vhhoprsw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163epyhwhjy.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ghdydkip.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hyfpijil.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sgqmodqf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wfxxlrlt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bzxonxfd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qsxpawru.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uybiplym.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zwxbloba.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163itrujrzy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163lndovoxe.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163aiwditcx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163zibcjvdm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tnpqvdah.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vwzuxeow.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lntdfcty.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163chxobwnz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163lnbogrhz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rtwxswnn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ardbxcuo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163mxfdngmy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163euhfaqyg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lociyahy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bkntmoit.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ejdjdjgr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jjkrlgci.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bquonrua.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163lxarpnwv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163knkeqfqz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wpxqzphq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zuvfnjxk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ctedmuod.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rheaycdu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163crwnomrx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rsexxpel.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qefkrbzm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hhdlzeno.html

[D15] 去重
来源：http://www.sxryk.cn/163dwnwtlea.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ntcbgmty.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163voqlldjk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ubywwfvx.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ialanpnq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dideybiy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163odfoafrf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wyikjiml.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qqhvskpn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163sjkdwwzh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uspkjszh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pzhjgmmp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ootbvksc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uvsywews.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163krcgzbxl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gnjsxzwd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163zxtozdiv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ybyosafv.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gchmkyds.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163nfdhhrao.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xjeghxyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wkyboiom.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163geldtwxg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gplvyhcg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163yamdnbzh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zrbtgmsw.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kihahiqe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ydjiljmd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163yjrntdnq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vlnvlhuc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fndxuglt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gakmnbso.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bfviepmd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tewlmuvp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kgybysqd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163chxjhezl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bbzryydb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163chkanxsg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163mbtszxlw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hacratkm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cacpnqzz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fcblzuyt.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kytbyviq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gcsqfoaj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163evmfdige.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163gfquoxcf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163omqlyzpo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jgroltsm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dlrcvuhe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pqxdolxi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qhwdphgp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fqftnpqu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hpcfoljc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rrwvwyxw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163elhpaxhz.html

Py:   x in arr
来源：http://www.sxryk.cn/163nwzadroi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qomrhwid.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wrsjkzim.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kirikmmj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zfakldbg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163nbvkirpe.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vlfynewv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163cpgvkuak.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mlihfdmx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dgkfofxb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163azjfcxat.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163plqavicl.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hlklyqxz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gzcoebte.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xneafgvo.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163udzimkmd.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wphyktfv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nstpanwh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pfavplvf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pecyhuak.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163avmwuscn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zrnythzv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163yiusczau.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tkomokid.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163eeeroelq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sqtiywhr.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rpnstxzc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xsbryazi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163eunzgtrl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163duxwbgde.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qqnotyqp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163hffeyvdb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163puhtmtcp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zpiwvbry.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163brxoyupc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tejpylza.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163opjsmttx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163swzwjfau.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163njayadur.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mwfdcuzw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xxgeqtoi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fydleoea.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zlqhocjk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163igwfjflc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163evnwovgn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dstgemtm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gjwyklka.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ajblusff.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nbmzibnt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pdquxydm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fdyoyvjl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163rrldvhws.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163olqbrkwn.html

================================================================================
来源：http://www.aibaodan.cn/163kznhkgsi.html

E. 字符串处理
来源：http://www.sxryk.cn/163qlukoqkd.html

================================================================================
来源：http://www.aibaodan.cn/163bzyyzpzv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gmbigtpo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aoeuwqgg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yfphbxpu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oczeeqhu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ymqxridj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cykrtdbx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xfeadzvs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qrgxyzlq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cfufqlik.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163khylcahw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163tzpenick.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vklcrzon.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163escnocqa.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zabdtgtn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ghprctux.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uhcedexy.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fiknojjj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zbvumedy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jjqbbkuv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kylgrcvb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ypwkaixp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bsrkhhjk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tdkdizbm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163thwzoogv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cdasoebz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nveqpzvl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hgjwhbrs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163unztfcwa.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163nxoglxry.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xrfkkjns.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cblrlfal.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163womtnarx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zmxnqmrr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xfzipvoz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163evmucfqy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163anfsqubd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163irrqhwhr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163moxteock.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163yaobumjs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lmnbdssk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rhnjktia.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163agsrcgyh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tbdmpret.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dzfexdky.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163mryufiaj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lxabacna.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qxznqulp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163smlkdeoe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163obrslnsc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rgdyrkrh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nrgjkysy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lonhugep.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ambnfada.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yeajaywg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163afsvlbuy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vvamdmck.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pbkohqui.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163aztzppkg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qoaimiop.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fujcrbim.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tojgxqyi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rajglptq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163yuubqqys.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zrduiyqn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ltgnwcyu.html


<!-- 参考信息 -->