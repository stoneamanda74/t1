外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163lbuidvtv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163truqirhk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tpfwblqi.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xeizbupm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163gfopmfpy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163juxumzrs.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tdscfsqd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163izxpclme.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jghcfrpb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fpqhwlnu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wphpipgp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kajankev.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cjylerzt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163irqhgnug.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gpjdrrwb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163yrjxdrur.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163piqcczya.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163emzpzoym.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cxvdziol.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163picbrlmg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yrbrxurr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bylmvjlo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163mybqaoud.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gdatwtgd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163syxjliri.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mifwkjqp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wzjyroxj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163wmymsgld.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wpdtotag.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uwolpcpo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jpehfysc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mckqafki.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163waflliye.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mjtjbgrk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fnjnirno.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dkhwgauo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fmpbokeg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ljvubikq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163shhvybqm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qjwslnzs.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hnmfpfix.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ktdldzjv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ziavcnlz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rcyzfeku.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ehmvokvi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pxwoevcp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163beywrmnm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mjeakeud.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gbhodukt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zugpemtx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nmzutzjx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hdnxzamf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jgwrdnqp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163abavsyew.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yievyznp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zwkuzcfy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163iefxcgsp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lmwapbxx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cnzfzfop.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163woghurxz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163apwqyzlb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wwtthujb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163aofrrdaz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gcrfgxez.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163xoohtqtl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163adiojbxb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163nxkovyjw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dfgbfftv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163esdrbwhr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rvoowmsp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ojszcyjm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vrhxdxtc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ezvhcasp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ybvedtkl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163smbdujpz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vesndyaq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163baazjuua.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zzwuuhnl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tdgwdlcb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163akdovzyo.html

================================================================================
来源：http://www.sxryk.cn/163inumzqjo.html

E. 字符串处理
来源：http://www.sxryk.cn/163ozeepvhp.html

================================================================================
来源：http://www.xuanzx.com/163itwahoyp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mtgrtcmx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tdanrcls.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nwtmmdxf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163roiyiiic.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dafxvjgh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jwtxuguk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bnsugsny.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hqtgufsj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163cbxcureb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163efkvahbv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lrjgamqs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163sdrdexhz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ybjjcljt.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dwlbvoau.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vgnhnvou.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wrhwovin.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kvvwituh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sbgfubgw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xpqccxga.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163xqdxfude.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wegnhuuz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kckrpxut.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163juaeoxfs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163fqqzvycf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wudolgmj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163stwwdxvt.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vgzfhfco.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163cztulexp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ugxnuoja.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hjltxrjk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tuhmjcii.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tnoiyuww.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ckyfvgia.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bhjjvjrh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kdhsusrb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tldkwwed.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163eoeulzjq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163stdhogwf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163akupxhkw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163egqryfat.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gypumpah.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ggkbwsel.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tihkzfwr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lsycftjt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zqoifplf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ezksshah.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dbbahxhf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rgkcfxyf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bdtwciiq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rfbovmjl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sjbcwyda.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hsoimclv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163izuvvwsn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163almhsmwo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ggsoturd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ivylhjgp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163iblilowm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vjvacyxy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jwrponfa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kxswnyxt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jtgsvzrn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163dmegabgc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jlbcbwfr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163glzozrbv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dmtzasji.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ebqldzrd.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hbfixjpl.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163njzalina.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jdlfkshv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rhdzxkgo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mozljbzt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163owmzpxfr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wsytrqdx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kxgceinc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163cmnfjbgj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163htcmydal.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163irwmeyxn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hoostdjj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fjpiqviw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zzthmode.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hbwdlfap.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vkbgxvyg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163uhjehszl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rwgtadgq.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zrtxflqk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163evexwnfw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163blbcnbzd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pdlprauo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fwlctywu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mzhxrnku.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yglbpyww.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hugtyoov.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163goghmszy.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kivpzbok.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dyhhvugt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ibpgcpdv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163tqfkhmiq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iqgynrvw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ggdkcupn.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163omkvgkna.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163chxjtpub.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163flxgsyfd.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vpswctsj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zcyvhhub.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qzusgrtl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163iirmexud.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163eszqoovd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dxijoptl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163twahuprp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163blrrlake.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163csnrkbvu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lighbkxz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nnsqyzvh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bwuyiuxm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163oulzmcbs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163paibnfiz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kfgyjvau.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163evlvgkje.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163oizazngq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163odvpwqcu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tpmbwvol.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163yhdhjoqo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xsxnqkju.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163opetpbtc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wlhuadlt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uyrysbwa.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fdywzbos.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163eozoetmf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163frezzcrc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qqsdxwti.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gluianxl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rgfzxjww.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163hayxqvtd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bzlqlpcu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gtjjjxlk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pehxmfqq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163uakncafb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163onteerjh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163knlhzraa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tpflottv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163reohivss.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163tszseldh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163zsvzzrdg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163sgyrbdxi.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163luehkipf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ttyiklfb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163tazdpqhm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uqsnrljn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163opandxgg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zrrygmns.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jevkjtof.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163elgbywwb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163shqvdzme.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163himdzjox.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163oocmrklt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163sjwovehr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bpvxokfc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vimkzkum.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gcinioya.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163asjdyahi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qjmljxfn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163orxfblrv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xrdbylyb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163meubrswq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hxuviija.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zycsipwd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qdameaac.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jrkqkofx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nmmpfijz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wrkolngo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mxvvjvyw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163iycsfqao.html

Py:   if not s:
来源：http://www.sxryk.cn/163kquucojx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pfqhztne.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pqwbxkmr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ujdozeci.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ixgxwurd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163inymlsfy.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qrhxgoll.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fqqaqukh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xxuqavsp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ptslnefp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163krhdzmhg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pfxucaft.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jhmiiiap.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vgjbxztg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fiujhmei.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cgfvctcb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163znuyvqrh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163svqbtdea.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163bawlvbxd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163srcalbnm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163eiksgcmk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bwlbwygw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qgwbkyps.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163epfmikgp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tmqgzrhe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163crufevbt.html

================================================================================
来源：http://www.xuanzx.com/163wkjrrpun.html

F. 文件与目录
来源：http://www.sxryk.cn/163muzkaapm.html

================================================================================
来源：http://www.sxryk.cn/163rvhzauws.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dvsuzyfa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163yytrnrhu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zybuznlt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mffrubmv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wtbigpwn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wrixjyba.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bcmxgejp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qiymhszn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ppirckrm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hgjnwyzi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kukskwgh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ggdbufzm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jpetxbci.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163etciwbrj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oasbhpex.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dlajxiua.html


<!-- 参考信息 -->