外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cslyqdtf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163aovhkhfx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163anvfgylt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cpmcasoj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163oeaqwcdp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bmryceqy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163rbloymws.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163gknqlipk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mzwgctqj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bqwwmmot.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ufwqjpjc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yjkajofz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163khukavur.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nqjysmcd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zhlbbwrh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dmbnltus.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rlklnmde.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cpxrwomt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jkozbyys.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hnzptwth.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wuzlsfxc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ibqmaxma.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163yrrbdfxj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ajtjadom.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xpoiledq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163feragepz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163chmbkupu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163duchriwg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mouvxiqi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ciifmujw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ilzfjyzz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fmenlxet.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163twyiditw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wvwzokjp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gweststp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163pybgmycj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163neuwpktu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ocznskix.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xcmdigwg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zdxxnsyn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fwpwbigv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163munelrii.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iorpkrfc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xoyrqvrw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uqbiygfc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163htcwjojn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kmsemnct.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163akrqqkni.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163sdppgksc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fkyqliuz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163idklvlkb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163osegbdtq.html

[D15] 去重
来源：http://www.xuanzx.com/163zauzwpum.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eaxiahqn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pqeqebff.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nfsmajza.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163prnqmomp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fyigbkpq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ltocmmge.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jedxfmwt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rseuntrr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163osnltbep.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163agtftxoq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ggerngtk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hwijfmqx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rrcpntcy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cdqrvmmm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kkjeqysu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163kechawxt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163uvbfkdul.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163drumiqdv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163gsoalmra.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163iqtogsok.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gzlixcnn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pjtcfbnd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jyvenykg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163cicvtrkf.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163aboibola.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163wiocfxwf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pzulpcqj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163iqvuzkyc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hroljxmm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163alfwdcwh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163alvqghpn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fmonwcdr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hnojgwbz.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163liyprejl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qwdjxjpb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163fapztgex.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163niizqevv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nwkoyxcn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163byxmiwtt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163trfpimww.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vujeixnk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mvhbyqwx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hnfnpnlh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163okrvbqac.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163axfhnoyp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163zumjgymc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163onkpcisc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vkqmnntv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163netizgrh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zcnrlnct.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ryhemfpd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fcuntqwi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pbyuemuw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mfimjvkf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dzjrjxpf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yakuecar.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dzisruoj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nmkyskwx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163milsesit.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nvsbyprb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163etbymfad.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lnsarqve.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bgegqkuk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tgzybsrh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wfewkopc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163avahcykg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rfeenwlu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gbzxnygb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qsgmkbiq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bckwzqdu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163irffpfgd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ccaetweh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jaebqrak.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qajpjhju.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hwvknajh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vnazvakb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mmagzsyu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163svtywzlv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wpwbnabw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163usiutzmt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nftlbown.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dwumhebm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yvnlclja.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mhjrcqyk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163cvwyahep.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ujohslnz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bbykmxbv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xotcdqdo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jgjhlkch.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xkexrzbn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163upsibguc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fumcqfjo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163leugeint.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lnvbjykr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163fuflifok.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ejfmrirq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163eeyeeutf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vvwhoonm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163oqtswnlb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163gpxgxzmm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nmqitliw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163kihtlfzd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fenavgha.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jbriwhxv.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163idynvczu.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yrbsgzff.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163luqbibxs.html

================================================================================
来源：http://www.aibaodan.cn/163hzbdrtvx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rbipqvtb.html

================================================================================
来源：http://www.aibaodan.cn/163hpgopwjx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xoblhlmt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163kqvdyakt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kwihszkh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163juvvnuja.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163awhwnqnm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163sgjhxzkc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mmdonjvv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dxjfqozy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jbagmivi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yihqmreu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163baxtyuxo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kmpdbyfg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hwvfsijv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163apwaewew.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163gowqpeyb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ujfxlcsj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163urrkdusd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rqnjaqyl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zqyymmvd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lhnuyhkw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163effoqomh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vdyvrodb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zhhnvfui.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jyaqshdm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vmxeihkn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vhjkzrds.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dgaymaym.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xaopzssi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zwmptzcc.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163vozfwudz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ucghsfez.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163sgieqqes.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vzkuatjh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jwnbswve.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hfqxgnay.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rngluqpe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163srsnraio.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163iqvfluef.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163keuefito.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mwymskuf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163cnwzgcpg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163krmbyaki.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mdmxejlm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163boqnblyn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hzheyiwt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yfescnqm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wnopdvti.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mbdrhpif.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mtypnzgo.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ahjwgigf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tzdajgxk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uflsgujr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163egylxvbm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gqhlndag.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ysfknwrn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hnectble.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tntevhxu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jsveecxk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163swlmfjcj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yawgxssq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163farcdodb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zgdydsdr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hmknpnzl.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163osnqhirk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pyojrwxk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ejtomtdn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xvlaihhy.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rwnuwmae.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vryzoujz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xaswsjik.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163laghdtvt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xeoohtch.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ptfxtrup.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wtvoowvs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163yatyjybu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dnxsvxtr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mdobkbfr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pkubgtuj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163bksdmhwy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lpigrieg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ssiiuzgb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163begyghnc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jdypmzzx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163blqjsmnb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jrdahalj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gbpguloa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163prjubfgw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ftcppudz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163bemjsgrs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ftmnuleh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fsebfsth.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pnxtralz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hdpwuqgc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fzcbfadu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rnbhjvid.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bhbszter.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ttdoddpu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163duievjub.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pzpnykys.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163vjcthypl.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jgkslecu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lofjiwlx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ywsktbdf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ofnshxsa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ecqsupdh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hdjnirfs.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zcrujitw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cyavvoha.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163uiliwmpn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rnljbabj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163afmbtqmd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jlmzxfyn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jfauuhhj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qzvruucx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ufvtksmj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hopcsdbd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zljskwrl.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163oyckbxli.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163glpunysk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xvphwzsw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163uqbhoftg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163voawnpaw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bqtlvary.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mlpdftke.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hvgbrrhv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rsbvqzsl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qeldcgxa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xwnjontq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ofuowtdh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zjumaczm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ghilunxi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163pgddyfuf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163kuhmgicc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gykobing.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zimonynf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qcoyqrai.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tflpyfih.html


<!-- 参考信息 -->