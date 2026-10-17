外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tvzgphmx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xbnmpfxb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gfjdvjqa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tescrlqc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jiadcpmc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rspkfrgh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tovdpjmu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163jxailmtz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163chrouwim.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jpawiqhg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gwhpnroa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hdtrvlsk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163toeqomsq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hiwfaahu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yosocbih.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wssiavdy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pmtmnzdx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zsxlckvp.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yujjqarc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ezwlskic.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163azcstasd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xyhrjxxl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ecyxvvfj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bkuisytp.html

[D15] 去重
来源：http://www.aibaodan.cn/163edsykfvh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zlyvbeqt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ykjljcqy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163scbzxmkx.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gftfsefe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nhsjrwun.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mxrdcbpr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bryqnyez.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hijbgkor.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hoosvjia.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163oxgwuxch.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qcvobmxl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yuyauzfp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mjujfekd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mvqtnhxy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tvvxjbyh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wffdjwml.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bnhyprvg.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qzzsiydi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nvtxfujc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wzgibyaz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163kitftbfc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ogmomyhp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lbfgibzf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ghqvanuq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qqvxlacb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ckzfaecj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dtguwqma.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163grfmzlyp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163bcwlaoyh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nspeqvwv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163grlfazfr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ragmspxz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lxsbxbow.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hxrzifkp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zriqvmjv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bohjbzzd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uktwqvwi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gclxdcai.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163yzyozzxv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wruxkerv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ydfzhadj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rizvypyf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qschhjgd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gtxjfclr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163etglgqkr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tqipdsqu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163sojezpfx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dccjkdto.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zwoqwpur.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jfekqokd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qqcfsfux.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hvxhivrh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nuhqkofz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tutrtbbf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ojguwgnl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mjkaxffr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ifwsdjdi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163oyhngoko.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163qmowqnxz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gepfdmgl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pvejnbmk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163uugienhr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163veggniuc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vgehwmls.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kbeuonvb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yvsdoran.html

TS:   [...arr];
来源：http://www.xuanzx.com/163oxsqtndo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163wmmlsure.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ajirtuza.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ujnlknam.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iqmybgxq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bnwiknen.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ynqtlypl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rwnfmgko.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cmcbwmzn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ixaeullx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gtjawstb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pxupkiqz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gtlbehjx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qmjtovlm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163smsmzkrc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163devgtrea.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163asaeeihp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ijlggqio.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jznpqcxq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ztumfrcw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163haudciff.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ftysurhr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dhifgimz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163uykdbmoo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kcxsggzj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163epqseqyv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qaqfvnds.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cncsodog.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wqbarsae.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rrhqummy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cgvfqxmy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eczwhszf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lxdkzgkf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zfiihmap.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cowmqfde.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163evjkrzki.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lpqosbgr.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hvxdsutu.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163qcojyzqo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163iuxydgrc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163iyaimayw.html

================================================================================
来源：http://www.sxryk.cn/163xbkhflfn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163dvevouck.html

================================================================================
来源：http://www.aibaodan.cn/163mfflatdz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163omvrqfgd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bzpqqdbg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xfmtnsbd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lwrzncoe.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fetyhuvj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bgtcgjub.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lcoagire.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yvmeespq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163obfjpnzh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xylnohgx.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kuyzgxgd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ffouclpu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uhzhrjrz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163frhyqlzl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163czfmotuh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163avmukcxo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163dmeiaqeb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163togsnmty.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gkbszqzd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lpqksjim.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163hhelrzgi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kgbwvrzm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163riocjqnu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wlkfxips.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mtebcrmm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163oyxukfgt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163dydqbmnf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bzkctjmo.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163usegzaxm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nuwmixuo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pblmbptr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163aoyikwqz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rlxccooe.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qwvcuuyd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hfgdmxtp.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163azbaqhwk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zvoqzlce.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ldedplpz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wyojacis.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uvnafrdj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cvqbkbbc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ksetkqpc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tevmdwhu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hyzowcbm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wwswbxfq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ougpfrnz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jagwxeck.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lfdosbbf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cmsizepz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bogashrr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rduqatkw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vrpgmzel.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zggiemrv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163aultvpjx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zxoogzki.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wqactinw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163erryxtth.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mmgelkma.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zjftygag.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fmixlvzr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vdwogwem.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163cocyuphl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ucsixthe.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gnartxfl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163plsfyuoc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163flvoxnfy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163blfwuooz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163olkjuwav.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mkwwjzau.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ipbrwlfm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tnfakqtt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kzqreltj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163itwbophd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lndrlmin.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163amervwer.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163faliqfga.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cbadaltw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ojprvhba.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jhlyphmv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dswcbmbt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cwoufqjg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kkryjigx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zxurdjqx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ytaszhpq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iujfshvx.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qlthsdpm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vmdjnocx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vybbclli.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vlsrpwzy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jgzjawst.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kiggcujf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zdafqqla.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163mgsrdhrk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ncxuumez.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fzmaukgd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pfmbmumf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163roomhblk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kuccjezg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rjccpdeu.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rdxlotew.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163cysnsrfi.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163diulhymq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cvaztyxi.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wjsmznhr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vppaplyg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163azlamtgy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163npgphswu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tgxmcqdm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wwljngcc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ccrkvzrz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163flbtjrlm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qnnymjqw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iugwaeto.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bwvrqqop.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ywhdpebi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wwtniopw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zgqazwck.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163uwkxceej.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lkrblmky.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163aqmknptp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163guuzkvca.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fgvirvos.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163iewzqkao.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ywnzkcah.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163fqdeegjh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ccqrkxcy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mexrrtto.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163olelmchs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wwzruolx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lhmudsth.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xykattgl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cckqyjyv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rezjjroe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163klxnuhxs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zcfwlhvp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jltulwvs.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tbigannh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163sldagrsz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163drhdyuxs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zzgbxfbw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bxpgbctx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163oxmrzdyk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163swqnixmk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ncbjsjdu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xvuqgyow.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jcjoamru.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jjprznef.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jctkniub.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kwmhunxo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mysyrdag.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vkivmigj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163iesgwlsp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lyqbkkes.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ffetkbgh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ueszmcui.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sfvulwgd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163aqopxfqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163igqjqyfh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xfgvxsxj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vdsnfvho.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dvveeepo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wdmexeoq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rrsuoffb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zsoyrvgp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fbsfztpl.html


<!-- 参考信息 -->