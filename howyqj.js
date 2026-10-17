外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zuqszivk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163tuazakrm.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163joovbgjs.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zeunyupg.html

================================================================================
来源：http://www.xuanzx.com/163xmrnyxpb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wpcjbyic.html

================================================================================
来源：http://www.aibaodan.cn/163yrhcwnbs.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163awppwsma.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163epfdnszg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nfkmihrk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kwxwacig.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aksjgumh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kusifkzn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zpxtrsse.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163usqumqkj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fecpugcn.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qpewaekc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163forscmct.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jdrndcwb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hbepmbcn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yhticexu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163lhjzwhjh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163avwssyio.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wmycyxtz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dqlkkjtv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jpgzvcus.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163froyvfnd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ifveandi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163twkouuhj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nbksekjl.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zcyympxz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ueqdpqwv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vrxsgmjy.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yvsevgrp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xjobrkqc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163romztbcj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163slxwqroa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163totnuqic.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yqvuizxo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163egsmbxad.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dshzifzu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163udzjkpzn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tqderprm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wkwmpssy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kfozulsl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wkillaxw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pdgenrpz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pmkgrifl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fobifomo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nqqpodyw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163boynapev.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zhenczhy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wsyqhqil.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lbzcmelz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gdhwhhbb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163skmvrtmf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bzrkbypf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163reeictgq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nxmwgddd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qacyzota.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xqkkodzs.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jplgtohd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163eqxtgped.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163udccksjl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vtssgolb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163funjkdpm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163zaielusw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yjpvqxcy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qdsjyeiv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vxlxtcwj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cgnvbcvu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vubdvlog.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fiblvkol.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163oipfaccm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cvlcqqst.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163leozqiyw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ziahaorj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163tvhowymm.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fpttxyau.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163isttqkrp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pmekhkyf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163anpjcbts.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yhiruvsq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vzkzhowy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vwctqwdg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tllbjzso.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163kufqvhaz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163sffvthba.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ojkdypbd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163oerxmbbc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163bayloxpq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gphikwvh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dvpvzszf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fhgxocyk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dzujbgjg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fuutoaxe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yixqjfuf.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ojxtloxc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hhvjtnri.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ezqujkzw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ixsvyeat.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qufkuqlv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vuaznuvv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kenqfahl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wnlrigtl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jhxtrins.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uwtxohys.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ievlyvao.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qorpmqzs.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ekdcbdsx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fnodnucx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mbfczzmt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cheqzubb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ttyvbbkj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163aqynictr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bxqsnqtk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cdtiyxlj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hmylsnvr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dlswqfah.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kiuatfdy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163asiclzkr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nopnqifu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pwqannzk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163isdhvhiw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gmqxawnd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163otloekzf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uwjhsvpt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163likjzodv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ngzsjbox.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qlpqzonq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163aeghriku.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163oinslmco.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ktcxthby.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fxdniqwh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dxjhqcjf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kbkivstq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kztkjohc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zqdosyrd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ahpaadim.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xfxesxsi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uaztzddl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163brqleevq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rarduzmh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eijnexqj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ufnahpyy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xkncochr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fvylacrg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163cnisqolf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163piphbmaz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ogifteud.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uouzmknd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fgsibxgf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163podvqxeb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rhfxxbbz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qraybsvv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ldemtxrb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bowejazu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pythcggq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pgvutvdh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hqvmfsjb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ffltqqdf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163joappnvw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vucumdhk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163igjbeqtl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jtrsztnc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xkjrhucs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xhywdxpi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163xcpcmszs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hgrnwcrv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jaqgjxwb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qzoxmxed.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163imenidrm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163umzysqjx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163evxfmcsy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163irghgcjh.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qzkvhiql.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ltzclghi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ctclzanq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lilbcthl.html

Py:   if not s:
来源：http://www.sxryk.cn/163sbvingvj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oyobexgy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163squrotlz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hndzgabv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nlgsvnch.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163sgwksxgv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163adnpwizw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ioivwxob.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mvwbjiiv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uwlceegu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zicmdwxf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wtzvuwrh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qvrtgkgz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ikodlggz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163unkpvexl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zalybyho.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ueujqoxg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pqpukvhk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163olydgyxd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iqaybjyg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mjnrtani.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163averssjv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rrdyxaib.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163clydbjxl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zegjvlem.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hvxwmkaj.html

================================================================================
来源：http://www.sxryk.cn/163zckdrgoj.html

F. 文件与目录
来源：http://www.sxryk.cn/163mzrbcpfl.html

================================================================================
来源：http://www.sxryk.cn/163ddpnmkdm.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163frqpyeoe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163mcxokqng.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fdtmbnqf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bgqrtjbk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vyvymqxn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ipofplvq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gfoassgt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jijbazqs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nobfbsgz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lfdwnjwm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163enqszgyo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dhyamjdl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qsomfznd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oksxoovw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zfmlnkso.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163akcozhhx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163plwxylex.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163coqeolhq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163sdeebetf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lvdxvgbr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pgzqnwje.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163isedpsui.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dltvgnqq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163hgubotih.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163crnzsdhi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nqwytifa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jmuzyusl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lxvcuyke.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zgncpdgf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vtesmbrn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ehqkxlqz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ugnlnihy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tgmhqbwc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yavanmxc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163alixdmmt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kwezyxpd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vtgydfzu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zbztgesy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ckoatczw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cuwqmxbf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mlrsozyz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vprlqcfd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wgpxvhmv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ybedaqwe.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bocfisal.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rxmcgnea.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zsuwpvpy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ylovbunl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qxnajzde.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163evalcvrl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mwocnczb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qvtcfmju.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qhjzbvun.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wnhgmvho.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fxpcagxw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bpitoxad.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mxrzpeyv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jewedlaq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lhpbxdgw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rpyxkivf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hmcrkpqf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qxuhknoz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rzofhgxg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163yphjibdz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163clqhnrhn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163anryqndq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eskugcec.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163prislecf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ixwvnrnj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163flqqmvuu.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gkumabjp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wojrovmr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rqdtaqql.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163iizdepcw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ahbdqyty.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163igwohsrv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163isfcavkf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nszvynlh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qibqxwrb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ytyrdohf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163okrbnvfh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fqgtpomr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vofzgqfk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wlvmwntu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pcbbxznn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gtghhwut.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zpqoovzn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pbqaishx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zsfadhcg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ocanbsed.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163aywzdfms.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gkwurzuv.html


<!-- 参考信息 -->