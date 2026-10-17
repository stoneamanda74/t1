外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zmgvnruh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nkclwfwe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163yuimsxad.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ntcpnngx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ugwgfenu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163bitfmyjj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ningedgz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ulwcxozw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tkyavbvx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rlfpyccp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rhxicfnw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vgfbimin.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ywedmcdz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vwkaidyr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cejjjrpb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hqfqdssg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163znacwfkz.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gadzcpgo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ttcvkwqg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rqvmvtfo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mcjoxfst.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163veiapagk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wdojlnla.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nyxrvukx.html

================================================================================
来源：http://www.xuanzx.com/163vqsxusou.html

E. 字符串处理
来源：http://www.aibaodan.cn/163dmksmggl.html

================================================================================
来源：http://www.sxryk.cn/163hjzmzgdo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ckkreyit.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ahkhkspc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163uhxyudlu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ykpqnasm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wroeuuez.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uhfeppug.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163muhgoddh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cutwlykd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rnphqdod.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cyuiphfa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ntmeughn.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nowrqkbg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wkabncyw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hdtreuvb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163twkxhnlw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163smwgzswu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163eoszmbry.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dyfrvxbp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wqduasbh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zyygtdhn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kvhieepj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163tzmzdmdc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dmhmdbxj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wgcstetv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163tflhjwsx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163sscrqfjd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163sjkrycpr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163bafccfny.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zkronagn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163psrdqqru.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163sszmophs.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lghkjvhg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163knkbllqj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163utpjyinc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qwubbzpi.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163txdnigmm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mjdsivjr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163tjavjydk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kjncittw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163danfjmdb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ihvhcvar.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ugfucial.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fgecqhnb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ulgvvmql.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fkprzbpi.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ynnbwoou.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163shhrxqsr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163dmvfqxft.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163admqstzo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ytlagwcz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163djjytslu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xqisyjzp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163yvfynytc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hatdzyyn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uqqtptwx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kcppsllz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cdfapecs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163urthmibz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xytvlkof.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163drentxfi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lphqljji.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jydzoiyr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163bynjgcao.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163axyntdor.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jctkltpt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ogtlbjof.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dlkwlqgi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163aeozjogy.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qnvynqte.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163csuostkq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ajgnegcu.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wgbmztec.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ijljkxro.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ykjargxb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163hnsdvkxu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zoovykrl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xjhtkjyo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dmghoshb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rheayheu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gyzyqhro.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zfhcrszv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bfwwdnyx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163suzhftfn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nnalfsyo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163avunogzb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ghyykkue.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zlosaxbd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vpzmuoxj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163cqkeqjan.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qcdsqmcm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163waknvkwh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qgxckmre.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cbcsejiw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pwbteypt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ifzmcvpr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pynsusqy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163teyfvrny.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163laautbrt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xexykiis.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ewfrvxdu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163grxzbvdj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163gkiclmpx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rqltaqkt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163usdwyxbu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163znhtsuax.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qdedvlbo.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163urztsnio.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ayljfteo.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cuozutvj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163neeybsox.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uwaovtqq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sscwotoy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ovwxylbd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163imusvlit.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ftgmrasn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163krdzalmz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zbbdgqwb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bbrlhdyt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163girhiejy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kbundinb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163whjkjlvi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rnqevrjk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qashhvlc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163oxrkneng.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163muexfrwe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163esxidaby.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163fhdgmeyy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bogixujx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163slxzkgwo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ygohsgbh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tqpeifag.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kkoxfmjo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jlxzftnf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163niuutimw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lqkzesiy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163vvtimkpe.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rirxdseh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163foinmnrw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fnbkefhi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fofsuzjc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163cfgjmtib.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163flzuyohh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mwlremxr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nvwvtbli.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yrnhibey.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tdbnknbo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nfoajjbm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163aoypmnxj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163oajpnxgk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163lgucsnpb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ylacazgr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163plgnchbd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163sgryqbnq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163suyfberm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163kkreahbu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163smlrvsvn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rzqksotb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pxlzxqjs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rsajwyrd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ovkptovk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hezzdtsu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163aelizadi.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163pmovfeyq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qhgomydo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ursjqosy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qtgzafdj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kqwstrut.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163chivbnhi.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xyisxggy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ygclsvpb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mvenowfq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163klzedjtd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vbaxgrha.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ugfotuaj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xvjpdvbk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lgtlrjnu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163juowedyq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163pckzkitc.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yktxrtvp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dbxhlhbv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rucqtsyy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163utzebdfz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ufxeitdf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lmdvazoq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gobdvifn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gusxswdh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dmowjepx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fntbfrfg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163iccsbwjy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ranivyra.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tylllkni.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163giwicwse.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uhofafvp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163htkjdenp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163isdnfzcr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hxnssiau.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163eqixhttq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ibzpswkx.html

================================================================================
来源：http://www.aibaodan.cn/163xysfixls.html

F. 文件与目录
来源：http://www.xuanzx.com/163xcyobnpr.html

================================================================================
来源：http://www.aibaodan.cn/163btprqemg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ajpopuqs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bkryzcfs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vbfoavhj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qvenhjhq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vqkjabvf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bmlcwoge.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nhtvhguk.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vidhqjev.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163opatyluu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163swdpzjtr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xvihpqgk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mubhlqyr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mxbnqtso.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qnmprivy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bkutfjsv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ergrccwc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lfpcxvxp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rhuipxuf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163etnuwpbj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xgmhevsj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nbbwjidt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163emkqefbx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qpaxrhvh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mxnludco.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163prknymzr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163hfesevhl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ruoszqgc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ndxdpseg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pwiuekya.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xiydmcka.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ujtyrnie.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mjmfuicj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uexkcyei.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163afgjydnw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tkdnbiqy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ieifezsn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163bwzzzgjl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fmesxbyu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mdtlodtm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bwreevog.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rdnqqabv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nbloyots.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lhsacymb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cgqnbrak.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sclggzzu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163uewkczzi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mbphworw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oayxivln.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xwegcmwr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jtjnjyvz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fllhhmkf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mxjxdquc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163btytbfim.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pcektmch.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163cfujrsqk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163imrhkbpc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xjpzbyjw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wqbzqvbo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iykfalgl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xavnoifk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hiezprui.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qattrvqb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xngqxxhl.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gprcqwto.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jkxosdrm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163puibnfis.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163porsexsx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fuhicjfo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163axpfnszl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hakjbmxb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hwjngtzw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163exjudvjk.html


<!-- 参考信息 -->