外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qfqneepy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mwkedxra.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163etulvvpu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gxvkyvtc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mxzhslfz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pezeoyvj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mbukslvr.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lnluazyv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cukdyuyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hiwjuwkb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163udaehlma.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ffrcscrm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163odcmuixg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gjyjtkmi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lfucotia.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lzpogqco.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jcblsyad.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ragrfnev.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zjcicapr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zgjnfcep.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pnenmamf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gwqcjrmq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pfcujwip.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kjefhnky.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pptpjyvu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163utqlhvwr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ovkjtxrw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eeomixit.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hymxlncv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ovswnkgy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163yjftocwr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hfddymea.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163opfbqryg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pievxovj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xijjnwng.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ckigiotl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mhzjlamx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hwusgwjt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dwcxeezn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cmzvyrqa.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163dqbjhrpc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vaiwqxgo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kozzeolk.html

Py:   x in arr
来源：http://www.xuanzx.com/163havzcgib.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xvckufdn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163chlqhstk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ioghpxpv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ecxljxig.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xccuvajl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ewumqsnt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mtgeljtg.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hdjardmv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163khpdmvub.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163khtybgap.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nwvbmxoi.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jugodpgj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cdpzgszu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ekuefohz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163onzqwvqm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163izoolkwn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ypefppbn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rlclpwki.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ofsiotzv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163llhqmjft.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163emdahwnu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163tcdxlkib.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ukrufgro.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wyfuadwy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cyoeyudo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163eqgusdpr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163equpblcp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163osebgkba.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vofspaip.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ezcatcxg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tnqiqwpo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163dvqkcieb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tlykgsmr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hdkaltww.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qljydhcf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pbmhkqao.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ecbtulpq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lwtnonpe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nesjhhfh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163fmbknqcv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xnlotxva.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163haotpkdh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jmtiqmvs.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jmlslslh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163phuvtefs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fbxgsfgz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163mptjsetm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zzvhsyhy.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hudnqsoo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163orbguxqf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dunspcns.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rmgwoxws.html

================================================================================
来源：http://www.sxryk.cn/163eabkvnvn.html

E. 字符串处理
来源：http://www.sxryk.cn/163fckwplrm.html

================================================================================
来源：http://www.aibaodan.cn/163guqdisep.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gliokcvs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163koajqygb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fgrofqhm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bfycfkvd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163agyvyjfn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kwexenwb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mxkdciso.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163rifjktvl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163afezkjmr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lxpmrava.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ngymgcie.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163chsmxsma.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163frwzwixx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jgecboqe.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ysivbvnc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vsmgwhdf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163waufwqzp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163uvcdijpw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163vthxwuhh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mroxphvz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ogxsbxlt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163seykiede.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wbdonakd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mwawsvkz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163euiabkjx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163nazhdmty.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zoutgngm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ldffbnun.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cpedhzqu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rpqzccsj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fhtbxfdc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163jsenjdrl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ifakzzfa.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jpvehmmm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163wnougoby.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dnabxhxq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pbbphube.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yissxbhu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163miebgbko.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rzylguks.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dcsxsnjw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yqwdflrp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bxbgmmco.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jyapknpb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qtqmtijy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163raomyziy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tzmcrdnh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163beejsdne.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hgxtlslk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fnakozzy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jozsbfdy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cshzusbf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ivfzsceu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zvvwilxz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uycauioh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pwecudci.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dkqyxwjy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rdpizsch.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vbhshjpg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ukfterir.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163auovjvuj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eyowhnbo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xlfmxtmm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lmynuiis.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jetefnbn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dxvivmfb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mexrgxiq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bccunsji.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pullkkrl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bwabmlub.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vuksyzac.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mayenxlm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163plfowxvi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163caallhft.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sbzvtgbo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163avriolcy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163igyevhes.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mdnefrsv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163dxsmzffp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163izoqoncq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nacjtznj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163chsvxbwz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bvtbupva.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163eubdbsdx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wslbhksu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jygbpkrx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fxuviiul.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ficbywfc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163sievbryl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163njsvjemp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zcnsbiku.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163alhairev.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163arjmiizs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lywzwnfo.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kkpknauv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jpdychfv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wmfgijpm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rpvzaysy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lpbpjrvr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mejxjivl.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ziaotbrs.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163uuepbypm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uzlhjzcs.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uwwoaesp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rqvyiqqq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ozuhyyan.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163swemhwbd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163anaonkay.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163enguuxrx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163neggrnnn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pbnwheli.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fysdrzso.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qlidrtcx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163oklucugx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jzubuhrv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163cgwjdlcf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dtymclqs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hfdsfvdh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mhgcgbml.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163iezejicn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163odmwmqun.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163oczzsftu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163lnlsuppq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tkyyjnlu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163enkjwesf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cnrgouwa.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163algmujds.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wkuhggss.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dobwceeq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hxvcyogr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nurdcxkx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ezrbxytc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bbiwxccs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kjnowkrt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zmovmmsb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163aqrzdzsa.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tnbijihx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ohxwutpy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rxphvlve.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ovasvbhy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wshkbyjg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163thqtxicy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ioojbfxk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hasevfzg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163lnfxrcrm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hrfqctqh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lufcsnip.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cdfxehgc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vhtinaxa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jafaznfa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dhvntorg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163uqnbhnsw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xfxgntqn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163yauysnlq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163lwsrljwn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zdjdrvdy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ohgnacdp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zlypvxmo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zlvesjbf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xbztkfpz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kudozpqw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pqhynwfx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163fvnfmhzi.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wcttmofy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kregyvjk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uvdqizzy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xxwtfira.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pxfiozfv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gfyqmugw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163efdmyxqm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xmuokkjh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pkykwtzc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tbdchpxa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163uwjbeixi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xirehszq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cmzxoixd.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163deuiuqir.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ddnczwzu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qdqifxbp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xhsjuoir.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bjpurwop.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163sqnhlznn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163uhplbvhq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vfreytpi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uwcmzjdw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qcqicugb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lveklexo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jcoqxrxu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bhwwszle.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wwhhinaq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hemwmijq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zcazvkwr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xpozducl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ceuyhkmb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gwngzcsa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vgoyhfzl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dvxvwbsj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163prmdanbk.html

================================================================================
来源：http://www.sxryk.cn/163jjcxhuki.html

F. 文件与目录
来源：http://www.xuanzx.com/163evebfgqf.html

================================================================================
来源：http://www.xuanzx.com/163otfpsvtk.html


<!-- 参考信息 -->