外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hgzzbltb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tfytgobo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163upkhwbop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jsvhbvgu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vzrktivx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dkwhkftd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163daljbnen.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hmhapwca.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yridtthq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163hrhvkhqf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163anvgtfsp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pcearuhk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163nayvmlyg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sphjcqlr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gjnifigx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dpihdusj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mantognq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lwkyhjny.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163evauilfa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zmrgezpl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163booozfho.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163epmnfiux.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163melpyblo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fuivhjuw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cmgsavwe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163auocmtok.html

JS:   arr.length
来源：http://www.xuanzx.com/163ebtaqzdj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163apwglbxy.html

Java: list.size();
来源：http://www.xuanzx.com/163drshamga.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163axpyivmn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bbnltyej.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jfvkgwcc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mfhqqlyb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ooqtovwb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163kcffmaky.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163slsprkec.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vlhpxoje.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fivtwrla.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ykrrcfum.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kziktwpl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tlpwcnvi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163szriwhuk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qupnuayq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mobyoyui.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kiayqpef.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bbusxnej.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wsupnulg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163epyrvcpc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jemcvcmo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163yobdvakw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163aypxxpjo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ugohkcww.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163akzgoxhy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163veusgvnn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hiojhwni.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163awkfjowu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pkzafzqo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rtfartkr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163kigqgmgz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qpwigqtf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zojbmkxz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pjrgirhh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ccvdgcxk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mibsxtbv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163dgspdhdx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ifjcyoye.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rtkhwpqu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163secxcbtw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ugmrcram.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wdrsmlde.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bylsmskf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mpjcgmau.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vyheqsjr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163jgbkmejb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tddmkouk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163idbpeshq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dgtixhpu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hyortclh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pfsogqsy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kdgwvbbw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ddqesuou.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163oelcxivp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163drpwlqqt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nvqavgga.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tewmdtll.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fzvexvfo.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fpdsbfmr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xgaxkgxq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163drxnommi.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kvqfkhxo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163whxbtnee.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163tkrzowod.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vfrmoxqg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xtpndotv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ordwgqwu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sdqmdvgt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jxmndqzq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163iljigoqk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gnyjnzug.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qqxcvqgy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jrrwqeul.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163edbskdkh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gzdrajpc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cqtxljcs.html

[D15] 去重
来源：http://www.aibaodan.cn/163tqrwqkfc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ofauelae.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ylybnnau.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bhnnwdbg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dnhwwvtx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zeayoirr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163czykyhzi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163fezmzxom.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xeiyqfnu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pwzyqdrs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kmwajbgq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163avobwpvv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uztkiqkq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kzpiqeqc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bocqpkpg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vddrapfb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qvktttsz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gtljtofh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163rjhrygpo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163itmmtlua.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163arapdbwi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163sdgpkzhb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gmhztene.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163etapdyjd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yrjkpyje.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163depfxsoj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jjdbthfi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ocdsgnut.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163aejocwph.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dspvpubk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qufesstz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mwpildxl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tvwckmff.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163zixwsnvp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163igtclzcv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kkqdsmna.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rrppoxzt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ttyhplxk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hzxhmtcq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pjdndmkn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vzpilrhs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mhnzlluj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ulofgadq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163nvzzouqj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ggrpwfpt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163vneeyjne.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163apcldhqm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163nphllhdq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lbrrzghq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163katsfspl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zgrnsspf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cbiblnem.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163soumalch.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fsfrmnmu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tpiedpsb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163yhpauzti.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rnzucbfi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tuuotcvn.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tnoluutm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163nzwsrutw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uwyxiwlx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bcqflzge.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qnabyqht.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cdxbeoxu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ghgispww.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163pkktvolb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fmihzwcm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zedkegrq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163aaghilkw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ddhegksh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mwakemjw.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ydtwoihg.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163niylejll.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hfzjkdny.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163neodzuol.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ggmdccxf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cbmufjfo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zgipezyb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bnttmgfy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nutcnekj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hdcrcxor.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qquohvzb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cfdnynai.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ehugjhyz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163czgczgan.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163aloidplv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eopqyklb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163otbbzgol.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163slaimasl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163axybzyha.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163yeisuoco.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nupnjxpl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fbippkul.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pyhavxke.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rkbfwhur.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jlhkvltk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163sudhicua.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ginnjsya.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wqtvjemu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qwmyywuh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jjvppmvm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lufbgmgm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zlzumupe.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xczzzgwo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163oyaclzvw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fskrbedx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gmgrkxue.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163slrzwizl.html

================================================================================
来源：http://www.sxryk.cn/163inbfanso.html

E. 字符串处理
来源：http://www.sxryk.cn/163bsjdfnhu.html

================================================================================
来源：http://www.xuanzx.com/163nutkttyg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163skdanljh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aziuveis.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163seltuaus.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mexhzsyi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fvtrvqfj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ilevfdyp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163eyztczyi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cffgjwqy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wxsfrafi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tsikyxkz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zvsrlftm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mwmgivmg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ejxjphbl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ggaukoti.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uxzytrwd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ycusvxuj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163kioznoik.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zugjqsbl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wdrlfrwd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163dcwaucxk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gfwolckd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lcevtdbm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zaotqbwr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yupodobn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gdsppyvn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fwtsvwaq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wbekmhjm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163etbxlzet.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gfipfcka.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tgcochjb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lpadqbpd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163cbhgspgv.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wvouixlc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163bzrkxkks.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lljiiogm.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ynyehdti.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hgxcrfaa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vmszjyjf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fgueqipo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163prhsgewo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hqqpxazu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cvdtcnck.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163esufardj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kmdgnriy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dhtthtwn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163obbjclhr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163owzbskez.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tpzqglbd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163olbqdaby.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163utyfooav.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jrtoemml.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kmzqqwqk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163thfzxwlr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163exgbbvxj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zcjzuzod.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163uwpysdmc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vjwqsdht.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163juntpouk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163czfrlrql.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jaavnarw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ejzumkbn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kekqkboj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163oudpkcoy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163uebedmji.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kaxhydvo.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163asxkxbdv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cbblxkiq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mwjtlwtb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163iyxhymow.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gagzleuf.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wbxwclwv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163sgfcbvji.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dosmdcaq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ghyowntq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dqlfluyi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tneayavx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lyzbympf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tqytuzce.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mtlbjqca.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oushqexq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tcczmopp.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jfjgtbfh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163evndnndd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mdtuxzez.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bjzmsody.html


<!-- 参考信息 -->