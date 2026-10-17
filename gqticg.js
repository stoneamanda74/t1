外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yjenkvzx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zegtxsfv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163eepwqkve.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163eiifvdht.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zmeadtqm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163spoweejs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pikpnprj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163uyzdyxgj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bfbhmriy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jagkmxfo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vmcogbgl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xawcbsfb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ulcezhjp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163grjfmivp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163oekhrtga.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xyibtigz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163pxotufik.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163iqkvesuv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163daqkifac.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ykzvhsej.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cyrrehml.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xczemuwv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rcpfwlzr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163faiyvcst.html

[D15] 去重
来源：http://www.sxryk.cn/163fdpoirac.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mpyzanyx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zekvzahe.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163otxiymkm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wojzilcv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hxcyzgwr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tgkvyfvp.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jrjvhtmj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zifjzsqy.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yxrshzfi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bchqsnjf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163uvgykgug.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qdyyizyc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mqlekdsy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163remzxptd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mtkxzwkm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rssfstbw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xvfvsrlb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hwtxhgge.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pplodmvf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zgfipqdc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163cgetznpi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bzeorkcj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pwodpero.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lvxtlbnd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zfhsbxve.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zrexnnoj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ydxkfwhq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163aspyraaq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kpikgdxs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bvzvljdv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qclwblmp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qabpqwnj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163btfnylbh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lamsujyq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163trrqqguk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zhunosrf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163puuwpnle.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163azhgxvkb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gwmibjve.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uzwivyqa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kwgziini.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lgylovde.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xeoxjusd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bioobtun.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kafuswdt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ebfrxuth.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vkdonlpl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ugiiertd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sqmitfmn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gkoceopm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qinltnas.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yoksunew.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zfgkynmy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hnamfjsq.html

Py:   x in arr
来源：http://www.sxryk.cn/163swnxdbyo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bgofqbzq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163csunmxis.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qyaitcol.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vgpwlkvv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nssrwfhe.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163svloevkf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bubuhbeb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xovxmdks.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163bmrcjozg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lfxyirsj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vwtzajtg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163eabvprri.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dewhvofg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ucacoesg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163lojzrvos.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163eljbpaoj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pievfigb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163sjczzrah.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ukwhyhnq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dnvtabqn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rugxolci.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dfwhlixy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mqvhtpkj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163luodtxsn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hzqgbosm.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ricpxcth.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qbdlmepq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zcqnnoyd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163blpcfcfq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163njszlegg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rpjabivm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gnczydfm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xxglyfai.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163lrgphdex.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163loylevtx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bzfbhfsm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163agauizku.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163esxhtjje.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zcxczyzv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vlsoqrlg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jctmtdca.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tbcrcyog.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gmzncpan.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163djdjbgiu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jmaqhwdn.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vsqqvjnu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163odhwgplr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kxpqkasl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ezzphmbd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dtvuxugx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163svzbveiu.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xpukbdir.html

================================================================================
来源：http://www.aibaodan.cn/163lgyacvat.html

E. 字符串处理
来源：http://www.sxryk.cn/163jeybggqo.html

================================================================================
来源：http://www.sxryk.cn/163zocihvpb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jxbwnhtl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163yistskiw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fvliyfhn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fqwbjcij.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jcilucfo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kzmkelbs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xmuxelok.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163idxbditj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163whcmemlh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163coynjwsz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dkkkuefa.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163iljgcwyo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163aowxtijn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dbjmefnn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ebehidtb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rfadhxab.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163enujnjae.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163psuicxqq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ppufizhy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jglqkpyx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dfoisaxd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yrzaqlfk.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jexmvims.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163dxuotckt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ckpugfmi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ojtyruxu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lnbvxehg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xomhroqn.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kqhyowiu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163izufvjlb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zasbkjij.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bpmslyxw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jpyfsmes.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163vycjrnrj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bdutcled.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163oygjiumr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jsuxkgnl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dbdmppuq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rhesueac.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dhjnnchz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163elghlzyk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163efedrgcc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163whvgtbdr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hlrunixw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163leaelebw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jdorqehy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163lgivhaei.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dsameleh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163suzqnoqm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ujorzhud.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xnvnovbp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bqqyccno.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163fgychqay.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xrrbarla.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163eizjfouo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dwpsgjqj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ubyvvsip.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xwvzdhup.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mssktaky.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163uhuerpcp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hudsugmv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163glmmhwxu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163rhyqpxpx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rcniovqa.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bwieypsf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wstkfapr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vlpbahja.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aydnvpen.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xxhxorrc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163eeibmlki.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sfepsbkt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163gdaeshth.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163faeqbnkk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hbyoznwa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ljqjhsdk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rjzcayih.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kkxqarlq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vscluyze.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mnosxgtf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163onxvxifp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163dasxbtqp.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163quyrwzjb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163evjiobho.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163brjvhwiv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163akzasdvy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gcphcfwf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tyykuxss.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163idtvrfxc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163lhhgttbb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vllgpixh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wehsheah.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sknuagnf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kezbhnvg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yiucucco.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mmunzxoi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163igmuzlhc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163aoyjgzjc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163netuaeqh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bhtvoqed.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hckbbsgv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163uayfzpbl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163uysrhbfy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sptnkrxt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hjoreere.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vguljjgk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jxqzsgyk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jkmtrzzn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yhptijhe.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gtwsgwib.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yryhkqrs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gwfjjhvt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cbbvwkcg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vowurohm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yflcgibi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rfestkby.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jppgimqc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nhlbvcqr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xqsrajqp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ecoluhtm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mjrxolol.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mvikytja.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163pqzzfzyb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pcdvrfew.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163huehwpvb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wiypoqew.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hkoviqjj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pepdedqg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oeuzwvnz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163plouuuos.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jugvwbez.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cdrorsfi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163igjwysgp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163orfxyefw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163jxilyeru.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163clcagusx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bcjwcsjx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jhbffgtz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163adeiudue.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jjfxaxgs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163umbudhsq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aquqjtui.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pjqvzanl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163enllglpi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cbutjwun.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vxzbqmft.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xrmlnpkh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163irmgdkyf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qflwypzz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hnyxgbof.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xormdzkd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ockjolir.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163snvloupp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ubrbhmgy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zsupwtmz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163yobsjneq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rivaceos.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dgquhxyo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cjwuburb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163exrszpwi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163uhxvflto.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rlmauxxr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163evjzhzkw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tnvsmmyw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qkpmcfbu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163btieinby.html


<!-- 参考信息 -->