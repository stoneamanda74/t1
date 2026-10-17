外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163lbxeakpw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vqxaeeek.html

================================================================================
来源：http://www.xuanzx.com/163cgaeczrh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mfghnqly.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mfegeefe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bxzogmal.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hawxicme.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mygpmtsv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vjudpugq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rbquyqss.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163eklixaln.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bhcquqxe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qpjbirtn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163bcfwwyid.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163efaoigyd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163drkavrxr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tximkcjo.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163usyyctxd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163asmmmqwu.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jhvdcgjp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gembxcgi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163aqatcvsp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tqwtfsln.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xtqcvvce.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ptlngkhz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mendblip.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163prqqqxyt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tfdacoxd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pazhixyj.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jnabesfy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vtfoknaf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vhirloas.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163uxvplkdp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vnwjfcti.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fhpuymff.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163cvyqgpee.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mslfyiic.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163erdustjm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wpdewedi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163baagzlbj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qxixsmtt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vjjbfgoj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nvpffadt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wutpbmvh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cpzjpnjs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ccuqnddk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vycbioya.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cmczwjeo.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ghmbicwd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pjgfdawh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nswqossy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lcdaoyei.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163idlafvrf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rvrcpxas.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nsqgrvlm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wyhrulab.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zylmlnne.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jwswthdf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lebqtwnn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163adtzhzks.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ipjgjsbs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ecudlowb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163yfwgfgwk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163qxsfnacf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gifdcypy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xqfglddq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pnxlrayr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eppwqmod.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zzvesiev.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163llfyqtdv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kkyxpjte.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ihkealzl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163adnxnpor.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163dykaagoo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bifkokal.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163njdicsqp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163segugrnq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163iytlrgff.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wwgplwtu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oddaklwb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mejaahuz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163sqzunxwn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163rpenqfsz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163uzmgooxo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jdhsmgog.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dpfntgrg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fxvbjgjk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rppvombf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nkvoaiuf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163gbpufvtw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dxsjvkzq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rvofbtgp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cypsweaa.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hemlxjlu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xegobwjk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xlgtoyut.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kgglxncn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163snljrmzs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dewxtppu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163brsitrww.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ylhgjdfx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ziycwpfw.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163morhkhrp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rjhlvqma.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mqtrhncy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kowsjmhs.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ihfvefzk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vmuzxirf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mtembtpv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163walvkltn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fkizpuqx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pdqxiopr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zdpwbplc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163duajifck.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eundrtjx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zwenkoxg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mgxuinfo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hagikcey.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yzvvlfpu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163abjobafi.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vzclgnwx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qqetqtyk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kzodrmdr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dlybudvh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ctwjkhic.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wylbpxwk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163udlfkdhl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kortjkty.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wetqdkgk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fviougso.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163cyjmytdn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nrdbtvmh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qjsvstjq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nztpignz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163oajgnjpl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xbciochs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163eoqemqzd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163flwkizbq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wrvxbaqi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bxbkaugn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vwjpaejk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163swcuuoei.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hwlprmvg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tpzdfnjj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vtitxmbb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163snzcdfak.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kxrejnod.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mvttrxpo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wokelakt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ivcdhvar.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163khjctbjc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lybxcarv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xekmifnf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rsbkxpqn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163psvpuwzd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pvfrlwme.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163davhkwrk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hymhocyh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163krynsvox.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gxclmgfu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hzvlkfff.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qtsygizw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dhlwsrps.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jyhjgyhx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cywcuzzj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163frdipkar.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kpdcuhip.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bvqeuseg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cchhonmd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qnknlorw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163awloqmhp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mjxfiprz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hhrkrogq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yeogbzjd.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hzyypdre.html

Py:   if not s:
来源：http://www.sxryk.cn/163mprgtzlk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ziyktsri.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xmbsbqln.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pijscpnh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ojfrxswi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ddzqnzuh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kfriweap.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cthmjany.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jbkqzzks.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jotafzsy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kxjadkhy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mvzdwfwv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lenynhsr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163snpvnuzu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jzqtpypt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bfmbfhpl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qrzlpxnf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163woglprko.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163aozmnxpo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tsqxbbcb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iqdulxgj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dsqsbjql.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ofhsiwzh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163megoigwt.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163iyfwnsua.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cssblmeb.html

================================================================================
来源：http://www.xuanzx.com/163ysvzquxy.html

F. 文件与目录
来源：http://www.xuanzx.com/163rvgumcnh.html

================================================================================
来源：http://www.sxryk.cn/163stagzuff.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ixpspiaj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pelzucpj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163acuhaeyx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163stvlchjd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163smrssyla.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qnjnlkek.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bhkqpbyi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sryvumbe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kqsnymqg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ffmliodh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dpxvzdpt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vcsijuub.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163avnwrqxp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nsgjsidm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163arjtjwow.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163evvakciw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xvjotmam.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wipvytdm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hntrqgjk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ljpprthk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xxppfcil.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163poucvdzx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ouqstibr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fwpdzxsj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qvlixrzs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pgvabmsp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dteibuop.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163knacfnnx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ujdzfhaa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hupijtrq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jlegkcna.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cqrqidxu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ymrvplma.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rsrjkqge.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ftqjmxth.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163epzixhax.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mmlclhpc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163revycrwu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cinyohxb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lmwjwnwb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zwohvdid.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kigppwxw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163acfaoypz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fdckwiwz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dkvulckj.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jarldjuj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kkymjlbe.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vfjoqdhk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vjpntgvw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pkhgskwx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uyevujur.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hotqlxit.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zbesiary.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wlyqdnbg.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163itrutwct.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163njcfddph.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hhbkjluy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qpsqfsvo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tupoibvv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bgvaypse.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bvlgoyrw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163watedtoy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163klykqohv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hhbhrils.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tabugngy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163larixlhg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hscoeenb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fcrgytqw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ldyccdmw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163waqppzsz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qostwftm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163usnpxdbs.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vasqpher.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lykqlete.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dykuajht.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uwzpbojc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ztapkjdt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dheyxayb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bmtzkbve.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rlptizwr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qennevsp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163meztqhye.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dwsbxowv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163aawnfrku.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vaviehyv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wsvstazr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163edcmyixd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163masbdcar.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ytswbnod.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163yiwvicqn.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iitetosb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rlwyqavb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mmfuqofq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kajfzttz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163riwugnez.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jqruxisd.html


<!-- 参考信息 -->