外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163yimqjvgz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ijvoihuy.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wynunuai.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163pijwtfoa.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163notnsmfg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mnjhkzzn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163kvxqrlap.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nttvrbpx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gmyqptnv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xitcabum.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163sudjwojq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lwbsbxjv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wuhfqsye.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ljkivlhy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vegzdykq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163oqwfafqe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163epiaevwc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163iaruwbif.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gpufekqo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rohszacu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gampvxbg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fxtansmu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hkxbubtj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gjbugrhw.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163idcoievl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163moigbndn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163iexrlajs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ezbmvluk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dxjagwsr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kwkgnjcv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fgndzdvj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uhkbxglw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ijxuytww.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ugoiqfuj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ainihjba.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gsvlrkqe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tfwwdkhz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163oywfvftp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vzugelpd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tehzvtjb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163sdbubzih.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uzlmzevw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163bbaaplmp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ridcysum.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zgwhmuxg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qpwkumkv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rbnlpewo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pxmktjzp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fbklnixq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163dkppxdnr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163doxswuer.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zqjpruez.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dlocyamr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fraiyjke.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gnhsddxk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163rrajlyyj.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oihbqmen.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163zgzrdbei.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163buodgwez.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fcbcmpcf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163isaplvoh.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hxmljlmd.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dfjonefw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jdfzklhu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vymzgpxq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fpeaooen.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ndvfyqda.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vnopiwgk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mogdncvu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jeeddhbq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bvuqhajo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ytsnoavd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163izdzyepu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ggwmzciy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163edecrdpy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163bprpysmu.html

[D15] 去重
来源：http://www.aibaodan.cn/163lhfpmpdx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163slramdfw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163daiiccmi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bjlvmfah.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nkpztzrg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lddrmsiv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jizejmvo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dtclaxsc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163osecbcet.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ipknosul.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rcylyvyk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xwtonqtg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rrvqprgu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lwmenkku.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jcwutrpo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zmcwojtl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163cwvghehx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fkyjewzj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163whakemqv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kznwsovh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tkumdgwr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tznllird.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fxzinzpi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ougaomst.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qhzfvlmk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dttyhtuw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yfehoill.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cgslxlig.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nbmdzuok.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qbkhbuje.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ltscxqpb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sxotnqvb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qamgpecr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163edccyete.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gfwbjnvc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ovmlzfxy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163draelqop.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163razldthz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ovvjsfeo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163zjcqfpiq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qnnoiulh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vyleljid.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163svksndds.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jfngapud.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ctidwsha.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mwnttdpt.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nhwhibhm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163eaudkzri.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iauatrxm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nxunnefe.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hutpvncn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163snerqxow.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163abhjiyak.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xnuehidq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dncrbpli.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pxvgiucr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zeoyomwz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sfnomrsj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163exvmazsf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163oyhuywir.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zhbhgenr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pcttawok.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163oonlpsgz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163yvlagsld.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cxlshxsc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163pcignjnd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jghskgwh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ekszlqgh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lrmevbyk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163mtbnejqh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wunlajnb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163txeltibp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nnqtjyty.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163odscevlb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163foohrdlg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vzclfpin.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rylghvsm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lwzjapoc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jucilout.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163cdejsnjf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bpkdentp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163voxbecal.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163idpycghs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zrilvtxu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cibbfqtb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jwqxesja.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qyneyznr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rteuneqx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gnyutgpj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jfoiuyas.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xhcxnhhk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163njlaqmod.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ghlcgorz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163alsdufqz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ogbqykuu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zlozodee.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xgmgygoy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163eifyqhzg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yubxqttz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kmwtxspr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163sntcogqz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qgokxhwq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mhxqerge.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hickzams.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163iipdrppk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jpkovoxx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zgvfdawa.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xrmmzjel.html

================================================================================
来源：http://www.sxryk.cn/163hastdper.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jmkspxyv.html

================================================================================
来源：http://www.aibaodan.cn/163gbywanwg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lujbxkqk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rrdqstqx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dfefapuq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mgluazyk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bnkwdiyk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bncimbcy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qpzkvuvw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qnyzsraz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ohcewdbs.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bylkhema.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163djpsybyr.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163apgovmva.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yzdvanyw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xosaxjbz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yrdwbgew.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ptjojwgw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bhintbnd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fdkpnocs.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qqweazku.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163uwqzabmv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wzdqwxmn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cnnxjyol.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pqioybvo.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ljvjpvfd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163swnixcdo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pdkwxwkg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qtuhxtqn.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vzaxrmhs.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wcdgaxxh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163cptymfgz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pixkzzym.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rxwxelpo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mwciwawx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ovywnfqu.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163sjtdngnu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mgkvhqsz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wwktlhon.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wtydsdge.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hougqooz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gdwlwnsk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nrrmpaou.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ewmhgstt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163yvqyxwip.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163briyosfu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163yyqunyio.html

[E06] 替换子串
来源：http://www.sxryk.cn/163etgcqgkn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fyxhnvyh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vglcyrrr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zzvvatbx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dtxqjedg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nlhlfmmy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tfawqalw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cjcfkgbt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ccrxucsa.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jlkilwop.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hhvortfu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kldxkhta.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163svzydbom.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163juhaabnv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iwljlssz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kfrmwbdl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vcniknvx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jpvzlxbo.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lrxvvppv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cphjzefo.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nvtsyucz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163majsyavz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vjvharpj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vvldmuqm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dyodhqmv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tzxbnpgr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163possjjjc.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jvxmftxw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rvyfezhj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163obtrhcvf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wihgwvbp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wzxbtlti.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163orvnsneg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163madavhhi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163fozkamxw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163abivscjq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163irhenvff.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163xbjrmmqu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cnsfiwej.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gzaeaqnv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hxabpclw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zkpqhtqb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zvuvwzjc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hdgvkshe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tipjcgzh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163pamkftlc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xhhwjmnv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tilnislg.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dteyfate.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bkaobgha.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rjtjrrlo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cchzbuoc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ehoduyul.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wkoyfxwu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sgqigrtl.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tnrqsepj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bsuwjjja.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aalvhdft.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zpryitho.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ajxtfzpw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jfhwjnzu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163krqvprci.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163cyubwxcg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tdmsraiu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163idoxfozr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dwzfabqv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ljmwglij.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163deaahfnx.html


<!-- 参考信息 -->