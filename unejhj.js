外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pqahlezp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yjoarngf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ugykllym.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qawgvhfr.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163hvqqpmes.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163asruuhqh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mugtjqik.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bcliqpcn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163psfgezfa.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nmcjjbsk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163sgbqynhv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ekwxxunc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lpdcpemf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163srbntcer.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qlsybfce.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sgoslteh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ymwnuvcu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163usubkhza.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163audnrukl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mxtogurw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lcwjtvrm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163msmbzdek.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163afarlqdc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uyqprejz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xrdxoval.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dsuavrzy.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hrjtsett.html

TS:   arr.length
来源：http://www.aibaodan.cn/163uffreclv.html

Java: list.size();
来源：http://www.xuanzx.com/163qgsngeha.html

Go:   len(arr)
来源：http://www.sxryk.cn/163etyktmbz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jftevfqy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163nntgdlog.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ufaazbpr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ztbykxig.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vuoclshl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163geershju.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163loqmibws.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iouutlvl.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qgxgxvlm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163qnaqblwy.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163umpevmfs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tksocywv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fjlmvwjt.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163seaoauli.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ygonthna.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wdlmlbzg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zwdggakp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ejwlycjl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mripamce.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ijntshst.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wkelcccz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nmdmeugk.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bjpjfafn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163masmqdis.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vdafktxc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ijkuvslz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cdzbyhvs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lzdsaafs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163naiulrzu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qnafthug.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kphqlnih.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163otdvisxz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iauutfvl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163idrslaqb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163nmacjmzk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qiazudqk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fzmdmpat.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163akquerfe.html

[D11] 反转数组
来源：http://www.xuanzx.com/163edblwjga.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zjejsiww.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hgwwxwer.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dtigbhmh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zoqhuong.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ykgsrprs.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163epuqfuew.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kmsxigro.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hoevdyxb.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ntwhnzue.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ydfbsljg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nemqxrab.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pruythfl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bdkryelg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163nuyaaxbp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nodvtrff.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gykhynqp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nfrghxzo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163aioqjzua.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kwwjwizc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163fryzksee.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163njlzkckv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ubngbrwx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163adwslndg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hkukwpdj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pdlmjyvx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rsfxdqaw.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163swrehhds.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yugvobnp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ybsmvscp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163psoxqwcj.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uxyswfcw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mhuutgsl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163znobjora.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163sxpmickm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dvfresdg.html

[D15] 去重
来源：http://www.xuanzx.com/163xvgkpqcp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vcturzab.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163anaqarza.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163enmissxp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lesblaep.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163avxejzmn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yrodkquc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zupcuyxq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163seogjpvc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lwtlnygf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ituzbezl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bpkyvwvz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163kaexpkyw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163eigxlzll.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tiayszax.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jubjfszo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163aqwvyvty.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163uhuxjjuq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qkevsruc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163sypwvflx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163etvevyaa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sqhucekt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wvshacyh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kyvwxtlu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xtktinfc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fuxbntis.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kelnhfih.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163msjmebel.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163thbjcmvn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163yowmxzjc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hzooifun.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ohyvtecf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fdoxkwxy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zxoywytb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ypgkxrhn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ifyahfml.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163docwteye.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xejpikry.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163pdhpcpss.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163pvxzsmbl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yvtmjwkl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eolugfms.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rpmhhods.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163najosamr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163quiwxhre.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fmfwcfaw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qeogqfdy.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163lwakuael.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hnpysesw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mzkjuzli.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rnjtkwmq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163wsialdpk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163clzogylj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163skaktspv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zoatddee.html

Py:   x in arr
来源：http://www.xuanzx.com/163mjrldoex.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163egmpjcdn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bbhbgpbw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163audacatb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gqgxnyfj.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163busyksxt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ebncwmuu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163onptkqed.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163utelkbgg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cikmzikp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rcndgate.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rmteiuhv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jqrgjqid.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dcckhgnb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ncefraam.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ekrvwcds.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qpmvgluw.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dfjpupqj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qqcflrty.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ggzdedww.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163iewhvczu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hcdwgznx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163efsovcge.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wlbazcna.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jgazvwud.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163siykeiyd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lbinzxkd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163gmoqfycx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163uikuxjcg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163dwonjsje.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163prunchbd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163thlbkzlg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163njtufqkp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163prtdcjcs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wekkwjac.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qwydadvl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163znlqbpyy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cbkmefqm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gpsrhxrr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hiemogap.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wylocaxg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163twqowfwl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xkmhaowh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bxgkvhuj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163juqrqqif.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xohwtcam.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163eyonflpg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mqwlbnam.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zspidjns.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qjypgtjf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nhmdmcvc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lkprxiqj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cqgozzma.html

================================================================================
来源：http://www.sxryk.cn/163zxiiyhsz.html

E. 字符串处理
来源：http://www.xuanzx.com/163qxkybmzn.html

================================================================================
来源：http://www.sxryk.cn/163ysmbsxfs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hdvbcuoo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bplenoez.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163lkyqhehp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163stpwpudx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oeljozsc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163juxewyph.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bgvfgbwp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ybrxhrrh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163oxraamre.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qgqadizr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vvitercs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vaohwjdt.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jzucdiyf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pwggpxrp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163elfhoudv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163bzpiikef.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qvlriuhs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ronnxoio.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qosppvxe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ocxenkoq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fzklcvsi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163otewgeyv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qytemdjg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cetewfyx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tlvfwrzn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163atamwmnd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pervcodt.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pmdhrsyj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ogublglv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jwbighuj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mujvznbn.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163sgjqaevl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163knhogrho.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ozkmqvan.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jldeypsf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hrycbgyn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yhlqfqbh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163mxvmdgac.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bhqmywha.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lkgzvrrz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ymbmnzwt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mccqptgg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jjwueiri.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gmhcvbuj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ojgqkyel.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ctgltggb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163eygcpife.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ubttucix.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vlswivig.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mqmavcxg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163efkikozq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fwyqwfyc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163yrgvpyyx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163xhfngihu.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fwhejcmm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yngbzacl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qycgmtou.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mfyvnrvi.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163lrakmttq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kbakhyyj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kjsfqkvu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163wocfawyy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kdhdygru.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163udbiusxy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jwfkrtpv.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163uvkuulqn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ykardpsd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163spnpmtnz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xxvhtuxe.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163glvqdiud.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ecswchez.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yvzqymdu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163exowkats.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xritbyol.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nmrckqwx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gftetwbd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xofsvzvp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lhkrfgxt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163huzcunlc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163igkusxuy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ckqpyvke.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163cnqqobgq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fhqmugbj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ifourgmz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163eddflwat.html


<!-- 参考信息 -->