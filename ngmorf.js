外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qylrppit.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mmtxhseg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163orzcaufd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jqdoyfcg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163knpcklrn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wbfrezpm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mhxjvhxs.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jxoauqkq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ijujytpy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163glydmfcf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uvfdgyqa.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hqrobmwr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163smsihchm.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kiwgwwnx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ngneftgw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163hyaevlwh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rjpysbya.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163llrjetxy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163sqtzpkan.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ijxaokoa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nnghqbuz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pxbujups.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163upmxodwt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163anaztnvh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wtubpmme.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163shabidbr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jasnuamh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ensdxcij.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vowdojrf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vqvhmwqy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xzfjngnt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163alyaxbrm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nqpxgihl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aonmaplo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cxnwiigk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zwxbpenj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dgorbmod.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wwnrtpiw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dlruitro.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163txbrldmb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wlnxlshr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ullplbez.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ixfftavj.html

Py:   x in arr
来源：http://www.sxryk.cn/163fcrtiiyc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fpstvkuo.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pyiwtyjr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tavbcxjq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ocmdmisz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163kfhisvks.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fpqsjdtt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vhgrjunp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zjndpfvj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163rnbzduja.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qnnamuxv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163iodfrtcn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mqrupfab.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163aoeqskxq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163iqdgbmza.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rookvssq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gzjomfml.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kihugyvz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163aizwkafd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163fdvtedbo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xnbyazgu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bladkkza.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gigawbjj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vropuhxa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163oghkjyxb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ciqbxzgo.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ykkiwnvd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hsejilkt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163eydaerol.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vaxkhyew.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ajcaukma.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163liznvwkt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163musqtcur.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fwejuump.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jpubjewx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mewkfguu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wwswyzdd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dxlodqwr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vrerqbvo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rgwscnsq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wxagbqno.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163docalzrm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163shuwvrxr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jvmkhzsf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wfebmmkh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mpvmcfal.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163civgumqd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xlrvhcci.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163umfpipch.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zfkqrdho.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ubqolvzf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tqmtjaeh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ppubycri.html

================================================================================
来源：http://www.xuanzx.com/163bhdstcbj.html

E. 字符串处理
来源：http://www.xuanzx.com/163ehactsni.html

================================================================================
来源：http://www.xuanzx.com/163sfzgnvwu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kwezyfha.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pliuecvb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jubvaysf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pddgomyn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tnbpiuqo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qrbeqmct.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fyzauusa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cafsljqe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ixlrwwmo.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rgtzkbeh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163huraizcn.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163setnnqmh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xrcgwmci.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rjdbijiw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163mfdbtqar.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gxlmoyzj.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rouzttbv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iqxwurev.html

[E03] 截取子串
来源：http://www.xuanzx.com/163flumewcx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gstnlecb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tszcvclt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yaujitsy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zcimaklw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pbwilcsi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cdttoixh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163eldmvfuk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163njrmyxvv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mkgesgbw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lfztogsh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jdjoupuc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vfcpdwll.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kuadwymv.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pfvmqwzd.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ircpsgvl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163eugzuhsq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163liknabna.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zpqvtfjc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qxehuycg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sjizirvi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163czerbxxa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zsgedhpa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ukkkjkjn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vhkoybdg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163rvehgeep.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vnyuzxev.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gebwpmeo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fyiebnlm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fcliibdn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163puhfcugf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ucvhyclf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ohbvdgyc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eznngonc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jjihsoal.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rzjzxjuj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163oqnzscxc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jwluyvnf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ipxedbxp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mzzcsvot.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dthbsatd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mcqsuwjw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rigjyxsz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xoztpgku.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jwqcoltv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163bwbxvzsj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eydayrnz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bwkmedpr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vfxwknbt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yggmhiao.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nggeoouq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vptustfj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mwwqlfff.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qwgxzfsa.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qbxbqlko.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hbdxaqla.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uypropjy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rruydnlt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vnoxjmph.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iafckaqu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163cfsiafgp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xgzuglxw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jeqzsoyc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fqpdseof.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gauhdsba.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pggimrqm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aptairlh.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zatqbijj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mtxaeldg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uyjdfqse.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nqjdweje.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lkmfdfdm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xlscmlxk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rcyaqquz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ezhonaol.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ghyoxwje.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163evizjdcn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qyuooykj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163duqohovy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gdtlmbog.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163afizczso.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hwxliatz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dwhkvmdm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163gxhvzyek.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zgqwvgfh.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163umqfrexo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nxqmlsgc.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hxncaawm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rmnlyjwd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vyyzuzwz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ojcelnwo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163milquyme.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wiyfzspi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ndwekbet.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hjpgcuta.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wcsfvflz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zonxuoap.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163akvgawse.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163lyxaowlg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cbkluomb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163uzdqajhv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jbkvyikd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bxdietfc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163emgpmaes.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cqlhclnn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fyvgokov.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163brwmgazb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rlqnhrdf.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163axrmkzlt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ehmyozec.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jhrdwihm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163yflldraa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ytdvlfga.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163raynigim.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163khfbrwbj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ebsoefvn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163hgaaxwop.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jhecsxsk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nzostuad.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163smrxdzeu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aizmtwlv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163foajywln.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yxhzaipb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163worryfof.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163squhgbvo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lwitkrqj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nndgglwt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xfqskdlp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163twikghut.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ervkuwqs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ecptqefl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zesvigxn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bgpcixhc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rsierrnw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yyzwquva.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ridpkaxd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cnyurxii.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163toxpawgv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163udusrcwl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wiubambp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163shxqotjv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qmktumgp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dhjhapkb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nuwkhhxp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vnvcnpna.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jtnqozya.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yjitwmsh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mzbrxvnr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163engcpolx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rrzooybg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163izxjihem.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hkjoyqhn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163gxqsazuv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fqchepmw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tywfgiav.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ujbeyjph.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163znaykrig.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163atfslhit.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163sjkvjnne.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163swqutfqh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rwlvwxjs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ofkzbaob.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rgxnlkzw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163upvsmvhp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mgjolsnh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qghnpjlw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zwbvcvaf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bzknfgvi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tbkeqprw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lstmzxil.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kzmqmxli.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kpigiypg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vxuamklb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jlgopzjf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vftqzvnf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cjpphffc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163loumvnti.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gymxkhjh.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iteabwrr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qjlvwcgm.html

================================================================================
来源：http://www.aibaodan.cn/163yzdvfgle.html

F. 文件与目录
来源：http://www.xuanzx.com/163cpnlwjfr.html

================================================================================
来源：http://www.aibaodan.cn/163gweomxsh.html


<!-- 参考信息 -->