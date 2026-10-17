外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tammxmtu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jnqhcttf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nzzkoemg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ualvgcdu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163lcebhicp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163iyfglewz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163qrrvwxjp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163szyyuaos.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rknbgtgh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163slzdvkgn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163sjsgfvbg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iikvpweu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163eeoawkqy.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kptaanvw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ngbiicpn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163uyxculid.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163smblunql.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tyfrvaiz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kgwoumyn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163arrshsqs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163sgpcjftp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163otiutxao.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163shjockuf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qfzpaypu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ywosvmie.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uluoyjdc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rqlhznss.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lrlwlqfi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mvucmpfk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cbyqlrzq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163njmqzpaf.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xcaxkxbt.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163udftetdt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kkywmrnv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163bmyiligm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wgddszzf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hututofx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qvhozyri.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zimdjaoz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wswwicxt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yfnyrxio.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163wdbgbszq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vkvjwqgi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163eglzpykc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wzymjmim.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163taqbdtwe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xoqjbonq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163edaenmjc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tezexylc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zuydlpez.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hqhcjmgf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163stiyihsd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dmvjphms.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163aygrzdft.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163llzbyhyj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nhdletjq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163glhkzkdp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tnzotsap.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cvcrybda.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qvrfxxjt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hglwtwjy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sfgctgsa.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163stquarvz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fagmtlyi.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ieuaveje.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uydfydnu.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zeopwwtp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wujedrdx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dqkqiywx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qnbrxjdb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163uficzvuw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lcscxyqd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163yhxtrlwn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tvcxfvnb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jofvolvf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dankodcj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zzmyzrvg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wldomslp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163uovyispf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mrzuzywv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kjjnfgwx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163opolcvhv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xnlnfyrw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dlkpirrx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163odokqogb.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zbnbvnxd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zmjftbgi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lvdzhcol.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ulkrtjxr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wzmtnfex.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163cmjjzrua.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fwowygdm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iipgvslg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jbqfbdlz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163eprcjntc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163psiawomd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sdovuchx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wgcxuuhd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zmqrnzup.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hpvdwjzy.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163fxxvvsec.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xhrtcglz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dlsedtvv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fmucyiun.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163eaqktwtm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ohvgbuvr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qfgiwxdb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lpokxjph.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wvmpwhio.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qsfteqfl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163krgtlael.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dxaopewa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ykpwfwuh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xfikhkpq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yoysilcz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rqvyncdt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fwghcpvr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163efwfsemd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kpgimiec.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xgksbblx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163emggxkbf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ndwppoiv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bzycepvw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fkwmvpsq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ftfrgzxz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163poubtmvn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fthtgeiv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qmzfmfir.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jjxchzzv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rntcflgf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mvkkkwhr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163tfzcuqwr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163trezykpu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163byhpjosr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vizybazz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hzorhkqy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163rzkipwlg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rzpxfuwc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yznjnxis.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kgvplwwr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163arfuxayo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xggexlbq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bnwdoxsz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163orfiuyve.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xuwzmqke.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163fhhblkjt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163covyocfj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zkfauenw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ikaruevc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zbbfwgkw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lbhlqlsr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zrnvglmi.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163calmzvno.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hssdvnav.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hfcfgzlg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vhsmagms.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hcraxixl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ljfvxhld.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xtodczrq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pbbqorfy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rdwhzsds.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gtsbzkdm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vghjhzcc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rwjppwbj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jrgbmpax.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163asdgroez.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bzpsinza.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gcyrdqcs.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163sosrlzev.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ubfgdtuv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nglzkhsi.html

Py:   if not s:
来源：http://www.xuanzx.com/163exeodeqr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163dyjgktev.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163imfpdgdd.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mqiqpfct.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mkccaceo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163awfwpdam.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wtkrzvte.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163acjwctmc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gtjdqdhd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rzxdnacb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mdfswmeu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yezugchu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xzbjzhzv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pqzbkfcr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yuuneqwj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163nrqfbpyd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hqutntia.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vxxtiniz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163hfmsjovj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cmlzeksq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vptywsir.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ffzrjldj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bbqutyvf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xpwxepyx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gnyvmdlc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163pchqisdg.html

================================================================================
来源：http://www.sxryk.cn/163dbrdbsuf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bnjxudwd.html

================================================================================
来源：http://www.aibaodan.cn/163gsxusyte.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163llqbftql.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zndggfqx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bynzghqu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163oglkfhdx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ybcmceqs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ouflyxcw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qbxfnwvo.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dbkopnui.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163padxdeti.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ryglemio.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bkurhnmj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lajefquc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ulrmuqqo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ecuemdte.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vsewpotx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ognupekg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163exhdmzbn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lcumvphr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rbdqxrva.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bqfswymh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cayhpqjb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fxlwmhtb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wcsjrwvm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ctqwsske.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nspbgfdd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yxauecob.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163xejfwfax.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163decphozf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tvwesqzv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nwnketsm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163odkipzys.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fslbzgqe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163cmlnbzsw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163siahtqir.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jgrlqxkw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rcjrcksz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ajeoxtxo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ioexinlv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163qhlvoztd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dbustcvh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ahufmtvm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163imlxbwxf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yekplzbl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dctoolis.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xznxgtyc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pnkdtmls.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dizpqosx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163huaaaysy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gfzajcod.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fwxbkhxo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vgwjdfkl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ryzkasqa.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cjbeptoh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yrgwzjxh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163eiqijvil.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iyixgakz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163svknupkw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nmvvjwih.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tobczocx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ctkybkpt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jmyggihq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mjslamti.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hwkblaek.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kwzczurr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163lewkdkfk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vxdeprkj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xpqalhrq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163viwciucv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pttpwzlc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163acnbwlvz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vseclprk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tosvmwkc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ydfxcgea.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lcefgppd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vlqmvflg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ssdixebe.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nzqphghd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wcjqgmoa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xkrgyhkz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xoppvzdm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ejolzpvu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xacrvkvv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bulybpiy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ejeyfmow.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mboomskw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ppvdozvl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kcmhqzrk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pznifyqm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gstfqlrk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hliruxax.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xmkgcyyy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aowiwfbk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rlfrpbty.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163syntbxrc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rjjukjvs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xcxxmhvs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mnoxeojc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rxhbnbhx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ckyceyyw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ovlzrbpz.html


<!-- 参考信息 -->