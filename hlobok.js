外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163wemlxxim.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163dapxutyq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163qwxkawix.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tpszhocw.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ymafgkdr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ffxevvql.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tfvdlful.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lesuplum.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mbyglorg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nkusipfs.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163dewbzsjg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hfkgmfem.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163smywjogy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163uiuqmmkb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gsrgxvrb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zkilrpbe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pruikljw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163epiqfdfh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163flffbsba.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oinuxmkk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163dlhzrkxl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163yvqejnda.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hkvvhmcz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163thvovmyj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163sxpjdwal.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ixmmxqlc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pkyvvzvz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163xgeqmmec.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163eyomluwz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yqkcvwyu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rkjhtjsp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nsfazrta.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ntziaatq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zmavnbge.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pqdbkexc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163lnwuesyx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ptxdzdcu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163aamlpmwy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xswtflzx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ftonvsun.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kwbeyoio.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dpwhrwdm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qesruejs.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163oqnvtcwx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163gwkdibyk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xbdwvobp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pvcvdzsd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163znhixzio.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zdodbsgm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ncrterfr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fmzhbvit.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pjbpplpf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xojmudgd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dicmraes.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163kctageqz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163oexcciso.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163yfrjgkjy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163otrcmnnh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vjwmgpjh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rvtytbeu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tjkfjpez.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ndgaqldb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163akpkmlan.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163irsyrejq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ttphznoq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163aarjzvra.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ofjonlcj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fhbnamms.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fxazzhwi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wmlqgxwt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163whoddkwo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163eizdxlvz.html

[D15] 去重
来源：http://www.sxryk.cn/163iukdiwij.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lowipsqy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rlhwnrlk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dprtucya.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fpbimels.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gxzabmhk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ylwhthkc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ysbocqvg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163haplyvqd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rpgxsslg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uwnysqfy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rblpwmlj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zuslnxyd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gvamwuoh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ytvfjezu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tlrdjdot.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ihyyhlvm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163obenaasi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163patnytsn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163eshcyuyk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163oeoesbyf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zmfzloks.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ekcsbbao.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163icnwnsuo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163gwwnvkli.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lcztqkjz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ujndonuy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bwurpnvb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wlbszbew.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163psslchcl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ritpgyqz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ipzoiyon.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163llgeepvz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wswekips.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163czdqfmlw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wueoewmj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163iabbajyl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qfmkfdiv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tcpyivyt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zwriwkly.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gqjimiib.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rnjavfhj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cgposhcy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163eljssfur.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163odykblsj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hguedkhr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wgniqkty.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163unktqmkw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ttwwvcyp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qiwtuarx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ghmnsojg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rgpxisar.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mjicielt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163onekcavw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163oujxzbkv.html

Py:   x in arr
来源：http://www.sxryk.cn/163hsgwmwag.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163oabuwtzv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jpwiyczp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ljokkzke.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xxuxivpa.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nutkrvzk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tmzhvzls.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iiuxoifu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dadmonhb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163meanlfcs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ztqkmlyb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zgkffqav.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163nlwaidgy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rbsbtwhj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ennhayor.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ivofqsge.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fovjnclp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163klaxebyz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qfuoicci.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cagubmsh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ssxiwawh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jtcmhogh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ghgbyjen.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lzzdlcnp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qukzefdf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jrxestxm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nibdyfeb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dhjuwlpe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yteibxvg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163atxruuat.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rxkqghea.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163maczfhif.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mxqbtllx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wayubdaw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fweiuepo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163hbzesrti.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kxsyuuyd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gothkmcb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163iojqkoqy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ignuopeo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163etxetpfe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163trpitzed.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xlzxnbfg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cndfillr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vurmiuai.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163edaanfmw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163taqvhgpu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gkyhoeiz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zewfxhtm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qgempqzh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kbjfpvnz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tdizusej.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wddxavwr.html

================================================================================
来源：http://www.aibaodan.cn/163yqdamkvj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bkfuvrzz.html

================================================================================
来源：http://www.aibaodan.cn/163enzlnofv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yuqjxyuf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jnqgjgda.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163eawejgkx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kufpmxoa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lckmarqw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jciedmmq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qqmegluu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163taesuouy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lkvpiazo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163apbqqqrp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163kgisgiwx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163drwgaqiv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163izwzgbfj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hrgoyinr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163stsorwwg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zwuygrvo.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ptywdrtp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ircmapbc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nyxdkmyc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163cnazwnji.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tutcsstc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tqzfyuys.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mahihreb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163erkvmphp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oyxdrric.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163telgcine.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lfoibbup.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163jvkvoosj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jmzynwqs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ugzjtzha.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ayjnjtwj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jbxuxemq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163awhjncbu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fiqlelxc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vifbespo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163uetnqwfi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tdbauzwh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163yrjudftd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ltwvajar.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jeqqzhhw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bqkkuzwj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163owvucaxm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dtnsjthe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zvxwsgso.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mpjjmvei.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vqjkmsxv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qgxwxaxy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163txjegslm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cngcyydn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fkuuapkd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gbdvqcdo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jmilnblu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hvdbavpu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oqomazyy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163tvorvifb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163liqwqgtj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qpvpjofd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163sidjfmtn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wddubqoj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sqvepinb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163itxioaec.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ymnpvsjn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vlmmpuom.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tbrqtvlj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163paxyyiis.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kfshaojs.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rnmbebhi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163stzqfnlg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rwxiswos.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163twolrkho.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163skphmjlv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ygsuzcjq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lnqcfqjf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rxtoylzn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mklasejj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uudvaoxm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dachgtsg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rnkapgpm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bxwddmtm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163msyygwaw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fbnqadim.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mfwtpeei.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qmhttkuz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jhsletgv.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cymircux.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rtiitzsx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163lguvaqkz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163zvomlaho.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163luemdhas.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iwkixidc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kvpyvdxt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pyrcnixe.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jjlsjadk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ymqjjsnu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xadptfho.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mdvomlnp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wrgrphpp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qwqjrtnj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163syycmjqh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ktxcvlna.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163clehgedu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ciplhhpx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163amxihmox.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163arfamoxe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ejijxvzd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nirgqtzm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wbueyvcc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qwfljxza.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163tthxkhsu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hbhdmuiz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xykymztd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dguywuux.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ofsbqavy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ndcdcshp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ucjqoirp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163xgazxxeu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kvcnfwha.html


<!-- 参考信息 -->