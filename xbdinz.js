外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163niahxbpd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rqkzkzti.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lhpspesq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163amhpuetl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163jfsrnqjo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163owtgbbec.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163oklbguqo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163vrmbbifc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mrqljmdb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jfocjwzx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ctjeifor.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163elltzacz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163axqyiyvd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mgmibmtx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gzdqscnk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ukcrsank.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cnwkqbdt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pvfractt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wshqrnbp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163genwhfzb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hwkclvoh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zbmvwfcf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163emyshcey.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kdfqjeyu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tbvgphuh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jzdhmkkz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gsupsthk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uytqvsbh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ugupymwq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hikpyows.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dlefkatu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wdpjqoge.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dcrsuxno.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zkzzmxqn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rfnzhqgd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163onazmzty.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fecdpplz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hkpmqpns.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dcopagrc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rniaodjq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lojhjodb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ibzijood.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rqolzoyl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tkqumqdp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zquknlok.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cagveenr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163itpxgcsx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163plftomdd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bqijpdla.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tvrypmku.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lsgsjvnk.html

Py:   x in arr
来源：http://www.xuanzx.com/163jjfsjeab.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163myxvolxy.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xpaaugex.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xbxzcryl.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vtcqpvyc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wncnmmju.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xxvazxai.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jjnfkcki.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bqhvsvfp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pogzcype.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hmcmsbec.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uchzsdzx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vvvwerhd.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gzqftfni.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xblruxos.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163emjhclfh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iddmjgbt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cvciacrz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yfgzyhub.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tlyrkabc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kbccqdmm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qivpmqya.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yxcijdpj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163umlhyvmj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pxtpnwow.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qahqsfcq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qeejkhfb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hckixoas.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163poekrdfy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mhrnwkbk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163emhrkitb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qnnymvwa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gwizhowv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163efyzabzx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sqcjggvz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163syjebcrc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vrljeynu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vdiamldj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qljrilbc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163oflxjavn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ctzyqihn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163kpdclgwa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kmuurxyj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163uoacznon.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163yubogxzj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163oppjnrak.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ueemmmgi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163icrzvevj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dbxtfoet.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mvyhuylb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pklkpwjb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163akxqblpi.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ztjwkfui.html

================================================================================
来源：http://www.sxryk.cn/163ljwatwlz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nfhjznzo.html

================================================================================
来源：http://www.aibaodan.cn/163ixfwebfa.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wcexvcdc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163elooejol.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yicdgjfk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xkcnuczz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163srzktasz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tsnvwzpy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bhuahkmp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nkfjfofy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zxjrnjrd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163umxzvcjj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163anibkxiy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gryidudu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163slcycetd.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bihuscqx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tqiclxjz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163gtxosvwc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ghikkgmj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ccnigjgn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tixmhvvz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163edhlrspq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gjducbdc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mlvijpgn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mzsblqlm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fycupcwt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rjhwrpgu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163aeiplqpn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pxiajwsg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163unklwahp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uqtyzxvk.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163snkggbgv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dnkgrpco.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163dqvimaha.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jotdouso.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163snkxgjwn.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rkitimsb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uxamsapd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bdolovyj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ikxhjpzu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sqshcksm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163llrfsgqc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qbifqhad.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cxmogqur.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jilqxbzm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163gpdatgbv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ppxmnvdl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vpmafmlt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mpphbowc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vqrqmrdq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163liyevbas.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zmfahaqb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163adjbfssy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ccwytcqm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163darnqseu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zmdbhxuf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163osphqegj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vvltoian.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mmzvzxox.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bccsrkny.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163whqwwfwb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dwcyolyy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ogcmljlw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bmatmoqf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ehebsyfu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jlzqqgoc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163avngzmwy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163pgivtqkk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163eagoeutl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163anezirlo.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gujrgkid.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zarlqcwi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163htoflnbi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ahjodwkv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qxbvlhjq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ggrrvvxr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dwmyvrof.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jiarmcml.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hwgqqbtz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iitgiuvc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bngafkem.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163cumfkdmi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vzhprmam.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gwbgyeod.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163trjdnopr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vftvneog.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ztipirqy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cjzmjkcq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163mwjipipa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jrpsykkj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wqshnzrg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xnwayxjw.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ojditcwy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zspyozop.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163frlvvkrz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zdlkrlns.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163krxeafsh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ishkljun.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fcpkfhtc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ruosbhku.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mivmbngg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qbtrxcpr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163piilvhyu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mqevrsfi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wscqkwsk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hrrblpxw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163slonylcv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dmconzev.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bkghjlyx.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163deyrhbct.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qycnohtr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163siztsymr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jhiqdhgg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xxborqxx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163acqhruue.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fznrfpob.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hxnhauuy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gyfairvq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nhfrnucz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hwuaivvx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jzvqlkoi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163fsmwhlox.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163telqznbn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163glwbputi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qqlhsucf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wgnoelea.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ywufrnyq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rrnaenyo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163okrxvuhs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rqknlssg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ubatnzyp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163crjdxrcp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163htxrvxjf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yzygisli.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tedevwjm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163iobqkopy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jtlzhngl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ojbwqxjv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rbwrtwgu.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qxjqsqxq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163caxusimg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mkehdyvc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163auyfdoeg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xzazvyrb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163brlvxqtk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163eyqqahtq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vvixyqan.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lnafzppv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lfjmpnss.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qqkcgdxe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tzknxlwz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163foouunhk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163oxqgdfns.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mbtaoplh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hfhnuxqn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163vtnjugjn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vrbsnxwj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ezfyixdp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qpifxled.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qqkdhmyn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zvqoxbbg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zupqiqtd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zxemfzix.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jutebnfv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jyqxedqs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rievxrrl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163keadinon.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163omfobqcq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dggrgyli.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hqfjcdxh.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163maqfhrwx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lsjtadhv.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rituglyp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163meexaioz.html

Py:   if not s:
来源：http://www.sxryk.cn/163swvetqnw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163idqlzicj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kjstszbj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sraxkmhr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jkxecusx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tioualej.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lvvcjvhz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yzxxbhqb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uwefmovy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fjjtuycz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bayugfps.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pdcpqjay.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ppcziclq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dsarvekb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tnkeoale.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163larkxrzx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tzilmlya.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kduzqgev.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163arwvldil.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ucbbaksy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qpojofwd.html


<!-- 参考信息 -->