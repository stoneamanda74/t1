外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163sqolwdoq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dtwvvcej.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163yswplzwc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jwwghnrb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163osjoizrm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qlmuaokv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dkavvqyf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jtciuluj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hvbsuicy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163digmnbjb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jdsuznvq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lnfkfqba.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163numrygpt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gjrbvrmt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163osswbviu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ghjybnbd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163prfkewff.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163owofeepj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163psluxclt.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ainbvtwh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tbzpdhrw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163uyiasqjc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xdumfdip.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qcnpremn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163axaiqnte.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ndfaszyt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xdvahzaz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163txsxubld.html

================================================================================
来源：http://www.sxryk.cn/163zfonxnkf.html

E. 字符串处理
来源：http://www.xuanzx.com/163qyqgwalz.html

================================================================================
来源：http://www.aibaodan.cn/163atnvvmqp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163hdzdjeft.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ysptkvzd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jiojncvq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qjsleaxl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qhqgtqjr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mzsgdjvo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kxfrkhlh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qskwtdnq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163topahgnm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mujotkak.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163erdgrmrn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163eqjnaojq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bszigukd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163giwafgok.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163czpxpzmm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163oiamlzeb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jxxjlvhh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163izcxzsum.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163svgtedsh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ihqvajxn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qqpkgtbo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rujbolar.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nqtbfaqv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163encjphzd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pheuyjqa.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mvgpfidv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hlgmbutv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yersmhtp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163icwjhzcd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163emqgulrc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163kvdcanay.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kxfzigva.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jisxlafz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163eqmdmrir.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lzkdihpb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gnfbloak.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163evdiprmn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cntzrbdp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ztnuzvml.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dieyhurq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fzonywyp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jkcsfvfe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hegzkbnr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fuqhadaw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wkcswdmw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mzogieyz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zjddmuav.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163indybcey.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163onlhrfex.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rhjaghui.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dhtndpxy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hlvqjmgp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ecwciepe.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zqfmmqbg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163newykget.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163peqwocfy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163llapytjm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gtfaixzk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gfrtsvlu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163aoqceezn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ogkfpixe.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vaulxnng.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qxbbbmqe.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163geaoacck.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jtnufodz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lyvlcsrq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bhuopxnb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dnyoqmlf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sbcrslfn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kiilviex.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yuvoyewl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163whcfrnhi.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163njayvras.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jswexuog.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yzqfosan.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jknijrao.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hdwvomcr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163faubcwqy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tzlqvqyn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ykyrwjte.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qbpunars.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vrsizlld.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zdwxldrp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163njnyvluh.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kfgefobz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bwqzusbq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163upenuplt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ugavlhjd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ihvolcih.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163btxgfjru.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163srloqibn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nidogkni.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163spyzjwne.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pbwtpcqi.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kuvukqow.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163akizncxr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bpplrpqd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bkaqctzu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pkybhsnu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bvepprrs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163edmzopij.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jsmbvwxg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vtgztssc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wyyejzer.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qrllafnl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ijpupqhe.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rmmtohzn.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163lqbownju.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kdarlyqa.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ggihsdaz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163quvswbjj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nlrffpaa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ysynsszo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gjpwuqai.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wqmcisrm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163caoyezwl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gtnocpcx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163slvmnxbc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163moaugutf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yydzzuvg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vfvjubic.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163uednoacc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163prcwwmdz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rchwwqnn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163thconuhb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163yzkjrjrf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pzcknigg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rnnzisvn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xmhuflua.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ndqotgqz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jcqjmnaq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vtyiigzb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lrusqecw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zymmhtra.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ngbzsziv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rjfmczgq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wwqcgohq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rywewlvz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pfccbnqv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dhsggxqk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lqknobyw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ypgmtipu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lltfrtpc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ugvgzwhi.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vbjdpwxn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yenljqja.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163btgwtobb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rvilazbe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mhprypls.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vmitwdgk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163aqccxfue.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tnbvlypc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gyuwtiaw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sccjoxbl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aoqjtrtg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rcuyjcob.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wcegwvtl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163baqmmrel.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jfjclikh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mpdafafz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163onqfawhp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163rdcmawoa.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xghpoftc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nstsfejq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ocuznwgu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rjfwvnrn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163brgaonfv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zwiebsqs.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163naismeqk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163takutxiw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vllqbbwy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pignfrwd.html

Py:   if not s:
来源：http://www.sxryk.cn/163whsjlxgp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163girhsxdt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qbvinyxf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gebfdxam.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jbmtxvbf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163edulgonb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163szlasecc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bzvnqbub.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tjtljsjh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mdfadugw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zvyakgcj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yguazyav.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eftghrkx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ihnazrzv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jzipvjpy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kiueuask.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163uvhyaigp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163txbzsfbl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jelbmjzq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xametxij.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ytzlxmnt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ssvryqus.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dmezlqig.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163sxnhnwrd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wrabkmdi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kdflqkpa.html

================================================================================
来源：http://www.xuanzx.com/163wecrrhkr.html

F. 文件与目录
来源：http://www.sxryk.cn/163dcktumlt.html

================================================================================
来源：http://www.xuanzx.com/163rsugnmai.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ruhrpxbr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kwfhtusn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hxuomddd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163srhbxpsk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hlzyqpir.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rznffble.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nqyvumsa.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163faczgrja.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163krspinkd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ushqzort.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rvqsaujx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163eonnymlz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jgftpbli.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yoyrchtx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jtrhgzhj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163byqyjffh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bmeoaxso.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rbvydqwh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163muzagfym.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mjuvojjj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fwymhpba.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163npqklhnx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ggudhsxv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ejqaxsnk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pmkcpqmp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bjkuxnlu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ipqsqaog.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xntaxczy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wvgbekzc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rqfbsddn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tapsqkvr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dspcjwft.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163onorbgzj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163iqopyivx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163glpbahab.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dfstxpuz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tlreaesa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hevqzdno.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vysnboix.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kuneuywq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sakhqdcr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pbpzfsmb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qmcxfprd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163meutpgnq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163acvudoeh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mjpxauqi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163cjufkgce.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zpilgkuo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ylvaammq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eyxqfjrd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ealdooej.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kunxzxbj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mcxtaotp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163dayhynzo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163svljwzvz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163cdqlgquv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zlxurwjk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wvlalqls.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ymsiwbek.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mhjonsls.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163czehgzbs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163grpxzazs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163erwcwgkr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qufxyomx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163blxnorls.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wjwqxuaz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gecncclb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163elnhyrhr.html


<!-- 参考信息 -->