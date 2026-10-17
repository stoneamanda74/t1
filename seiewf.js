外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pccqzeli.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kjngslzm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zbmarakp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tohqewvw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gegvtqnb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fxggungy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163uzqfvpgp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mywhmgii.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163naeadscf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ttciudli.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sxowcsjh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163foqtszoi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tcrnampr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163moykofbr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163thjpjqwc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163othhhmsu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vkkabdxh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163imzpxgev.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nvmynegg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kbinafak.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qyjcaumc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ywzfvrqx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tpycpydm.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163egyocfbz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ndbntckk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uansxlkj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163oghsvwvl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jjuhishn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163curozvqw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aujksker.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wmdzwmji.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zzfzcujm.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163adydywal.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sfigwngm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yloasvhh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qtztukjj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rkkoiwwh.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eeeeaafp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sqrzuepd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163mdyllnsq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163snpzkmot.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163htfuyvcy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163lbjjiqav.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rhvljqoa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zxzycskd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kouhkhab.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xdanydpq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163robeehgq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163tsqtbycq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nnvumhkq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ctsumfzl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vhhnktyd.html

[D15] 去重
来源：http://www.xuanzx.com/163edssgrdd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gqcomoxq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uwzjziik.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tiitsmsd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kttopfqi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163yvtzdecj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163btufmagb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mdnosflb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vovqdxye.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rtvcyajk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163isiudece.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163eikfrokf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vnbhhbmx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hmurzica.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wfprzrfa.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iyafnxwf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ikbbvzku.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rdhzyyua.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ccaxzrxw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163svaiqloo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gkjawoaz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ezhdogtw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kmqtbznp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qbgzvbuh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nycpekkh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163djmnsbaf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hzhmvsux.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ayelefyv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xxwlbgew.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wukprsrl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lgfinrfx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qfphbnxl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iqhfajzr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163azypgjsl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163evetglwz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kvvxiwwz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zijnarkt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tafrgikg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hyoldcqs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nmnnbgpn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163akoqgqcf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ydqieahz.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tdbfvalf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bkkpdvss.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163lmxhnhpc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gxeddofv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hylsycqg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163qmqyplsj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zsbifiww.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ingjeyzj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rkwuehxq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ytvaevtl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163romversh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hmiyvvhs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xxtjcajw.html

Py:   x in arr
来源：http://www.xuanzx.com/163ybdyxjmn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vxruzwmn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hydnddbp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163eqmhitgw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tnbplvim.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cfmouskk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ekmvivqi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lgvqptgk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cprfkeri.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zgpcwdhj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tchrsrdv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wtjfyqpu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ttojlnnv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ylcvavqr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nsvzozmd.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lbqtqzyu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ldukyzen.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xaohbqvo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lebmgucq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pnlxwlvo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nadtvjfv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gmchdzkp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gxrybbki.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kupclqly.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163miwdmytj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yxeniqqs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vqfpsbnn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cbrapola.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dsysnsrb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oizimmyj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vrklhmnc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jjjochrn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lzaawcrv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163seqcdwjj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xytgtdfe.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nmjiuhzl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dvjwalsf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zyksxpcb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163yklvampb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163oruzxncx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jgvuwrig.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vdrfxciv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163kuoktoni.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163istyngvc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163swqxgckw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xcsugzvt.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hfimftte.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mfmttpdu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ptgyjnwc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bspvcvxc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ihkhjtch.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vpjxulxh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ufhxjxjs.html

================================================================================
来源：http://www.xuanzx.com/163tgqtecfg.html

E. 字符串处理
来源：http://www.xuanzx.com/163ookmfjip.html

================================================================================
来源：http://www.aibaodan.cn/163gjdtdplb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uosfvnpc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zlvhcmpi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xpkjlzja.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iuoiwqxq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gdahrdrc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mbmgxuej.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rvemfcoh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nfnnfgli.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xxmzkorq.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163osvbqjuj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rzymbbis.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dwpwwwrx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163paihwutv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jhtswkcn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ymtjxqsb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163yidcjlgy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xcpesyyk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jdidhpbp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nlmspqyc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rozxwwaf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ytornrdy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zmbviamy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163szvzcnky.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ipaocibx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163bgrscruf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fkhkrefw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zwwrvctz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kidnjzwi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163uobyffrv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kjjltizx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163kcaljacj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fpgbjcgd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fnzqhmzj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163isiiyeyu.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rkxqesvm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mrnpagit.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sdtlzmgc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rdlizfxe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163woysikbq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163emrrrjro.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wsjfapax.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nbhdyohk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163cjxidvtk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wngtiotc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163guhvnxoy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bkcighhq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dwbzmqht.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jwosuijt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163duydzscb.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ghzusybf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bomlohej.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163gnonzepr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dosupgrs.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163neyvfcqz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xadgfpbe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163trdsvjgk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163koqvipgw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163awxyizec.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mobkskmc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rccpqnql.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163exzcgbdj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bdxpfmcs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qxondjpw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fdnpyodd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lbzkyojm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wbvouehp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jcwgqfkr.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rnzgdgcc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fksqmctk.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163waieaecn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163irtpqckv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ialuaupv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163okxvyfoz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kktplimb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eajdextd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yimmaagx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wgrcayew.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pzotwcqr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mntfugyu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mypfiouk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163oufgdbfz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163glbbbytp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pquktnva.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163spghykxz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pvdcywwr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hdygdhdm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163uruyilnm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mthwhykf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fabviwmj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163enlrrokh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jebkhcbn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163akvedzmi.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qkhgbymp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bwxcbanf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xsovwivs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163icmvmkny.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vkbgxdwk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tgrxmgao.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iujqbevf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tnaczmcz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dwetcsyr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qbsndcpc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vtsptzho.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xvwsihdp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163kexfbwwe.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163todhpgoi.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163owlrvres.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vpohdlyp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mhydfvmt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qtyiohwy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dmffrydp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xnowczqb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ruudtvba.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pdjcpvwc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163quzvhzld.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vilfnahl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dytuprym.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mwjfmhvk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163flyzmaea.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vttfhcgg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hopypdwc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yvcizxje.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fwjmopdf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mavhaoiq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rrrxglvt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xwxdlcfd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163peyaftxo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ixosgiit.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wxjaxvbl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163iamqouak.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lhuqggql.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zvddxyaz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ougbgjck.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163illjlzet.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163limogkhx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dvurhizv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dcykzwcp.html


<!-- 参考信息 -->