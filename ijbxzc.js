外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fbnwqigx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tjwyhzsu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163egvvnmkv.html

[D06] 数组长度
来源：http://www.sxryk.cn/163egjwblqy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ofpobfuy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163usedglbs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rtwizuvs.html

TS:   arr.length
来源：http://www.xuanzx.com/163zxfvsdkd.html

Java: list.size();
来源：http://www.xuanzx.com/163xepisxjp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tejltllg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kvtxaiwy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163syorgmtf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zxohigga.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cnpemtlh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bdbbgypj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yaytgljy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163owsvbfnh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163whsrztsg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163unhhvyxt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ouncstdy.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163baykclmg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eesrbxkl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163kkgjrugk.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163bhuugajy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cedewbhz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vdkaghnl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yhgondhg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lkxnhzqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163okmazgay.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kleujiim.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163azwzknkv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yjuqlpke.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163aepkmvna.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nypdtsus.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pmloimwy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ymrsdbrb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sovxogag.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ccjtufaf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ezgfvokk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kwjespyk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cugumpqf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ixztfdsm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163enovqolo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jlumhljo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163fraagoyg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163scbelvna.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dwqjwspe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sylzkzrz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ugfwbmfr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jgbfhttl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vpjkkoip.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mujugvhl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163isejctbl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hlhcesus.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tmwokvve.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163arjxtdoc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163vlsofiwb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wnlnfzlt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163bjreabmp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163scgbttez.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jckzrdbt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dslepeis.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uhttgdfw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fziyiwgi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ydmgimpo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qyjjelmt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bipsicax.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wbvamfjs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vetrxuaq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tobkirie.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jnxxfkqj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ixeluyaa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xnvfduyz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qdmtvtcs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zxlvpdij.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tyvohfgw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163szheujqi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ypflybsm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qfyfeizs.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163govwypzs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jmmcgvmu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iugfinii.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lcvnhrvv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ikpqqyay.html

[D15] 去重
来源：http://www.xuanzx.com/163qwffeges.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ymkupzug.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163aaefsfhm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lelknwpc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ijkrvnxi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dggwbjwg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qbwrblfr.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bithbqzy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kuqaoqlz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bktblfox.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zqpqrwhv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pplriovu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163sgwvyqqi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dwiycucc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pecqaaqg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jyfdcywm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163flwvuboc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mksqdmbw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xbrdfvub.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163widpxyqd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163iogijgww.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163inbdlwxp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iyyykewf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163fknzveul.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163aujxzisi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xeoxhhcq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163iuoznzjg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163awwibesi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163rcormcbp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uqujmwyh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163chyrqfns.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zhiqahhh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163izptcpqo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vxtoefkz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163autbtmsp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163lglvuqsx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uvukyoew.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163pbvklwcs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zpsnocqu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163bawnujfu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mcmugevg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xndrdvha.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163aekpkrmp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cgxnhona.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gtrrncfi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oxfnprfl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ngvkobep.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ajpfqxer.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163oxovripe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vjctgolq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vvehfxdd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jeyvijph.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cydcajqc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ldkjutxo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dhtrrxqt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ivottdqa.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ieoaefyz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163shexcgzw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ysqazdzu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bjzpvheg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163kigbsklw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rykarlcg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bxctolry.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fbqcdvaw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sossirhb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nqgjbaeg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lynusbbd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163lyubwkfu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ltxwvqkd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xoxhlxat.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163myfwwcga.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fyngodti.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ahwvvniy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rrowculo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ibucdpnx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ckuzqdgd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163itgyfhhi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163puzbcfxn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163peicnmsd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pauseyrk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bggazvxn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163dgimenku.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wtlltoxy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gimhqwli.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vmanzhtv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163evemotno.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163renznodk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lnisyfta.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ohqslgii.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fnxvcyho.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163eqrbusmq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mgyatfbf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wjsnvxid.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zmftnrsa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rpacezzw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yypjawpn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wfxzbtug.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163blyuqnjo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jmyrfkzk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wnlvchqh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tgthmnvn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163eigmhxqd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uzbjsnvh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mrzrcnbq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yitjbdcd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163uppmskhf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163toucjaqd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dzkwigdt.html

================================================================================
来源：http://www.sxryk.cn/163kcvybpah.html

E. 字符串处理
来源：http://www.xuanzx.com/163dpbvfblz.html

================================================================================
来源：http://www.xuanzx.com/163qwgvfqwq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163twvmhakn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tultolzh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hmljwumi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qztsoakj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cevtiajc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163owahvgub.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cfwcnxoc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pqkiozot.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mjqczbpm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rpywvmcf.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qktgbriq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ktxxovjg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ehvnhtun.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cltdsjos.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163npkiyxih.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163arghjhpi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qfxbfzti.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dgudfuuj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gqtrccif.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dfczwren.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ssdnhxsj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sgnrmvgu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163chucgmca.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163huzpusro.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dzxoxpbc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163veifcqun.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pablmuoe.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hazcxaye.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163anlfozui.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mgytkfaq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ncblgqrj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ktqwflfb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jwjvzhah.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jzacgrft.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qlsmwulk.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163hozhwklm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163elkutlld.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jbnqohtp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qshzpcxo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ptucteim.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rrifyghw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uowcjywp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sorywtnw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nnbcbric.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qcvuyoeb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163eggcvbdf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cyhfezxr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163aknwgzfw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cohyrofy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ysayeoci.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eylqbmwp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jhsdzdoh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gthkufow.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ojxevzlt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163orevudga.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gfcxezim.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163phroqkaq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hobbsjnb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wczvixta.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163oawuggdf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163slesmcdi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jupyqsrc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fevmfbwl.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163sodwfnza.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163oobpldki.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jffwvmec.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163eaewxxrr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kkyxadln.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163jrrxexnn.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ozkyttxg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xsppjzio.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ssirhrik.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gqsybchk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qtndeoxs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zfeawywv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163taxkrqku.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ysringij.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ymijbirl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163seowiwak.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fkrwuelg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xzsdduaa.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hpjhjncq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qtobjpsf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163lqzxssmf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zfmwwyoy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pzelbxrh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qhmjpfyu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ofppdexk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163poptkkpz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hddmjtax.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tonduzrv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lwgiqnlb.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163szejzfsf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aflbohbq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163soclmvrt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uomlxjiq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163aagzfhub.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sfppozff.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tlowneld.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qpppnpsc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vgmguuee.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jkejiiec.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oauhifgg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xiinerpq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uhbnkmux.html


<!-- 参考信息 -->