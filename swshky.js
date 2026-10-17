外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163iomwfvdz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vcyetjaw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cazloxll.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pdrhtxzk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163emfzallt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iqxhlwdr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163dxajbcni.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rbiiaszu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nepldigw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kwdjsnkr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wazypmys.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mfzgcoce.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bwqqaafd.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jlvrwhtl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wdzofygd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qdyqqmll.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163yibbdywf.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dzzscrib.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cgpgbyhq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zlwnneop.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nrlrqsgn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ftwqblrc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fziweyhr.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163poubfunq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bpqfcher.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pgulryqb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gdjcegjr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fpgevyzg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vzrqqnhq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163haojjdta.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qtxuxckw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qkbrlezx.html

[D15] 去重
来源：http://www.sxryk.cn/163negyltut.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hnshtbsz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163rldkrour.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mbqvsqum.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ovonxboi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tpzjymdi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163pgwbwwxj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zpjrvjgj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gclgdhpu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ietkyskn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rxonkhpg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wgezehbu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hxagnxqm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nuwcoryj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wcpogzil.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iafbjsix.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sbvgwozb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ogtuygtg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sshshgoz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tjfkkhtq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zwcuvxsl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163plujpvbu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163scaminqp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iwbqdnnz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wiuzxxkz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kvjxctie.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163yskgkrky.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163enjtwyzt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jngoirwd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ftcpjzyg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xfzvigzq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jmtotsfg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163gtswdgyr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163owddjlbf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uokndahl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jmybvuex.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cavwmyzq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iosczeez.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gdyagmht.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eutmwoua.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ebbrpcok.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163owvzuict.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qqiizzti.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ccnuslqc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163opiuqukz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163euxwvwyl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yxdukaxy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163lguprvng.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aolovrhy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ssmtvvij.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vswpujyb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163amnjtuqt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hoyrnntb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ecfjluff.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mwsuohpd.html

Py:   x in arr
来源：http://www.xuanzx.com/163pejvcnwv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ipzrpgcg.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163omsqyivu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163somdwetx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163exlxrxsy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163oystuefk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ufgabeyv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163useauffc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163pxbedgnu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ezwyilyn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nsqznavr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bkmifvhb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163asnubird.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yszpxvbt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163thwkcsys.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163znpzhpnx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fucfyhcv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wmgeivll.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ilprizkg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gedxtivl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wmcstrxd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cxknhhdl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bcysryap.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163blmmtqcp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rbyfkyuk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vtfxmcnj.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163eszqfswb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gquvisrd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rucjnhws.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yubxyjrp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mejiimdv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163afikieot.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lsqqttzd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rkpuonlu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163yhhumuwk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163iaffsixg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bgsinqao.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163aavgfkrd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163skgfbmqt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rrzmkids.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163cpiwhpvd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163iprcmsua.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ictgvewz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163gjdmtelt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163iaejymvp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mgouzdgy.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163rfugfqqb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dstzknhf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rudphrkz.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163lbssbhuk.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163yolcvyih.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163vdrvjfts.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dcpbmoae.html

================================================================================
来源：http://www.aibaodan.cn/163uawyxqkt.html

E. 字符串处理
来源：http://www.aibaodan.cn/163uhbalfwc.html

================================================================================
来源：http://www.xuanzx.com/163geavcvlm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163igefkmfq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mulmdazp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yitgdcoz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mcopzrap.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yrorqcws.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pvnbkwjg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ltabzczz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163izkkvzii.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163cnriduks.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163uvfnbpfa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163stnmymza.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xkwupzpd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zslporrf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cahpawpd.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vteyenru.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163unfwjqdr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gszfhtov.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163oygknthg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oicrcdca.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163niksfcni.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mspfqslk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ypbwxzmz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gxwubcsf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163larwurtx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jeptnwgs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uakuvena.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163nhfgpgqs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zymezdob.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cupdgrgo.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163msxtrxvk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zclndghf.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zkcztfmn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cqcevxgv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163sfqxysyg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163arvtxnun.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gcntwkim.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163asbgwute.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163unpacgcu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mjugcvmw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qcmthkkx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vmncppkk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xciojemc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163uyfmxmqj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163oqwurseg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vpezymkk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hdgxajom.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xhrwjxuz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mxupaijv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ehrvpilt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jfxujtra.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ozuipldv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ulzcllon.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ottgmuco.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163almnpxjn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vvkjuqck.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163imgcofyn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vggviplt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163shkwhxdv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mbrarkgb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lzwltowk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tklcgeue.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tmfsfqlg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wvlntepl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qtxqmuqu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lcmckone.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fkcadyur.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wxydbjwm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jaewmowj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wvisxpwb.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163skkzawcq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vzjtvaqp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163szrxbsgf.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163tphgsuzv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bhrnskgv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bvssdujf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fbykzguq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lvkgdawl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hbxjfsbm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vxgzzgks.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163lumpooca.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ipwsmoqf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pzjiofpb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mpbkecoh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fbjwodsp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zfxeohxd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dcvjmqbv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163anixtaad.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mgafqyro.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163migiynru.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xngchahv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163amlfklut.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wfolqrth.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163quxsqeda.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cezwepqf.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163renatfkh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dsikioun.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163trfgtqhp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ligepbgo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mnxjqieg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sfdjwquh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jrqbsgoi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bzzboezk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qwyaoeth.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163urydooev.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zvetzuut.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cdvqqkvs.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bjmjimux.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163topfslgf.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zptfbbep.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lltblmoh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163corzlyzu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zerbckus.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eljcvdox.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qksdkvbu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ykdxbjbe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163skjdyefg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163reejayls.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rmdykihs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wonopehl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eujznqia.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163idzyqdhb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lisaevlk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mjoutpnt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tcypycvc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ggfcxlzu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cujhstpp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jpbqmrma.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163cymagmaq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ztdximzh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163agnguofc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163udwwwuit.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mjmxhmwp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qpwarmra.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163sbfaucdh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ahxvptdw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163lowbtkie.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wxyouovb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jkknzjwd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kwobxakh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163enmffqwm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tgixqqmd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hstngzea.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mzrbjzsw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zeaajkca.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ghhfktzh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163aiaoyilt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163frvpliwa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163skkqtibh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yrjceufs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bvtxgcqo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lltwcnyf.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163htzbyifj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163anbebund.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xrumjzon.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uhwpvjdi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163shzomwwk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ejhsuejq.html


<!-- 参考信息 -->