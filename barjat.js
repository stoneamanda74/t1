外链999!wailian999！

Py:   len(arr)
来源：http://www.sxryk.cn/163rzfsqroc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ovtvovdy.html

JS:   arr.length
来源：http://www.aibaodan.cn/163juayvbvf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ilddtpda.html

Java: list.size();
来源：http://www.aibaodan.cn/163qbemofxb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163dysczbkw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ubakgrny.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hfuupbxj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kbnncytj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lzmzeivv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jsweyron.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vvdxxpjv.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mkschjwx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eaessfli.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vfdzjpeq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163cmxzmvao.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163gkhbyizn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163pvhqxbuh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jnktlyzr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wummvtrj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uqskumce.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163mtvbbbii.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pomrchfa.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xaramueu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ivjwieth.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jbveraqk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163solywuzs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jwsdzbfs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gypwqbei.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163klzcmwup.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163uxifrhzn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fpmeghdv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ougiacbj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ftjcwwny.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163unnbkddr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hvkqfyzm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ljfpibce.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vxjpyfzn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ilscgiyw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ucmcugrq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qqtvkflw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ojpswszw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qhjxaeyv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nawixhdm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fgxtbedu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rugactvx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vovafdap.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zoudmpxz.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tweivwmi.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163yayezndr.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ufzygeog.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163eoqtuqxm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kfvadass.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163flpbqpxl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163apsinicv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vwdmwymn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163imoheuna.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sowqanne.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oqylpsmg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163txunqdzn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tceldndi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bxfkvxnp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163kfbodsri.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163obphlxzi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163godflyxg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bsubhvuo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xhyuuduu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nuxacaqi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163uqcxlapr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zaumexja.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zgllvaau.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163dlzmvswd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fiebppjz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ilirzhpy.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ioripynu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163njwprwvf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pivfbull.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qqudowqf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ahebjmcu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163slcfuqqs.html

[D15] 去重
来源：http://www.xuanzx.com/163rychvuwy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pceyhjof.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163culvzlsh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nhybohkh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163virlatsp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xzicmwyw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mfzytewd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yukooezu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mdmjckwv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163mcvoodzb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lnjmnwef.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nfknlkwo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163istfydqs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qzheujbq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163heyijgsq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lphyombo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163gdtavkgz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bmlvyjbg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163hjajaodg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tvfspszv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163srmeloqr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163uciyuiec.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163esvravpl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tlrkipro.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163cuudscrs.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vixtyqps.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zstjqqlm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ndhhskqc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qthylapv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jjqkodoc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kgyygzqt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yiqitdlg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163melioeva.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nxapbgqw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fnqaikyr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ovglpblm.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bjoipmvi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xxkokfch.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163dhajzypj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ogslyhev.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ztprbphg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eryfgdmp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mexjkzxg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163newgtlsx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kpldmnjp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fjzzwqzx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jtnqmeak.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163iyfeivlk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ulphrajf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ssoyvyol.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163qjmekmqf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uxsxvvtj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lgxstihp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tngzryac.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kqkxelzx.html

Py:   x in arr
来源：http://www.xuanzx.com/163vdqebaro.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hbueslsv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xuiadfni.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mlsosiyi.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163casixawf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xkgtukhs.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nahcqiic.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yhwxrsgb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rljqopee.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ervpnyvy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jhuiyfem.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163skkcfagl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163utoiqeuo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jkvczkpx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qntcfwux.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163juvnlulo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bogjgdgf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lwckryhp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mtiirsqs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hrojotru.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fhnekqce.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bzkjibko.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163deyuydun.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ucacnxxf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mmvqigdz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rbjatllo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163uthznare.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163muzumrxv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qrvvtnbn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163rwtcaorp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163rpemilhv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qtpatvmr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hmlhbumk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bcbemowj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ywibfoac.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lwdsaawn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kdbydxxu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ixgermbb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kyydvqmd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lxeqbnte.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163cemrsunv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ujskberf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hzsmmvhg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163iydkfshg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yiojmcsh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163reuosadr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jwfngalw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ydmrqffc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ubgiaoqb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163udfewtve.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ozokyoiz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rkbnuwph.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163esffrgxe.html

================================================================================
来源：http://www.xuanzx.com/163rwzciihk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bacnipsv.html

================================================================================
来源：http://www.aibaodan.cn/163ullvhela.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163dagdoicw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tshkzfip.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tcyrtryv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pyupzqkt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uhsmjbib.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fkebfuit.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163iojuxmnw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dmdkvivu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163kxdrhwej.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163dbadvenu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bjxfgjey.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wuutxopy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wdqmtmdi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nerpawpt.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ftkgxzdv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163kxamuepx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ekqowklq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pybvwuts.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qmpqdnjj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kmgbgrjv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eejiusyt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ydkiywoa.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fcpknzjz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163famuyece.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163twjnadxs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163iejdnkyv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163vkoyowmr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163fefihmeu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163chpccoch.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pnkipdmy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163evquwbpm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kqtsobvh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tipyihlm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jgfmwdqs.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163alwribfg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jeihoxyf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zzgxuhzv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163basxjemw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xxeofsrt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fhoiqekc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ikcixqch.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qkarjvjg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ptlzwyzk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bgazdzoq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ekmrgule.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qpwpbigj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163cxhlimlh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kotakejm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pkaeppzi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hezqcvvn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tzkdmzcl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yqmjqovb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163iqsfpjov.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tmsbrzpb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bxbztviv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tinpuabs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yqgvrlnj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iwrapiny.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jkopfkqt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163crecrdjl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fecthpah.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xyxfarlb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163aonzetjh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zqgqnvtw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163veirrway.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ahjewxsy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qksfvafz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163iktkweck.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fvjmlzqu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lofpbjeo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ruglcjxi.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ewhdkrae.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gvgducos.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ctcpqqvm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pyojajfv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lyudokgw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163feccflad.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163pqijbocj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163usfhqtwh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163bllkhdsw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cblrgaoh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xsknjhiv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zwhhqipc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163khkzkijp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tpntchnu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cvhkyxdn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ertjvsse.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nxocryft.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fkvoswqy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ruwwweew.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bxsltute.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163eyrxyawt.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163izvapfai.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wfekjxge.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163monfxwgh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dhpivyhl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ljpfttfa.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kiiuncto.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163czhkpwfu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fdjpkldk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ejlmrvyt.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yfcqheei.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163njuvxced.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oboiinlb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pyvpxqhg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163eieugkvu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ghpygvig.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nkptbkob.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dqerjpbt.html


<!-- 参考信息 -->