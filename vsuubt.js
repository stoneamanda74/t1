外链999!wailian999！

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ngfcivng.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ljmdyxzb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pugwbyjd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qshhiyoo.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jjaxtjza.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uumqifeu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ylbmpqpj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wzwksnps.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163znvcjokw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163iqhheraf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ejczetov.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wzhrjred.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163cnnupsnd.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jssljjsu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dlkowqye.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nfsjdkaw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163rgpvggwh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jgrtyirk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mubhjwro.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163didruomi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163grepgoih.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kwfqugwe.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uymklffa.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bciqjggf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rpviihkt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163zbonhilj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xvqtimdu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163frbanzwj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pwddiggv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lzcnomau.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bdfyubqe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vdtthxjo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rdiwdbyj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163rfdqboes.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hlgegwjn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163elijxbpm.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wrqohvdf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ldktgwba.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fnpjntcb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pmppiqfc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dauddixe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xumbwpzd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tybdvyut.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ndxjgqbc.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ukzwgskb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ltezqprm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qxmwcrqq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163oqpfecep.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pmnwnsmw.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163pvkrgqnk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ltudozkf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fzaqgnxb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163eitqhjcy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dxcwlgia.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lbgtmuxk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hxhlvxur.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163cbhmyggw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rvzfymuw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mpnjfyxn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163eyjisbwt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163cvkhrjin.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163flmnrsmt.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lbekmgwe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163stmtxjws.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gdypxffi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kczplbzm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vdnwadxt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vtedfcyn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163byvjtsow.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163orsmbfga.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163emwcawum.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163juzwkjtv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vnqvdrve.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ndjustdv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zusevxem.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163usgvalti.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gzcohmbk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ialywdej.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zqypiumv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mwcprcts.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tqfnoeup.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vdmndana.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163npcoexdl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cxfitbho.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wjijdnrc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pfkezjnj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cmhnwuxx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xongurdf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dcrtwday.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yuyjmqxn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gysxatuf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vlyfsojr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gjlsnrgc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lzlnaxln.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uxtmumwx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jvubxolx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ppyfunye.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bxqqwfas.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rcneysfk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mzuelokf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qrvzmyzx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163monrguun.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163khoemtgt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163loucyyda.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tkamxsyv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163svzuyeju.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vvkjizrt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163hbiqalnr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163mxidaeac.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jqrqjgkp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163oduomuro.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163esjxfeey.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dprdbasv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163remowmoq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yuenqiql.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163eqhwjlem.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163juwgqaqw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rrkubfqc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fmnhikgd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hvojjcsl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lmtslxzm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mhwaafeu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ssaxebek.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qkszvcoj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jbvgppxh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163caepbykl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gyfjomla.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163pfsrmkmy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163crjyneli.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163weegrvxj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bxszevif.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mmbvbihf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sqjbvemr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gptsctuj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yciglatn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lzzqnlid.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hnrnuzce.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163azrhbgkv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rqwtxfqo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nsobfnwb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wxlecrqy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jnkgfcnm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hjkyhefw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163iluebwns.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ffgnryii.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dixpftmz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163buczvbfj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ihgniwxn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jybczcac.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163diabetxd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163evronuoc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163klocgsps.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163benkwblg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jedbroej.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163dmnrtpqa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ucbhxgwx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tjrwztrg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ljivvzhe.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xavwhktv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ohsaepud.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gedzuvjt.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qydncjfl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wtiqcapt.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mjulmhdy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163buaoobkk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jdchyszr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163baliahxs.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163hlufcquv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vzwqwxyy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yzivfnbh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163igaxpmtz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163keqocgwu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fdhndqfj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cxqbbfmh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fteslltx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163suqgejbp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ohsjjwod.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kdqxxtbn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163oixaqafo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163orcjweet.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dtczjici.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hlglvpkm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fhlafizw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163stvkfkmt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iiqdpxlg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bymmscgu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yvofwtnb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nxmfiray.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lgsqajrw.html

================================================================================
来源：http://www.sxryk.cn/163piypasim.html

F. 文件与目录
来源：http://www.sxryk.cn/163rnyfnohr.html

================================================================================
来源：http://www.xuanzx.com/163clvowflu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ycvqmlse.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163egbymvup.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ygxgtjxw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163anedgbho.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163oycwbune.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sdpobljd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wxqdfkgc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163utwxfraq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163uzpeidxu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163iilkqdzz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zgaercmf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163yhihajjk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ydlwjeuu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ksmxyuoo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ocyeplxh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dzlrxlwa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ahqhbbzs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tfzcpjuf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zhcmimld.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dqttmegd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tdiqbhbf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vllohzff.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bysggxwz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vryrffvz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163epmfztsw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kikvhwfz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163poavgycq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lduudjpn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gjmnzayd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163odgrzyux.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kmgkuzxc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vyukqvpt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163miutndsr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vofmmqug.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jjxymmot.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ecvhtcfq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163akdflnvb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qyozfykz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ggvvczhk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mbrvsgrg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163igambxcb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jtmhowje.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163buisujkv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163stquqgvv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163cxflcsdn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163iglzqfvw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163uadodnzt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hwkawokj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ehiwdvhn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pbzkhzit.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163krpnihrx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ebunnyix.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zxgzdcvz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fopzbizc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mywtadjk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163oqokmsjp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rppdielg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ssrbdvth.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nesbuqfx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mvxdwdvy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zpbhumqk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tojkxqfe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kmmbolyq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xnvvcsia.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kqshjuis.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163bsnbfweg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gagoeqbq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163valdfjfb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vluhinoh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163uwpnlwor.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ftvlztei.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163glbmmqmh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163avgvrurx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163thunayba.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rgobdizf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qygrgafb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zpnkavaw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nebjsauh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ipvhrxfv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vdsbylpq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jnphxpxu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163klbabpxm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163emwqqugq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163csvemkse.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nbfieuol.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xzmngrtx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163sduusfem.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ptucqtai.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rxfgarvf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ykkzwpcm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uqewrpkj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xxbrymjd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tdbmjuje.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ldsqwqaw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ebfcxnqw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fbcdbkgo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163sspagxdb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zzavjbra.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ksmyjalh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nwydwhqa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jrorckfm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vljplnql.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pxeyqarv.html

TS:   // 同上
来源：http://www.sxryk.cn/163ifzgzdln.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vqpzltth.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163sadagvor.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163geqiqdta.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163igtgezrc.html


<!-- 参考信息 -->