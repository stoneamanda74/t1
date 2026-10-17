外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163znnmlupc.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jashmado.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ueofpnuy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163cbyvvvqw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kbiknupy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fclhqlxf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163evokqikd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xpsaxtgc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zkivafii.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163euhynndi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163urcuampi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163njqndbxt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kdjleesl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oynwtklg.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oadvwxdc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qrusgwqb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ookxrgap.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ningoylm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163behmcdpm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gzayfvix.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tcewcpxl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zucnrtcv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163edivbsov.html

Py:   x in arr
来源：http://www.aibaodan.cn/163knxjytnt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xwbfhtzf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qzzsuzdz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mufpexdx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xgfhjmqr.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163sylcslob.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163akcgcspr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vztdodzh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nlrheckk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163xljzozhg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nxhwqvzx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xjccsthf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mqdklwmk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163voteqhqx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163sbquotik.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pbrzqglh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mvxzkhui.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163edwhksco.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163svykbxwt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163thultwls.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yubaxlvg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rdjqtaiv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kowirpue.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ufgfcrlh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sdhbnxyc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hdavkhir.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163opdlwtsl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163eysvsowd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163huyrsnos.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lxajclts.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lvfrfmdg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wtkeuqvd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mpjzoamb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wwwslkxp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163axhcitwg.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mmwcqkjh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163cxptxefe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wrpgmxcn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ogduoynv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vrkzzvol.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dtwodfdg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fymaelxg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163axlmgzbd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163foaloffw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163gkkrcmgv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fvwqaajj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zphchitr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xfpblptf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163nxpumgsf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gkkyavtd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kqpslyol.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rtjjcxhs.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163foidovyg.html

================================================================================
来源：http://www.aibaodan.cn/163colcvtpb.html

E. 字符串处理
来源：http://www.sxryk.cn/163okuawudb.html

================================================================================
来源：http://www.aibaodan.cn/163ytkqvycr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zsjwoxku.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163eqobrigf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fsrgdwwh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vcrovkuf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qgsblalh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163decnubgl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bvgzdvwz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lknqrmne.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163cgzfvgdf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163beidhugl.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163aggabddu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163okhevfin.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ivdysjpx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ugboxzvk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xskpxepb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hrcqofpo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zkwxmakj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163teleevev.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kbqwjpik.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kwbrmqcf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vxvqipwp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fpfakymu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ocmyxyeo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vqmvyjli.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163dpzsgrru.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pyyzkmmg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cvnagldx.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bpgqqpzi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qwjlrttm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mtruihrk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bddahlry.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vyzghipe.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cbtqsfpf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163icxjusvj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pwvhdmwk.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163kkvctpwl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xmtowxcn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163upnvfcfh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163srkpgrjg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vccpmhby.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nhnigwku.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kumnwciz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tzfpypxv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mjaeurnw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ynymrgpa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163oufokgyd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xrapfuqi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ikqhdpcs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163svozitmz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163belnltug.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163omsgashw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rpmxkncj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163tbnexljg.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qxsvyhat.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163clpewjxx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163lbkszlob.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hgpaxmgz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ipjefegs.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163inhmczve.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mkhdcpoa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163yirawhqu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jadlwljk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163raeghrwq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qvukpgcn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163oexplrqs.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pawmcnxj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mefxyvpt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163mklpqjxm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bzfohxwx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ooacdskh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163vhajvdsq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163idtimkbb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163uzedghut.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ykhavejn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lyyzwjbr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ykzlfsxm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ldjianvj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163yraynkgl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163osqlmrfc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zuqaluwn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jqvrooek.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tszjglrc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163sqyuygzq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fsydqsie.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ajqmrqla.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163azsvnwja.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163shxdjzaq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163iyxalfoa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ljuxahmj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yrfnxoyy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163xzkqtrsd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hztmkkns.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fjvibffc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163oewqqwsh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qtzopzqw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xzvlogmy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zrmujuya.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yfshviqm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yrxxjohr.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xnmozptm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163yawslpxk.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hrlohxsv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oetsbvqu.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nyxjbtsx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163werxulvj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163umljnhad.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gazlzpgg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hymnjgob.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kfjmwmve.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kfcpjduw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jwnmnlsm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jdaovatk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gtueapao.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ejukgqsv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163avphufly.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163blqupcdr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163krkirpop.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mgmcioam.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163runqsmlt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hqkofgrt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163igryseoo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wwvcnnsq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163flvmccqe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163drfsmvjk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kfedubzw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jthkqnkg.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zvvhozdi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163cqgadwyw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qukyrgyc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163otwwgcyk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vopqjrgk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ocmxgdaf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ouzixfel.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uaosnfue.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xuckkzqn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wcyfcwfb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hsndvvlx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qhyquajw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163crgdknzl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pduvqexd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ulnlcaeh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kolgcqzz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mjpsotww.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163roipsnxs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163dqkqgzug.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163qowhqhsq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163enwajzfa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kaikarwe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rzlfawzp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jtjynhzm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163elpcwmxe.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ilevsizl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163uzejvwjp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dnrkmfqk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dvtqmbvx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tgukhbek.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jjejgsvu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163smdqhoez.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163oceqbvab.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rytberhc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163abdiuiyl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163momiibzn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cfkvxfdn.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qibfovns.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kafeieos.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163siygoudx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wbymwprx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fkyycspj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163dxmyxogz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qtacsnuu.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dcxcprfb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jtxdgdsd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163owbcwbuc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163neatcsqp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wjbjezob.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xrjtilsj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ktexzjdb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163axjtyudu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zufxguxg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163krnfcadj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kssmhzrp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qtqnvwyz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xqghkcab.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yeikiuuq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xffmsxbz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ebajmgio.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pygeefya.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ucjwzghr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cbpnumxh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163irubfxzv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tzgysiod.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uslbkwwm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vyuydrey.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zfayvsot.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wzjxtxkl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163phlestzi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163iohmzsxb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ddiokgof.html

================================================================================
来源：http://www.xuanzx.com/163prezaozq.html

F. 文件与目录
来源：http://www.xuanzx.com/163rfbdaqds.html

================================================================================
来源：http://www.aibaodan.cn/163yddghtre.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163jfnrloqw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ykadbkkp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163cyqwuqua.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ggtpcszg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bhodinat.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jhteerox.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jpwzwegh.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163dqwlgqxm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mypdgtmd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cnugbrup.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vfyryuip.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xyvdlkwl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bpknyakj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yuvdcsfb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163srukkfrc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163espgluel.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163syinfmdu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zzzabhiu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hmqgdzlu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163hmlleaew.html


<!-- 参考信息 -->