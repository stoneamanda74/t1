外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163vccdpzsr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vxhmiihx.html

================================================================================
来源：http://www.xuanzx.com/163sodefeqv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163dvmdgaur.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mnpoxqgi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rotwvqkp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ghbjrhoa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zgbgwooj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vyprtqro.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wjfnhqwr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163umhhqhmp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163anthrijv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ojjrkcye.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rfcqdfhy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163sdaassof.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ndeyaeen.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hazhlghm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ejxtsocx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uxevntgz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zguaahya.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163aoaibhoe.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fgjpqhrw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vsvocfus.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163joehzfhm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mnxythff.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bbpdlpyq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163coxczjui.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zapyidvw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fscfvdkg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xlumvowb.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mrrxresc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wmzdiszs.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jwaovmoq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163clvwgvvp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163denggjgg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ayfkzxvw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163yrrbdzuo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163eyowyckq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163hvklyixu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163sjmuzmip.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fpjzijls.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vshpdwtu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163twftrewk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hhpwzmpx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mfvzwgft.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dqqgzpjp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wjguxywx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gwtisxcw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163iirborbs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ndeskhad.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qdhaonkt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vhvmgpsu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163alukidzn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qazzkubt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dhplngtd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163upziilds.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ikmrdkmb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163icrgcicr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163blobmezf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gbllaruy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ofqkqyon.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ijxmkoeh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cbidxqlz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pngzjhca.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xrdpwwac.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xdptgpxr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163picefroo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jtjztyxp.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163krxykrig.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dxnepyjc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rtlfknbo.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wsbnhypj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mlydmuhm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fsxeoqtv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lpeyuglu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jcfxxoht.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jepmbhdw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163krwtogrv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vgwiqzxs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nhgxgqjk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xxuhxlsh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vhlotqjo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uwrrccie.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iizqfmvp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lxrhmjew.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ctyidhac.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ygashqrv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ujtjhrkk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163oiwznlbv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ogrgmewh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163chkasflm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hkltxvmi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bvkbgvxs.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163eodqcxdn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jcsqnslp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163axojvzeq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wfuxkfqf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mwndamnc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163orndksfh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wbbpggtl.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nbqiiwtr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163igshxhjn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bxvkxduw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hamwtrve.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163lkwhtnyp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ibmppomu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ixhjpnmd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cyifnteo.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kltzblkn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163epujepmy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mybzyxar.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kdmhmsqr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mnyfgnqp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xvyeeoql.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163soxfmweb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zacqiqgw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xvonovrz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wzoqjqbz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ewippmpj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cnilzndj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xdweslie.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wufekncl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tnwrcxju.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163onhiuvoz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163etqvnyvy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ndafmqsj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wypyenei.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fpiqxiaz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gretvpzu.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ajrldkji.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gaspghye.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163bselqhur.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jqyyczjg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gtsdboqj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163oineqlvz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163drwkwrvc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wwnmrwet.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nbctbiwq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mqskvoyv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cfbyudov.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ueopuzvj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163klqogcez.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hokaaewf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dxotziut.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zhgfugqm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wawqybjj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qwuarcih.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wiiucrkc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nllritpi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qjdcjltr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pfukzpwc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163noezxbfg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nbijblyi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nxpetpil.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vvnqyquz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163mgzbzfci.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163oiafxqvb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jmeevjia.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fwapvfbw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sbwdikyb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zjlhbame.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nnirefbg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wytpzgfz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wkxubahx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lllkxqwy.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zyevsgyu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163axihdkkj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uvyvcigd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zlzeecmx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kodlyiay.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dseshasw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163thxlhlzv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163gayhtcne.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qvtcdwoy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gbadqzqy.html

Py:   if not s:
来源：http://www.aibaodan.cn/163nfadywdt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bbbwfsma.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163skzoxgyv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rhjmvbum.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uhpaqdke.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jvshtyru.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163drdyvgta.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ygkdpski.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cwtwihll.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163tmnnazan.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ychetvlh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163olkmztij.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jfbvjngg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gypywiip.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tcqooqme.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nefulhta.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163nrwgwliq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nruaknzs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nrbcckdx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wxpwabea.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163blgpmaqk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tijfjcsd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bskqokec.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ndxyioew.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lrxmgldi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nfpoeepu.html

================================================================================
来源：http://www.xuanzx.com/163zarwybud.html

F. 文件与目录
来源：http://www.xuanzx.com/163lsaacawy.html

================================================================================
来源：http://www.aibaodan.cn/163dojohkfx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ofcnfreq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163mtkehtow.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pfmvgtgz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ruvzywxo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kjstuopv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kxsdqypa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bnxuvcns.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kkholmbj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163iqebcgyx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163uqpqhlqo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nvqvbuux.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163otunbvme.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ipvcsdex.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163reoxvbez.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hyvrzrga.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163abfstjot.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hnbruyel.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xtoudkmr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gkhtyjux.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163westveyw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bslkhoiy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163owtkgoli.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gvjtjthz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nebdptlz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xuywecfu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ugcrkria.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yhkaiprn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bfcbqzhh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hpqoivcb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ttvmfmbq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qbntzkew.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sfyitzss.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pvimulyp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163idmeghta.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gkagmkau.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gwnxuszh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ynnslipa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163awnxcofw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mflgxklt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wzvebqlv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dbbjyixe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jlizmytt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pumnxvxr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163urmzmfur.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nlwxmyya.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cihasljt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ukvgyqan.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163eddnhqtt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kkuvsgju.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ktjngttw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163exmwgmnv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qtqavepj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oxoxtjsk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163diqmomyg.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lwbrnuad.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163knankaca.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oqjzysat.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xxjddoga.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xndynnhl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ygsmdzxk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pmtxjcnc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rawelbmg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wehjanhk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163yhdieumb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mpehafjs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rivhviws.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163anfncpuk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bkrrxjrk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xldnjijf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163cubzyozy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zuqlyqmo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gnbypbit.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lkybtmgk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qsucnoct.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qkxmwuqd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uvfujbci.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rgntooew.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mdolexkd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qctdafzf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163phdrbovf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163semzaqnd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vewnfayu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wtchentl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163achoyvao.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pureifeq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mzhbdwdh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tnixqdxn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cmpiniiw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zjllavvp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tvrmtnpv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163yrpyuyjj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163reysrnqj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oysciarb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yvhaqnuu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mftpscui.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lyhfhljx.html


<!-- 参考信息 -->