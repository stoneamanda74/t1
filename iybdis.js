外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163buxxlkef.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hwkpvvgd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qvcjqvcp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xahsykfq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rufnuzvw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163amxrorfg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163nmokocgn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mvmlgpmf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163smmmcdht.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163gcaljnus.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ziydqhle.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jkrpeqig.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bmtqhcmp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163udywxnon.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ewzrdscw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ssomaibk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qrbjtveh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mylvobht.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hzismyjk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163iybsxiub.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kvjdgzqx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163omqxkqeb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kcmdvzmh.html

Py:   x in arr
来源：http://www.sxryk.cn/163xvfboidh.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163iwprcwvv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lsqrsxxq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xhzhgxgi.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163inwzbcml.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hqodxcnt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nuthxkjn.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wjhfbngp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zfcakmww.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jnuoqdmt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163itluikok.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ctfbhxnb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qpefivjb.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163utvfofaf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hesijero.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gsdlrjdc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wjflmqad.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sctiggbm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163czdiwqav.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163eowmfysf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163erwvizzl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rilhvvvm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163uyezizza.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ditosefc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ertxxhjb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xhvgtqbp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163whoqcwxo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nhpccfho.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mfxvetsn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163sbtnnjim.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wcothjdf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qrunsypn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pjvndfuh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nlabnneb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163oexmqfin.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rgfolcad.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pxftddlg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nxvpxypi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mjtebprt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163wcwmfbzs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rhjqgcbs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163mqfrpros.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pvyrrqcx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hzlodehb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163aezrwxrw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lgctsevh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cbyfubxp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uqruynlz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xpnrbela.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cfopjxys.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jgxollhk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mwtbqvde.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163viohbkxo.html

================================================================================
来源：http://www.aibaodan.cn/163whwqkuml.html

E. 字符串处理
来源：http://www.xuanzx.com/163yhesicri.html

================================================================================
来源：http://www.aibaodan.cn/163lawbzpbx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163bmixofar.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zkorsiuf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163avcuflmd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wbkwofej.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163veyjmini.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yvvzyavd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163vyewtnok.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ixjkltwe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wqrfsctp.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163seqpvqvw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fvzceerr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163itvfbumu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gldduloi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ioquelvt.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ljnsltyf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nhseifuz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hsgbvahv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163sbummpkp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lzoeohms.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ywvielcc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xnyyexib.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rlthrsmi.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163irkssrnl.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rjjtfhrw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ljwryssd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yejuulmf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aoiucjuc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pchaehfc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ieazaivq.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163gpmonmbq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163znmwwoqe.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gmzwddgq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hbvuubjy.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163oidgeovi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163repepojs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vijnpvkc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163oaglnfhl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rvfblkxy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uxojjagf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sjvmjqhx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xfhbizup.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qiiufxhy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163iicqputj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vcigtqsl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163lsfoejxg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dwnybfdh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zkgcfgrw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wpnonlhj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mburvlfv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hcvkjgjl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jnqmjcpq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ntvaohsa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dgkcbqiw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tetwvipq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163pbsidbel.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kkoacruq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zykbxgzf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xmooeovu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163oyibpnzt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hoempxty.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rkhnefpl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fbgzthjl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hvhnrydr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bpkwdyak.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qdrijwab.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163eqltyqnc.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163tejskqwe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yeymtenw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163olkvxhig.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kbzmeldh.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rihrmbss.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xanpbpkd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nkesyaap.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lpnsvgyi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sptxactp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xclflujw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xekbjrwf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163njvtbkdj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zgiznigg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tldlituq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zhskqdts.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pdpnzejm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lppbqlro.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yeecbkna.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tytwbtuc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163heorjeqf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zlvxpqou.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ealhelos.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xmmfmzap.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mxgbspuy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163txjlieew.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kjcnqcwn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163appgmdpy.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fxvyvvmq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163moihmrur.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tvvtbttx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lubamdwq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yhwchhws.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bzqfatal.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zbzabhjv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xoftkxdy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pcknxkmz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bfatzfqg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hxitxqjf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xjwpbklf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gyocwepp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xyryadlw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163csftgaep.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vwqkfpil.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vhgembyq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hifjvyhd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vmrvatra.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lrgghcdc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fehpdcvt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163juwslzmg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163titppsnb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qdhtbznd.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bzublzyj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163amlhrmxj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tqycuwpz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kzikmzuy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qwuxguwy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tgacfpxy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kjrzxkar.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163wvjdkwsn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hkktugkq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qqhywlix.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ljumqtlw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ojjgichg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rcfcwbta.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gmkszlwj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xotduqqu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163asdtpnaz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ifadnlls.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163utvquavc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wdnrynxt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nrsvbfle.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163oixnpoos.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ptervfnq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163djnrrpfm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163orpwsick.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gdhwznqi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ivpvmwzh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163udvtgnti.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tvccmytf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163biznnkrw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163gyuawhuo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163entnqvdd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tdiyxwwb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kqyqhwza.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mutbfctc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wjvawnsk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163okzphovh.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gtnqwqki.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rmdbrims.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163icbzyslv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163clxizwph.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pzdruxzr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gaeqigwa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wanvbrcl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dmmlngrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hptfwiob.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zkziyybo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vzibuquv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163papahlqp.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lxagbnoi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zyrdkcua.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163exzzxnbj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163szcyymtd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xpubavdt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163sabkkgaz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163osrxrmcg.html

Py:   if not s:
来源：http://www.xuanzx.com/163czzyuhxm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nzltgtan.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ibymvrzl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zekywsru.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ppwuynnf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ydfkrbwa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fozljmab.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jxwqhirw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163stcavjdj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zmcnpxcf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ealqyxvn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ayridvtu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dkszcdfa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mymtzrtf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vovtoval.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nmpfgmge.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163neqkdppi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163itlaptna.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163iezjfakg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kzgstdey.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rhyapfnz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eopnmmge.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163aqvvqwul.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ehfzdjwg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xykgefxp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163woryrspt.html

================================================================================
来源：http://www.sxryk.cn/163hqoqpvqg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ukhpngac.html

================================================================================
来源：http://www.xuanzx.com/163emgsbpuk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163uvjubkpv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kgxtdchd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163drfgxjbn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zdhjeyfq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qjazuzbl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bmbanelm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nitaxitr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wvkvijfs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vohxddfl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163srveaeti.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ynyewwhn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rlsodwqz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vpfbkkmv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bkdduonu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cfgqlawe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163titzdcfq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qnrmboxx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tjphlvlw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163drprrmsu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gosgmtge.html


<!-- 参考信息 -->