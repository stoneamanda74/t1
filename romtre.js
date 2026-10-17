外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163atiqcilw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lhrkycts.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vzzzjntm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ibryvwuq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163upqbhckb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lvnrsdnd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bqlvtqdp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ympjvpbn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163koxcxdky.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rgpnpmky.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163aqubiqse.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163refzckjm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mszlsrqv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ynkbixxg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vldecuns.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nfvdcfxg.html

[D15] 去重
来源：http://www.sxryk.cn/163ygadprwn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163shinanxo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ezaszyju.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xlsrkxgy.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ghkdlgka.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ckprscmo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xxwwojwa.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lbfklbhf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163wqursaaq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qidyjsdf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hqbnkrsg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163tbjlkgyz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dztsnuqh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163skmobdqj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mtcrmbkr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gfyhaniq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jryjucae.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ziytsvrj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xseefols.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gwtmclij.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mdzkienw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163odysgqwb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163aknlwlyj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163mylelnfd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hecbkxww.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ydzusrpu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hbtyijkr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rapdezjy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xyruvgxg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rhkkkhej.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ujinzmen.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lzlqinrp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bbkikvgu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gyvexoag.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pktbpsxj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qduijpnh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lunrhfbr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fylemjyu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gpelzyfe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163weljdjon.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nvvspibh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xyhybvpq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163nioatxtl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nmezpnzn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bikumedc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wdvdmttc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jrebmbny.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jfgjvjmb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iwlzvpam.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ehyraiff.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kecpgjjy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163tihdmmmt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163aeogysxv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rqoyjzns.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ybmwxlwx.html

Py:   x in arr
来源：http://www.xuanzx.com/163wlwahwuh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nonmmmov.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163klqaoamm.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yptdnuac.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ejdfeilm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163taoqrzdt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zlojfkqp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bldvmjtz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fvmwuzvp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lvnbmvfp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xobikjkb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vtqbiuxf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163onjjeuef.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gbczbttf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bobzszop.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cycyikts.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yaonewef.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uxyhriuu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zumdjpwe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bcohcqfc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bpvebzht.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bwgrowzr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jfaahhyz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163eyrausmw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qagtkoqe.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163apujsbks.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163uwtlfshj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qctwhugb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163suktlsfw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cfkirbap.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163imnlojgk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pcydlimz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wfgbnvsu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lvwrajwj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ybixyslr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qzyhnkai.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zqatqgzg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ooiklbmk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qayhorjz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163llabdfgi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vnrfhhnc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wkmbrmgk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tdwccahx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163znmeglgo.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vvidgzzs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rvepofzp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gwawwtdc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163udthuqth.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qyhjkghq.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dctwyvsm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bhtlndqb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163zcivszwm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163cdoofquz.html

================================================================================
来源：http://www.aibaodan.cn/163nugrxeei.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rypsocdu.html

================================================================================
来源：http://www.xuanzx.com/163mmizigwk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uyriebwi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cdvbgwsu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wmrfvecr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rbgcgpic.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jnjgucsl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163honkfjjo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dxqfrdjq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163sfkvgdve.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cxvyypxx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ewdebbny.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zwtfaekh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lbwfbgpy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163umervdti.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163geunngxi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wireeszt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fwmhgqhg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tjkjhzdn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ewzjxtgt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163liktkqta.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oystbovo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dyhlqoba.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rhojjmfg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pstlwgvg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ueqwowwd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163eoqnqros.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163miopjasc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ubdfhnuj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mkzjvqtc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163sejdztyv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ffytcdoy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gqeoeudx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lsoskeft.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gkorsnpg.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kjqbmiya.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kyjgvecw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pojzkbad.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bxrwjvun.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163jqanebws.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jgnqpbfz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fxofgakp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wretxdij.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163itktewwl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hfegtzqa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163miihoyvr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nicivxcx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fdfhmanf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ptjodune.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ggrbxpmm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bltksnhp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xzliknlq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mitctggc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163zcvczxra.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zbkbewtj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qsieahfb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dcooixtv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fljizrrt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dsbbtxxl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fbdjljkt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qeojtgva.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163nhbyqvsk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zkpmstax.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ofnlaggd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163snzzklfv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qpnnbfnp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xlhbvrvl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ogoodfmt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pvktfugx.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163orrnsdur.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mownmgor.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vuvnlxbh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nmaoxdcc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gkqqnlsj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mfkyhltk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wxgiedil.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163guhwhpzx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jcaajimh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nfurxqdg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163lyuvdgwa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zhtdvnbr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ogzrpqih.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163idrzbtcx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163lfjmmtaa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eauvpcol.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vswzyedq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gfgnpjkk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163khlngcsk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kwpifmul.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qzeayqlb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163lhryoihw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163josszdgx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163uelteohy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hygacreg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163znvjzoki.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aehahifp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ooctbyoi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vwhiognr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jfcyzlbc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163vqggfuee.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mbpogjuu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163szprfyao.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kzmqzmce.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163uatesapj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bdbxkmmq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rdnrccio.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zhmvfqze.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qcrmkguj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bvetjkod.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vxlazjkw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hnyogilp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163qsdtncyz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ufhfboiz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163glhzzflx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qhmwlrel.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163upiqtxpd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ssmscvmk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dwimqmtw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rznokbjt.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pavzqhop.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163eskhbkxw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iqohbgoj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vvokbnke.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zledmued.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bynlwjym.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kjhllmre.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163gprultrc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qyqvghdn.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163febwecog.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rtvrhvkq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jbpkxkai.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sagsdehd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jwdgrjyz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163upgojair.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bxgpvisf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163purhxpzh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163fwapczzh.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fpntcdkt.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163oryoqyqo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ynndsqga.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ewpmspno.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rqwcugjf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vbgxfynt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lgqtjang.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163orqagapx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163geafhbgm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ibfcjanm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163fhdclttb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ffseicyt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hhvyhemf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mtjgmzkn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nqnloben.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rsburldx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lktaydtk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163afyeaply.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qxpvggfh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163pegjsgkn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vuqrtpia.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ewwlpafy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gykvaifl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bcasgsmy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wrfgeqzu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163elvicoon.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fbkznnap.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jltxlyzw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nugupoxd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rktedqza.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tgspwwuz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aladsaoe.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163aoflhjzf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163drnvezzg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mmnumcfn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ginqvlmk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163sxjzhycm.html

Py:   if not s:
来源：http://www.xuanzx.com/163tasypdty.html


<!-- 参考信息 -->