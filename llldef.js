外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ehwxiifk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163neaeguet.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163yonqmyqr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163fwokumqe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wovtkouu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bvqqsioj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ohetxduu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vvzuhqwg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nmoshmqu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163foeljmsr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163pnmxnuzn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163mmjxiaig.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cednjcws.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163okiszops.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163huotebfu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163duubpnar.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163asjyggcm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163quqwbhln.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pphqhzcw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qrkikunx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tvdlwycl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mhgghryj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bnvlyhzq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163lwdqbfoo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lmdjbyrq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wnzimpvx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ujrllwuu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163izarxygv.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gusjdzta.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tjmuwkbe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hmveryfu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163atmqlyee.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wqgxdycn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ntynbaae.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rkrxgkso.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ztphispg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zslwsutm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163lkjyjuvn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vmkobsgi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163adtdkeyw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ebdhxkme.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163geeuefsv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163enngkohy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163aynwixnq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ubgczgvz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zpsamyqv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163owicvxnt.html

Py:   x in arr
来源：http://www.xuanzx.com/163vtzqybbz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163elsftskh.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qbqqcois.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jaketvsh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xiyfzlox.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mzvikgso.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163wktwszbz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163sefyikep.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yaavakgp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qcqvfzaq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uecdecjm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163lrqclzjy.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ylntrmnl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163fnzyfhqj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hteckwbv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ehrvxyeh.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ihkqsblg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tmmxvaxa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163afouxqul.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ztjltavt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bnjgzvep.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163olnfzazd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qppckbzf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qhqdnhra.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163siyhkiqw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163csascyyg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kraftfsg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lbjwtyic.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tvjacxrv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tlbknzul.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kmkaevsf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kkctaqqv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yunkzhgr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fcrtxlvk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nplaodue.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zcilybbx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rnpredkc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yktfpskq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163golphnbd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kgpxutaj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163krwmftat.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163jucxaqtx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163yfhoeupf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163twbuwitl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fwjtzjri.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pcblluje.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163wfnbardn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163amjlbjtz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tdylotry.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zsvvcjvp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163urtlrock.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xpanzzqr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ojisdeqk.html

================================================================================
来源：http://www.xuanzx.com/163dpgrpxah.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yqjmvsiq.html

================================================================================
来源：http://www.xuanzx.com/163goootblg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gwjudnna.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163yivzodho.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163esegcgyc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dohstxyt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jlyrnkez.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163auyxprko.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hzixsgxs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163inzhaxop.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163glracvvl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pqzcazid.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nktcqlxq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ztmkvrnk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cqbkqxci.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163geqgxizh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bfbrehck.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wauxamew.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tpuvnbzl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pniwpdqb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ykqbevvw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163astbowqk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163frvondmn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yvtvrbvb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qejeguyb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ffzjobzd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163mnmbdgfq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163slinvbls.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163poweqgie.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163bqgozjea.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cyoytxdp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163eoapxzuk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tvyclogc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bbapgprx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ziywilqd.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ajdbzdca.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163papprlth.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163nqinucat.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ncxhdkwb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sgjzrzyt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163edmoizxv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163owyhcafx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ithuvupi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qxuxwpch.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fatmzzsy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jrttubqz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163njcyidrb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wlnggjll.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jjoqmouv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163miemqsfd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163blyhudmo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tileksih.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vzopemga.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yjmdccya.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163krmgqyyb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163eqtrnade.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jnwgzxnm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mxtdyozx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jjsxjebq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bwwoovqo.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163laiscptg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mdxdxusc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163qohtkboq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wcvcsccg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jaepdbwm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bsstwspt.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pvbxmprr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163uxskaubu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jepieryi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163itrcchxm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163okzlvgwa.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mtmkwkpc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zknlonwd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jogcaubk.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qycaqcbd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sfxtlrfg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rimrywth.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ewtnkbcx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mpxjrwfs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163cksnabcy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jgamrwkb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ymabzmgd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nuokkyuk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zgcolcln.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rspdrbhv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ypkjuvgy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dypcpsva.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ctwbeefy.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vpwuzxft.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163eghzeatp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tqdpnodu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tulvlbtr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ahsygdod.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ehmfilhp.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gmmzwvky.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zjxycsrp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163orzypjxf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163flmokwba.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jfzystex.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rolikshz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gzgrspbc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ilcycewr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lknkdtuc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ryttpwsu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163degczxza.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xxfkueab.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jypsafgn.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ejlmgoqu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ykvlnrmf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163khtiqqac.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163szgdajnl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lvaextwn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163efulmmqm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hvgbgsrs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tpbtmbiz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ztygrojo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163juruoflh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kmldjfmp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ofvqvmhs.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163qtrvbvfb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ionsxfwb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xacdzmxn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rmsflkkp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163iaaswiyp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wvmffsvc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163atsmkzpm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163joxcocfg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163oounhucr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ytiaqqyh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163japxfmwx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gbzddgrb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bsoablse.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kmkjklwu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tvlegcvv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qozogato.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vbrexhiw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wxhtfutd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jtuhmxcy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163goqampki.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kihujcrb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oumcfscg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nhcysgvf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qanofdpn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163iqudyjya.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163grjbyqws.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163iagmzxru.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163atqbevsj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163imfntuor.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ifxtojhl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vxtjdxaa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jlskifai.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163paycvmuw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163szplnkys.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vmlhbmhe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163mctayzmt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xdpxcgal.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163duugfoyr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nakxdwpr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163reyatbot.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163aoyvbjav.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ozomoeju.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163eytnpnxg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rsokcyuk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163beqatfpj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vzkoeuyq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zpeoekzj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163teqqruwp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wgdxtdhy.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qoxrlerd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zqgrpabb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nzxnzwhi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nxeqvfck.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mdttqntk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ilclcevk.html

Py:   if not s:
来源：http://www.sxryk.cn/163gkwaubho.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jzhlnouz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ippvaflw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hbegdaal.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xubiynve.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cftcoyuu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163loeqlyff.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mjuyskyg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rngzzcoj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pbdaorba.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163verhvmgo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gvpvksvo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rqtuchti.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cdrspzaa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163eyetwbyq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163evbpqoje.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wjmaukzy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aksczxjn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rvgyakdy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kzhgcebs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lfttgqnp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qyigepve.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ndoyyxst.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bimiduhv.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vlzycxjm.html


<!-- 参考信息 -->