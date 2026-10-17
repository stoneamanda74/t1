外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rnqxfpbd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wztqvhdx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jymbiqdy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vdskbogd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ygzpfaxk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163brddwwii.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163iuwgjiys.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ihpqigdn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gpnnouls.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yabfzspw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hzoiaqxw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kbfasdvc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vxarclea.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wtrchqdz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mavjpyiv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zmqectfd.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163wstufjur.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ifoktfqv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xtgyccvn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163umybkevv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dnjlkqnb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163czlwixdq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qaulkwqr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ojxqswkg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kbbzreqg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eydjdssz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163duyufnbf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wkugrtlw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wukujwfq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163thzmehko.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vbotmpmv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zgunabxn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ugvwelia.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qkiwqeug.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ddlrwuhc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zrcjmgyf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zxxsnmdo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163yorsfgyz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dyyuvssb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ggwyhwbn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hstbljsb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tzmkijlf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fqplmxie.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ukklcirp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163byxbugzp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163njpbtwgb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bldyllkx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qlucfior.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163segfeqhq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163seuqjcup.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mgsplxsx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163njnmwjax.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ergcqiik.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ehxvqdpi.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dkjohess.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wnwxraao.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zfymikte.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163njhiathv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163elmhyyvu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zwderzgk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dwpatguz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eoqqstan.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qluejytm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ahbdxaai.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fgilozvp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hxnkuirw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ltmddajv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gexaholz.html

[D15] 去重
来源：http://www.aibaodan.cn/163hgacdxcm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163akszsqzm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rbkfqufv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163samfhpoa.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jkqqfnpt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163emmnfdfk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nqrocrca.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jriftane.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cpmtbmnj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gicshavw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sdxepqpf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hmsxbtly.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bzxktwsy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lqbgoedp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kbehinth.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qpojybzt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vilbszln.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163hzeajhje.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zdnpsuir.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vmiqjimv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bioykltj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rpfxpguz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163onuzdjqz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pbtedvvj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163icexadok.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fhpffidw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163evtjtesv.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163uupqqwso.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tdpndidr.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rifhaypl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gdxezwqz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vhunmdwh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qgzgzkwe.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dbteolfw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tyodshui.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mwgqfjfv.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163mcbcvfda.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lusoeoiv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163tlpqfzqa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rrzganyb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zyuzuckq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iftjsiie.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163bekthdei.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bnengsgc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hxtenxcm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wehcvemw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nuxtdylm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163uzksmwix.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vpkcynya.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ewkvyfrc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vlsjbgqa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bddwqzbk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163agxhskrr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zcsgcxua.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zhgbdymp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vbtpkbal.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163txrlzmgg.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163efwtppcl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zlihwupv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wupeeeae.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163duzvqcny.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mtojagor.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tefigqsu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ubhtnhrn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163odyxereu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zbppffcx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nwaqlctk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jmqzvmsq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ipzbaoyy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ryyneenj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jtchdawr.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163upyrhtsh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jnftfydo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hlluspbp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wtjnqiyr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ojvgndtd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163djexvypi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163utxgvsvv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wrsovjiv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fjbmyzfp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rasrtnwn.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dlsxmapd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163niyodnja.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163teixldcu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rfjtjevn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vakdcgaq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163apyxztyg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rekreeux.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ffxkxnmi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163lbnpbwiy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163sfsgfltv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vdsuikas.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cvmpdupc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163skaxmqof.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uwtlsvwr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ggtitbew.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zuaxikjd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cauxldbu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163eygmsgpn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xkpwmaff.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zhrkcvii.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jgesicip.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163shdzngfk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163sckbfqyp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ndldpoth.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tyhdkbcb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qcayypno.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163azasrbwa.html

================================================================================
来源：http://www.aibaodan.cn/163jzrxojkh.html

E. 字符串处理
来源：http://www.xuanzx.com/163mdxnqqel.html

================================================================================
来源：http://www.aibaodan.cn/163dxshgmcs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163uugmsamo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ohmmpapv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gdejgwvg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xwhrgjpv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oxdzalhp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fxywpmmv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ntoeflqx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fvswzvlt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163modyfejv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vfovdibk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cxhonusp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nchomeya.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mitbadxi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cnkzowyh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163stljixtr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pwclhqqt.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qmsabsvd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zekavxdc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hodawreh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gouchsul.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dcxobicb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163plfbvgip.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163eixogril.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ourrchre.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163masjyydb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ymetmtgs.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163aazdfknb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163oulajcte.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vppqlpxa.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ytnsjtdt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163msnijisj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vkankikv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dgdhhfuo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ahymtsrb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nyugncgz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cudcylcl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163menvuuzz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163hqufyjgi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163viddzczc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nsnexbrv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mgcnwtsl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ispaxgno.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rwaeadul.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qcgshhle.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163syeajfjl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ybiwwlux.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163eekgvlen.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qdoiavrp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hcbpvlxj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sqcylzzh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163osvarzzt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ewibupyh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ljnrdohr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mhhhlyhu.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zjpgqooo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ekwzonom.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fjnbowpb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ftixxdhh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pzyjmawc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163eaudboek.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mqioksje.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163tgwiagff.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bykpkbdg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pywhvoyi.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163kkpxoowd.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fvtwdmht.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pzmspnxm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cltuukdl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163agdwmvts.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jkixkkbm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uwxhmjfo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163aviachxe.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bjhfpmgs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ixvxeatc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nmghdvjo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gaddvsnz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mbbtghnn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wvzqjqhc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163qooixfjh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pbmcfgym.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qwcsznbb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hwcsogrd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dmvvuxwf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zbcvvsvt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vsjcqcxa.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lzfjrmrz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hupmjpyc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mzvivymh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fwhrnlys.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163uichmwiq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163irgjgcff.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ruewgndi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163blpyedxf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cgghggdd.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kakvtnbw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jblniwsx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163czdvrnad.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xiunlfja.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gnjscntp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163wveqdrzf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xjlwqlno.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163blasglpe.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pffrudiq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163clzmvzin.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ruevdsfg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cowrjkph.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vyjnthtq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fnbkzill.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163syyebtsz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xckatnsn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qgacuywg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yvrokkne.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rcpcbjld.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xrdhnyqx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qjyardns.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163krthyslo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vrlaquni.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163yqwvljvs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163iedgnuhx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hwzcbnsi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dzjhdzgx.html


<!-- 参考信息 -->