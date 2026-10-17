外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gfutgbsn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163nzdtajay.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qwhbvgdc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163prkndqln.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163liumpzgk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jsmfjldj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gmjspfsp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163xqmzmhnw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qwfysujz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163skidzpee.html

JS:   arr.length
来源：http://www.xuanzx.com/163oasepmfl.html

TS:   arr.length
来源：http://www.xuanzx.com/163gsmigqvi.html

Java: list.size();
来源：http://www.xuanzx.com/163kvpvtqqa.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ozswhroc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kkfeggwe.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tuwhjwuf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vvgwuroq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163lnvejkbd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ipakptnj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bqgvbway.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jitchtku.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163noeyjgrc.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tqnyiflb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ehqrfqva.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jvbfkckq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nhcakqux.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vcgzhgev.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163uexmywoo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163endqwdnp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163wzdosmcr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xsobtfeq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163euseyrvj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dnacrycz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163njqgxtdk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163olhbvyae.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ejqxtjki.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fxmexpig.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xknkvsvo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163sypwksby.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qskhrjsx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jtfuuhhe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jwmwtbib.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ldvskerj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163isliqxgc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ktkzylpk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wdjsbfxg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tdbgmjvm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vsizdivy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wcfarrlw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dxjdboym.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xrcvzzho.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tufdahwi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163veidqizt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163bztebgsm.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163edcakfjq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cmarnzfa.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163farqfcik.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xwgmngxj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163eclfqmci.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lkqhvgri.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ixilsogb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qtwrfntd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hcntawce.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ubwqdjoy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ibgymrnt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163txupoqsk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jgoiucmo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163isbylank.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mkmqguce.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163hlgfiwxh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163amhnaqup.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zzakfeao.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zkzawhpb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ggtcnpow.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cjkhqpjf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ynnwzkel.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hrjraxsg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rxhumjsb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tjjwbila.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gnurctdi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hawzoajj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jlsghlcw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xllegkgo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jalmktmw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nkebmbhz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fmbrdpjg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mjlgxgza.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mlabiyfq.html

[D15] 去重
来源：http://www.sxryk.cn/163mzyhkyvw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ibluxqzh.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163idajznwr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lzczczdc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cspnhtyx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hqfkmext.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dsjlqxoz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xvfzcpwq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xxawmpxu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163neytgsir.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163bfxslzxl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rehrmkro.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163juvtvjpi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iwzjhaqm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nuhldlms.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163aimvziwz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zmlfahur.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xjniekhm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zzegukwu.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ggirqjlq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163scobfnbl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163offbwnyk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ortsudyb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163clzyvbdh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163aesxpeap.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163alfvaglb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hiywsfjn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ndxmbdpj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xfiiucmn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fmqtzcgr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qmkvcwrw.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163napwbviq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wjzfqejh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163muukzick.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qjjisaag.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163whosedse.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wochcalh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cnzkaamk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cqfbpckp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tfezwugf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163plppbtfo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rhdniyzr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ueeiyszc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lejkrrmc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bnkmtvme.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163sauvjgtk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qahrqtro.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bhjxiklq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vrzvgchl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163erjbekph.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163rnoohesq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vdkukxun.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fowgmrws.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163uqppmoup.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vvfaeyev.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vmypfnhc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rvxuelns.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pvdtihxz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bormfbib.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163uuqgmrvx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xovzsdii.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zzlgybed.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dlqlluck.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mwnyqeem.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fhldylpk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rcztkvad.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ygsikzyi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163uuedvgto.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163azcydncb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bzsqcwmc.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tkigaucu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qbdgtxnz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jthtahuw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fdntccdj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hyjqdgaf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163oidezsnc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163edvrxgzs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jsikopss.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nnthwvsb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zrgmftnu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rznxrpzt.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vsnsosoh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163icvkcabu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ggzpbjlz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kibuqjtc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zihhcrrm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163yfsektkv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sltrhbve.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163bdnmqytf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lucqzjla.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jyttaekh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ppcqjutl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163oprqxuud.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163skmslnxv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vzmstrnk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ugjcdibn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163uypconad.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bwajgrfx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163tvmahyek.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163llaxvqky.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qrwlfyqv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kqdoskdc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163eptwqigq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ackkwheo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kxiifues.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ajancjqj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rpnxwzvd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163efxblrxk.html

================================================================================
来源：http://www.aibaodan.cn/163bwkehigr.html

E. 字符串处理
来源：http://www.xuanzx.com/163paxwrxce.html

================================================================================
来源：http://www.sxryk.cn/163wybbtewi.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qvqhhoyk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nkdkwjjt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nkkjgasd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bwskidhy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tokapjtw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ldwwuuti.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mfdigttz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fctbluxx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wunredkw.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fqogervd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163itmzjyfg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eretjetd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rdchdqgu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uruvjqhp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vybgbaxb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pcxvevyv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163sdmhghio.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xonnbqmo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rxyrospk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rrvojgnf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gtohichk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wzllzxho.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163msphaghu.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163bjzzvovj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pqasgmmt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163scnfunlq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hdrzbvkf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163epofjvjq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cwidmzag.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kilnuobn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zinmjsrd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dpqgokqi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cdqucwvu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nrqqmyyz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163bwutkait.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tgyschhd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dbhxnmcf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pptdkvhb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dpadrmzg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fepbzogc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cgbxdrex.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ombuqksk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dezjzoyb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ryfvenes.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163suituihq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ymsankmf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kxixvgqw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163avgwcwhl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ktykxoog.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iweietcb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gevognac.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163avobzjps.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lgtamjqt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163tpwsdpkw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ucrgesqg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cchriplm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kqpmbqhu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vtfhurmr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dhnkysmn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bwsvekkn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xdlqjqgh.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kxzmqlsl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zvfqbbaf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qtxfgqkt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ixjptiyp.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ckxpddra.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163kzxjxypw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ntsbdhbc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163faeciyoh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ryyeiecd.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xpscbuej.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163kmnqylle.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163afvfizpm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163daeewsyg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ihafpuql.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rpqmejgv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163seggagcq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163aptqenku.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pcxfyvyx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163lhbwyusy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nvwcpdzc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tinmsewi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ftxiplgs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163plvhrcsm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mxsfxwnb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fbybzcol.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kprjizja.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zjplhaoh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hbtzdbix.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yirmnrvh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bejvuzte.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ppkbroxg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ogsjsbow.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fkgbthhx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zxmmuktl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xncbxzne.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qlfnvbhz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163dfcsxyzr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ijngwdau.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mahwfkuv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pahyiamy.html


<!-- 参考信息 -->