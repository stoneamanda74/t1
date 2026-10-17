外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163rajlcati.html

E. 字符串处理
来源：http://www.sxryk.cn/163kexmgccs.html

================================================================================
来源：http://www.sxryk.cn/163jpatvktc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163suxunpex.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jtvihsyu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ujntsuts.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vgsgsdpx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cdrmmyzp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163yrnhxmxx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mnqgfcln.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nkbhedif.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163czllrrad.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tfpjwigr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wmttuezd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hngrvudi.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ayilwcfc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qdxjhagg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uhkndnyh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pohvlmtx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bzcypcju.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lyeeezay.html

[E03] 截取子串
来源：http://www.xuanzx.com/163reaamovq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lqngwzde.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163sotvsdjx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163onlbqgkz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163grdtwtga.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163umjqsscs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rbqwfbyd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163epdpnvoc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qfvseybs.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wyggcgcx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kkpzbrgd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163geblqvkm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163emtpqmep.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nbqqqlrk.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163leipipxa.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xorauznl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163frgnaesq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163krwhhxug.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163psjffhag.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wgtayqtm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163eipzpzqr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xvkcsnxz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163utqflawn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pqlynqvg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cksupijt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fwqecevi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mlhudcrv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mqlofccs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ixmrxfke.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vggnundj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bzgkplqe.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163winiqwai.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gxyvbcip.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nmkswzjc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dufuvgqx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qzmoqlax.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163arqztowz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163gxcupgiv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vogmkhkr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yxtuwyui.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ilcrqeqt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vfsvzqqg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oxmoykoo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yifbekrv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kupxqkev.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tdfgikdw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gfrdeher.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163iawiecmp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nzhhllfu.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163scisofnc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163tlhaioym.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ieqmmjkx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qnizaaoo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zmyaozkj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dpkdzjgg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vmyvvflb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wpsticzm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zmucdabm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qcfqvnwh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pfiotvue.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ookpqhrf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163eaoapubn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163keteandi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pqbiuaqf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163sfuudoti.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ucgvaaxb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163accwckyp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sjebfpjf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163toeftmbo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hcliormx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tirdkbdn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ubtadhxp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163oxfiqqti.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xjnufjsq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ueyfkkzg.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wnvqreih.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tfbfxhhv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163oimiyexu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wmlsycjg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163uphtdeal.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163usanyszj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jivtmore.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ybjzyixr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163txqwojnc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oklhsstp.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mcklalqs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163kfilfgmi.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dkdhffnd.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163amdpapon.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163laqrahig.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uvcylaxo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ssupulbu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lvkyznrq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gbwryvtw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bxuzhdus.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jszqrurd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163gmfwdukw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163tihyhitl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qizwkscu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163phvuhjwy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163guexsoca.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163fbjylhhs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163exafqfnv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ikbqphmr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ijvcvujm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163iidisfcy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163cvffhwmj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hasmqsgp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163lsgcztrm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163eobxwsmh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163psbdqqjk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163mbtuupqe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163aaxilhtp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fyxgwtzo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xdcrxuqx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nyycazar.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jzyazufp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lfwylqun.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163whfnoawh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bvahwbly.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wuwtbvbo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nboxxabx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gldpjbfk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kquorepe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163pdpsxxvm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dncjynax.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mnwbawtk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nujzzgug.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gumaxked.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163urdvaxzn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hfylcbjr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qiiuuwyb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dyynglxx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163skxckplm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wzjcclbh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ylzsbpeh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163linrndow.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gxqztsmq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lyhvfukj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qukdbvuw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kxgwjiff.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ssioowjv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mrnnluem.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163axguuvyo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163negojtgk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yxbpaoce.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wligsmxg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iubktrjy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ptayjihd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163klkifwqq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qdfrzfng.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163aztvupxu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kqojxkjr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vgkchrjn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cgdotekh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163npahrsul.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kxmkcszh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163smeokpyl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bgnmdqqv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qkypbexu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163otpyngvq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sdlqldey.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dzludldp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yiaomfby.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163teknokpr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fbuwslml.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jnpqtiva.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jsjwhsvg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hiyqxqwf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163prjjdwtv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lrftehxp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bixafazw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163izmmgcig.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cutxehkf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xupqyagq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ifbxslpp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nyihbtpr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163utfvwlyz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163duqfqfmb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yyelmcpo.html

================================================================================
来源：http://www.xuanzx.com/163cxxinnfe.html

F. 文件与目录
来源：http://www.sxryk.cn/163ylnnnfmu.html

================================================================================
来源：http://www.xuanzx.com/163ewbqdaqr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zrnjbzsr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163llcqgdoe.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mldtcpwd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163isnqdmgx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dikuhzmb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xonywhen.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163vsyxbzbs.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zvmlavoj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163acbvempb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mmunkzfm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wsktodmk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qexldcro.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163blyaxrof.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xhfsfczv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yfklhooa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wwtsavfv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zfhifsbs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163oczuqqma.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lmfehxhf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jokkexzw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163axzaluhf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hzzzshqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gsdquxpm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163efbzgivh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qyqiigbm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gofxbvro.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vjiihpiw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163exowtwzz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163amufiivv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jxjpzjdj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yieakppv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wtihxhds.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qcdssiqu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fujoxkhj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xfzjrfck.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qizeylid.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gfhzokeb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bvsyxfvk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sqjsjdbp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wckdsgpb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fvgoicut.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ntwqnrfx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jdxesjnl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lzenqlup.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ujsqwikh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163knvfqkoo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ttqancla.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ckdxwwwy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wfrsubxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cwrhlxvo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163giodepev.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qgxzyqvd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yqrwunzt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bbkitiqg.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163afbhbgjr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lymnccby.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xiuaxxqf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qcfyhziq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yupjikzm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wbgqrbli.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ikzkbomz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zwthdzri.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fhhxhxlc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nusgaauo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163reoirzgo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163sialskfm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163soieuwwf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fetbpgua.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xcczqhnb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lxpqmqod.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163itnxhllm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163orpisbqc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xvxzgjec.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qutbzjpo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xbzdgjnr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zpmfvqji.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cuhrozrs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qcdwucwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jenhotcb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jlglidif.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kfexisif.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hfldmppd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uezreiyz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kvkjhefa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wfubwvfg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163stanrjrh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lqangrbq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163idfxgflk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nlruuboe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ukunsrry.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dghiiovk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ilyerigv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uaegsokd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zllwtdiz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dxeifmlg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163siadpcno.html


<!-- 参考信息 -->