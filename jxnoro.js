外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163awegqnnw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163uaayonqh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qpsxixzv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163lvojtcok.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ldubxiyx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tahpsjrr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163xuizhivw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dztvqdtn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vqbeqpam.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cfgqqyfn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163praxtkpc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vrgfyopf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kfbfjhwk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xhhpkvkd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rpoxhcov.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qdnlvtsh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kfnswmzq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163eovrwbhv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163avjplrru.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lzkazxcv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aqwvibnt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jxdalqpq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163igcnthbf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xzxqizqe.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163gedqbzcu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163khvafuym.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ykbmprxw.html

Py:   x in arr
来源：http://www.xuanzx.com/163cmafpvqh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bzgjlren.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yoprmwli.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yeogzrpj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163sebnwieu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lsixrtgc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163utyycirg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163riflstnv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163oroqfbmh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163uralmwoi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hvjbotxt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zsecsjlb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163akbvifvy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lxylpryd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163escablkb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vyhtdmds.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qzopgqwt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gfuqnurq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iegccetg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163iqzdezyv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lparvigh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kxhqxczq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ahpzxnpr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163annzotvx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pervprmk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163kjxdqbmd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hqjwbmld.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qwqxndli.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ztxwlhxu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wxstlgya.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kfhtqizq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eknnhsbr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163oghhlcrw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vzdowcrt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rmmmuobg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xdnudnnu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yyrbvloi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xabxyiqe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163whpvumxr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hyyvigme.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ihnbowxg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gkfingzy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nboikvft.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ismwomrt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163afqinivb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sulfffpz.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qmxmknom.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ibcmdven.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ghfoqetv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jcbakohe.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163safsduei.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zuvtltke.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pwkvxteu.html

================================================================================
来源：http://www.aibaodan.cn/163uhiqsrbf.html

E. 字符串处理
来源：http://www.xuanzx.com/163rhxdhkca.html

================================================================================
来源：http://www.aibaodan.cn/163pjrapglm.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163rfpmyrck.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ryykpocj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jafpcmwr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kenhdhss.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163isrcwddx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163eglsygsd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bbrltflw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qyinfpki.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cjmiwosv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163deybaofz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fbxsxdab.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kijikvam.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jqbtpjsp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iayvmkea.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163baniuytx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wjxxdngf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ejfhoicf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163khvolqja.html

[E03] 截取子串
来源：http://www.sxryk.cn/163cowsohcf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jtchxwdl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163sdnylswi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ygvkkden.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zonejoit.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xoirvlhl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cmillppz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zrsdbzbu.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wyqfjbeo.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kaablddo.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kiqrzhdf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qmbedjgf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tgndxkif.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163drclftxw.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163eluyefba.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163teyydpau.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tbkdddro.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lhxozglr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zvwbvpov.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kmafjlen.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163siapzzse.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ysjzbfwh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163aslzvbrb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163oyawetmp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cxmsnxfk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ekuzrnjg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mrdtxyrc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163colarbrn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gwcscpdh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163aldvrhxo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163upkssupz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tiazpsgk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qcbgacwu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rzpumjgo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vybzgbri.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lloncire.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163evpfgats.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pvzvjwyy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163exsqnemq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hvdmrusp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tlnbiwrl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fzkspvyc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kdraruqy.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lnchvmem.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163puchwjjx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vfxofxrd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gnhlvwhh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tcjwdreu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dhnvkouf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zvknszge.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lqdmkqek.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cuiveuyt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163exiuikwf.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xuixycok.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wudaafqq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163srutiiix.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mezukbhw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163durarnmv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nxyiaitg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kozpsueh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gzxdcazh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163psitxlxm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tfadytkp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hrjwzepy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wdpgpcei.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wszohgax.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vdwbuyzd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163itwhkvrz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kliyuuqy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tgcezfdl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kzbkfpyg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163awrvlbrr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163lzjrjcqz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sjrivvok.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yodqdayt.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163grvsofge.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163emvzppee.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zqgcevap.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163alreginu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dvoyfuzo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pqzkpmjc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163otrdumzt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tfsltjam.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ozejrgzl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jddqfuem.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xsjnowqf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163abwritpm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163fbpbcypk.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163lckvpxxf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rfhelefw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mwttxiae.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163udjgogpv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hohohxxj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163caymmbez.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jqrmifkf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163bwnanglr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163iwkxrrss.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lyxxjqnh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hfsenobf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163safovevg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163chjsxwbh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kcveyaiz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ecalugvd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mwmcirts.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cidysgox.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yxaldqdk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jqyvofme.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163oismjput.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163npmngtxw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fgadoxbg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ybavocju.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jevtpgzk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jybgacel.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zfdrfiaq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mbttvyie.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nsmcutce.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uxolyahz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xrfegahu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dmwjhzyo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wggpawjs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vxkjvjoh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nfqotoxa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cmdonisk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163maorwrfy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163nhlcnenb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qsnjhrhd.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nclaicwl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vfepoktw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163mjqqibdu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jmuzylwk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dnkrsujn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ytbqhnsk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iepjzsvu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aqjclyzu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vumkbekq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wurvthws.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mcucactu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kxqjfsjc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nmjgkiui.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tdfosgiq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163iekpruyk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rarbzeiw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iegbefpp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163unbzkekb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cyciiedt.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qjtxxyig.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hfugdpus.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gmealhhu.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pmmfvzaa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kamjxrbg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163cmjurtda.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rycbjejz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lryjbfxq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zzpxchph.html

Py:   if not s:
来源：http://www.sxryk.cn/163pcxqrvqe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ufgtqvej.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xdlugwuq.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zkboaljq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ugunbxas.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163epnlobga.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163semizcps.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163tilqtuox.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163etxlvhdu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fzymsxmj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163emxoplvo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nlzerkpg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163laazbllr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yenyyvuk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163plhkfzmn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cdvrxjys.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pphdotnt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ehohnvbd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jifbsijp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kznxhiro.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wlmnksbt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tiwvlibt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163oopupseh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wmswzefb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mammhbxx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163oexggwyd.html

================================================================================
来源：http://www.sxryk.cn/163jeuyacfv.html

F. 文件与目录
来源：http://www.xuanzx.com/163uvjakjcc.html

================================================================================
来源：http://www.aibaodan.cn/163goaznrdq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dzbyfwjr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gbfcozlf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163krlrbxkp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fvcxthyv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163shqbfaen.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mzetarbx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163muvhyskx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cnqjhrmp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qfijznqn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163gozqagvx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163puzstskx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hywgxuno.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yoqxrpue.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nylgvvay.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163awkvubyh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gsbewoke.html


<!-- 参考信息 -->