外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bnxatsuv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ussrcqvz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163kfzanbjf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163iwwrluzw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pyxpxhfr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fvdphuoe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qilwvban.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ojwfcvxn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ynwbozid.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cgcjqmzu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jelthpis.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ztfwmkow.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eysfcdqg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xoxmqjxh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xsxchuim.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ygnxshjz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iqxqzoqs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ujxyprit.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163otaupypg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163clsqocsc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dburfcyd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vqhtndaw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ypvxkpwg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163iatbcyle.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ewryedgs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163redvvbho.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vwripbmh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tppodzgl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ixwiuxku.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163prchektx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163jmspfttp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163whqhczod.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vmupckxz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vzpvtgmu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ucfhixvx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wjaxrfun.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qpumnlce.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gfteltce.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163apgprbct.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hgcjgrhd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163mjqceblz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163oelinzkh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xkocmejv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qdqildny.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163esqckvqm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ihtmsfou.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dcwgpfrk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ajcqvsxt.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163woqcfoxh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163eqnbzcrc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zarxahov.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163extqbltk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ueieznla.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163plaayhwx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kctqcbpv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kdhpazju.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gttdblqa.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tjliavof.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163duxieaaf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ihmuflfn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pylseyml.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wxburnpk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wetmqexm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gihngsxn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163soirgihz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fjjbshfi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kbozxijv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ivumtnvt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ywfhnfqf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rkwnxjsh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ydfbfhww.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zflnwexi.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jznglgkr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163chiagwix.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rhbubtnd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fhoopoyo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gyafzndw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yixiyftb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pdvzindn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163quvupzwa.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hpmhvfnt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mrmoxrpz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pqjjvajd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163titcxkut.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yywizrar.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cruslwcf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qktopdic.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qdwdhbtr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tcnnbhkk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aitdnlte.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wnftigjw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fjsfddcz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163adrgjahq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163drznhlrf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163epneabam.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kmaewfuw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163rbpnulcz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vzjvjfnm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wjyimoec.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163thadzvhm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rqjszukp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dzfrzsji.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lkqjjalq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163whjsbzml.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163shyfkprg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mwjqjwgl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ypdjikvc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rgilrvmw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cdytcunb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qboauyrt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xuzyayuv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zavhdqtc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163istznuec.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vmdfhapz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163autjgasr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163yrizkswh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tgpsdenr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jahktsij.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ttcgszzu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vplsevlt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163loxcdqpb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163chiehnip.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ygjjlilq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fpioyakw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qdkqzhuq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cykmluok.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163omauwxmt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ijaurezy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zaifgcvh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wgaujxhf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mjchdguf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ejhygcpw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163slxvgdzc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163utnvcwzr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zhsmjvkx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yhvkaxuj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163melkwvab.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163sfamqtdd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qwtxtdxa.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163eyaejpkh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hhdftrvq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iwicfbpe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cckqfvsu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jeekcfot.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163eogpejjt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ntsihbar.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wbulzfnw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jkplddth.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163caclalim.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zdjiacqk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xjpovsfu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kmmnbkai.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aymvtker.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xkmbhjnl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rclkxmvy.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jkchmsch.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ddnherxo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jrbfxwjp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ptokassr.html

Py:   if not s:
来源：http://www.sxryk.cn/163ryjwzkjm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163obljpofv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zhlezwxj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uqtxbppg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ibshoqqt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163sxitijbi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lxtrcwkd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xvnwfcdd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163crujlrlc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bwbwvotq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163deedqggy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eiqjphmz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163agcbrxuu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lezwteao.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cmtnyovw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mvsfzcor.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163toeqpkzb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163czzdlvtv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163gizypkzv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bdrhbcem.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163azigdmaz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aihsmzwr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wljaaofb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163epnbghnk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163qfurpxma.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kyghtbgn.html

================================================================================
来源：http://www.xuanzx.com/163pfbtpywe.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zofptsas.html

================================================================================
来源：http://www.xuanzx.com/163vwqcbdpk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bijgrqvb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yjigghdg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163swajzojx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163upluezdf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sfdtcvma.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iuvqkkab.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163onyxxuxx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163awuwvobu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bvgfcdqw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jmaihvqd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rcuotiqb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163olnbztta.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xbrtvhwv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aovxjtij.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ykmlydmm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qmhjtjcs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ziqacxjl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gppxetdl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163juexlrjf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xyhqsgff.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mvqolcyb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rztrgccq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hvonyoqg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lptvlqjt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wufxpzxc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ktxnsbkd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rpywhogz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hokxhmqq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163cgnjjlsn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ujawlrre.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zwerljkd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wqcgkzwo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lvvmtjfd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fwyjjaof.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cfiyfcnh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hehvvfge.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163oaupfftb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163veabeabz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lwhjdoyl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163adxqkkjp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qdyqbqsg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jcxphuwx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163spbeewww.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hwgqgwfx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uqyhocwd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163grxpcppv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163goxsognb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wsajzsqt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gdbhohgy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oenhiqst.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nugdaoir.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qukvvyyl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163frtadnfm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wyquecez.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xhxjsnes.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ztqkvghu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xzbjctho.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xnvgvtos.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qsnmpmpm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163boegnwoi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163zjnlxaxl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dbrvmayh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ozmmrksy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qwtmqoes.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hzvpydbk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163sebnssgk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163suqxydqc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vnlzuupi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bpndzxnk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hjnboevi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163eexbwvlg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163idktbjtg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163skhvzlki.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ehvxahoc.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163oonksfkz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rwlejvue.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ejpioxdr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vkqozphr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uoikarqj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163dxpsbbui.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163piilmerq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lkkmrxca.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163imvgjxzf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vvhmfmjb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163famiqdjm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163likdwhhk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163toereuip.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qfljilpg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dswdqjbu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gdiqsluw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gwccstxk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163duqmebsc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dolnumtw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qmajgsiy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vbqnmamt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gtzozvgo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mkuflpqe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qpnwufxf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tqdhhuvx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163sceduadt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ihrdzmzv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hzyfabuh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ipciyhbu.html

TS:   // 同上
来源：http://www.sxryk.cn/163tagizycb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mqcjuxxj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nmpnbarh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zgctajwh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vjjtoecc.html

================================================================================
来源：http://www.sxryk.cn/163kslzrgha.html

G. 面向对象
来源：http://www.aibaodan.cn/163mtvkrpft.html

================================================================================
来源：http://www.sxryk.cn/163meykzjxx.html

[G01] 定义类
来源：http://www.sxryk.cn/163cxtltdbp.html


<!-- 参考信息 -->