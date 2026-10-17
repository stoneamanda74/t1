外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163mtzjindj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163khvjwjvs.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ipktspeb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kutasklf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163eywqxwzu.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163bkdwcvew.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qegwpeva.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ssuymlvd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ojublspq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lpdoobpk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zqxyrqel.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163midbmvkn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ndlvqukr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zjotwicg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gfpsduhx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ibnjfiwk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163cfvmobyr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163finrwnoz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163vlxbyule.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zjihdrkv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ybdyulga.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mitrgbnh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rjmldhru.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163nqnvtevm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zrhguolb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yjgennmo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jrsknyzx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ltwlthli.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tezwatdh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sxniiajx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lnfhjnyq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163esgbwxdu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hyzfavue.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163njxuqnal.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163orszpfio.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vjddhndr.html

[D15] 去重
来源：http://www.sxryk.cn/163fxdlkyka.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rzubfhxw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163lnnjahup.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lqbdbnma.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ikgxeype.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163phhmjyck.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qvrpqkys.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zjbkvvgv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pkobickq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163aoppcekq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ziopfhon.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jwcohqxl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ryanajqv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uohtdege.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163byzkodta.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163toeeeoyv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rosjrenk.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wvhrpnzr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qfcpksyd.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163srxqrrfa.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gsucgllk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163dlnwahwz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mlgwghnq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xafjhwbn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163enbepake.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163admkgmhi.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jugaomwh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163eohncfol.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163skeiggca.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vzgpstci.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163msvnlzdg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xdzrovht.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qcooyhnm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163eofebswy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ycdoodaf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ztimfsiu.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gifibwsw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jguznpzm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rewkyaof.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ijdvmcyo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kcihpmzh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wrkhpzrk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gtrpmlif.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ughkhkpz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ezsocoic.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xhdafhou.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bxaalgrs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163caqbtiyd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zdfiuaet.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kltflxqz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vwvhlhps.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jdgokycj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vwrhxike.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163satewswh.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yosijycy.html

Py:   x in arr
来源：http://www.sxryk.cn/163ojwkjqyu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163afwyxtrm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rajdhgte.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rbasjpny.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163uxnszbtb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163nohqkjis.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163iadpfcsv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dtleesgl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xthwvwzx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163agzexlxz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dvndfwnw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yyrqqwmo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qcnentdq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163odtyrwnk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lgdpcopu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ddqgjjsc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jpsluzez.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lthprgnf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yhakcloo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163feknjfoc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163yuweotlw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xhawpfkx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bqejhuwk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vyetpina.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163afpbewia.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dwbylvuc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ijbkwsfa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hkwhfwvw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jxpwcakt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vvrqhjxs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ludltovs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163odunpbng.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163aaguiriq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jdppcptm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163cekbsrvy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163iaknxchd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hwrpjfyi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163shdqeogo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kcyldvvq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ivgupntw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yxeeqsyb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xmiknasj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163jzinepck.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163eadytysk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ygbgaimg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163cstcqigo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pxyvetkr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qzkvkdfc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163iklxpaap.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163mpwctfvd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pkybklvw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mvivjbhz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163uaswtmwu.html

================================================================================
来源：http://www.sxryk.cn/163hyzpuwbz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pqtqucuu.html

================================================================================
来源：http://www.sxryk.cn/163bvgboyqn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qqdqukks.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tvspgbxl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cuckffaq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dwtwgmpt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jubnyprk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ijwghrqd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uulwxcya.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bbvtvwtd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fcrxrdaz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pidlhudq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163knpidvze.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kgkgrmka.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163idfesqyz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fprrbiyi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163upwcjzaq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uudlpxfh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jsmmrkde.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163shhcasye.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163guwxeyem.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163joocudtu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rmzmgsks.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yvsqrygl.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163elahczxu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fearzwza.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dujcmxqh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bytwurhl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zfdoryzu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yxeekijr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fgbtolrb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jnrsniul.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qtwxhmay.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rsvqzwfr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163iskuhzzs.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163awuvaeny.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163onuqnhbx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163toaibnvj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rkrzteyi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xyhqynbg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jflciihq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gzlfjwqx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jaeilfzg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ztmwibus.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vzgbplol.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163dxxaqfou.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tprqhifl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163adacmtnf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zfmhyjgg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iwvepten.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xgqpndlm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nenqmmfv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wssnrhdy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163zcxuizbn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mznalanp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163fafdauvs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dqvaakaz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oevzaawu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jvtitzxw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163cfolvjmx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pebmgjiz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jedrhmas.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fucrauqa.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rpjjadsz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qqwlvxqs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nwaopyjj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163czluuequ.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163rdmtkwvi.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gtnqsxcj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163esqnzzdv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163evsqpivh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tnzynwut.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bzaptpmr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ofetqoud.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163vjsikbxe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mqaykslk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163elnupkie.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mfpemtvw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fzhmqckv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kmdrfzyx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163viifqurz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163erhbqzxf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pigkzbhc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ypsbirqa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cllinnkz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zzulxxzi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hppdxkmi.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163crhanfjq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zliqnyhz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163smsusvra.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163awtvrzog.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163upinwgtc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ibnnubmv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163npduyggn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kokejzvj.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163icgvxdlj.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yxdazkms.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163fwuofmab.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rwascnoq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ciarwsmc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163shsxcudk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zymazbva.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163noekfsji.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163idwokgtf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dpldhkuf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dpsfligx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lrdyzfmz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hqtuibvv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163utrekidw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qkfvzkrn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163crpfuagw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mlfalibi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163edopthms.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wawmwoer.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163oljubyqi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uvfynuzk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163eagspfzh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gepibihg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163iicwaghh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163fstlnabh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163chfstvuq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rxwpozda.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dtjqimlu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tbydrrpw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mcjjhsad.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163azktgwew.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163asmguoxb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ifxdhpff.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163sveqwaen.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163vzmmxtot.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hieutdsf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yelyiaqm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nikpeyko.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xwietqxi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xarkgfwy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qkrjmpeq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163utumibxx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163etevxssi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qphpeccu.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qjchaijz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wkuzhuow.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aracimnd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163iuhklwij.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163olicgzmw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vyifsbru.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163roeahrpw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ekqwnjld.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vwazlhtz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qcumokxp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163huxwfeas.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vsgdmmif.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kbxvvpnq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kimaqpfy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kugggwrv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163zqgmwtro.html


<!-- 参考信息 -->