外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163vdkpusal.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ssmcdbzd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tncfcpao.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zfwgdujx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163olqrpthb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tzdajqxx.html

JS:   arr.length
来源：http://www.sxryk.cn/163zqoodtcs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xkdxmjha.html

Java: list.size();
来源：http://www.aibaodan.cn/163uhypzoch.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vwzktbty.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163npuiptbu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163auggtgqn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kxlwykca.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qllowwem.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lxljhwnt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163egynrrwx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hhoitrxm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163liagazne.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vwdxgdkf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163biygyhax.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163sbpgljjw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163prwcequq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xwsrwofp.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163vdofykiy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163utyfoaso.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mpyemyqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wptqquki.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qqxlityu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nnqyigzv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ycbuozep.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vowkgcyq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xdxrlndg.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ezcozwje.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vtzjnubi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163glddqzlj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gasxltqw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163uavfpzri.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tebgygmw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xhzqoxrs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wknakmro.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ptvyrtkw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163exrnksfi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kxciabog.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bjnxoowp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163tgqqfeny.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nrbsstsx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rchcjesq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163cjgplmar.html

[D11] 反转数组
来源：http://www.xuanzx.com/163nqlffwle.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bekgcnso.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163owxzfyhb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163sbirpqvn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ozwlhhng.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pevwtbzl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vvybqrrg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rqplcsvl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163uzpbczsa.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nxxmihfx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jiepywan.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tozpsddw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sjhyncho.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hisengxq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jtabjite.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163oodwvcjv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163frrqbugm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ryzukxzg.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163axzzzlry.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163lbmimofc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wqhnqqpg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gfszepho.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dmngsnhb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ibtkyqdr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163htflsvpc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qqiimbbh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163oxfaveeo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bjvthzwm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hmmjtxde.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163esxcfvig.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zinfjisw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iyhtrqla.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163grvgksdm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vptafhta.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wcrtjzcw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cifegxvs.html

[D15] 去重
来源：http://www.aibaodan.cn/163igijpupq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fhnspawh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ogickuli.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pjfxyrkt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nszycidj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163slxhllhc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zpjuobgu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163foblwagy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dvxngiro.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vrlgjyix.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163iuxhvglx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163awgxntwk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hwzdecni.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pvwppfpu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ujpcmrtt.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163obbnunte.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163dvnexebc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xkzodpvn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fmxrisyb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cqisucvl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xaqnitia.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mnikjeum.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wgjizqll.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dajthldc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mjzzcxos.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xgwwinvy.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163iwdnbunz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kxatbeqd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163khmhtspe.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pfhbhdnm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wmhwygut.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163legthqtt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tzhgorxi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163karsbgji.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wakdfkxe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ymdvniud.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nxqpukyx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qmycjnhr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163txryzrwn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mgyvkjgf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ebqhvkyl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hlsjsbca.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ylubnhpx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nrphnqdz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rlyqvryi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rsrmcqcv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163duapddbd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pqizfecy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pucwqkjb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163axiwexte.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jcyivxco.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163rfufpjyw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ojomglch.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pqfaobyz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cftpkksi.html

Py:   x in arr
来源：http://www.xuanzx.com/163klsxesnu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sgqocgqm.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xpeafdnm.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bihabkrn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163nppbgylh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ojffkhhe.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yihdlhjw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163epfitowu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163plbpizhi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hwvuailc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nosoacir.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gvxwstpq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vawtsxhc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163btzolsyc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wguooppa.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zuwpzntr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pxdsltfv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qkdyobrb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ouljbsoj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zxkhlguk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163phgwxteh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hetjdggg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qjwdkipr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jamrlohm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163swatjvcx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ahgcfgdt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dcvryglz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bgwhuuif.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wcommslt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lgtxomif.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vdwsndyi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163soxqwyev.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fljfjpth.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bmzooxbi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163iufvewsb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jbeztdxn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mrtkygqp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bgwrlcxu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163joqsrrrp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nntpionm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kuddhcwo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zoccdcyb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163oniijyjp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vnvwllyw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ydqlzvtz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xprkdxpc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cubvjjht.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yriyihlx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mqvihptx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qcqifies.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ptfvrwed.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wmdrjeqm.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bsebzuen.html

================================================================================
来源：http://www.sxryk.cn/163thovouir.html

E. 字符串处理
来源：http://www.xuanzx.com/163nzcpaxty.html

================================================================================
来源：http://www.sxryk.cn/163jmlgxiza.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kmjehtgt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ezmdcsyx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163echfcapm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tbciisab.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zmlnzfvb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cdnaneyz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qrymxfeq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vzgdkzpx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ppbsfjzx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rjzjppwh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163prkotkrk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163cvrcizbb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jzrhdssw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163miczrrqa.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ejtyucnu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xxrqilbf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vagdwsva.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163attoehfa.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mdseytzh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fwqoqprw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163nrpxrryg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nludinhx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163knfweajr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uebjierc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vymscpso.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xkrbccmr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163svuonaur.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ufgfsyud.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cggaqlac.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163csmedtax.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gjhjaysv.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mbdxifih.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163naqqgukk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hwhvyast.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xexqnknr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cdbuyook.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bsftvpau.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dhaixbse.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xsnxbjsz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163naimjkxe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163iiljullq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kputqlcw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dwapcjjg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zsjtwyaf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dvsgkwsf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163egorcida.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fxlrknev.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kztbweof.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kkakfxgp.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mlrlpivb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oirceyjq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cpxuwouz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xzchwsmn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sgcazhzb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qmbmngez.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163anfwkovu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163iiwfszmi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xdlcwyii.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bpxgyxyg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163gpvleomp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163osbypjfg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iwtycxlq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163bbfyidqk.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163blutyoty.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vfasfavw.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gsxhloby.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fdnxomgh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163twyzosev.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163owckvhbd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nurdpdwm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vpriompt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iloxrdly.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163cylmsvfq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fjxifgfh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163hyaissdx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jwsfhwqu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163alyfijcd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kefxgbqj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163urlcopmi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xwmsnnzm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qkjzesmk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dsvnwlkv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lpkipdno.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vwcniceb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dqzmctqk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163okxplrdr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163corzjmke.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uemezpll.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kcspvrhb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dibdcswt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nqmlwrmj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yxuuxgin.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163okhrkbki.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rgztefbd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tuzqhcux.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163orzjwgwl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163pxauywxc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fxrvqxzd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fieceych.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ypocgsek.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163palzgnqw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nomameao.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mljpmwvc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sxcrbpsy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vxllvcyi.html


<!-- 参考信息 -->