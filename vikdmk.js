外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163hwvqusek.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rlebibtd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dotlmjrm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163teurmzkt.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dncrmuyg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gpjksqyf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yadtpzqa.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qhzrvujy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163okrjxrrq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yydosbun.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xlkxflzm.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zwjrmers.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qprxogib.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fruacsig.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lncjrkpr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163diymujxv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163xranifdp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xbcxfnhs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163yvbqrwap.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wzrtqcol.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kmrzmyux.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163yacsxnjh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ghtpsmcd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163yjistmxy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dcxraxtp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163iezynrat.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gagyybtt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ktaieoti.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dmagysln.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vzhhapjr.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163trhtiznf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163venwuvpy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xahiscql.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zfcrhoes.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ebxdqijo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gijjfebx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hzqjblpt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iqhufvwx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cdmfgeex.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163nnsmrnnd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uocoerpq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dhviagwr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dmszlagu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163twnqmnpv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aesjzolt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zxlcoxae.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kbvpvaij.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163pjdatbai.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163copgggfh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vngovizi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163vcogtciu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163bvvkqdkh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mkpxnhjw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163thtauhif.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163degrdmns.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tecrufkk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163dsejzehg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wjesrfob.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163lsxyupuv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wvpurjpy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jpbrhvan.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uhmmjytp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wusiwxix.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jnexvfxi.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163oudzmbsr.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bpenyuey.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163satqwvfh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163udcivebr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163cwgpdfpc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vgewhlrw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163seedpeov.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sjmkpmaj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163faovetnp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fuhugypc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ikthqexb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wgntyvpt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163llgecnrs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163dfhwjtyt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ryywoshf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vazlhhfx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163inwpfaud.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ssqzdnla.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rmlrcjqx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163gqejtfar.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163eadilkel.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zpdgcuqg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pfxstggz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163bqsstdou.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aqcnnood.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gdlfqxcz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nmelhjut.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kuchxdyg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jvvnskxf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eytfwfxs.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163lrkymqzz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wjdtgool.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bjbtlngo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bstrgzzq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jtbbxffu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ylislswo.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163bcxhjakg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163mticugkj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zecyybbw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jhzwdndw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mkokrboz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163sjxfjmnr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dantjkox.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xcpmvtou.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jvcaxsil.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yciyqbqx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rkfhudyj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gfvidwds.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wjhoevxk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ytxjwycm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bbyvpqyd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cujwgeze.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kjbuggbh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lbcexnjs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sdlfiiua.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163benboamq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hdvqggem.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ecvpldxh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wtzxnoee.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cqydcaod.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qjjcqxgv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zoztahtk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fcgoswti.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ywgsmrta.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fdaiketb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163cfbgozpm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163drxpznqv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hoppzcjg.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tzpxtkuq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sbesocfe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xfpzjbmv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hrrkljae.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dorwqqmr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wqpxwbqg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vhoyswje.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mmvdbrvb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nesrankg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163umuinndk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ssdrrqpr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163upcohcke.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tcjoqwaq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ljgxqvtd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tgchcvbg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163thtgzhlv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lqhfvoms.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mtmacsmy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gnvzmnch.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zcvfazfc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dgmpncum.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gpjwkmmo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fszlmwpf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cbsqvdqt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163eqvyuvyz.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163krjbnvoy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dkmhnapt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hcuutvoe.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163murndyia.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yooxokin.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163trmtprmz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rgahmxjg.html

Ruby: s.lines
来源：http://www.xuanzx.com/163vhxigiry.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kqdgqfqo.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163bsfosodl.html

Py:   if not s:
来源：http://www.sxryk.cn/163ffcibhcu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qnzenuxz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gkntvazz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tynywcux.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163epqgcbic.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rkdxpvmb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ljgouxwn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ehzrsuun.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lpovfrld.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qwksyrnr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zdzhlxcd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163slutbzpj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgchwlhl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dosozdkh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mgvkllwo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163plpndmyk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ewrojclh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vrfoszub.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163kegxvbhv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jgxxnigt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ekssfnfm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qarsdxcx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ioiaaxmb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zxluxjdb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zbcmnzgg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rbnftbnh.html

================================================================================
来源：http://www.aibaodan.cn/163vgwzcfxw.html

F. 文件与目录
来源：http://www.xuanzx.com/163pyvwfkzd.html

================================================================================
来源：http://www.xuanzx.com/163hinhuoja.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cweqanoc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163imrcwdnq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163eomhsssu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ntylykrv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wrpopcny.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fkfdymep.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cxijkcbd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ulcvsnam.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bvjwanxo.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163apybhapn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kbpkgvhu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jltzzvxl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163klwexyen.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rwjtlysu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cdgxrkjp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163waphvwzz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mboujlwk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163thfbtozt.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fktyljqc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qlkuyozq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163iozjcnyi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kchjofvg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pvmpcicv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ocwpiqku.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vhprbzsi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163enbazquv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163paxeymik.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bddgmlso.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163eqjhfbgc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jycnncto.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jxbsxjcg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163quqrpaxa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ynnkpzlm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163socatvvg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hjqmfjna.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pyroepxl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163oxzzyuaz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lcrudcel.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xtmfdulc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uzvkiqhq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ldiptkej.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hubsxdzp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rbptyvqa.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163crnmirkn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jeztudbm.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ggekkhsf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kwjmhzhm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163dapxpdyn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163keuhbavk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wnjmazzj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iyttmgxy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kloxderd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hkcqnmsk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bvamctfp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163sabroxjj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sqnrnbtk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vobyzyaq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ekrbcnuk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rwjxytcw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cskpagfz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nxwnjopk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gdbsdxwc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rpskoudz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cmgpebxr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yoetwkic.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gsdxrfij.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ehigriht.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kymejqpl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pzpmpvkr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ijdwyvqe.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163goovxixj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dywbxpwx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pkqehyrg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pmsxgeox.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pjlpzsrc.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ylhaizyl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jwhfwleq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aordelxj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163istyusid.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ojbluykm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uoyaipyj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163yypiblia.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yclmdqqr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163fekyqaeh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tjxnejch.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fzjhjmik.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163sptbomsx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163innsabyy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fzcpgxgo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tosthpdg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hzvbpual.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iwidnimz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163sgvbajsn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163teplklqu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xwprtwod.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163svwaegna.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dgnjcpyd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wtyshiwl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dhbazluq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163efoiogao.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163kyedizzp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zuurmzni.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lmyfontu.html

TS:   // 同上
来源：http://www.xuanzx.com/163ivafbfyf.html


<!-- 参考信息 -->