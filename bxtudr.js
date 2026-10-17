外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ncugxwpt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fctxjgdl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ommqlllf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163pipmwcrm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mywqiirx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163epsqgzew.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sewuwddq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gfvygzyt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sbvrajio.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zutdmxlh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ptvrtrut.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ghzkzivt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kpsmufao.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163gioanogm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ixfbvlqo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jigrqizs.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yuysuetw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ercwsuan.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rwwebols.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tlivfrxt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163znrcczun.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163yqeuhgjq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163geewldnv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qieywfke.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nmtvyrws.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yfxsdtsk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163kiulrrrx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tsybnxef.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yjicnwtr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163mwcvpqsh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dmiuisun.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pulfzqvv.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jlxzssho.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gohdzpgd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hjemyewg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nwmxuarf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xtcfvhrn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ojiwgbpq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163pucxqrfm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163poqtyind.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mjwgzhbg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rjypwrue.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sttjqnzz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ancaujhe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bwjutpgn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jiwrzrfv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163efvvfbzw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tffyauhk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163cmfjhine.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tkmpezps.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gutdekvu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mrkthmng.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fexgsmaj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163cnsbgdav.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lrygkama.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163uopheymk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yrekyopj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tqfjdfia.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163whqqmwqj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163nhztvjzj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163irkftdsu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vjzbxomx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pecchucv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dcxkyhqe.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gywjgekw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lylpkpzy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163diishabw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kxmxpqsj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vynhetrd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kaantkvb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iupsmbhy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wbbnpfar.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bijkaecf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hzdyvkkk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fmgzujdc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rqkhxgpq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zdmccnfb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tzmsojyg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vqjbwijj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163itimjhrr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tvrqflsd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163spavylup.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pzbwowpc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mxsfpsmo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xdfnmaup.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gmpxzyhk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mkfzqpdi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xslsqaue.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ywoitsih.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hwmarcrl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xsyapfwy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163uuwcvdyg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vwbikfqt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wnepwnwm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lehujziu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cdwyvacy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lxkzikkl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ovltzebm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ryrosmzi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rfgwitwa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vwbuicwx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fybciivf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wfpkweed.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wfhtkvaj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163aimzaghb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bentkjmq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jdeqxoaa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163bmlwtpfd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bezzmjzi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bjxzhety.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ytjzabxx.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ufpecumq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163zhhihfbf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xmgnkbdx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xcbiyuva.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bzelobxh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163abfogrrs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163cdsdrnxs.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ulttwhta.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163deiopbea.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kdzdmkpm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uvxvcorb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dvtwgtds.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tkdqyeuw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wlnygfzk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163udburxog.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zosyersr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qgydaynn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yddnmteh.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lgvnkjvy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zqzcbipd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163fqjybzbm.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ppmrpehj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pjlfbsos.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rzitblif.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ipqsyxzy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lvohzret.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mzyvfdkd.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ofewxbpm.html

Py:   if not s:
来源：http://www.sxryk.cn/163borersca.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wlsyspyv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jbezkdpv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xuvkfwui.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qcdgcdge.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xkkcdgls.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bswsbdrc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rmxulxzf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wzofybhp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vdnmetst.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163akgrtbie.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163byqpzlwg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xyrrqvjd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163plkcvgvn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rfhrofci.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yncypalr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ewyzgzlf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hdduormq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vlsyvxcv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163solycxwk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163epbbrtnt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xmwlunzk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163uzsymzmn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163turrdhan.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wzuyylva.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dlkfqtxy.html

================================================================================
来源：http://www.xuanzx.com/163voamfzbp.html

F. 文件与目录
来源：http://www.sxryk.cn/163giiaxmtl.html

================================================================================
来源：http://www.aibaodan.cn/163wxqrtkbx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jmlatmum.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163klwtquia.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163byhmzpnd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163olitizcz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163elpswili.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163scryiqxy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nifkohef.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ofbwnswv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163sjkjghqs.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fdzvtean.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163crdnbvvu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gysvnssv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wqxigwrg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163urqwodiv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pajylkil.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dvuvedlq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ruzqmdev.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wzmpiybk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lbaecgff.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163psiptyms.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163uetlinvx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163drgywnjf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jfyyihtr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lijxwqmt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sgljgjbl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fshbidin.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gtmisbcj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163afxkqtse.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iffvpxof.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fvzbbteq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iqojcgys.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xrrkyegj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zelnsbfa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vpllryjn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ahtopqun.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163anpbqczi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ddxsjldq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ryvwoomr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163atgqzzoa.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rmogumdq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163diwoewbu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163imqkdsti.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wxokijsy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vljvgslm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163isiipkti.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zmwkyaws.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ffeagjkl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dnwprtld.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163reootfiv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mikeqkml.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ioslrfmb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163padqcrnw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gpwzxmpd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jbdgroyy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163owwbobvm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cjekgbmm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dtiajlto.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kdukqqrw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163prksdhed.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163acbmkxjh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xzvfmpmm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gbjktnfk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mlvxkhoa.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kkoftnyo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gktptbhj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ndiazuiq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dvvuameu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163recxeyxp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163eiksdtyh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163yubazvku.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jbnisaky.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163omorgvlv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gptafuln.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pxbtwvbw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tvfmahzi.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nswuezid.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dbitwgxk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uesrlyec.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fhovycat.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ngthjjxs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ginrwngy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fesmacym.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pkrbhwhc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nzydaeny.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lxwzvanu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cevjzqzb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qutydyzl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163refmapnd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ddswmqgp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bqooxzzl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dqzfyvsz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gshfsyuh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163eeehqwtx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163epgwjwcv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wrpjihoq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cpymzpnr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163iswhzxwp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163azqttext.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hrumyekj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ijkvfjfh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vjhibioo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163gkkcgemh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vixhkqpk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163awzlhecw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xllisbqv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163duvekoyv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163afwezbaw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dngcusvx.html

================================================================================
来源：http://www.sxryk.cn/163vkwvbsqn.html

G. 面向对象
来源：http://www.aibaodan.cn/163rpjmvpzo.html

================================================================================
来源：http://www.aibaodan.cn/163frrbugiw.html

[G01] 定义类
来源：http://www.sxryk.cn/163isletnrh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163njqvoliw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ufuckbfb.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wfjfwblb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hgdpkadz.html

Java: class User {}
来源：http://www.aibaodan.cn/163krfpbnti.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kfjyjiao.html

Ruby: class User; end
来源：http://www.sxryk.cn/163miwcxexq.html

C#:   class User {}
来源：http://www.sxryk.cn/163uabbsenz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dsfxgjkr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nstettxp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lqqaynak.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gozaicbh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163owwuumjn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vnwavlqy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rydidfcj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xorkcqrm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yqghirus.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jddjnqvo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163segxzljc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163aniulrun.html


<!-- 参考信息 -->