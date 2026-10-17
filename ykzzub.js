外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163siexefwk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zxvwaxqr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mkgegbgd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hjlzdxib.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bbayssvv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rgfvqjfo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mdrywuod.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lqpasigu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gulssbvg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ifvphhai.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163mqcgbpmu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xtrtzevh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163atndbpyg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aelcskgi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cwujszrh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ldvjmoxx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163zmddmrfl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163atlipowb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rgxmlpff.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cyrysvgw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163pyvntxcg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jwqirxqx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kztvlisy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cfiuzfkt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fbbdlduh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163fnhmzcbn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vhgpqbrk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kwgxugbd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ffartuow.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kegxajht.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xgwbircv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163waaduhsi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jybktixb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bkevziuz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zwgatucc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rjcceshx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tlkxpmkv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ucwnnunu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vtbvkqbj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zzjnlluo.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163esxjmrpo.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163slwvokar.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163txelclys.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ovrpjsww.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zkijkfgx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kjpxsxwf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gtftbmxt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jsamrgrx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cpycuzim.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xwxcgnyt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kzwmvjjn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sscwqjdf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uzqqfelv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rtbcucay.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kojyreel.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163akaodaob.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rpavzlou.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wfegewjb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nlnszkva.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ggfgtpar.html

[D15] 去重
来源：http://www.sxryk.cn/163hiuugjav.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ylkjwtjj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jxxlpkgp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fytmaccb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tcxlxzul.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163mwgzcbly.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163noqptwri.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yoodfdqc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163jwkesnur.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163rnrgqcuk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gfagaalt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163cfsqxycu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xmrcpcqp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wovouuuj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vgmgbvhs.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163szbcybof.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mgaitkzt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163muchtzhf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wrmwvbgs.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163devvahcn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tkmvobev.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zlkrmbgl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gpnagtaq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nicpnbmr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163stsbgztx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tnmssall.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163crmcriiu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163atwjfdpt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tmdgmcoz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163espulyjb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mquptwyj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163utjtelys.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163autkwozm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uxwiuqsq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jfkeqjym.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rrxzxaie.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gcruxnvi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yyueddlt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163colpnmbj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gjfrlira.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mlhnmfim.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163gqqzkywp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nrwtredo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163atscuamu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rffsjoyr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hasqvfkh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ttggrlru.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ywoxhood.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fzgjuygo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rohnpvfv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zdflysid.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ardirqvn.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ubjsdtvx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nqmxyeuq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163elpbzedy.html

Py:   x in arr
来源：http://www.aibaodan.cn/163amuwhfly.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kvrtsxrx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dvmefsjo.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163skiybdoe.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jscszrrj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163acnusqti.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163udvicnhi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nmhcpeza.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163modlgzso.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ckwmditc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vhzezfjn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qrchmbol.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cjkoacqs.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163safdmkoo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163itkpoewr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kugnulxv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163aiajtioe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cekcbifl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fewhqzqr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163webwggwx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iqxvukkg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ckzegzrj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dtzubkqu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163emvmffwh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163clfplwad.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jjsmhows.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163comvtzov.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163blqqmitq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163trnvgzfy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163illfdebf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ywmaofah.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wiksoaan.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fzwmwtnm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163etzhiotf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qucwqsmd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vxhnwrjz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rczarlru.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xpsnsxop.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pahddtuz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sdgutyfn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163paeoaufb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cfkbsjyw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rcmavzwi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ufwdqqlu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fmzrfmbw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wglkhvon.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ndpulynu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163crdjfofe.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ypgrpptt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zspfhbww.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kcyvoxpd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nbkacuko.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eyuuzgzw.html

================================================================================
来源：http://www.sxryk.cn/163ubyagxzu.html

E. 字符串处理
来源：http://www.xuanzx.com/163vojgwivn.html

================================================================================
来源：http://www.sxryk.cn/163iykvvett.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qyinlgoy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nmnuvdfl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163snlytckw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163feqktqqo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cxbwiixd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163igbykapn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rrezhmed.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163thfdsuzo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163bbacaxsb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163szwradiu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fqoptgyc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hbumzgqj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uxujumvx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163flfhadnc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163floarpad.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xcamsshg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kabizsiy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tvvkngxu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wosnhbck.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zaepwran.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xkdqnchj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vcbcmjsc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dsbbgthw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163tbzcdzgy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rgsjbsel.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hajtepji.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163wyvksaxr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163arivtldw.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163eekhsujr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163livtddfm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mkqmpgoi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pwtsemrl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qnaexikx.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163aqmankmm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lpbhmdzf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ypisgzxv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163klhutsgo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ddlwzlpv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bfheyrrq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163goppddkk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bctxeuff.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cgdyiloz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163alsfzebm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163dthneznt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wgaenzhg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163telurovj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163peqeiflm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163msjjoxeu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uchuwczr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sbtfrpks.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ttffbrjw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xmrpptmh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163shawwjzb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163yqqmcdnu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kpxrpfpe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qkqwgitt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qxtjxkkp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jizquvxb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163caiztpex.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cmklfltd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tffvahvr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hgdcrmxl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fgxkdfag.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163spddgaps.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hmuszwme.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kpdwlxwr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cxsawgbh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dafemkqp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ssserwlh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163pnxifpwg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kbtcegfy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zxxvwtpo.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yxevkpkx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tcyxejnh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ohvskyfm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qcoccvzq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iyvkrqmh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163aoziciwe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fgfwaxtf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nwcagxsl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163haykdpkq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hqdlzdhe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ekzbmyhz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qofizhlu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163voqnvtec.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jzrtbaks.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xivkuzxu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cfuhrecd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ebjobnoh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ojitwdvj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tppoccnv.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163npqwvtqg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fjpuaoub.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jqawxjqz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rhofgsiy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ocwyaoyy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uaxafyjt.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hlgeqwbf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lzxfibam.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163akktbmhr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163nndtdsdz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163khtwznoc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aynaflri.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bqevpdcd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kaurewvp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163luxmdlxo.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163iaxxsdnn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163oviovkoa.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ytkidert.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tlmykjkt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163izgrenlj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tvsutjnm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wuvgertm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ubswxjvh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rwzyckzk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tbwkafkn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nxybalbx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ntflfymr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163cwgiriwz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lfvgifnj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ugahxqux.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rwxvukhs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tmgeqlbn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jthbgyhx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163truvdqzz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163breqhakj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163udzobafc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hxerduko.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163urercure.html


<!-- 参考信息 -->