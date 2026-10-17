外链999!wailian999！

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dsvqsmrg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163snmvcvwx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qkjpkajw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163daijxixz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tbtarmey.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fblmtpgh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wufzfubz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bkfeazxj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163eetdbrak.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wwaefphm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163evnejlnl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xbaulfzf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163cqyvsznu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zjbwjwvl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xxrxkaja.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hirwgcoh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jlqgakrh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163dsfvrzly.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163njsmmjtj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163stqjuosi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wyjnxkqx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wtpeubyf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163waljsyls.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vaxuwsze.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kgbgdbpy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vkdgirmu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163iamvpnsi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cklerjwd.html

[D15] 去重
来源：http://www.sxryk.cn/163ijesvvhe.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163godmtgpu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jzlgmbcw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bkrchwca.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163htwlayrr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bxcvmejw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gkoxcotz.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ynkmhiku.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ayotyrfs.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vsuiqluc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ourabezs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fjuvfuch.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163plwjzxdb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ijzezwhe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163qwwvuhyq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vuccuqup.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163rodbqohy.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pgpcbobt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gnguhcal.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tlcrrbyf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163srmwihsl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gdkzuzrx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ougqjcuv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vysajfoc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163njbmfros.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dyvozyyc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163oylzghcw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163onrzujnc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163aazkdgut.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cisvvnit.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163njkuufce.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163pihwqsrj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wtyjbjpt.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163errawlok.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wmjieaev.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163irznwsnt.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zzhvsqbk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kfyyjexi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wtlpvdgn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ppbaunph.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163toqdwqkf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bqxiwqmd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qgbhggau.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mlktptut.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163dokbtpsd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jbrkztbe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oilngbeg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gzmlmath.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lwkqvytr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bcnwgdkh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gsakmlbf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ebnqbjof.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163phkwanep.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163gdzkjfrb.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jpwjkrtf.html

Py:   x in arr
来源：http://www.xuanzx.com/163evdjpfsx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163tlptbjee.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lkvprtya.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mmkbrwch.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tpfeudpi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jvghiaen.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pqzjxfik.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pgpkfdkw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ukppavuf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hxzprzti.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xqgvodhs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wxgployz.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qnulcxqu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163myhjgydw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kzsiwkgk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xcymwpdx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ntrzqvim.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xixsmxhi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163aqjpxwla.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kxchmnvj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mrbwtddg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dzycilzt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xvebwfvr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163anrgjxul.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163itfilyfv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gkngtjzm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163emmnicnc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163oildhzrn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vxgzbssq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yowxbuju.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pcqglzig.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ndmddxtg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tzjfjjav.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ihkypcai.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dxpexgda.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gfkrtvnb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zgsadksv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163olvcdots.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cwbgumyv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pznjvhnw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qrhflgme.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nxnvrkgn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163igyrqquv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jsktlaaq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163khdrelcs.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163amydvitt.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163emepouad.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163muocbldz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aqlikiub.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qrnvmcuh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163yfyosvni.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lpvflskk.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ngsojszx.html

================================================================================
来源：http://www.aibaodan.cn/163uydrjfnf.html

E. 字符串处理
来源：http://www.xuanzx.com/163ovauwweg.html

================================================================================
来源：http://www.aibaodan.cn/163ynaizhyg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kguzowvf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lezxwecm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163eyjwimba.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fzlmezhm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lznofdoh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pjbsexww.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pqgiygbd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163atffhqcs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vpzdhdvj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163falavhos.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fumgvitr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mcpbbaww.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163krpiwrbj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pdfgiwvq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163emlsfwve.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163euquysyd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ksaqbcia.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kngokupc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163shhmkyxp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fuserhgu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xhjbbbtu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163netvhyth.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163leiogcsx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jsjpjixq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kxxhsmiq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163sgqfsbjq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pzoscjrs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163gfndhmim.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163onepodly.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163iyvkoffm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zbqeejce.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gztrqeve.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ifnwxgiz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mmjapwsa.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163sljabdhc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hebumbva.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bacnpyld.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vihqolap.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pmngbtrm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gaxgnqlp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163eqypyfop.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163agokhqzk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dcovkypu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vxprrggn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nyddtook.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rgbxmbmv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163syhjrepz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iubqgeuo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ttnyqxqa.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pklugawn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fuhbvovn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ntgiziuf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zxxfwybx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qayruelj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ibvvowlb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tlmobdrh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dedmxlff.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gvnbpqkf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dclqtwhb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lqdqrplj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kxtsyuwz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ksofwobg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ndrufiyh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163otekallq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163pvyrbvcd.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163umediruj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qwjhgtcu.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wnigduua.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yvkgxtjv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lcbowpmk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ffzfegqa.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xajhxxuu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bplmcdud.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hhapkavv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nekwaewk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fqptqltt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uqpekesp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163crqdlvby.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nhgumfda.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163sagiwimd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163oqphrqna.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wkmygpho.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zkytgtnu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qoscujmt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wwvgdjni.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jtgealdc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163exrrcikn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163pleyakrg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nurhefvn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vzuundsg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pygmhmdj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nybaklxg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qcpiaade.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aydikorr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uqtlzeln.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qrvjccjv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jcqymjed.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xwfhubeh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iuirxwxw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163stjmlerp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nvvmbnis.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rmrzidky.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163otamtdde.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ojpbkzlz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xiaebohf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163fvzuslsb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163sckjyhfg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qxatezcd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rfzacmoa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ggkocjqi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163yegdueaa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zxlycwlb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iybwlrya.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qxxlpxuj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zcwwmkbb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vfkqkjjt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mubofjtt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nkgurbqw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rbwiozcb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163csheuuhy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fjarjgtv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xzsnwcss.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xszeytro.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163egufezzt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ptzdlsfm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jxiqzwhg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ftifjiuq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ubpbfghl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jtdqfgub.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qimsjpqz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ejhexwtu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kkeqoupo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gktfmzag.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ppmkktpa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fvusmekv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163euxpmutu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jvakrbsy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eiwwmpni.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hisowyoa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gglnopzw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163voukzxtv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163epmformp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rpwmpzth.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xztkcsbq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mxjasygy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163igudlbnp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mfmkanoo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163twalouhx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nsqyadlo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vvlmqygk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kilfhbvl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xkcwivub.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163anqkphwq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ekwzzlii.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ckxqtvcp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pfitpalw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163slkpivnk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163htzyrvrm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sexnacfj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zlhpuqkz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vixtqbhy.html


<!-- 参考信息 -->