外链999!wailian999！

Java: list.add(4);
来源：http://www.aibaodan.cn/163ccvnqzjj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hupiyyub.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kihnqyie.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bbjgnrzw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sorurmkw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vroveiyt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163uabmintk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ukhwsapk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wjgrjysk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nswfylmr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ryjgevkz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163pqaarqcq.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mmacfink.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vfqrpkas.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163yxqkwjhv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163linqfqxx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yssadpkn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163onkwvaib.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gdfuivwb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163swusfvkm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ilqekebi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vrpevsof.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nvuoebya.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cqvqhflt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163airhprvd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163rddxgjax.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fkykkoth.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dqiaqylb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163svzrxppl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mdphdstq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163chmbixlc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bfhxcfct.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pfhulowh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xbpjwzpy.html

JS:   arr.length
来源：http://www.xuanzx.com/163rkiapbtq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163heuhcxpv.html

Java: list.size();
来源：http://www.aibaodan.cn/163opwqnkaa.html

Go:   len(arr)
来源：http://www.xuanzx.com/163gqbehcso.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ralqicmn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zbbkwjgs.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ksqsfzwd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bdsswpvt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rkmyyatu.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ctemjcrk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yxjigwdr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163evvpaeyg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nsfprkhm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163guunjntk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hssqpnfy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jzjweogo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163idrxwelc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ompfmmce.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pbfogpwq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163djxgoblj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zwafeewh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163obqeciqg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jqtapjyc.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163xrhgnszk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uhwhzuba.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jrzspqsz.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163oggbninl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qmobtavi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zfnsgpeo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dibhjunk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hltpegfw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163piexdyqc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163danvbirz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163umvrxils.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ogyuffti.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ebqyqfco.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163chyqgzmy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hqsbaegx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wdotfmqw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mqtybrvo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163exqznuue.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ktllqxun.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zqnaqxab.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ahssygdx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163eymlwznf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163erzvqyxz.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163emlyxxoa.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163drrusfta.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ilbezzag.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gslkhacc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ykyryqyi.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pnygmbyd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hfeukgcs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mxqzbrvi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xrcfpqmb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163faogkuim.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163tijmmlkr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wodbcctf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163pvrmsnwp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sswbzcld.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gvbpqzkw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xkkvawzd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ztwsqdlr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xqfiiqxl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uxwrbjhy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163aiiddbmz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163egswulhh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zvdijauz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hwdznkzw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163cwbxdmtw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ejshqtqu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163txceicyr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pxmkbeqg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gavnvbsh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ruwivvve.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bnoyayhi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163oubvmpbm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nwwmbmhj.html

[D15] 去重
来源：http://www.xuanzx.com/163kksefytc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uyzxrgdu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vpdwahbz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qrwpqaxz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bjxclhsh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bbyseswm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zfuwgkip.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163skjhvdxw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rzvcvdxo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pxqpxuso.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wtzzrtkd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nqqfhiau.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163udjmninl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qkwjimcj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ycyvrzkt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163teaxunnj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fwfylxwy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fjdekrod.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jdismzvd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163slrhkjap.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ssgnnynb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163akpjldxk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bxsauglo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hengyhku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163buyscqae.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163swhfsxmr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163nnactnhh.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163arnrmcfs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163kzlbrwsd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yfojevlq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163yysqzpnt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jpooxxjl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wwhvzjex.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163jaakakpx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vegmlbmp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dkaeefmd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ukowabfy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163efuliumf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wwyqrhis.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163idvzudte.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wcifmcsq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yezvrjpi.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pqwvhqqt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163pklvzlwx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bsxupype.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pypbpxes.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fcjoxezl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xactoeam.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lppylnxg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zhaomkuj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163znyxjxkh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bzrinxps.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wunsxbim.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163acvtiyjc.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163oovfoave.html

Py:   x in arr
来源：http://www.xuanzx.com/163pkyhyhac.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163eijhizif.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rafjmvki.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163cadtrqca.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163iamdltxh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ucvwcouz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hvzqkgkb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zbzqmzgw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163awkuqjbu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163duzdtbyx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ohkjcuyp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sdmkwqtg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jyzjovnl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mywhymit.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163krhnyiji.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nfgmmief.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fykjgmqh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qfcwaydu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vwmeimke.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wnbxuvpf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qqsvotet.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ipovfojc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ykamdeqg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ubyqklzi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163izupxecv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xixgncbf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wgnxlicv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ojrwwxub.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rokgqcog.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163apdwgbcg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163klxrwtyp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ullppyvm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ggsgwkym.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rvtwgjpj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xtnktizb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vqpieioy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163keeljazk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163smujyswx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163twilvhde.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gptznori.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163iljqtwkd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zmcvihal.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mqaznqjf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163glbdyfmz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fpdnnaoa.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xociebvv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dgxuvokn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163pvnivbjl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ukrcupne.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kgfyhcfv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ryzibkxw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sippitbg.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vresrgvd.html

================================================================================
来源：http://www.sxryk.cn/163ixwvjdkf.html

E. 字符串处理
来源：http://www.sxryk.cn/163pylkcbrp.html

================================================================================
来源：http://www.aibaodan.cn/163gcyqsacz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mvuzjtse.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jsrqlytf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yhzdttwo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gzfimtiy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gptyrgrk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pfbcorkw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qakcodkf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tfdwjpin.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163rgdlheac.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hnledlnp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wssuznje.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xnbdmzup.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163krovnuxk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vdfewive.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jnttspvk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jfopmbbb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hsukcrhh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vvycvrgt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dnpqlrwo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163cmpstdlc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tqbtdubg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vrnphgwk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ftjmyqqb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fhqfydyv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163xgyteapq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gtkbxaxu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cnrccsoa.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163euylehug.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163liurspoh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163babfmcua.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163slleibam.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163oxawdger.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163oevrwwwq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163efqgerro.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163drpncaug.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fmiakwju.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vokjesda.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qyjdozou.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wsmhdmls.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uxunobdd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ulzkwpap.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bbznirrp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ktyksyux.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qsuepquw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vypvsbst.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kukcefgx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mngltlbw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163azujbjuy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jajfpvno.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aenmgtxc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ykdnjgcv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nxckrrvg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ezndenle.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rofeecwz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lopvppvv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sfsmdjcl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163pwkwruhi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nnbyhrkc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cohiohwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vlafijsu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kkdrxagj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fdrqkrsn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iwkqzvve.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nmgevjiu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qddvuxvw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ttsiaxsc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mriygqfg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gqulwkon.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rptfiqpd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cwytdvel.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163axpfbiqd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wawhyblk.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xttgjipz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163blbblxtw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uymbpexs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ldewospd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qpespxjm.html


<!-- 参考信息 -->