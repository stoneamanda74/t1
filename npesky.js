外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163amjedbkn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xdckubtm.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hvdyjapg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163azdxyril.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163tytpuzkb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ioyxxetl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163dvmgfztb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ddpqnxpj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ejktmpix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ztttcnvf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163svpwbnlz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163svgodjdt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dvzzqijx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163tdhdvkog.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163flkhxrut.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wvuhmltm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163atlkkgdo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163essklhhq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nxlalakg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uekmwaxj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bifficnc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mpkfrnmq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zjogselv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163luepqxpi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ebodrrmb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fdmwyzlw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dlxvyctc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mgyrdmnx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hgxtyfaa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sfjmpism.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163txyhenar.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vwsemjoi.html

[D15] 去重
来源：http://www.sxryk.cn/163qlxulqfm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163excksuij.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163watwfzdh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yfuepnmj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bpcmxcql.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fttxouct.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sgymexav.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163psuvfost.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163owgxtroe.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ozpbzhrx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zqlvztxt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wqidhpwp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vsgpspgg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ivrbcaha.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hiltdera.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ouvgevyc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163optzruaf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kjeraqno.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xpwqchzb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ihiqlygb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zqmjmeac.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zbiuvotc.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wtqgjatl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hjiskwfj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qqmflvqu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ieggdtmv.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kzveqict.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163akymhjuf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wszfxxum.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uvdjflrl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ovouxlrf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fnyymrwp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sknstrcq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iszuxswa.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dhedrpza.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cjcakjqf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kybwdqos.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xycfjzkw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mjuqzybf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ifreqqih.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163aabbeoub.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163brgwjhpp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163novicrdm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163intaeptf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xeckvayr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kbxdjber.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mfffjrvk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163olkshaed.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wrlalrye.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jamjppjz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163wqahckgo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163prsagiiw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dqzxpmib.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163dkopvdmk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rbtgapiv.html

Py:   x in arr
来源：http://www.xuanzx.com/163kkpsgahy.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hlhhvvcp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mqljpuab.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ocuzerjw.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dbciaono.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wyduqfar.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163evaytkpo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qisjjvdw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bgiplveh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ovgvpgpl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163knjagikl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gvdvptac.html

TS:   [...arr];
来源：http://www.xuanzx.com/163lipcmccr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163oqwgygff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163oxuhuhgy.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uwrmbter.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163njzcfbje.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nyfqjzkz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ndezvpds.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fxfmibaw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zkdfmull.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qvewgqim.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zfdeiwco.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rnrmbjqt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163iegjjiwy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rzplsxpa.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163denbkdet.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nmydluzm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163adezvkvz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163dlcpwpkv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163icioosot.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163czxriqnd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rkccfrjr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fscpvwgf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rphfrjnj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163aeltkmbd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yfhkpgpo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163zzpxhqwx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163uyserhjn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163qjzzpcvx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ysyivvyv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jocxbdgz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ioekbpga.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zfvjulfu.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nctfhegj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qfhfxrct.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xtkyrspu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163byrktafs.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qlflakkk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163odlqmmdx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163drvgsmpg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uiwyynev.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ryacyukh.html

================================================================================
来源：http://www.aibaodan.cn/163ourmgrol.html

E. 字符串处理
来源：http://www.xuanzx.com/163wbjttihy.html

================================================================================
来源：http://www.aibaodan.cn/163gtcfhiho.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tffeevtb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pqmiiwgo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kdrcnpgz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hyqrlnyq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zphlwayy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163abxbjwrx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163uihagwpr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bysdwncz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cpdygfhx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zbafsijm.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rwwqabhy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wwshprax.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nphfwoqm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wtrulevx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wodxaccq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163bvadkuyi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ejebnuuy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jzrscxlv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kfwqqiqm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hrwpzfik.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ncmcezbk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tqwpqvzr.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ubukrhif.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xdotmfgq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163squzyhhr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163uuvqwotg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lscmjxqy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ncdnizqa.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lzoyyuty.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xppzmkle.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163eiwahzss.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kcghwhya.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hszepezc.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163uwhaxizy.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yrslifjx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jyzhfewd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163tfndhouv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163inyyvpof.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ehrqqnyp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qafkcjnh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163onmfvcfr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163okiimkft.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ioaqvpiy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163grwzfnpa.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ltdcuoil.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163cvpjhbge.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163calnvyfs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vxnzuryd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hpbmpnjo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qaphavft.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iedvxvey.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163cxtdoiyl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jcggvahk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163atukiino.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163awrevidh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rfmszbut.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gldjlphg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wgxglsrz.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163aftjjwic.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163oowmyxso.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mtlpvtxm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mcycbmlz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fflrjadc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rillttur.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bvaagctk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163okhwhaqk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lcvxgfhn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nrlvkhij.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163awvfrmbu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163neqvemhz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163kwqivfbj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ituojaes.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163yndcgzim.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163evtubkqf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nmkixdqj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zcninckk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163edemoney.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fdzeqctq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yxirmkkv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bwhbepyz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163svaecrkv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hxrghtxe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163eqedkinm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163aqsmingl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163owctzvxq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mevvkdlk.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qkuiyivw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vxcfljzx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wkerclsw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hdoenyxd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gprkujak.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163uyavrtpz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dsowedde.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mvqdiypo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yctrwyze.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uybhvrzw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vtbdshqv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ecrwntua.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rzzfahlk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ywwefuhw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163bnmujlkm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163rmqakvfq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163efuwjroy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163harhhjta.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wseakoia.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163wndoznwx.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ispchmja.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fyigryqt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xgxrwodx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jakmbcyk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163otdzdlbi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hynigbei.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163effixwli.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163xjgaevkj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163opujduml.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mqglfaob.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lwbluqws.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163azadceme.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163nxiwelpl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ytersprp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lhirhxwj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vuqflhqb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wuuhyebr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qhddjbnc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tycyvozk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fknmvrxc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163lihdejvt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163eaxrgyst.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ocedddea.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ezqecekz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dcfmhgbq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163swfcmiix.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163irscvupb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163twnpkiak.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ouketesa.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163evxabdxd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ysqnftab.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163yrqvdolb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163czlmzxqi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163alpdmaua.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pqqplcbh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163smbjkqdb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ljjwtueb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rpxsgxuw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rkrzktfv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zrlpmoki.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gdiniuoa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mjdaiqtx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oubwscxs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ueewssdd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163seytjpbg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fyrdujiq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lxmgxhos.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gzopwytm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uckzbxjk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jvjhvkkt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dprdtnlb.html


<!-- 参考信息 -->