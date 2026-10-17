外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bbqrjtuy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163afxvqdgp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vgzyqvds.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sliguhom.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vvqjkncs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ssknagze.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163giwwjirz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gwjqjjvg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163caqifgmk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tunjrobi.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ehcherjn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nwwwtuai.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ycdrpuvw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xgvjcpyh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xgwxbebs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lwpwxsrc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qipghbfc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tgzturjp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xfjfnxmg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163tqucuxoo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163sshbtgzk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ltzdpblo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zwzqggcq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ojxzghhe.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xxydolxo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163udsivirt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163woeyshgs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jcjikqkd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163armhwqsd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mxmjsood.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163yuhggblg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zsxqvyzd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vfxptpcs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xcznhnty.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fhfksqrp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xdksojrz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zwumpqgc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xllvfdea.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xgfejwnv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163igdcyhxu.html

[D15] 去重
来源：http://www.aibaodan.cn/163mougrypj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yciawtqv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163foirehlv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bkzdjxli.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kglnyiww.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163iamfrguq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hvgnfopz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163enmkfhso.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163anwtsffp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163drzsgmwk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ymbdekid.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ubnjaxos.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dkkyxjaa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dqdhidyv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zreymeds.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mlnlxpss.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xxtbxnyo.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163chpamtzh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rkxszkmr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163xjxzbgpz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zgggpqdj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gtvlgfsk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163psrvaztw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xfnujisc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163bnxxcwqm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lmwwfprf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lhrgsfaq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163moellgzw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163imefyatv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vuargxxl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jwuhrhxq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163svmvtdnz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fcfkaflw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lzfdcgbk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hgdraaff.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ttuggfih.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163natyusjt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qfanrwxn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nsexrhsd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163sacxapdr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163eqaadbtx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zvfzvphi.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lepxkfpx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zfodfzec.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zreemcxv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dpbmvect.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tzsidgdc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163izosvqoj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zjjpdgyy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163npskzwsu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rsettwfh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lvkldxtg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163euoozhtd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qkblqixg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xbehhybx.html

Py:   x in arr
来源：http://www.xuanzx.com/163kcojqkkw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163irzsgbyt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pichqfhm.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ttsifsjz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yvibobwd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163dirhrevg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mhmppzov.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pveakwlo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qwirnprx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hdklqosy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uyrdnufz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pxlnxibd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ehctljzh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rhudwerc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xskrlefp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163aqhchllz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ltngdjtz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dpsjudnm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jjkhdpqk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cdugqrkd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163edwrdnvi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163suspzoqe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ocoedtmf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qjcmmmps.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bguxazpz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163lfqewjsb.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hrrdayjo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nbslndqq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163envcwtaz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dtafhopg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oecerktn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163goejnfcg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163stvbcwld.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163juumqizo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ydzlgpoa.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gtevxysd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163edufqbsr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cwymiaws.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dcxeixjp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163osrykvjd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ifsyqpwi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bfqbehfx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gljolpis.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ifiifdwa.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bjolajiw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lwwkjkcu.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hgqqxjyj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wrdywgic.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sihfafoq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rtvaqsyh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xhtfgiuo.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mgdtgsgj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xbqdjkfh.html

================================================================================
来源：http://www.xuanzx.com/163elnmutvi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vmrpsemz.html

================================================================================
来源：http://www.aibaodan.cn/163ftrcvdse.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163hbqhhbgu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ihsjvehc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xmkouovw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gjyeweib.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163esasbkgn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cbpfybnp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163oufzmxwk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uijpfayr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163chnhudci.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wdgioczg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bqdeqykr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ocrffldd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kchguszr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uxejpuog.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vukqbgnf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mszhqndu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mixtmwne.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cgdoifsp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lfvqgjwl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ksjbflfw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jvrhbnbo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cizgqwlb.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mieqdeki.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vtixcbeh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ujojisma.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lmclnwvn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jgbhgnof.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jwzjtetj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rmdvfopg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163axforqkl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pmfbzobf.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bbnotthp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163waflzezb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163gonhvowo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bjkzybic.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163quxrcupz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zqbpimnr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163alvmbxup.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163smvcwsye.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qihxoppe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xeazhtbq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hunipujc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163gjuzprsu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ujbuwloe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ylwcpfju.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hjrbjrhy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fugkxgnh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163tvnjijxd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zzekbnru.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ogkhjmbo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aeonnfgu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hmexlpdu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163dzgbqcjp.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lvnntzov.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mvyqwrbw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163npoorehs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ctprkonj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163alsetkxq.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qyfcwixy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163uuhgcavs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gwfdsecv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lwyfwedt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fxywyunn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ehmzhcwj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pgvekrkg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gfvvudom.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cjwnjzwc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qhbhjifw.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rzhrzwkg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zihzvjwp.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gvlffzsl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jlltmzcf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163eumafwub.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ublirbgh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nivcvqdp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163trflxfds.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pmdtjilq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fjxrcskl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kfjggedy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xuuqhsmc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163piriujpw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xcjjwzma.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vpkvonuk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163awaqydyb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163agwmfudr.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ghwozmkj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zgqcoewp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jatlwire.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ofyvcdsg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fyrkpbft.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163uftysgln.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163akscplvw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vjmclbgy.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wiolzkng.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163smmiuhiu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qnrkhzbb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cmbntusg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163vheagbqa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ppmaoejf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163znnioueq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163douokshi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yfmpniog.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xpoigcks.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163whzkanfd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163aekpqssi.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hxilncve.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rrjynyst.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jtkexnmz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163fxrtirhm.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ijfyalrl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kafknkld.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ytxrjbet.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rplcpasr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ndgoztkm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pvuspvqh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163csvnowhk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uecyqmym.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hjkiifzy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ggzlsnlp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uemtmpoa.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bmtystwq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163waygykxk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qxyghiot.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163goawvgds.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163cimnupfi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163siymmgdp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163izlcadge.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163iatxflcr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163oncnyqpf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lepiawag.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lfdonbpf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zwlnansw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ocoddsnd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163auhkdzjo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gradjezw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dxurrfzg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cloyiygy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yqjspdno.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163krkfdidm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wbihigep.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163peftgtcl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163gdboqcbc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fogximtp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vwgeqhpa.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pkzkyphc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qucpicdo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wdzwuqag.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pwuskmai.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mnpyswub.html


<!-- 参考信息 -->