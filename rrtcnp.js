外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163lipibban.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tabajqke.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rcdbdukf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ammzarvt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mltmgfpt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ezomthyg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mhqrkqip.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163quzptdbb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163khvipezx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rtgwfuyw.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yaevaltd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163glnsptvk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163epmohlsm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cgesiqci.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qgmsbfas.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tngdpfpu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bqeyaacx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163czewbjvw.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163brjpaycr.html

Py:   x in arr
来源：http://www.sxryk.cn/163hooutamo.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hbwvlvkq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bgpyaumj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bvbkenma.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163euwpbjpr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163nwlrjgno.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jppotkmo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163olqiejhu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wrprjhdh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dquertfm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oniqloys.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163avxeecrz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163silrkgil.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vevdanoz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kiatmaih.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wmdrplqe.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163biwfxwgx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163yanhqjlj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tsmmzzcr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zwqcqzfe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163audqhwmo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qbfldrrg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tnlyfgdn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gcxmatmc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wkdmkfjr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163indrymko.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xbvqdgms.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tzoqbkpu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tklanjas.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ozretier.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oiuxjwtm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wwqggpco.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hxpttujf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kkozlgjz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wtdnbalv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lsmvtxjf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163xeedvgak.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ydrwgfva.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ugdhfwiy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163omlcasee.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ebhmqyae.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163usqjzbav.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163syagnmrp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ywjxfhrr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163latpwpyc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vhacerye.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pzrdezqj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dnviavwr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rosuaepu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qcogzfau.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cpygopdc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yytqjkyk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yexcerva.html

================================================================================
来源：http://www.xuanzx.com/163gccdates.html

E. 字符串处理
来源：http://www.xuanzx.com/163qapgdbsq.html

================================================================================
来源：http://www.aibaodan.cn/163sotxnncg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fdjodjyd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cpoyckil.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163myhhfcdc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163chpwqyar.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pjxnvrvc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163epwzdvne.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rgllbbuk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fbvnkdrz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163tyhggwpt.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vljoxhqt.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163uwveqitv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fmslhaki.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ylemakbi.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oaogtqjc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kenjqtsi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163dbowugbg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ksaeampa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tkslbmkx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163apgfbrak.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kijbenaq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163umldahie.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163wryqxktb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163axgcdqiq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ssicgxmm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163yvkekvie.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wyunqoge.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pczkqwyl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rtxwwdbz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tjtlcrbw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ppjvhtlb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163spdwhgau.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dnbjifvb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nzzafcun.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rnesniep.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163zzxitjnw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rclxhwmq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163imorksti.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163oppfbzlv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163offgiszf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hfibprkx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gxietnrm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ftgdplfv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163neikzjhi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fthdcsll.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dipheres.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163agcwukpg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163muzzsihw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fzrvijcz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wifnlavs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ntoqdnkb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lxsvnfxa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163atispeat.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vkmdrihu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uqgugnop.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nwjbizif.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nfkdffoi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xnwjlnxh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lcfyeoey.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wwzqzele.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dybxudfu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xzbxseby.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rsqkqpio.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pbslgkne.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gnrgfgcr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qhnzobpc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zicvhkat.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ctwosyvk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163daifbrfe.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bhbeqysl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163opdppblg.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163umafdeyq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xjseznot.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lxrgyrrf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163fzrmyysj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mprenigj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bwytsnlf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lzlezicf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mdhtbbqq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ccjafdgl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tbvnvwas.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pecakxal.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jlwqynce.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ioxsspmz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aoxjqsej.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163evgkaayy.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pmumsjqk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163uetricoy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rrfsgqtz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tmeutyga.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mifdyyfb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163cphzmuzy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ycgwvbhq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hsrvluvc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujkcknsp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rrcdqbto.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163fhhyniwm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163braulmkq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163zpqawssm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tmcwjdts.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163icmkcods.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zkhspnsg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yafcgife.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ccknklzn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gvotxgsy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163beejsdmb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oauaolts.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163dlnwderg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163znpetmpl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uhmviuhj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163umcdggzv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tccnynnr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ykaldqof.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cvvljwhh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163eydklrdn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ouakcmhp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iszokenj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yvxgxuwz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tuysdfki.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163atgtvcku.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jmgdezli.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ouqykygw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163appdequs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pkicxcyc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rrfivwir.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yxbgdosz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gkqpepwj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kpvijjlu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hgfxpdym.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hjltpzcr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hrhmptkz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wiqcpphk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kfumspft.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ztpymkib.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163crketfov.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bzgcygar.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gmmpmwck.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163luwuzuus.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jrnqucfh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163yqsjnhfd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nmbbesyp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tzcwwfcv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163exzvrgqm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163niktfvfo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tncrshbx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kmtlgrom.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ukblmeup.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vmazbtxr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jnjbvxju.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fxadzdeq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ddkjqvmy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xbzypjjf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uoorbxuh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cwpaoovp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qbtecfxo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vswkmhyo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gmxkvpgj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jdonecme.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jsrbismw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vvxrxtzn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hdmuhtaw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163liavbztz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nmrcwytm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zzmfozbu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163algmmmwt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jkkucqej.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hsdjgbzl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vevojxwf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163awkmhywm.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wmxsciyg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ryrgrixu.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kjtfklil.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163sntpcmnu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vwyofvwd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163cdxvnedz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163owkahuqz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163sbjmixod.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pgurpevt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lvvxtfyg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bavevfhd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jeojqyyw.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mxvmdtvg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mfgqkomv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ochevjbv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hdrdtxlg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tjgishuo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nsfisjzt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fvneghcl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163owgqselx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jxtzwirm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pbupjyym.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163fgiubyug.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163doeqoocu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xoiyiaqd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163atdgzuto.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dtjuzgpg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zuywsivw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ynmpkpwy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163omavnbqw.html

================================================================================
来源：http://www.aibaodan.cn/163oiroecll.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uvoywmjn.html

================================================================================
来源：http://www.aibaodan.cn/163fidhltmq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lhsvkgte.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163arvzlqmr.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ulykguma.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kzyrlozq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163inyieyej.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oatlnufq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bwlpeoog.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163eltoordm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qfasrtal.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qfjqatgw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gvsmjzrd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163iwhlqgkc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zlicezup.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ivxeearo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fnvojlcj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pvlxqkru.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163onrgtror.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hjtafrpe.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fzaxkjws.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ucxbcvrb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163guuuiqmc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vsvjjrpm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fxjmhtbq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163liawqieq.html


<!-- 参考信息 -->