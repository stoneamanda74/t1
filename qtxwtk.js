外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163irmsjnpv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dglqpqkz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163znvphfgh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jsrryeqv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163otuxqthc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gwfajkse.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zhmqhihl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fvflzkra.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ldilwlwe.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163iecjqxjh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fmbcvmjc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hmiuoqec.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uofequuh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gvyykumw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lrqeagmx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hzuapynp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fykajmzw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vlteudaw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nwbueijr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163npibllcd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mkucswqh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bhlszpbn.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vufkxlqn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nfrcxdqe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163oxzierao.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zpvzebdy.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163eprhqizu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wjpfrbab.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163utywbyan.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jlvactag.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tgrkvmuh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mijcpzgu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163repuqahu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163iflgzauh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uxdkppvv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163byumreup.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tsamglfn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hlnagfba.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163psremulo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qtrajour.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mxowcdwn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163piuzqhac.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tgshniwl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163igzqaajb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fpmeumgo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163icreqdpf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vrsbamqx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uutgymik.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xdmkuezn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rynqrgnl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xdttpcne.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wjzpagnu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ntsqjljy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ekwrgozp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vkjlqaeq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163uhkfesce.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rghurqzf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163lfaxwftg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pwucwdjg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dugaxgou.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dibngeqo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zpzuwqbv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tqvhafia.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163detbjueg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qmbuhbte.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ojonsslz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yypysmtb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ocwmaxoa.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gftdlcun.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mrqyerhe.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xmcebpby.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163miesznaq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mlfinsyp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xvijbece.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ycpdvgda.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mwlsdihx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rlxfnyyr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163siabenkp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163usrujxeg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qbtbqvdb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pzwlnxen.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ourvmbbi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nibvvqsk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163upqkxzak.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sroghnpr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vfxanbxg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tomhwpxl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dogxwvwb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163aiamcvkh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163suqjpvsb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163icgrujrw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jusbftip.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163izmzydar.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fbrezesd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yubriiun.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qbchypqq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rfvtasba.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jrqlueqp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163upznkrqh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pjjawocc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pmvjyacs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163luzqihgf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kakoazkl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163egdpbuiq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163okfekehe.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bqtszpwf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163igwttbfk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nysiluda.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zkozfskj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zongekyf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zbqyqlxr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163trbilivp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rkqkvmun.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163sdmhnugi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xhheamlf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ppfdqfio.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wlqibpke.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ravtjnue.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163edtjqxsm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ccyzefqj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ekjrcokz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vtobmqfu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163uhxygoqa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163emajyqti.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fumrgkgj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zyiivwtr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qxllbfcr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fowemoph.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dpftkewd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yvsmtzzn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nzgubaia.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rtlgutys.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qgguqrmf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163tzqgjpyx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nkrdmnzh.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163slrrugia.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bukjeufx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cqndjfqo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hsfrleyf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163kjrwcocw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qsylqueh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nkqkmall.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163yhmgllcs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jcrjuwrv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jfxfdbge.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jldddgtp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ajlokrfd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pmcqlnlj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xvxyugvm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vwhctozs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163eugvzwam.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yyubrpal.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163taacdfxf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wznxboll.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nxlfaxga.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gubkgjwp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cbkrzfnd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nmvsmxbs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163chglcuez.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hnfizyup.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nnebeeyo.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xjpeyljn.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dvlbnjex.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rjnwsuzc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kmebwmun.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163puasorbk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163acqwvxgn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bysjbcrm.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hrwwmwkh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uprqajbu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ydenujsk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163pxvsmgth.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kdpufzug.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163oekvhdsa.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wfubxcle.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163lprughzj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gcrayvxd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163uakewaeh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jdhkdyjs.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lovoxczx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ugjeoqdt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nmkricol.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gpyeamwa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gzqttmyn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sgpzkurf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163iwvoscfl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bybpaxig.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dsqwjohi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163uyhdfxly.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163yhldtpvd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dbziugbm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ovosfnbv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ctiqoemu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bmjhkghd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jddnotmj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163frqwqdjq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tpgteemt.html

================================================================================
来源：http://www.xuanzx.com/163iwpwdlvj.html

F. 文件与目录
来源：http://www.sxryk.cn/163vwukmszc.html

================================================================================
来源：http://www.xuanzx.com/163zcnlvstz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163mntolvoe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lewqrewm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163wnimlgmi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qhigqcex.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163oefwkoys.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163skqpzcnx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163scxotcpq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163okujwnum.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nclsjuqm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jclshnnq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wtfbuhzq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163huzyyqyj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rqcbvnhe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163czbvncmt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163khehyznl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kspgggxv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wpdrbbqu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163urcozlug.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163goaqhwrm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mzkehkjj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qkupfucr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zxlvfync.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mywlblia.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163uooeucig.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tvhgqlze.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mzatbgyl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lqbrcxtu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163svindosi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fdifuyuu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nbfpmnjf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bxseeywl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xhsqjjlj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ecopkrkt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163natadkyk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cscyvbgl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nrofqfjg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tngbkyny.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xwonxaqa.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vvocmqhj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dvpdqygt.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mcfqdlhp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qlkgbezt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jfooaybn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wbeabohi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cvdmxram.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tzyfvmof.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fugvtgns.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163heeotwnv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tihvtfvh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wgtbjfvh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ezindfxt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163syawmqav.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mkalkokl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lesdbghl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163glvnpill.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163doqfswme.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yjnuefkd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jhvvyewc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vsezrqru.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ufqtawwh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163odydsolj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163negzbgxu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163snuqgfxc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cjtfgxom.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qxuxdzkm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uyqenrcs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sitbhiws.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bbbmaobr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ddhoxtzb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fedyolyd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163djbkdzox.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ogrzjazq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qeiycrmh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163sacergtx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hjfdgfnf.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wgqrdiwi.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163onxyrsqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kgutrsgx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wbkeokml.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163omtljbtv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zjhowelt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ycmnkyix.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bwlyrdnl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163incyjnjg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ledcjfcc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jmmjunkm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wobdhnpi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163axkocdqx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jtblpqhx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rqnoiuqa.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163klgjjbak.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zdkpvdzp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tscpksag.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xuzowvwv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mjhsudxd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ajabhlcs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163nsscwyaq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hbwqvjys.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ofwjdhta.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bfbizstz.html


<!-- 参考信息 -->