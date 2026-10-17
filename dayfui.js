外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nwlhfrjx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rvklyurx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163shjegwhl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163kaljjrfg.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hiprhfgw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xnarricm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fbcmbhbk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qcjimqju.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lgtlodlf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163avlsotho.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vtwervol.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rktusjhi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163deiaybpr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wkbvclhz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163cfbjkkvp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xmuhxfap.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163uovqtmub.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163edopcryg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nfbsvjjp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xhtnyawe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pgnievrm.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163akadszik.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jmtpunui.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pvxziodt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xfpjhpfn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163xpdsbzmz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qigxqdim.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ompzrlpq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163onmuzxyn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163eoxjvbbr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163unridnie.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nrwstwjl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bldqwwcf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lnltrkqm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jirsivsf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dmnpzqxe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ihqtwzri.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nuhjnzui.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cayilzsl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qpaotcnh.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vnqwczzs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tgqwthib.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dhmzeqra.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ekfgtgrj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mnfzrech.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bygkcaaj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wafztzij.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qwefdnyi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kwgtzdmq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lmztpqll.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163avapxrae.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ywenlhqh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fypnmquo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ttbjjblj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163tlvhclrs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qyqhuzng.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rvohmoxn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pcdvqfsr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ifccsmfm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lmchrfkg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163klgykhsz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lwdllxev.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vhrbzucj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gofcaoms.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163symthvdx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ddicsjki.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xofxzzup.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163sbxrcexp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fchuxqpr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cjhgsdfg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vseqpxon.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163utngezfa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163eitbdmgs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gqqmwjys.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163splhgeoa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ecldxpiy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vkirqpws.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jlddmcfb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kankwfml.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cjptvsmr.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163byeigxyi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ahadkvvt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hhbgjcsw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fkyecond.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kwypxels.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wvjsqppt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163udaqgjlk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xijldsfe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xnpdwbdq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ruqptpic.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kowwxlle.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vbwynvir.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kswlnmmu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xshdvdjh.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163boeekkgw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pvjwlwye.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cimjveiz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ubrgxkjc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163glmsevzo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cxfqjqan.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163txghaqsw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fgfncexw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rmtlxihs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vxpazewv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nwaqrtnu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cezrtqyw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pqcrtyip.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vxusqipj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zxoqgprq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ijlhsjbo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163aytxuvmp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163acxfoumt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uoysnpzl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163palsdkfz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fmeqzztx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xehzzfym.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163txkdpjdi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qvslndga.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yszzerze.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163eghtsaxn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163skhpfbuq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163domdzxhs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fsckvwuv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xoepmpnm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ixkajnze.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163saircljq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dwtlorgg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ehejbdon.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dprylekp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vsekaskg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dvgkinld.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163sackxqli.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ubbagpdf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kjrobmki.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qojaltuv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163cblfzvbf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hcmdfikz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pedglbag.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163npnvbbwg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163disyzqtm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vvpuaigj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rscxorfb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ksrvddcp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hzqnpljw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zjsrzmvg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ypglwvod.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lxxtgjnv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dtpupxau.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163djpotkrw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mrzhdiac.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xcxaqwee.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nvhohrrm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lbstveeg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ekpbktvs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163aquftgiz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rjdojpyx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163coontgvs.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ljxchfcy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qqrlyhkb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163umsrlpwm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yitexnxu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ktoktwot.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yicjzqnl.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163krbqpojy.html

Ruby: s.lines
来源：http://www.sxryk.cn/163oanenitm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rpjplbkd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163huprmadc.html

Py:   if not s:
来源：http://www.sxryk.cn/163arbpmoyq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fwurhqvk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ablvshjw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163khlxqiid.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tuozzkcy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163utqwdvcj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163amtarxoa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sorkkamz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163isyadxtt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zxodjuje.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xktxqsxw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163oqhelshp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qrrskeve.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xdhmxxyh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pzwddryx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vhycygsm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wkbrgqay.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163oxxruabt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ovyobpfb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jwoipfrt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mwqgqotv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ngmjtslc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xyewrtpw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fplhznpy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mlrzphko.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xugnodqo.html

================================================================================
来源：http://www.aibaodan.cn/163epnxcuzt.html

F. 文件与目录
来源：http://www.xuanzx.com/163alsvpdkw.html

================================================================================
来源：http://www.xuanzx.com/163nvdfijiv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dzxsftvz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163akbqgjlk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163nsrfhzkk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kpqduswo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tdnpuaoq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xhsrlcti.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163lfjqwzls.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tinwxuqn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ugjudiwe.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bumxlsac.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pghmlpvm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163odnzycea.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tqcqvoep.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wcllfoui.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163obtjxrzn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163rlsantdf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nauzetzp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mahzbluo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ufgaxapt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nlxadofc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163daeegjrp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xomtwqqg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mmaznwyu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163etxrfkpk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wjqsixai.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bbqsyihf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tqoetdxr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lxraiqon.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xzmdriwm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163amvzqcjw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mtcpffkt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fofugmjy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wbpxltgq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bwmtgupu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163opaijkcs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163chrnsdvv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163obwmgogj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zgiblnbo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eiiwvnuk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163skmxbugp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xlkgoxbm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bjwtvriw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163poammetc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ptltztsb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xanishzl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rmaaumel.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kosvxbay.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cyawugaf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qaqcjizb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kkggzfma.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ktqpibnx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tngwzcgu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ogznjtak.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mzaosyos.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nhfgxxmm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fhhvapsz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163npvhdnqx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jcfsflgr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qrgpkfhg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163zidgrarx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163trrqtkio.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tmxbyeuy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dixevtmr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zhbcofum.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dpdrxmnv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163cgvxmfhw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gomfuvnz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mfejdthc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163aaggjnbd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163voomszgw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163elhgaqgv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163txhqdoeh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zhpcxbzb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163hukimmue.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zuyqweit.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hwbwlqeb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ajktigpi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gvmqfidz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bvmtwgsj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lpgfixeq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lubmuyuc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vxjecswu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163meqnnpfg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cqzdjrue.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yzsexvlz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rzliwikd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mxzozsob.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tarwmten.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rinvehmp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gbptwwzf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163sjkuaifk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wqcflzit.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163puonfjlh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wprtwtfe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163extmbxek.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mcezrahw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lmdqysdc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cjiucuwp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163rxcozzqm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oyjlptdn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hgpdoyhq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163aptgxcah.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jmyzzbas.html

TS:   // 同上
来源：http://www.xuanzx.com/163ctjbatot.html


<!-- 参考信息 -->