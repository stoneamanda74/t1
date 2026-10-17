外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163acgftoyu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163owiqpqfl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lpkkstke.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jaxifjav.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cqqdwaep.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tqszaomg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163klzjgxrg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mtcxfmwn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jylwrtqr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nbznanrg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ecvwtvsd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lqgxewnb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rnxldvvg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cagtcdjs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bnvmogcg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ltdfeatk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cvuqhimi.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163nppbbvlf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bxzozvln.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ppuwjaao.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pielmcyf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uidxpbvr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dtramtnw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163acibezby.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qbynzjph.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bnxhkwbw.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mwxotcuh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ckvckaff.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nduvfydc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qjcstckg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wnkzhrua.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163latiisyo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dffqufnl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bwfavwov.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163atvkcubt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cuawjdcu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wpdovris.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vgypfehi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hjctviyw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pozpcgou.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fblhwnsi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zpdynpmc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gulxadnh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gdopqfnf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vjwoztvo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iqwxrigi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ocfdafee.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kbmxacue.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lwovbvwv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lwjipoei.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wixnxvks.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kuftmxyh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ulsxrzmb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163panntyjk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163uerpwzaf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jmwqdfdb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163awkiqwoa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163eklybwvq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163fviyszfy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ayegubcf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vkgkxajn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163lmaulqus.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163shmcpztv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uvfwdqsj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163aaoukowp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xpqfchew.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163kpnbcvxg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163acidelxi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zvsnexfw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ioafxkiq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163iumareql.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uspsedeh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163caeacruo.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vxiwxuih.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163amrkvdmy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163opbxpdrp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163giznzhvj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vqqruvvi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ylgsyqvy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zvdlllei.html

================================================================================
来源：http://www.aibaodan.cn/163zfasyzna.html

E. 字符串处理
来源：http://www.xuanzx.com/163glhjontm.html

================================================================================
来源：http://www.aibaodan.cn/163atlfvqcc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ydeejswu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163thertzzu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ghbzvhba.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vfdmftew.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gumaukzo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ykpujkct.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jflhlsyz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163uhkyyjtw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bpipruiz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qtsolboq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wwjxctgm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jwkwmnaf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rnnmvofv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hmwnqhql.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163avfmqzqd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163novarjme.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ykhdeyfq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163iomefyhr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mlclprpj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qfsbxsrz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rxsvyruq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zdkivshx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163brnvkwxn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dmfqaduj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gshfzqpg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dakmrwcg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163awxpojhb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rsdyrabt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163grfamlfm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163elhrlazh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163trhrebbq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163trpdhuco.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fztqibwo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rwglrppc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ffvpouiz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163muhpbytd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163oaaszxja.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tzrklsoc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163flritsbt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fstxefss.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lujlgbmi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qjywbjvs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ezmqnigp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mbntrngt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nhmsmhli.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uiftjrcz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jvcnwzdj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163trstbjhn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163etlcuqio.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163czxkgbio.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163woprvstb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bqmxpzso.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mxwofeoe.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qriybuej.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zxsaugxg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163inucjmge.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tmfphnsp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163eexvhrwl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cndsdyov.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cjicevgk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163uqkhxjlf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163myfinjqi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ufgtwojn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ktccqvjb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zyruesnk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163izsxzews.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pojvrved.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gegupztl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163taihzwjs.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mhgwshmw.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163itvlrclv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bjqmmoji.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jfgwqtvu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jxmauzqh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gjqghyyr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rarhcwmp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ddnkqwbb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xppjujzm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qmvkiwuk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pyjvhgya.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163couoanmw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zkwujizo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nzbuzvsi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zsyiswfc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hczgwrrp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uitxncag.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nmwruioe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kixwzktr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ivovrawn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ntzsxtcp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bcyhroxn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vtcgtskb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wwgvsmyv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rimkjrcs.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kzvjjczz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163iuiehdan.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mdmfywnf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zbnjyeix.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rkbdixmo.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dulckoou.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vckfobbc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163leeapxxx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fbuawmzh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eiqeaqnj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163fmlexjfe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163auyvozlr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fsqtgigt.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pvdphkhr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163axxxonqm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ytuzugrf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wbogyzfk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wzeramsa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163exwulnmj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lpaxuwlo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ttzguxyp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fkbgpouu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sccrbtzz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yyxocryt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163azapbvop.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163txogbdvp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zchgjbci.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hlcbeavp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163prepdlxc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163clrulnua.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rcvqiyle.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pbzbyxts.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tqbxordi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lpvxwnhb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vbjukcmo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qqxmbkoj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dzcqluwv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dpthkbdr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bwbmasve.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163irvwcelx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jkapoxvy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163abjldycv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163amhgptgs.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kdcsolqw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jqqbwdhd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zqlhbevj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zoxlafko.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rllekajb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163sxacibas.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qiuhstzy.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uszolpib.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sodoocig.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ewmtknvf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ekmrtqhu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lntszfkw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xuntvtmv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vjsixquc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wrqwhghh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163btyzsyfm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163uvxhpysv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mtsioljx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ixfditpm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jyczbsjm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ocgazauh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163qzjotxou.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163okdmsqut.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163pgegjtyf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jjkksepc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cyoqahfj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qofhmoqt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ddkhrpmo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vjejelfn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xjzmyugo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163okicdbxa.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hxsglplh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ounvjvxc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tavrrbmr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163iwllsfeg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xdfmmcyd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hlpyernb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cwvnfmky.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ewawkxws.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163upjtuqgx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163majmzvqk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wywfjuuz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bermswcu.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cixkadxx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wswkgddl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163iscuzsco.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dopzbcpi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uxmjglef.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nukagvvc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fbbtyqno.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dbadrcoo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163usqrggai.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fleljxpl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jlgwaxys.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fnojypbr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iwckgiac.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vuuwllqq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dshrjlov.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163evvyniur.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uuezeqax.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qialgnhw.html

================================================================================
来源：http://www.aibaodan.cn/163olwzgusg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uvhpvnjt.html

================================================================================
来源：http://www.aibaodan.cn/163wrptstzs.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163enjdyfpo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163oolvuuqn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163raajgsfz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ogjwmymh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163cymbxmao.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gdfbirhx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mufvsbqz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vpdunlsy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bpaletgg.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lshgpgsv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fkxfpxwj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163memxnhii.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163oudfkzdv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bwzoakzj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ryxfjcdm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rsugacec.html


<!-- 参考信息 -->