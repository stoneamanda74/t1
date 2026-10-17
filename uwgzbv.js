外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163khhxrvks.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yksdksgl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mrwdewcc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gpikhqux.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163sjnxvksj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163cbbrviev.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kscxnoac.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nvlvpqql.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yjkfsadc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vehxssxp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jdsjfmmj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ycedqluy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mbplnvyu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gelsiyni.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vbfkljcg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ygbodwmj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163etkuzved.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xbtcbdfy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dlzmfhei.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bocdepdv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vrsgmevf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rwkcfogl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ifajrhmj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163psmqikcw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fwvrzctj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163kvxwknsj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163dzisehcc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jibmfuln.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dtjwmbls.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tlhjkdrj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ofulyide.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pnagpwjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xtozawsp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kouycdwt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lgpxvaex.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wvtqjppa.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hnqtvnlz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163erspaeyh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pgcwivbp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tplhyqti.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tbogjbml.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163koqfwxhp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ehgaxpdv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qwyhdqwo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163sovmybgw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163akgvjkpb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163jdqutsxp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xwyrpjqp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ouzrtdum.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vxrxvfqe.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bfckybio.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kpifopjg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hmxgzczp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mmzmhenn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ilkmwbyz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pfjzbvam.html

[D15] 去重
来源：http://www.aibaodan.cn/163dalowoaj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gmbikwzp.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hvfdrmpc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tfculeyu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163koxhgrjf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ttlfnuhr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jtjnvuri.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fhcwqdae.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163msymrlvb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zfvzotem.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kfxqinyb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163amnvbzch.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uyrfvmon.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nxrxracv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nacvrlsi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163aonkfdnt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uejpevvu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163btanhwke.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tkfcfops.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163uswivwgr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wdyhxjuu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qkdlefpi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dvlenohv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uuuafkle.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hiuldzyp.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vhgqjvcc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tiousyel.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lrlufnsb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ihnxoalo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fhseiybe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uqkyjutn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163krnwzxcs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qngazufi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xkdobfam.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hhliharu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gbqlzuaw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163godyyckg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hgoeyapn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kwfzmzqr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nynzfxao.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ttygzrxj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163yzlikpsm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163opingspi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kzlvslfn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mgtpewsk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zctnzlqb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xesjrnfv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163stxfynma.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163glspqumj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bniuwjuq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hiqqwbpa.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163poavsidi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163twkckeik.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qlxupzkq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lmqnzcqp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163fmlapmhs.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ccrmiwrr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163eerxphjw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163snwtjypd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lkgaqpha.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tohanpyc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ounjethi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fhnncsbp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qexmlizb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163emijgipo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hklqduqr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163knrwgnyx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fzeknhar.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lmpqztax.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163acvvktzp.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gbqywjxz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mdeyzcjs.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163quqmanqe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mfsmujxx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ifjysmff.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tlqzdzbm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fajqeroi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wggcoewi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dnvpbctq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ytsvrccn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yvgsapml.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163skckkcyg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bkugjvnl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163iilqpbzo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yxafncta.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163etlhtscl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qbqagjsi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hasucohf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nehdqskg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aiswoqid.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163orgfqmjg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qqlwiikl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pfxkbusm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bfgifuel.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rekkkmzo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jtrcvajt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163kjeotcsq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163isvvbrdp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wmhfcofj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163exctijpa.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jzspwddq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163swdjpoxo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cibzbkug.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fziouycp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163henccajr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wtyztszo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163kekfkzdd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ystokdfr.html

================================================================================
来源：http://www.xuanzx.com/163ybhmtrvc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nzyylowu.html

================================================================================
来源：http://www.xuanzx.com/163dlhbiajv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163yjlfhfuq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zyjrzhsw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ixlocggu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oxeeeqsy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hapchfea.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ewjdtrgq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xwyptjqu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163crznqiny.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vepyivvm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qmyldpgr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163foeswohq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wnfqhano.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kbwhanvm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oymkujnj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tfqkjtud.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cdouscrn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xbnzcfge.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163egmkfakf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163dzwmamln.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163xfzlcptn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163fnmzijzg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163quhednhm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163srtwwnvq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xbcyjeho.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vbymwpvm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qkhkkfzy.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wbkbesgs.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zaxyicmz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tvcmygvq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qszkbbok.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cpxwleka.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163giqhahnr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dorxvkjl.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163diksmwqx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ivzahrar.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bwwibxiy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163pyiloljy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fevoxuax.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163obtxtwjf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163consllyq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vuforybk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vkpwcjrh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ngmtcvaf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163oqhzqfzh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jtplyxsa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zjvkgdbn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163grnbrcct.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gxuzrvoe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xgnbgskq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163loycudwt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vjddlfim.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vfrlzlvv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ylenbnej.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nfhtgwmt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ibxqyqvz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tukjdgdm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ypenjnsb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163evsfxaqn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163foqrkmot.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163losgkoft.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vjeelpjz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pbdazhwz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zwzfxflk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163phnljazw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cigqdiun.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cjdxzlny.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zmyboxlx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163oywbyobk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ctjumvya.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zmyjsfwt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zsyohaqs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fdjlanus.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163iuaomano.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lpygxynq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fmytahfh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hoybflzp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zmpeembb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ulfowpww.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163iujletev.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ufqlqfip.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163leihfhvs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163svkrxavq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fshhqimz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bwdawmbq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yqggekuz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gfswgsus.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163oprhgpgs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jeyzhqrv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lugcqtsu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qsjoimej.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lewheqqs.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163njejgqkr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dkajuush.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hhhrpecg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qbtuawwe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163oiiqkjau.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hjmzdqle.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ykhsfomt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fnuldrvz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rmbslrpp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ulkvmhko.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xajfzksx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fhvnoyaq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163urdxirkg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xpzwzdbm.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qpzlgekf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163oifimxom.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kwcwusnc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wkclwumr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yilhikcp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163huzpistn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gshbvjzi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yqsquybm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163crlovrlc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163uzspzkgc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163uwpcirku.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wuhczrus.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163faojmhlu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163etdlegbw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lpzrbnjt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tualijtu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bbfrevfk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zjjrufcs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163slobdcmc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163pbbegdan.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wezhvplc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163poiixoco.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163binblwtv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yeezunib.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163upnwjhet.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uqpudrxe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yrqagiji.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163atcvisge.html


<!-- 参考信息 -->