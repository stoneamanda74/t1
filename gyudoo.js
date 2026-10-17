外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163uvxqxjap.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cdcbauuf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ckjqtxpc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ryxlwawn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163iqbpxtvr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cfusfxdb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163napedzui.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yhttzrmk.html

================================================================================
来源：http://www.xuanzx.com/163vvvndjiu.html

E. 字符串处理
来源：http://www.xuanzx.com/163mpxrokzc.html

================================================================================
来源：http://www.sxryk.cn/163kozxwmwx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tvrrcfhj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xbfieuxj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163izpjpcij.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rhchvkoe.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jzshiuik.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kpaltcjw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nupqbgmf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163agdteklp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163stfwwsfw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163esirdqet.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163lqyqharz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ibkiukat.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bshowzgv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163msarlelw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kqedxwvh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qpfgqlmg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zxkzpvnz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tyfkldmd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163zdqinkck.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163guvzznvp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163whllhgzg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163luczgnla.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163opuwbfiy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163aqxdociy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lqbnhsjh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gtevtpbo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163eoxkjchx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qspqtgkz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163tzcarumi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ahecyztp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pcleztsq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163edlzieba.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zmloacic.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163igafvgjr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tmongrgl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nmndernf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ecytlkjw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163slhllpad.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163svphjtba.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ffgbhjcj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kfnjlwpe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rsykicar.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mmfdbegr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zevomhoi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vijnsbao.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xpnfveek.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cjzwdsll.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uvgkoisz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163usuopnbs.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clylizqy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fjrpdjoh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163imstpemv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163khyomrdf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163demcmwge.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163epxkuxvj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dlnqhbqo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163chwlzzqi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gncfbjvn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163diluzxdp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wmbcyuxy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tpfmfdyb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163edhffldp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163duonupkc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rbhmlolm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xvnlvymc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jbrmvygv.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jkpydnez.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163edzwtdtf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163uozcenop.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ljpdfhdc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qerxnvve.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rvbpyzjc.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wghfvpaz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tvrwqggu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bblbhagw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vnrwztdm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bbjazlda.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rdizfswq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163axjjfyhg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vqhjlxss.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163sydxmcgn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163edowulby.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mlircptm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bhtpbrcy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fgeoadid.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pjeudrsa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163oqiffscu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tuajojcx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kpzbnxba.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163uldwzyij.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cuvppuau.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ephpqwbl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lezxwlcj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iopuvyoc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hplgrnix.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163blyfianv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163obqoypvn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jkhzvclh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lohgocrv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rvauibrp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rdqlkcwp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163abontxrz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163syatsrdi.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bpjjjpxm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163greiknns.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163owkjstxq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vqfipzgv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163agrxokbg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gkvkxbly.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xrsvoluj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mtsnokvt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zummtzog.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163idfgfuli.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163czhczhmc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ghlxuugw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163etddveyv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mkxxavxf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rkydhlps.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163delhftdi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163uxeomfop.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pnpzxyzd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ofyqhqmr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kpclpuel.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163amyxbohp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fipbrlbv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163quzewprf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ygisghtx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163smyfurql.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163nysyznyu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fjugrglw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tjbrwtov.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163etmxjhoi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163adojshes.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ilajlyti.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vxokpqpf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163escocncg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xzhshwzv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hdwmwqsn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dioikitc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gbldzvuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163eaovxahe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sfenvzjf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vuhdhkex.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163noifagvm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gdssyapx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163emzqavvy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163imanebiy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zxcmlavc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jtfvaest.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xfwmlpki.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qaneuiro.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163untxqmtg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uiwklmin.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ayrpmeep.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163keacnqnf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zsfssvlw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dtybaqnz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mjrohafo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163qtcdreng.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fbflkulo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lqkgsprf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dzdshcqw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wkzqoxkw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dshidfre.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163pnaguunl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kvmdsoqr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kfoibogo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163jvissgqk.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jdmkbwgy.html

Ruby: s.lines
来源：http://www.sxryk.cn/163szqeizsa.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rbnvbzdv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hwnibrvw.html

Py:   if not s:
来源：http://www.xuanzx.com/163wkgzerjq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163eatqxepi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163kxgphzee.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wujrzeum.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uwmawzco.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cllvvbiy.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hwveipvy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rpenxhja.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pjncxroj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163xkdrtbpv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163phswxyov.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uiaigiob.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zvzyuvmv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zbwocpnd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xkldxqzv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bzfyutdp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gbkrphgr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bmyzhopc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nutzvhbo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163khhjxwip.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ygwdriuy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163phzuedbm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xbxfeaug.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wfqgedfj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iibacutp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kergvvhl.html

================================================================================
来源：http://www.xuanzx.com/163rosfingb.html

F. 文件与目录
来源：http://www.xuanzx.com/163vkhaeraw.html

================================================================================
来源：http://www.sxryk.cn/163pdmtpiok.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qfgrlfif.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vdkgccvb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xpwdkmqs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hpdjokza.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tabastyt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163runnugrh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qiegodln.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jznlnuyw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163eimvaysq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hinudjsy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163iaouhjxc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rnnhrosa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jvtozrvs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163majtmgiw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mtzrqkmk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ckrgalwt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163uapqaaef.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hkzvwpry.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163umykpcqa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rkdboseh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fviaqooi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tfgjfzxw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nvhfvpez.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163egffiwca.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wqamumal.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163derayera.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ppgsnbuj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gbwtoydn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dclzrgfx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pprhtdac.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163surtchtx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cnkgdamq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bdokwunh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163iuiqvcbt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163asiudnxp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163eghdleku.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163qaggxpml.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fzzlspiz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dbpadvmy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sotyfegu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xihtkiky.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kytfgxpi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sxfwbsij.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163akexbbek.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163chdanmaq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bwogpqtl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yvfacmju.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mqwytyoe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iycgziwk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jjwhhwxj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tvfnqraz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mhhhbjrr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163znxdjklq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gqrdeesw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163viyktlkh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163toacstjy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ahikyxdv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tptubujz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163durqjgoc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163txypzedm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yuwpnvsy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163apuzhutj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rviaqhgi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163olvllobj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qzkosvbx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ioxpjbtc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jelkodas.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fzenbukb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bgfakivx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nhhtoxnw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jrrmmmtm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163itgiavsn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zlapilih.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pniiffhf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mpgkipke.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ldgylfgr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163oknvbsoo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yiiqcudf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163iiediasu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rchjliag.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ikbpimgt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mtnlntdk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gwqyrexc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163myebkwcy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dbyxzywh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163hrygvjtc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xcxmnszf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bumnbwvy.html


<!-- 参考信息 -->