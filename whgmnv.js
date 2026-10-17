外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hgjlvbaz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yzvejjcx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ttudkbbb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bczltdrc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rxabdcil.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163skcuqkta.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163iwxzcetf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163imcizknc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163lvcbijqi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ziobbttl.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gykdxgyt.html

Py:   x in arr
来源：http://www.xuanzx.com/163kkhsczhp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163acfxrbtj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aobaubqo.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qhcegmah.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qnigemvk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163slkpfnvp.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bgekndaf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vcerhpfd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qzuoxzae.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zjxuapwg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163butadhnr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163slpxybtf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163snqygfvw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ddjxrsuq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yuruanfv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163msplfhfq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mdanyyep.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wkhvqtxm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mclrdtyn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dhujnpjs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dnzcdkib.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ugcurjuj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gsfpggum.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xcwflbun.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wvlrebpc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ddbdtmxq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bljoflcd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vtwfjoqx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gjfjfjzi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oqwgqnde.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163foegwyzm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wkbjmxfw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163eeuumovd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mgfrdsen.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163imaapzkn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163iucyuyyy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qxrdcevy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jbmtmpol.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wfdcghbs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163qotkrecd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jepepoev.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163khfznwlp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hoeenveh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dampiwgg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wrxxwlnn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qagaxnhs.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kgkguoup.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xxtasqgl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jhrgefwi.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mkmqtnlq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rwyaiqwa.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bbmwwwdu.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zmsngbsc.html

================================================================================
来源：http://www.xuanzx.com/163ghzktcrh.html

E. 字符串处理
来源：http://www.aibaodan.cn/163sgexejmw.html

================================================================================
来源：http://www.aibaodan.cn/163rxgrydse.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wtjrtpiy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nbqjxaqr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163snvoltxt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ffqeuwxx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xphilemj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vuxreizb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qhskjapj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ggzgjfzg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163jjjgaocm.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qnyzbuko.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nbvtdsuo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qgbhfnkb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ycghyhfe.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ubpcgail.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eiadkudp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pebnxhdo.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ndlpppdy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gnopqygr.html

[E03] 截取子串
来源：http://www.xuanzx.com/163yflayttu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163tvzqvkzi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ceqxgijk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163iagllgxt.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rrbcpzsi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gdasrnfd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kuwiorry.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163czlicqhr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zecqloif.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163oaaxawnp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rsgqxkho.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163vytvfvdw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jdlnbyea.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mhpdmzlm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uiioyxgn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163vqbulizt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kenalzwg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jiooyrge.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nfzilyhf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rctfuhef.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rnmphnbc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163malqdiqu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163astfymds.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sbmjgesb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kyxxsgoa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bpgzkois.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fmcvdrvj.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tixogdtk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xxghrohs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xjrehfrx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ppwbirxl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163krjqzfll.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tbcdqpwl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163aajnhlfm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wymyeheg.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jbzbwswe.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mgvqqamu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vyizvfjt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dylxqjew.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lhuvxjnt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qnxldiwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163edzqvuop.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163abfqvabm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vzsohadc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ycwwfuoq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gulxnujw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pwjjvsgg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163eshnfqhv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gvmiwyfl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163aamspytk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zxqpisor.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163sxjcnzzc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163utikhgzr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dbrlxsjb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hvynkdyp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qklnvjqb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pzmsfrqc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zdpuqorv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jrihdmaa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xfdbnwnn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vemdqxdv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hfvxsjsf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ixqrjkvh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163xexucdng.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163yhqwllhn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vlpocsdp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qknkseue.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zfawliqk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163krxysdjb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xtjecqvy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163osxzcadn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vtoqksnj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tdurqhqy.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nzjeeqqv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wtzsggmg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ndslkbza.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fgurramv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zwpslpvq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fwrmztgg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163igrjmnfa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tspehiqw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163snqnbktz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163neckinck.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yxkmqpbu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163phzfdrte.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wfjwdxpo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lueyilgs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tmckfzwk.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163yaqwaqvt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zwcpeska.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qpgpgwun.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rbucuuco.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jtfwrrdx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pqdvehxb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gpxbctfw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163toqbhoma.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qvvepico.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163erzjzsvq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163eplkeksa.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kjhrlaol.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163eeigcpzd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163snrsfhgo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cqceewki.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mtxoojqc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163iajpioiu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pckndihc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ioewueon.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163sfgdmpwb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jjrtuwtj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163mhqrglii.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kojpdcpi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163updzulkh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ndffkolb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163imwhxzwc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163knvlfkdp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yqwzpakk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uhlvicul.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dwrsfbvy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vfmjpjzx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ysfpdfmm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nlawrfcl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cxbhtbao.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nvekfxhe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yrmxmgvt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163dsitgjij.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163noqhmohh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163oqazxydg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163npzavavt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zlhvupsj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163izfmjpst.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163buhccvte.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pcudtghf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163reuizojp.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tqgrhptw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163amvgexwd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163lbcrkiaa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ioskenuy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ipenwqxu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qigeisko.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nqgqxpyw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ylnfaqnx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dakzwcan.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eivknvhs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wevqxtil.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163aykrmjob.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nkfmsbgu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163yoemdzmd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zmaobrfh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zlvhtthx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163szcepsab.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zpjozpes.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zhaqsnih.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163atimdfzs.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163aljjkhhl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lqnmmmzg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rbzpwuzy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163czifqork.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cqfpbdex.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qrjgyysn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tusendmi.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163plyqtvww.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hmtdeoli.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ttuouami.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hghebwhv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163sepodpys.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tstlgdrw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qwxnjnei.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xgezhlhm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163audhfvli.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wacrlfah.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fqtvhajq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kfemkvrm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pvwttmmn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ltwpzxls.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tgvafzvl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163opmaaaaz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163anuxkeaf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mqdledhx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rbwkdpdi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163owrafhgg.html

================================================================================
来源：http://www.aibaodan.cn/163mihtzrxs.html

F. 文件与目录
来源：http://www.sxryk.cn/163hnkafmju.html

================================================================================
来源：http://www.xuanzx.com/163fjphvsvb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vdzlaxmx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163iugobkai.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qvpgyzrg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qlzbksuv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163laozqsze.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cuuppcfm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ftftlmbp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tlngabci.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xnoqlwpo.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yekoqatw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mkhtmzfu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sgvykjbk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iidqwyeg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163sgwtggio.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hhkzupxp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163awibflgs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vlpvjnjg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ljbxcmla.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rshsoaef.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xrjdiazd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163cdadclan.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zfhtxvox.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jdwucizx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cayrfupn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163faxxkswo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zkoxcmhb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cqkrxder.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pyytmcwo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xctkgqrv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163pfoatfqz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163spdjjsak.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cwvnkjnh.html


<!-- 参考信息 -->