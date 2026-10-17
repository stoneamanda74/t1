外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163eqfbtrgw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ixfdxqkt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zomxtjav.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kmkdivfv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163njazkmul.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lrjyfdak.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163myzzhiln.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gfrmazku.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xkzczmug.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163snqxoxne.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kpsqcorj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nnhqetgm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qbdairxb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wwzistox.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163qbioymgl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mzbahugp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163shpoicmp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bfpgyqaf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rnyttvoa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jmmdrean.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rdmsofuc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zzucgpzg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163kcbnpvrp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163cyfgqdha.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163djcenapt.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zpsfqmle.html

JS:   arr.length
来源：http://www.sxryk.cn/163rwjrrrwt.html

TS:   arr.length
来源：http://www.sxryk.cn/163dwkegnla.html

Java: list.size();
来源：http://www.sxryk.cn/163jqkvkzhn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ninprfqv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wxuwghpz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kgviwqlc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lwuzjsre.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tctzvfyk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ufhzxfxx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nfiwwnuf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yukbhtmw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163chftdpbi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zrxrulhx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yohgobaf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tggbgcia.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163atdixtpp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bjemyzom.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163emidwtut.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mfivulis.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163qhwqthse.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163joweccdx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163skzuvdmw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mtgfcuan.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rhvhktid.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xgxgyoic.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yfmkpoif.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ofzhtaol.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vxklfvzc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xlelqlra.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hemxixwq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ssxgjrny.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yhkxefux.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163uvjqtnhe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163worlzisy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kvfoexci.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hnicctbe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yroisfiv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163weynkzpa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163iifncjlm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163drhajvle.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zbybjnhi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rncutgrk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ilqscxqu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ruybywna.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163uqqiwvwc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lkjrdjbs.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rjukswge.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bzwtmgdx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163etfkhase.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hkrqkqid.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dsnizxef.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163itptsmss.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163taajfffl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163oqfuocmd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vnmnreix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xozfpyec.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hlcjuqhd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iuyuabeq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mzjtydrn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zdnjdhwl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uemqzsfa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fvavbboy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kkjlsdlc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163brdrmkfk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dztqxycg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163siwxkeed.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vbwhbbko.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163aynwygzg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163avblaqbb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163iccuimjp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ochdgpbx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bvpvsnwa.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163harylglm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sljzqhgw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lzqrwcji.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zejkyems.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163eipuciin.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rbmshrjy.html

[D15] 去重
来源：http://www.aibaodan.cn/163jqqdlgvt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zrqztjqo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rgvyehmb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qwrygvnr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bwnwavbh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163edziwboq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mwedmgtf.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163tibfivns.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lzrsfxhq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163iwcbmytf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rwtgkoqf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163veuajzwp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163kaiiokch.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163toapkshe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pfpyxsbu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jrfukjes.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uubirpns.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fxqcffte.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163acbhqume.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kvsshuou.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hsnfnnak.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163leyysmsq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163nrhlariq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ahfqafjl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163avigkxsr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ucjdrmgl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dpdcmojq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163omueikrc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fucxrcdf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163niprxkem.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jzwrahws.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163syctcluz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163dxmwvugx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163gjscryvb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jsilmbna.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dwyxsmvf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hkpzrfel.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kxdjaryg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rpvawfla.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163orobdgeu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cuoifdnp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kamkwcdr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xbyoxayb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163nxnwjski.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hsmcqoxl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163youtfnyb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bsdewtwk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163awvptwqu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qmqassjt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lcgyigsk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163efobppqg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163dzibhsqc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hpykawwj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vbydlyjz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cqmrsfnz.html

Py:   x in arr
来源：http://www.xuanzx.com/163bjwqqnql.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163kctamouv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cdxelxer.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163exzklqmx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vfwbbfjs.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qrlvysir.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163spyqhdls.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bkhkijrb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rsimwkcb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cjholbgf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163syhqpmtb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163meisuirn.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jlszatjv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rnigwijg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nezefgte.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tyzxobzf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163sttrjwrb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ekpujuom.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wwrgkvpc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163frvguiue.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163oztqofnt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163skwuapsk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ypaqrnmc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sghulagu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163leakslxl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ugwwktkl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qsnootuj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jjboqlwe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vipncdgz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163grdrberm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vrphbtwi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163yjtusgok.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tguwqtrf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kjzehrmr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vvuzpdza.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ddzlbbfp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fqjfvthl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ewjwskrk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ybfuvner.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kizeiaag.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uxnoawcq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ikbolymz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pnasjejf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qesbrnif.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wijhakha.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mmlxharg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fohlyxcz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163eoamyodv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163orsmbatp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gukdhmhv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lchqwlkm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163vujddnns.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163tjxhrawz.html

================================================================================
来源：http://www.aibaodan.cn/163lpbzdosi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qxnenrzh.html

================================================================================
来源：http://www.aibaodan.cn/163kstcclot.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163iehuxnyz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xpcuyahh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hebbwpgl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gmuwxkok.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tpxglrwy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dvwizrqs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163knrnefsa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163oqrcruus.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163iqlnxxyz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zmheuexk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gvsafztr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qhxafdxi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tkjzcaud.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fpebdgsu.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163mhxcjxih.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bmghtkqp.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ohvgoraa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zcshnqyg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lnytltyb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dkmmvwgh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dnfcxrpb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ayvzhvia.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jnjnhaqa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vsbuctek.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yarwyvyk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163akoignop.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nfnzuzsi.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kivjcgie.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163esinotib.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163baaakjxq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qhgtsjue.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vymxpatm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ghwhrxks.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163odxeeeif.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vimaoonf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163nvjijevr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163yulcoldy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xveaohfc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ptsjokqw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xhlrkzkq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rnbsolzc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lpbllcqg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163enhsigkm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lvmsxlbf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fgrsmbwh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163idnypveh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163qajezakb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xsgjebui.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rxuqqdmw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ujdialkm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eqyevomv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163srruxxoz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kfyuvung.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mqqrefbi.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163sjtpkjkg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oheezdyl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yfgejtkh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163spziqkbb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kxmoruof.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163htvxoezz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163koecbwtr.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rdqfyhfx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jwigfgph.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163prfmfemj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vshmxrjq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kxlxlgfh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zwpyblsf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cyxetpim.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qcrzhrag.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163kdvkdodw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hdwmpstw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sakwyhlb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hkyfevho.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nnjjltln.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qyqtebuh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ftbdqpcq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pnbyngrb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163npkwbkir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rnvtoral.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nthhdhwb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xtlyomxj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tutkoyrf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ijjomltc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163eiizlxox.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tabmouvb.html


<!-- 参考信息 -->