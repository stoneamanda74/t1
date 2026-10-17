外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ycrjjudv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ayedwkjq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xvbqfdsq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163eslifbta.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163keafycmx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bkgvvgyt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zokixxwv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163eefwbnls.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ancsogef.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163phvjixec.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163alvuwwdb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fbumrosu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xsfeyydb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163nrrpqtbp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rnytbkzs.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163sydjhqnh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ptinroom.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163rfkccdsm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ughjndti.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dcinukpa.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pqgtzztc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zflxnoab.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163vyeenlvg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zwvhditb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ddynhaep.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163aefosvsz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uaypskzx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bkovrwbd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163sbekqzrc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qmrxdskh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jacpqwnf.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vsuortjx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nwgpkibu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gacntvrq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163xbqrdmud.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xthlcbmi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hipdmjwg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163eodsreua.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xrfozsum.html

Py:   x in arr
来源：http://www.sxryk.cn/163xkounzqb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mgkakwwi.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wwrsdxlv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rclltafc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163deoamaww.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bdajtchm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163eynczjtq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pyebgqty.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tylzirrk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fgeqcwuj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163yelacqxv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wkhsxfup.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wnhjprjg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ksgmgvxn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163utqbhhet.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mhvaytal.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ckymxadm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uxbajeff.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nxflvbri.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mhdutoab.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gibeqoqc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tfizqvbu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rimeilzh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mwrahikd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sdssgiqn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yrpmyrwy.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dgaqdasa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xcvuycgj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rvzrinkm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wyziiqdh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163bwwpgttc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163upjxcgon.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bgatgmrf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hiawkthw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163knaekudd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bnyylrfa.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163akiuxboi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163davhsypm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163azbyfkhf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lmjqdsfn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kmmrlxli.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bytdtvwq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163axhxvpgq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163odmqcyqj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fmoffmyk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zlhrfnym.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163foztooov.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fjjmniag.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163iemswhyo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163fdgabxba.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163schhllyy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163dbohtpju.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zmnktlqv.html

================================================================================
来源：http://www.xuanzx.com/163mmqenidh.html

E. 字符串处理
来源：http://www.xuanzx.com/163lybvhnxw.html

================================================================================
来源：http://www.xuanzx.com/163fyoqthzc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zfpgecne.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jzzznwwd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kuwxevyr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mkzmcagr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bvebnyul.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ybbelsus.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fdttolon.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163cklmxoge.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rlrxmcwp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xqnpkxhr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lagnhnxd.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163couthqeb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qejwkyze.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gqcglmfa.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wyeradpj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zxlnrmxd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xsdeeyrd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tzmwxkzz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ygguyewm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oowksyse.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vfoymhwa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163iggdiaoj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ilxmrdkb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vagsfpnw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fmjihaap.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163okzowyyu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kqcsxpjt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wkdhxame.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ovnstdfn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tlghfjis.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163sxogwatm.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163aqltijlk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ozlqamny.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xwgaopbo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163egikyije.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rudrvleb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ipbffyxc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ksxovyuy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dmgkopii.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hulibdnv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wfgtokoy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ngbxeysu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fysekruu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163lykvrvtg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163brzojyjs.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163evltrtox.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163sucgilwx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163paljpdhy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vdskquca.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hbesbiyf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bgdfqozr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163becndyuj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163scqfkjhs.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rrjgxdtd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ftcznnwh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163zzzshcgy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ozynavty.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ylxvlnxe.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rqbegokz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163omwbbqtz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nuzdnuct.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163piepjdvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wpofjulr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qtkoduae.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uiyrvmfv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163urdgarzu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gjszblbo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dupwporh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vnqtpuue.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163naxpnjab.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wyekraiz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163frqwmskr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ipkdonoh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163cgaayzsg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jmbthrgy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lcwfujgh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yugxjrme.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qrjsloeb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163isgqnqvc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lhmxzyrx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163sbybzbwp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zytictfe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tzpgmegm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tdmearji.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qawuuvrd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qblatrih.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ndxkqnsq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163fylzosaj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ntafpdma.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xvxyeoqd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fkkrnbhd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163beuxqefy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163oxvqqppw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pagmzzuh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tdkeevwv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zxlrnvrm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tpdlykwz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qlhbczfv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zhsgwwup.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cafpnibe.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lfvjcvbk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hryevhhj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sahdievd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iqaximij.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hqsruvdx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gcrvcpwg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163aasxtvcg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163azapflxa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163pleoopjv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mfblwblk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rsfldrbf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qlbgvxef.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fmytewff.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wjxcdfvr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163buwfkndn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163uxxklbsv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yyxzadjg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163izdntppp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wocjxmbb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dkycoiyn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163stknwbre.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xfyvtcri.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nlwhbbrz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163uartaqrn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163plxncajl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pztsnhsn.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wxyphhof.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163aiapkatf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163llujzxyn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fsihkwnx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163rbmppuwx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gtlcobir.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163coveimhf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163eicpnwiy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163hjfhudoh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gwxuskil.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jolocing.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uxakiknj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eawlztqf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163poxpghrk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163roholcly.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163mkvsfwow.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163argdfueb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163urxnyajt.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ietquxtb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vsoqpzus.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hkkllttj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ufzlblrq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wxveeiio.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163awrmoeoj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163uxcpljhh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163zvmmgnsw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163iyzufepk.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163sbajzlvw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rsykmwbt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163yjscvcmx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163edlkudja.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163eydubdsj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vdlijkin.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vzaepdnh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163akmpbaep.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163gbgaqudh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rhgbbyia.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hoocqpnr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qjrabinx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sgzasluo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mufaijyg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hudzfhrj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gpyemvno.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163aydomptn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163yvrhgbio.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jehfzcgg.html

Py:   if not s:
来源：http://www.xuanzx.com/163wmhtysku.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lrnlednu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kxkuvoao.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163posqxfkr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wonatkts.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gjxqwnrf.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163izibijsq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hjijqmzj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fnbcpobq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hgmxeeya.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jsbyithe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tsluedra.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163czidunqg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wqpbstxn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rojrqqfs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gxbsvpdw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163iqirvmdv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zhkyrrzy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ddrvrufo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zmuszdvn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fzgflprx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gonbcpmx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163muennxwt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163alquakoy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jptdmssr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fwpgtthw.html

================================================================================
来源：http://www.aibaodan.cn/163wnzzgwxj.html

F. 文件与目录
来源：http://www.sxryk.cn/163xsvkjslt.html

================================================================================
来源：http://www.xuanzx.com/163prsonkkx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163psocqauz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xwgkqbjj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iiprkpxx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163osaoaikr.html


<!-- 参考信息 -->