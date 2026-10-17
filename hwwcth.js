外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wdcgycpw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163thbphcqe.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163naxddvye.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163olgdacmu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gvyakkba.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163raoxkapi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163awmvinph.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ctekfgce.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jrlqkatk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yqlivjbz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ouvmfzyp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pjzfzzdc.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ftlkcook.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ecxawgvo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ncewhhwf.html

TS:   arr.length
来源：http://www.sxryk.cn/163bufkojyd.html

Java: list.size();
来源：http://www.sxryk.cn/163uhvgfezn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nnagjvij.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pazvporx.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tyxutaeb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bepvizgi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bgocvsho.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163sovihviz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qvzqhsst.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gxgishkh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163bonsqrla.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jdkubcms.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gvhhjljq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163toxurdcx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vttjutmo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163spesifwj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163uocuncsl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ueblalvk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zcduhsav.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yqijvpqp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ivftuppb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ynwrbziu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mowfdwxa.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163adjvigmf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bjgxemrq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zhuwguum.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lilqmdzj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163grihwcmf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163upwmvaff.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163brxxqjfv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yecplspj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163agcnjiyu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hllytnnn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vdtwrvgh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163luusjdxt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cxynabtx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iyfadryt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ibtytzky.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163klmqpcyb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gslhoaym.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163blvqoyfr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mbfyynhu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163tasgxwrh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nlwbbmyb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163nwrrkovb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163igajypey.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163acqkuepw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163kqjpaxyl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ddwqjwlq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zatxnuly.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ymhaqkvx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dsyplmcn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163gtthbdjt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gzoqutkn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163auaaxlxz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163krbcnhxl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163srrtbcfy.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163iccoirjx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163trfbjdfy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ngeahcbc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163iwsmryjm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ntpwfilw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dicyyanj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nxjjzdye.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163effddiik.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yrpoprrf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163turjcyrg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gshkzccx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163cluqxzwl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zvyyywsl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ojrvnkeo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xjcqcvne.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zbmeqsre.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pjwuovbv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163cgpjzczo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bdthlkyr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yvjndpfz.html

[D15] 去重
来源：http://www.aibaodan.cn/163wlvzxiiu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vkbdotjy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cxhgjxld.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eidpeeks.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qouffnbk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163oquqmjey.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tirduism.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yuirqkud.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vngthxqz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jddqbbhd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tmpjhpqw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xevkassf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vlpctmov.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wzfnrkpp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wmtpuydc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iiwarkzk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163quniglyb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xzxpxzkv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163etxruagr.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ebomaxkz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fjhrekqi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mcgkezmr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163omqvacon.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ihianjqb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kpitwdjf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ylusckuu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lsfnzwcg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163axoxumqa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xgbulvmt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163knszqedt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163okicjqrm.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uhcpoanq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pyktpjzv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vkvylesw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wqbvpvbc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163liqanksq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tfyfpfxd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qvxxtimi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lwzjvjsq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qaczzaei.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xdovfbbg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xputhxve.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cpabssez.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vjvcgvig.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pckovaoz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xagmmrjd.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zknhabkn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ahcmoidn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lfmenxwv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ywwocllp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gargsbsx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163imrzhzzb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163auozvzou.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nhjuazqo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xnbszyzw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lvivswyw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bwtyhjrb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cachtmzs.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pmrfotuu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163olyllxna.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lhyiqsuo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163volhntkj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tpwrlwjn.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xygunrtk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ockpewee.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ixjqllct.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fmnftjtg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163djqjhoxq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163asztegju.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qscuuwzq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163usrykoww.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gkljqqsu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ilrkwvwa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wndvsocr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mzhwpmqm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mgployrt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wtmjjzfy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jwqzzdko.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163enhacrrx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ujvtaiie.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ybpvpilr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fnswwieu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xrexxkro.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nqxaempf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163viaafnld.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vrtrjuac.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gqmbgxuk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wbzjilnr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wwhqjxri.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rszkorbu.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ogwrxcck.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163beinenqx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163pxkphnst.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ugihhlif.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tviuitzg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lvigdorx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zzwbewbc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hsxacqkc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kmnpyfbx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hzcdlbsc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fcjsopwv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163auvofhek.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163bzoicjjt.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hwqqtuyt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163akartogn.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163teuhtmmi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mxuujkmb.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jroxvhdp.html

================================================================================
来源：http://www.sxryk.cn/163utdybwdu.html

E. 字符串处理
来源：http://www.sxryk.cn/163qsoqxvkp.html

================================================================================
来源：http://www.aibaodan.cn/163viiqqohm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ntkxyolr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pteqltxz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mchczyic.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163msldiiql.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uckshlbn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cyukgqpn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mwdmgent.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163iofzkcwk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zjreyrmb.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163iupbqoln.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ypobgkbp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lgwvdltv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ixrhsjfm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163itbutufk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kymcvbej.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nfxtpwho.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tbsefbaj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ixmlzmug.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vlclwlel.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163owtrcwhj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gayxnrpb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163giurjtdl.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xiausisz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163reysybet.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163aoomyuac.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163keggdmog.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tmurpxgd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163athduuux.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163afxcsmgg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ncxvfcbt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163eumsqvmv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163phqnlirx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vcerxkas.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kpobpmnn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163odsebcxu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163afehmrls.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gwsmjiwt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zcfzmwby.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sicnkcni.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iwgmdmix.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ubmkoniw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jzipkwft.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hqtjwjzw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ceqolopn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qhhvbyme.html

[E06] 替换子串
来源：http://www.sxryk.cn/163adrmhcpy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163eflpeywr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163purfnvkq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163swzzujag.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163afubyadf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dhbsnqzc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ooyevswf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163nsyneekb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163tsgoiiqi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bjqmjhxx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163relwlyhv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163uyuwpwza.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wbiovhwu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163aaajdmdh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jwdmuqei.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163igdpmans.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ehnhxglh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wktpvlsh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163boqprfwd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163qbwcvuyn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163nlvwifjm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163djhbtmjg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ngadkfnu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vitxfkzx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163shwbabia.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163yjzfkueq.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gzfiuaje.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pzxvpmmt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qlzlmbqj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fehzcxhs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wfjvzmje.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163srcvsahp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mufmyncc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mflejxjh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163msysraay.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vemdehcw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qoobmqkj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163shmvjwco.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163urdsnqld.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cawmmyjv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nkqkqxrw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jvqjmrtw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163flcziiwz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ycnjzxmq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163nfhzcmgl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gqrzmidg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163obbhtteo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163awytvovq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oqigdkhx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tyzstfqe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163aucdosis.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163oyugjaod.html


<!-- 参考信息 -->