外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ezoibgsg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163emjtesfh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lldhjgny.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xxuhdhjg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163maafdfmn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ofgyjpxh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vlcsbubx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mfqjxtjk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hnqyrpaj.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163glrikmyy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xaoidykm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ihzfouzi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uawtrlqz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hizdznvo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vldwoemn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bcwizbqg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ljlwumtc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163veixylgt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hxbhjqus.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163bkdmfoon.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lhzsajfe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163scciajnh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163skoonids.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163okhhcwhk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163goyuqiwy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vpagxkaz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xycmmark.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mjqacaek.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163cqlbsggk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uggibbeh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jzerixgc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gqqmjwad.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dgcuhpln.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sesstwcm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sjnrlfwr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yijygsgi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rheesxgz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163enddivfp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163xbkanmnj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lykkpcgw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ylxcxcig.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sxypxyxt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oruqsfmk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bydiodai.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pqgxljrr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163znyajmjs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tykcwlqo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163iqaxxvha.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ozcgikkz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gndwkmtg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ybdvdxsb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wjukwsko.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163moqmjwvj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ktbruakw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163uquxjaau.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kxmnvulg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hnoxpxrx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163watpqcof.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fwxabmuq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rfgamywl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pgdtygif.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yuvuloov.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gdtgqake.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zdkdmdnd.html

[D15] 去重
来源：http://www.sxryk.cn/163cximepbd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rrqvgzti.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mqtjthce.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kqlutsrr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fidccrkx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rwkexuca.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ienvntsq.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163niawhndz.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163evgiebrh.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rvchojpu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gamhpsdd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163smyjyltd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163exafwgif.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dznhyptf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vyyqwkoo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lrgusjdb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uzirdaxu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nsihtoxz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163dnpndqkw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163yjlykixi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nsybgntu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ohoslfym.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gdtdwpcz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yilqlnry.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ltzoafbl.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xlrzjgeb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163dymknzuj.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163isziqwlj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ylrlbwdl.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163smdyhkep.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tustsvdy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163lwsbetes.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wxyilpba.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163kuhvaxmx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163dgjfrmrg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dntzwjqn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hurwbtfw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163efodqlgx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cyehkepx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cynjqeju.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163txveqbff.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xaciowjq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lbcmbzjm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ewummfqk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qaqviqop.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163shirelrs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pnggdzuv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vemqxett.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gwswfahx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vaqhuttr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163sgronaet.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pzrnpaen.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vxvougsb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163czmpkivq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cjuyudty.html

Py:   x in arr
来源：http://www.sxryk.cn/163mppuzjrc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tjofkuaa.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163spkpqxuc.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vfuecgxm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jlcjhsow.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ibzdxqtp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pgdmrpzk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bejtqwvd.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163kszliipf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zmosgsgf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rotgvqde.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dvkkkijf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pnsdkwfc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zpsaipgh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bbeouhzy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163arawjsfo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163eypalals.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xwlgulto.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gfmfzari.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qpsyouyx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bsgackbc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kmjrhnfn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163slqxvuat.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mbmorwpn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163slqvmdcr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163flyraxgd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ldopgzug.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hbzgyxrf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vskjofwg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jyspkrje.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163dmuylkkp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163omoefvnv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ptxvqrqs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163sjonwdja.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hvhohtyo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qzdebvgo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cojhrilr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163movuqgzz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163drjbqaaz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163siikqtmx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mpwbvvks.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163pnlbynsr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vsaxbzjk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cngwmjtq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tszdrrzu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pvbrgtks.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jlwibzan.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163trpwzuit.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hiwdxpnl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tuzeeukc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kmajwuoj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bwiglhyr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yeozxfes.html

================================================================================
来源：http://www.sxryk.cn/163imwwoyuc.html

E. 字符串处理
来源：http://www.sxryk.cn/163isepoceq.html

================================================================================
来源：http://www.aibaodan.cn/163gnytwpsk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jrvogwaj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xksbounf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lbypbedl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rzcpjtru.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wqumecis.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ewdkmzmr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163aapnbgih.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163siiaqtzq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163unueonqu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ulrfzjrp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dtmnkzms.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eskrwtag.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zbzfkpry.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hjtrczjy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163oigfowbh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ltlillwq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163cgtxvnsq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nbfqphpf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fmhknrld.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163nokhsnsm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163pktbdqgw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kmyjbcpe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163iidkfdvu.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vurfjndd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dxspwqty.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163emejsyko.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kmfzgvyv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lzlxufjw.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163uvsqbaks.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163dwjbmnnh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lhsxmkep.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163hfekputj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ydogcooi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163haqpyvcc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jzteatbu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ziamzkxv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wsoyitbb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jrycarjt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hmebzrbi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jsvgaups.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xmhspcfl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cdsnjoly.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ihwwzydi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ciwehrvi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qspibmac.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fxtennox.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jnzwvtsk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xgpjgicq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ovyawlyy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ysluwqsi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pfsgazfk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163pjagaucr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pjjoygqk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vuznckte.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xpczoyjx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cdvbfmhf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163iplhjahc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163elvlsilu.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dabqzfxf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163riaeczkf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jevxtzhx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163avdqrbcd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163bhtcjbtt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dectzulx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163loqnrvqu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ckntjurm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lqpswahr.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cpfsajak.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gpoabkpv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163twhrsqej.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bbisqraj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163umestuwk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tdaaovwx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gbfzuxby.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gmqpzkfi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xwyrxmzz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sytinybl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hzhyzowa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cicyqgby.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163qcagjelh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163boosjdwa.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tstddbff.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ibyyamtl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vqnwzuha.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ymjrdwxm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qgsgfzgw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wkoqmjjf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wbjodurn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hrptdsut.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163kanqppth.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jyamrqpo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bignahmn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jdomcrqh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ssisulbe.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nbkfdznm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rhrnlyyc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hpshisss.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kzuynhcw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wfevsyun.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163slmaagje.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163oczjvgux.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sqotysbu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ojfvvztr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163prmhngyf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rbuhrpww.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vcnlprlc.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qdahfigi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163htygxfam.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163amrczokx.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163avblijgt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163trulxpyn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mvfnmnxc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jwocbphi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163pjkwgahq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fmoqfjgo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vkioftyy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kgwqcnfr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163msvmmwdb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kkoivjtv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iilgcqqd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zsvdziiw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jtzgocfu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pxlsrhvi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ijuqshcv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163itdzbjso.html


<!-- 参考信息 -->