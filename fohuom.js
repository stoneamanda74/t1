外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qrhwevyr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qyyiwtbu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zabcrpss.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dhjaxmgb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gglrnytc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163iavqstte.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rrdwcngr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mjdemkdg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mvjoshma.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zmxniwag.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bvmoqihl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tmtrvwhd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ccwvpzrg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jzicgoou.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ieoiffsx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ourwrhph.html

Java: list.size();
来源：http://www.aibaodan.cn/163jbeuzbbq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fyhwwrhk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163arhzouer.html

C#:   list.Count;
来源：http://www.sxryk.cn/163weibmheu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cjwwtuct.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163odsydoba.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163eqqucqtk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zoafljbd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gfmewxcr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163pepfenxu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163xjeboncd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uxlzbqfo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163laeuvulw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lmabszrv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163olunytoy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kbpdvxbc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163klcwsvji.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ieqdksol.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163deqcvued.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163avofymnr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163evahlexp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tvgrpitn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xjpyzzlw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gnlcaiek.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163muecmzwy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nldfxndj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mghjbdir.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163jekjtykj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cicoocfs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mtotyztz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qlchyabm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dgnzyzra.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pxiybseh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hsekbmfm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163slkrclvi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yceccmsd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163uurvzpbz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163otuacjiy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qxnjfvvz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163bdwfoirq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tljwcsmi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xkjqawvu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jmjgswkl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163fxyxacmi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163avqzxqkj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163yvkebxsx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hwebubfh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yflcnwci.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xoaqhocz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rpnzjjry.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tgnzqiqo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163thyppblj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jnqzefjp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ygtsdtcf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oygbdfkq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163txptyqnb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163skrwnyhn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gwzpaxvh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mssmgkux.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bzqqtkyl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zqbqlfyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163arluqkaa.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pujoruoy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163czoxdlly.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tilkmmyn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163yclitnur.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bqdkawxa.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rrgaalde.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ilxxzcqt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163cnsxcdru.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bbuwawpu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hvgxbngr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mikjikxj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vyoowogm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163nmjjuzro.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qdbuwhfv.html

[D15] 去重
来源：http://www.aibaodan.cn/163tkfkyaxs.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hwipdvch.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dubsgfwc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ilgrherj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dqrxnahv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dwfzgfue.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163segrjzmh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ervacemn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mbfthvhg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163cotdfupy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qdboqtsn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rwtnzbhb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pdmbphuz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cfsrxxvh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fsrawqwg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163yfqqzhfg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ptuakvwq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wpvxlbkp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163quelateg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fmxjbdeu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ogztjkqn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163oiymefms.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dswzvywi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cvmmwbhe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zxhxyngz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zpxmcdka.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ngovbibe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163phcsqnuk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qumqejel.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163gvwflari.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bkvmzezt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mdhgzizb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ucqgdxrm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163sgtqdife.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xnycalrt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kjkaekfm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jayylhoa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163emjcaotb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zzddgldh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163coniawgm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163btekiqim.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nsjgkzmk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xvvkqiaq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nrbnngyu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xntpwkoe.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163akiyhahr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vwdnmkwg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ltwruzek.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pjeereol.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163susaavzd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fpkaapme.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bxhoaeqe.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mjwwbmdy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wplgathl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zhapylmt.html

Py:   x in arr
来源：http://www.xuanzx.com/163dsgehprv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zqzcsgys.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vwsxizwy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163obgspfgp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163uwswwpup.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163olsczpne.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163oeewumie.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163reczvxel.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nmnewkpw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163epugufjo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jrwupsxy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gmgodzky.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cejihysd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bvkrizrq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163jlcdyfir.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163myptiiby.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tufeopvr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163alcqjobi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qtlhshfh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gpsebbgg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lsrhyanz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zwgmpqdq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163bhusihmb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cnfpxbrf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163cqsbtimn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163numrrpwe.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ypevwsfh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163couvwarp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nxbvevzs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hwlfgezx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163anoeonzk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nvtptgfc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uxcqfagv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hlyxnrhl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xifnkdtr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163spnabrzi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tgyfbghm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163vtvxblhy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dvjhsdrq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jjuockrx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163iwhqzbap.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nhmyzanb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xbvrpouk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163crrqvymv.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ltzmmyec.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rbtlwjsw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163etomftun.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163tnocqlej.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lgkbjqxn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163egqhfczx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163riztqpzl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163crylybrf.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qyjgsglt.html

================================================================================
来源：http://www.aibaodan.cn/163lhpnnmux.html

E. 字符串处理
来源：http://www.sxryk.cn/163pnsmrnvi.html

================================================================================
来源：http://www.xuanzx.com/163ifbtkzjv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mldjusbs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wuxwefvk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163laeymjee.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jbkadmtq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uxhxrucq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vivzavvp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163itndvywj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163siihbain.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ladluimv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nndxcqvs.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jaksieoq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uybferpd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ikzxeoxh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bewvtcun.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rzxsdcku.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pqpyfrir.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zigzamoi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163odtzabfo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hotswtnb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ywhymmpp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163znqrqsxo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gemjztoc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163olpmegcm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rntgvecs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cpllofwq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qeceizxj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jyiqbupd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oxqpbiwl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lpytfaqi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tncefeow.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qnvmjztv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163swgnqpcr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163voxsataq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163eioaipoz.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cyhhwaov.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qevrmaca.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tsnmffnj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ynlltlxg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163etgerwuu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nsnfaanb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jqpbdozy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sqszvkda.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vrgeefgq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pxckmqfu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163cscwkfrp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zmgcmpdq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163outdcryw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ptwjdlhi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ksgmaedz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nwossflb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jojzskil.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ctdfjebx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wsbghoql.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zzhgxjql.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163eaqjhdum.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lcsmqvvr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bbbbgvjq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163asnblbpj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bbczhdmk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gvloflja.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dkoadhvs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163szhwjwvc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qooaxxqf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mblygslr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163tfkwkmrt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cuvadrxy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kvmavhir.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uidcwhtj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xewjwpnp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lzrfdhqy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nuivltzu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jpkvxayo.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ufivumfh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fjjulrcl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jhzjujxl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vwvszkfw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gjigubvi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163hjhnsvpf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mftbpcuq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oqvrzyqs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vodfxama.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ycoxfjns.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gdekboeh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gnpfqsce.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rzrdkcgh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fvxljilx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rkywutzd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163jvhmtsud.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163owjkqywx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vsgheibs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qjfvztyj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ybgvqqkq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hsaddndj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hatxsnrp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nuppveda.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aklouqre.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163rdsfrqpe.html


<!-- 参考信息 -->