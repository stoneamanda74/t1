外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163aiiizfbp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bwzszzfw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ierkovev.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kojbfpen.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aqfqrmch.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hejxcyau.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163kvqkdkgx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gsypwclv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nnsschqy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qcjaxbti.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163felotxuo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ofeyvraf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nxuvjxzr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xzfwgwyv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163euadliub.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163atihiqlw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ubhqobyb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xqwvksta.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yiwybnyp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vzyslszf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fxqyjhzn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iqowyzmy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bqqytteh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163veqhkvqs.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hgivzwad.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kbajvmai.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163wawwlwny.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163owemivqk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dyrikhxr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163isbcivot.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rvhcklnr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163pjnkiber.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bilalmhp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hxvgxwwf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gfxylhcj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gizwlrvl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163tatgfscp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tgfqxnru.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zsrcvqgg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tpoxlsao.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163tzivttgq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ekmpffgt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hoghwwug.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163jruqquxy.html

[D15] 去重
来源：http://www.aibaodan.cn/163yzaeonaa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ltwnsuyp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163krlzakqp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163spocjjyt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163limetctd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nzgpihme.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mdltbctm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tzsntsxr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ekayfeni.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163mflyvjdu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hvfgwuci.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ujzfxvpw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cuyxmngg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163biijoddn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163blaoemth.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ngqiryrg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ubngwfjp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163exbhievp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ocrsnuey.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163tntemupi.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wwmnpqlx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zpkaogxc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163magjgtag.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zieairac.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xorfeswj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163grppxjmq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qiqktwei.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163iorfkmnq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163amxcbbeg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kxgbhmay.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fuzshosh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ovijsarn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tmqbbowx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iasackky.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lqlfsdnp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dptcqmde.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163amrfsvee.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uzystgcu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163yrahsdmu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yrlepldw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sknujood.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163woeiddwq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bposwatq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jutmxmqk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vhnbvuqx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cwztqgwt.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163uetrjfkb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163adfeioks.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kqlxpuju.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yhzincjz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jrajzhds.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163amgxrptp.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ryygjqrh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mviwpcva.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lhfqlcov.html

Py:   x in arr
来源：http://www.aibaodan.cn/163drkohusg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163txxjgnqi.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163epgpgflh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wjdtohwc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jywtrfsy.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ydeualmh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nohhsmtq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sjbloecg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rmbfueam.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wwxxhoal.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gycerxjo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fcgmnntd.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pehqbgzf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rxinoqrc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163npmtfydw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163emctgglq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163swckcwqe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ttjyuujk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vkqgtxxv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fxsbewel.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ifbybjlw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163capyskmd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nfnfioqh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nzdjdnbg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zjqlrmor.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fmmnefgt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bcbpwuwk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mbsfkvud.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zpoodtme.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163bwpfmlwp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rizrczgs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163hpgstwgd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163uaeakpsl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xvjipbty.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163itzhzbdj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tksqulxh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nfottxhi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163updgoble.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rzvorwbi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uscakrkb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yuisqjob.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xronocpv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wzugylam.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vmmqamkt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vombkdcf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163djuosxjn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hbjhuztm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ewrasdtx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ixynzjhq.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163czyrtnnv.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pcjtioqm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163psddqrlk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163vzmwhjza.html

================================================================================
来源：http://www.xuanzx.com/163ziqufrzq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163aiuzdihd.html

================================================================================
来源：http://www.xuanzx.com/163vvtbxudq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cpgkymfz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zsulvjgw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163gmrvwkse.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rvzjuouf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163obtiaihq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mikltrqv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rmhawwxq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163arwbvlet.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qfuituaj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fbsdvdra.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163owvuxded.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ozzidncw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tyyrusma.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163urkwrylc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qtrvhczz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163twntytub.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163dffuvlos.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jkkspnal.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zvgzowlq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xxrbckxx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wzqomboj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163siazrjlb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163emtbteet.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jfoprbbt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nocifnhf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tbjuewhm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163giealcnk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163nvrigobd.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dndipzwq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hxhsijyl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hqqggdfm.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163swynqbxc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eeckinam.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163eyqwripv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ayvwsfnq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163arfpwxcb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zahqorli.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163drbbcdga.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vjficpsc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ygkqwmrg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jtcymujk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uzsunazm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163krrvxycm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163brolnafu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163kdoiyreh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163pzzqmrzq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163psomdjok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163swkuhkvm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gyoiwaws.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ppupofvm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163suzxtffb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vtdcvvfp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163culzdzew.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vagmawxa.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ybttrsgl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ppsvzuyh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dapkcabo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163udylnoft.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tczhhals.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vxwkbagt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dcvkeyhe.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wysgdbme.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pzbbvxqs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xfnkkgsn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jnajjudw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163eknmiydc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pldqwtjo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163soynpuun.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qcmrvyck.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cxlfmlnv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163avnjgqhi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163aftxpmgj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163cbtcpsoy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163afixdlog.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ppplbprc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qxmqrtcg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wlqupoua.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163miukbovv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jieidhpt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163pjleujcw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zwxjixol.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kpkksvat.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kiwldsuw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lyavyyni.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163icgknsaz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hsonaehj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nelnlaqp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163riwzxamu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jnaaxwqo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163msdvrlzg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mdqrnsxi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tdrgjfry.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163uyqriocu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pidphrke.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163khjfisry.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ecnlalnn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163bnaccfgh.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ksrevlsi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gwjcnaot.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163nsorkiim.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ughlthti.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mobhbtxn.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jerjlczi.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163npcevwdl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163fglezhgf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163sdyqjgkw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pibabwno.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dxhtljiu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jgphquaq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jaacunix.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wnheoylb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dwxyqnos.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pozmvckp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yunwymjo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dvchitac.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pljzosls.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lzhlkpao.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lqbhfzdb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tijksljl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lbiwoxbm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wnqateaf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yjtieost.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163edcqijwf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iofdjkwp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zamtupci.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163eyjumkse.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163twcgqmua.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163synrjbyl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ukorctgo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163egqytssz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163obutscgu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dqzzxymu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163maxstqel.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nxfedgep.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wzshnnvo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rsegvzvx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tuawvuxk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zpkmisdi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lnpzknbm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qclpmtjv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ohdnpabo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dkjfzxjh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xdoxciui.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163plgxsfwj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yokztvtv.html


<!-- 参考信息 -->