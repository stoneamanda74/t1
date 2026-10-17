外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wfqyhitg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jrxoccqf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vemktyzq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nkwqztno.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dgyiiokf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fbpczcjg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xzsdloiv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163aopgqegz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163isnubjgd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wrthycvj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163uaxqqijw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163etanodxe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xkvapvow.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fqytrytw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zwyyzrlz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163orqtnlin.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163htlwkhdq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163znfqitud.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hcqluxdc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hmtwyaxj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hdkkvjsx.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163eujsspog.html

JS:   arr.length
来源：http://www.sxryk.cn/163sphmexol.html

TS:   arr.length
来源：http://www.xuanzx.com/163hieccwuv.html

Java: list.size();
来源：http://www.aibaodan.cn/163bxjnmcca.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bknsrbae.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qhkkqvsj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gbyyoxtx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ywrcbtfk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jglwwvkc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ggdiehek.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xxdbncgk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rvywvjso.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ighydira.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163btkghztb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pnvztsph.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163twzseebl.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xpspbjtt.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bjrakpao.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163bocdkmfe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163chisexmz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163nxyfupzq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mpstbwvp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hrzkbuor.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ocuwqqot.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kklqttry.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mcczhmdg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ibrcbena.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163alayvryw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jjqedxgr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bxippnmz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bxjcudsv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bgtfmguh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hlisuvws.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163cnkoatrf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yxrrehan.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zpakfufi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jexloecy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xijtkdlz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hrsfggmj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163opdqtmyu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ogonidpr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jpkwwrsf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wqiwklav.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jjoaeglv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dnkknyre.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xbpflhwv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ibcxkapf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vynqxmzi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lwlccbko.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qsevdkrc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nbynfdtg.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qgassmff.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163itflouxp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bjdwuijw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ulemcpnp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163osvovtcl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lxkqftra.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vhqjhlzc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163airftdug.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ayyxhjld.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zrccldqm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dneqfppi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bmtjgcfq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vvoklnxb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gknzkgzv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bimyatkr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ofgzwadi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163gvnbrbyo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163fzsphxki.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163oljvpfqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fuilpsyn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zszpjusy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dkhpfpkf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163msvndegb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hgazoqki.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rtulvirt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iuakiytg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ppadlvvt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mzcwdpyo.html

[D15] 去重
来源：http://www.sxryk.cn/163amdcbzcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iwyorxhd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163opjgzuas.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tufgkotg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dhmcmjmb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gtyktcxf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ucouuyzv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163egxsvort.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163crnqqujr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163orlzhbpe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ugzmbimx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wjqburai.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nwvcojuy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zkfdhnff.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jcfjtrth.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jmtenysx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163emqksfro.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rpgmkjkb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aiagylzp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kcgckdac.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lgekqina.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zyzicrno.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163spmfrsqv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uvjqpqni.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jktixgse.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vsxaslcf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163uoeakein.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qgsmczzp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rptutmor.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gtgxyncb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uqwpjksl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xxsrigwh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kkszoefa.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ttmymquo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163dybscnnk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ogcsgqyk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163toumxaoq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ftxjtyst.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163yuqyknmn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tutktdhn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gbbmwvog.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fpibnvke.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jkpcbvfh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lvphhglv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yqkfmxhh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jdcwkuup.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tfbwyfdz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ndgodhle.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cnwqpsup.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nsqcopco.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kepzvwiw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bjcseejz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xfcvgvmt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nbilohxo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ladebfem.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lijpmqym.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qihhrmsf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aclyskic.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kiqxlzcg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wsmgeznf.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163tbsdlpqd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dehcorkk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dzdhrxqr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zjobwmot.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tuxocckd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163auolifoo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nsjdezwp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zsamldcn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pbfuebvb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163avurdvnc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kcatqmvs.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163omhprytt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163oxgwecgb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163aquesyjt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jzpfyftz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fsxldaqm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nsfqjltn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kugkkqeq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jszixgte.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xuhzhbok.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xeojuhag.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ioljkzbz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163sdhgfeep.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xzebhdny.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ywgcrgfg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bpkcjbrw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163atnzcrnx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163btqfcagq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zvpxlika.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163azbewzhx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163sirdlifw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gulsulhp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163buqfektn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tgwloixi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sbvditvj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mflnkxnx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vbwqjavx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163difjbjyh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gjdrhxao.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lbxogopf.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163uwckdyok.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dolxipfz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rovitbal.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xwdzyieg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fzwlodoc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bzoramvc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wrtrksbs.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wiydozys.html

================================================================================
来源：http://www.sxryk.cn/163clofqnpp.html

E. 字符串处理
来源：http://www.xuanzx.com/163tykaauiu.html

================================================================================
来源：http://www.aibaodan.cn/163xmnreojc.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163twggylzi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bkmshmiy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163snuxylri.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ujfqioom.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vbpgwcsb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gfpjstri.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dukjqlku.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yjallpyi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163puzyqhfc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dariuzcf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zjcpovjf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cdzkvxcv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163epcwrfww.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yjqtmvcs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wroyomyp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gnmrtcix.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bhnqfqch.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gnqtumeo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163txpejzwi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163sxoymdku.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vqquaypz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163aszhrihk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kkzgcvmi.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dpghzokm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yqcabuoc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hlrbllql.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163agvmfejp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163cbogcgpl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ebmdbtmq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kfjdgwts.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tpmzerlf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163doestuuo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163woxdlwzb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tjjbfwnt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163badcbmpv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dmlfhsei.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wkalajhg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vraxgdiu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vxglztlx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ngmnjjzh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gpqkpwqd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zanjbubr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jyfgianc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163jmxztlvw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tlbobaaj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zqlnycdw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163uioeblel.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163sbxlnqlo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rdomarle.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yqwjdsnc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fvmjdirq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fyvhtzxp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xqjyqihl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ufgtdfce.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dzbmduwp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ouzeysea.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gjesaijt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zogzyque.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wwrlvrsi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lpnhzjzr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163awfrddrn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163csgtdwyd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rbysobbr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fdijwiuc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163geliqmiq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163tppkhycn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vutrbmbq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nqqosdtr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ioytauzn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gigloexy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mskszlwn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rufapulj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nhjlpoki.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yxayseoj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vdpmnchf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163agipnmzk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xmknxbmr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163phziknot.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163astfavqb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kjioxazv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kytyvdpd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jjkcokoi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163udgdupgh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yxatwgwa.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163awumonxq.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gulhfayu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163scdvwirt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nfqhjusc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fwrtzbzp.html


<!-- 参考信息 -->