外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nhmxqlnw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pcggyour.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163eykseybz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bxngrqsd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163poguomgd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qvilgohl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qpbbxttw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ugwqruee.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ickktyia.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vilsiezd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dswiovzg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ypybyuwb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jcgcfsxz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163yjhwikhp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pqoarwzf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wexqtqgr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yxhlrhru.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163oybjeftb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cbkexhcp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dfurtqjg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hpnnpaas.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zlwlvizg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vozmuesk.html

Py:   x in arr
来源：http://www.sxryk.cn/163oudfuwzt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163cgvetdwg.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hjplzwof.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zawaaqyk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163klyzlyey.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fvvibgbg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163iqjfmnpq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yaqwzlor.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zouxyjxu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ebalkpsm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163yiuqqadh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163swmsgfin.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163piszekgh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lzctfxrc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bubwtqyu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ctyzsckv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hozmdiqw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sratucrf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163daqadxds.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gupbnrih.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zaxdjmap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ybkqgboj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mhlslvzn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zlhucwia.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zjfexvqr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tvaybmgc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163whmwvshm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jnukqyny.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jqjxxxea.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oqfjqnar.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gpguocpw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163btdbuird.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163eujdhgrl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jbtzufze.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dctejuii.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163inpleuje.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jjfmjzxw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cwtqphsx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163hbvnflnu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mhpgqcgc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vwwbyigs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dekjssmx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ldvuidmm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163imyhivaa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sxdnvtkr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163toyorjkr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pqbmtvms.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vsfaveuc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lqqrqgaa.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zndurjzf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163uyudffco.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ecxhsefl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ubgvzqvd.html

================================================================================
来源：http://www.aibaodan.cn/163ykveddqq.html

E. 字符串处理
来源：http://www.xuanzx.com/163jgpnkqeo.html

================================================================================
来源：http://www.aibaodan.cn/163ktdzvaos.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163okqsygpz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fdfagzvx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163muabvmkm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lrwwaelo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lthtmqpm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163yqntzuyc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163smzjsfss.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wumzitwk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163owwtwgce.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163kxtmhhtq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qgyzhwus.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kpknomrx.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hvmogeww.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xcpycajj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163saojjkeo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jtbevsjv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jtpqzczt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163roadatze.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hxwjxsla.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163btzknglj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163mhnwcpyn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rzrtbfjy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163totdjsjk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163slknclqm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163seadiwpz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qotzdyib.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163denksjwn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qsiwpmzh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xozuosbj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ajlnrvpj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bwguhurc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163pjfvdqyi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xrnlpgjd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qdptxuqj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mkwbjnlv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163whqualls.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yzaawafa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sldempyb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dshxwycm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vvlwyiwg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yhgljvtb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ulveklkt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163iuxgsolq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zvsaveea.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163vuiiicsr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tbcxxlqb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163hfzkbvrx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wmiclxfy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dmflsqoz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ubverloc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hennmxbt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xuzqyrwv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163eluvcbls.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yetixjqd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nojvghrf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qbfaoawn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gejyjveo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wpuyyvwg.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tihbzlkl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hgvjejvi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tymtighz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gaevindp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lrmqhciv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qxlwswmc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wacnugtr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163puhapilw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163urkkipdn.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zstuwsqs.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mqjyregh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ukwwjnnn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nsnbtybn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wjasrkoe.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xnieghkv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kagvwaod.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163piwqznez.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hdpgagwv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xssfqqev.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wbpkgcks.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163cdkcjtnf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163tgsbwxzo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163sbwfvghu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163octruwgn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163maevvwzq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163blzagjyf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163etgrcxhd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rwnerfpb.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163llgghovf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zlnowtem.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163icqvnkpz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gtnlrsww.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ggfmeguv.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163axgyvuta.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vyhusqzx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wtqjjyyr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qsbmnuue.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ehtiqeyu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lazzepou.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ugdcuebc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dtofvnzb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bwfjyjxb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163netvstbf.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hpxyldpc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wiqefhgt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gkvtnrgo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dsqgtofw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zojztoch.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ziovzyev.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jthqjvow.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163crmdkund.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uzsiiuff.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lurqnflv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163glxkjpyt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163iywknsfu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fydagufa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fyrvruuz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zyandukh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hrxlpadd.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wtxzkief.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xywggrde.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vomxqvqd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ahjiuuiy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zyoyvpkl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pxfphlzd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hcjuvpex.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ihiqrpzq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pwfrvepe.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163lzdvypqs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163budcycfp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kndkhung.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163czbewbzb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nwhcivrk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wzkfnjmq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ijjbcamk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gzkklcsd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163czymcxuj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nppmffls.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jjthkfld.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tflmzlrv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vjxncwgy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wprlcafd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163sjxmhzzz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tiqnpnrd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hklxvkhi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dhweuxxa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hwqrfepc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ngwtffaz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rmpxncwi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xditiuyd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hmpedpvf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mlacpvdr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bsedfpyr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163enwgvnrs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hjvddxwf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ylhtgopj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gdarxvwi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ohgpvjsx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vltvugno.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ypuqqflw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163mwgugxiu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163glfddecb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qkqjehnq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163aqmhzuih.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jpyzdepw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lcnmfffe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cbyuqcau.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cxbpnezg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xjndhwcl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163exwhoksr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163isidltss.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xmmcgghh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ibyyxmxe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163iboqulyz.html

Py:   if not s:
来源：http://www.xuanzx.com/163oitvzujb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kyoxbyzd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163uratuniv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163riywzpdk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zwaherff.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nsxiydkk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163eeefmera.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ngngqpqk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zihhvdab.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kqbvsrcz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pbnvfgsd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wmjttnad.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nutjfovd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bljbqgdr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163eookfdzt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rxmnxzhl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vdyowfkb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vhfxprwz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163poufzvyc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lwxzoeuk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tszxyfzm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163chnwbrfs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rszikmzq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163miuyvytm.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lkjaenqp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163htffhnha.html

================================================================================
来源：http://www.aibaodan.cn/163bdomxyfg.html

F. 文件与目录
来源：http://www.xuanzx.com/163yfqjpceb.html

================================================================================
来源：http://www.aibaodan.cn/163lltpoktk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163khjafepa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oqusqhlb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lcegmwdx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163dqlpjcer.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163onzimhra.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ioivftka.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163evwdmszu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163azdcsxnp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jfnsowaq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163akzqykqe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163uomarkni.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hqfqrgjs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163naqlagsm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163usaonwjq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pijgzrvj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tomcbvrn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bsulggvv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wroeqocp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yjdkfdps.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ndytgoxs.html


<!-- 参考信息 -->