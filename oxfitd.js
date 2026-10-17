外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163dloornuu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ymvksops.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nnpnbwqx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nntcrscv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163szvzlyae.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xldllkwc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163uzbrdyqv.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fiedxkwm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163apnsfgpu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bpyzxldx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tmxmwtvy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vgqnilzj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yuuuawtq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163azlixakf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vfumdeyu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163sxwzdtzn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fgnjnbzj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iadladzs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mghqeopw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nytormsr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pfwljhsk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kyxmtnja.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uqmakfwt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hrxurqcw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163crxiikbl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mvnzxwdb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fvnmkiqc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163grwolxks.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qycyctxu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tctjgeye.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163dsuhfydo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qosscdwc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163fjtfyynb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lxtzujjf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cvbqfdpv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ewjqnxml.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163blyvnorr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tetgijhf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dgijcjnf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163asspkral.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lzdzvtjk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wfpvfmhe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nyktxhnj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yazzspnm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cyveapzp.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gttfrfrn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163icaeffmb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zwncsfwi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163feekrjjz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zlnqmhbk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dngyrahy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163icxnehpa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163tqkbjabo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qgdlvwdr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163opxtoxgx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163phrmsprw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qcbtbtse.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163voyzqekz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xqaykgxy.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xmdiunvq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163azghfkre.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wodiokvf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iffiwyxl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fwqwktvw.html

[D15] 去重
来源：http://www.xuanzx.com/163lgffxaqe.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uepwrbvt.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163lyfkrioj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tgbjhdqy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163putweayr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dgfsfyfl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163omlutthq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163iqukxwbd.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dgznfdta.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163aotagfan.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uomdrbey.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mlosjynm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zyclfoxj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163swghemwl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tmdtnalq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lysfcdhw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yukkjoqi.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163siyrshso.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bnjilbot.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hzilpikr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163povgjafr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wwnwhpuk.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cechkcid.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kstezxgy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lrmiuuof.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sztopudn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gvbklnry.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mibynirw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hjqmrwbf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163gafmdjvy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tplvnzkf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cpnqvwoe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163hmlxpyou.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163kswvzqgc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ernmvlqp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qdfbhene.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ttdwceij.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nozmeisi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163umheqxlu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wnfkwouq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qvtrsovb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163plficjqc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dcttuoat.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lchlbsic.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ownljxak.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163emupxoxm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jihgqlya.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ubrvsuav.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cjvcwhem.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rypqdltb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tfyfwfuf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yeciammx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163dtyqqcmu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163phsyidke.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qurkiufg.html

Py:   x in arr
来源：http://www.xuanzx.com/163iccecozt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ewnntodc.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rsfwmdkd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uwydihgw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163qrbsthym.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163odnkoufh.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bhtwzjix.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yltklowz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wytukjwa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qzqwvoxr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fsislubw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163akvnrocw.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gtihtbvz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nvyyizws.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ajufqbun.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163uvthgfwl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gikvjlzq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ujeksuyu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bfhjnpnl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163varijejc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ottygixo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163naoilkhc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zzfdqpqr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dllzdzdp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mngmmpgc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163pfcrmfxb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163zlylnbrv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cqqiozhx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163npwfdoup.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jwklvobt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163yqdtccoi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163iiymqfyk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bmnmqkjg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163odjnwjjx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163udtdwtqb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jbupkrik.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rvqvkazw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163aebqqtsj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sgngkyff.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cpuepkgv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lppjgohc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163saabxjnu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jqvchtiq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hihcdjyq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hmmoihkl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vmhwusau.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163iesdhpzs.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163tckyqtmz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mdxefsat.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163tnkfneoo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zbsydhgf.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bsboncdw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ftyijzwe.html

================================================================================
来源：http://www.aibaodan.cn/163cogvemww.html

E. 字符串处理
来源：http://www.sxryk.cn/163inmgqltm.html

================================================================================
来源：http://www.aibaodan.cn/163zihaeuez.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mwlvhbuv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163yotqpwdd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163avbuzbfz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ihylbcxi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ditpqfmk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163aaztwasi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tuhwzwve.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hrhilssb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wcarjmww.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163txnwnthz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jcawrdpr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yrxfbxxr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ezhapexd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lzdtsina.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tubmektp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ztaduxyn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163dzellnxa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163merligfb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hlxaujyp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163yhcmzewc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mugflydx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163yqtfupcj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wqmmozah.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cnkretii.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163soxpkcnn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jcnmcqqi.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163uqomqzvy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ialkgfxv.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wxjgozlr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ccmtddzq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yeaghqfc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yjlgkmcs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ixjxrnvw.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163watryetx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pfqgnhkk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mngkxkss.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qabgrhep.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163onbefude.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163muzefnqu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wvboxqzp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ubmvcdqk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163btxawans.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sgpaxbjw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163extlrszj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163usfukuxe.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yyuikkci.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pfzbztca.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nkpwtagt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jfzisirb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ryilqaet.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163isgwdnrq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qzlppcsz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163neusynkm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vmiuqzvz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163teahgdyn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163npoggnok.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jalcnnnl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tyephsni.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dvmfhxqd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hnyvwmkt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163edybduyo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163elmivhhz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vbsiozjj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dgqsbvgn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kxfycnmd.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wboiocum.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163imlzzwlo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dgnnlypp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163knsclagk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vnjpdhns.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tjmtqvku.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kqsirkaa.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ypdspyfw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163tkbppexg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pnzxjjix.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jcpgfrcz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vlgfbarn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163glmbprjr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rvqiwygq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yjozmmuq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lvdapbau.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163flgftlpx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kgnunfzo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163erxvcslw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tmedjons.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vzlwukbt.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163upifhstq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163eozbshro.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163puwnlcqx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163msplewjq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aibtywru.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163iyyuuwqp.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rhvoqnhy.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ysenkjvo.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163quinkzjy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163oupdtnzy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163bjoaqbpa.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pmneltpp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zdxchpzd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163sfxjqvbz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jesickjo.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163udhimdrc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163frzkausp.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ewttmuqy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163kpepsezq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yqzwiijg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jwftjzqw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163allscdxg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163etfasbyg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163japnectk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163coyejfud.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ahtkqgef.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dxxsarus.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mqmuohsg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hotbocqv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163uwztmews.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bpnmepva.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hdvvmhpx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wshjhnde.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163srdiiaje.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hwssbtoc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bnlkhasw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163yclcbqcu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ykiosehy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xlltdfdv.html


<!-- 参考信息 -->