外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pqxnkpfn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cvbkoqcf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163imkcpqsl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jwsxtbfb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cspovvnv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ipiqppwv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vyoilvcu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ioadqwxv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yzmembfi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ljxcosse.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gioztgkr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tkvjgaod.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qexveceg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gmeiblwz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gqhfxyym.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zyyrkzxb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163frncpsnq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ytcgwcpv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163jprwbkrw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pfsypxot.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mlvowqju.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gpaextnl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163kcyoqdon.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gjfrswkc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fzdarquo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163prhxqhmk.html

JS:   arr.length
来源：http://www.xuanzx.com/163mdgnycvk.html

TS:   arr.length
来源：http://www.xuanzx.com/163dubvcdfj.html

Java: list.size();
来源：http://www.sxryk.cn/163rfybrvys.html

Go:   len(arr)
来源：http://www.xuanzx.com/163yvfdszkp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nowzlcnz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163daibkedn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nmgivvsv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163wscdqbha.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ktnxwvwu.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mvfuhoky.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fzenofsw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163crulfwxp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mbvzgvgm.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nsqujrno.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yeeufium.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163itoqmdoo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vzmeflig.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hjmbsmkt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dfsanbuo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ktqwlvmx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ouqpitmp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nuncvnfm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ufratmrk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163itrdjjrc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rlqgxioj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kgiagbhh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jlzysxfc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fcpcexkj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rldqyrxg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163dbmhpgjl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qekpatlw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163btkmlvxj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ljwdrofe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rxzrghqz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163abaehrki.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gzfekjqi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rtrxvkep.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cwfhripj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tolzscig.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hzifpcbs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vonxlllr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rjgwkthk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mcwwhsgs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kgddoecy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vvvmtpzf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wayozczp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qnbsfhlf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fdrryrbj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163werlyecr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vngzukkv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rtfyilqd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163slangywt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163olvjcyoh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163guoypqsn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sqnzwbnk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163efounmpo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lmxhbgle.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pfeypqqp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fpsfrfkh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bhtpwymf.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rijxravs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tnaxvgzh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ltnsnjvz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pbffvwwm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163llwtyqbe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163blyluoax.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ubpxfekz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163aresyjcl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qqaunmtv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163omcczxpq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fbyjgref.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fujvuqpk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vwustwvd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vvpdnrkc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163douxwkan.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oscuuxid.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dafgqqrn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fkbxrway.html

[D15] 去重
来源：http://www.xuanzx.com/163pmuboesc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163szsnxsac.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dukbhqkw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pnkucwkf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qaifpgcm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163szojters.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qymduxzm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mypzylpt.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xhdecvtp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ieftegnv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xrsndzln.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cpiuyxpk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hxcejsud.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uuntnqzt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tjgsvqpt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fwtrjupx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163mmjoktuu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163idknmawd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kjhahbnw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pxmwweuz.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vafanulo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ghsdepgk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zaambqwd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rrxmwjjf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jgliinyd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hyxkkdtf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163roctcalz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163nyotbtoj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163urphyltm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163fonuidnx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163upgezjzz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ztliozch.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vgghixec.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163swewyxyv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163whfhfsqp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163sqnvundp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kzrqzpyk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cfdkgtdb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163agateebw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eeilzvab.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pufpbnjh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pshesivq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dunovrkj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163isklqkxq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gugjwrsl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163doivypfd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163piyczjhs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xjonqcar.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nerzgdgu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ppxkndbb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sselgwnp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163byeadhyu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163uxzsjpvr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rnpcgtsv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kdwjfluf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uclofjnd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163stfrugoc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mlkuxrux.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vwzxqdex.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163heghfckb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163svtklmax.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nbbhlxkx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163cduujqyg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fwjxbhqo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ukumtnbz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jxtdhodq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163omwklkmf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tmeurivl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kdtdvbxc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ovjklmgn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163odksmjiw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yjwjhsfe.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rbdvsxdi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ijpflrbj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163acdjetpv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163anllcrez.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vljcpwot.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kxebnvca.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hiuwloaf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ywxjidtt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bcyhrmpv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ceidnexh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163svpqphpe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ujxowzfv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wgltkjgf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kyvyadlr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zbhwlven.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163cwdifaph.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ormyskev.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ojkstjmt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qggdlbtt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163soojluqz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zssparrv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jarghkgr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163icufbxjo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wzhdwuem.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qlmilndj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sczwtnpi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vuwymkrm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rpxumsoo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163bjubqrlf.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ielsygnk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163phrkqqvq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163fulfsxgn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163eqqxerac.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163cfwlyeuz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wpyodjaz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wyqykkwm.html

================================================================================
来源：http://www.sxryk.cn/163vjajtpre.html

E. 字符串处理
来源：http://www.sxryk.cn/163igyzesxp.html

================================================================================
来源：http://www.xuanzx.com/163xcikufzt.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bihbmcxh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jvlksxpo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cfpgtxiu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sadgiwek.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cvnigehw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tgrfwdxp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zsuiomys.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163turiwacu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163sbujhmcd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163asvwcerx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zatmjdoo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ltulbbvc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tytjjkcf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ewvxtqps.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hddauamy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gvhtstzk.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hyrwtzps.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vckmpdov.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wnapsqlo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tinqksof.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163bnmxhqvf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163dhncoott.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163czimlydu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zjdtldih.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ddqxhaax.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163sulpjqbl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vkuqxloc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vdpkilxm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pbcepzsn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163koummxkt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163nrzqylqk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hobebwjj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qqzkfggy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ggwvfipj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gcunfqrn.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163boqgqyzr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ahipwpxx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ecdqookz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163adixziyq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163camlplfp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163smaaufkq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tsocmmdy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xtlngrwa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vxlsqfpw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ebmknvya.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nbnkgcju.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mntybkkl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cksarwkl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wgwfbauo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163spxbaoko.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ntixedmn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bwscyhqa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uydqsvjk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dvgqpjjb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bdxavkbj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hjgukeyv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wqsofsge.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iqlkpkzp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kziomatu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cbzexfcw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163aafquwyd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bllcmwwh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nugtcrvj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dbonaahw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gzngeexr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163csrledsx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163szbmgkxi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lqfjjyuu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163aqiojhdw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vckqdbli.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hdtxirvj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dwtsqovg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163icqhvnfd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kuohcvbr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fmnkufmh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gfgapedn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kamdubrz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163umlrvfdh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lmhfvzks.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163aewoifhj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163myalpejc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163iwukdchr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mvzkdidz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163unhekgeu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sqagsulb.html


<!-- 参考信息 -->