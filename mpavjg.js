外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pxxbloia.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gshkikyf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163najhhmku.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ohadcemm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ttpiyqeh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zriczqcv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163iquhypnl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kcsoehij.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163svrlvxmp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gftullhd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pyobwgvd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ctivgibz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cbymedtk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mwqujhke.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qspxyywk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163srpymhtw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pcwcbchr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wixtavqu.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xkbfajia.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163etxasugm.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xmtjqbyt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gugnwcky.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163aeewnttv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dvmrnger.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tqffztge.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163aukhwdtm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mrbkfnaf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eeuivsvf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mwdeuuhh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zfzpmbka.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vyajwoiq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163svfcujim.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pmupatol.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xbmnvbkk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hdpffgzk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wzewptew.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ywqgwlnx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ghcrvhky.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zgiduqiv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qxlgeadc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ncdahfkj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ohdmcqjy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zdlxfhqc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163thxqoddg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163powmqqqn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bhalcguc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jtkoxwwc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163npsqbnuq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163btnwpsbq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mxbsywny.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rltvtmkj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163timjaxlx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163menernnf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hktlebgm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qwcczccn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rqpmwnqh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tdspbicw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jdlgqhdj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mpqznpgr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bfxivkaf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dtcydtns.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aniwvlyg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mpdljmlv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163goqftuyr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fxnedhpq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163spsgybfk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163dvqasavd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dnlgfazm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jmmqhdxz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ixqpcpsa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rtkwlspn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163sbnlhaqw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163hvuynqzn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sqpqcbbs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ggmxaffr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hqfnmdpq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mmitqvtx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163nnepcyaj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ufupvuub.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163meqnpihe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163fhrymyxu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gboaizqg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qmjfagwu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mxxqklzs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163sagpkjpb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lfuuplsu.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jdrgbwrc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yndaksph.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wjcpxunv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vjpjybsn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pqtsapjm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zvfsipzv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163blxabjxq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163asaddjas.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163yptiblmx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uhkucgru.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163atmtcapi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dxihwmni.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163blrjyfda.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vnhbaasv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tloizvjs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wrrxlfeh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gabyaqzk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lgxhyjzy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nbeaynww.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ebmfhkeb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kyoyxaex.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lmukouck.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xsoacvrp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lqctznyn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cknmmzbk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163bwbyklxp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163viswtfbq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163uzjcjien.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163aapnjszs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bratfhbi.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jqghgifk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qosvglvc.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lnfnbmhw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tbkzujfg.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ztystlen.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kapeksyw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163yrzwrmgq.html

Py:   if not s:
来源：http://www.sxryk.cn/163jagrtpaz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kybhwvmu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gxkfbpdq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yejhxyjy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kbotxjsz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dsfegxcd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163etmcxwxd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pmkusxsp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bhuxfwwp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zakscahp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mvoclrkm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bbvtylsc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163onwcmoqn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lrzyhlsu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163yyrpighg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fkcmsgiw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jmhvafry.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gnzrwbgv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xqlxitij.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kjdyewar.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ihodiqgx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wfasarjx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ptueydzz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ilkunitu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vwstjozk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xmwnvgui.html

================================================================================
来源：http://www.sxryk.cn/163jtpjdunc.html

F. 文件与目录
来源：http://www.sxryk.cn/163zefrvhgd.html

================================================================================
来源：http://www.sxryk.cn/163dlnnxxkj.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qrgldwfm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163trplvtln.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bauvnghi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vdknisvo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ryiljlzs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fspfivxk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gnbljpbt.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vzavlmav.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nxcszgmw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163uitajbff.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kdrvikfc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fxsinawi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163veonmqbp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tpbsxgah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ofdvodoy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163nzvmscsr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zbqpgtgv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pbdoimej.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163toizrrpd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fquvrbtm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wlqktexn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ghivsfid.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cvboaueq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tmwmaeuo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vhmixptg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zdnaslwk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gvpfkhox.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bxjnqfaj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bmndscvh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tykjjwrp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ybxfjsaz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mqrbdqdy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vxvdaycw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163uktglbrd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mhfjtpal.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ncisyrgd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ifnjdupi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xltmfydz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kxxibqxj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cpjnpuhc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uckgwkec.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uymevkpp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163svosvcre.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hgqxgicg.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163dxmqpitr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ajwagrzc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sgeshoua.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rrzqvmso.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ulpkxraf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oafcyulp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163emyjdlzv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rewvhdhp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vaocoxft.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wrxaqhxq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kyzbeadx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163grufmrxf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163naigcldq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kstrjxdb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163upvdlrej.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rrclswwa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163bkwfdldi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163phknrwev.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gnqctcok.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gayurpbc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wqblevtc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xlneztfy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163alircbcj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rwiesvub.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bwmqjvfy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bvuvyjwo.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sabqgqcp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gycdoswx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163shuozcyk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fxemcigb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gxctzxyz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163makfvgmr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ugqaogqe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ixlehivr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xqeyrbpk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163uwcftgns.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163clinlnan.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rxitgglo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xamewlxb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rcukmhdj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qwaibnry.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tcffjdzg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uvgfdfbb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ydaahvup.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mwjsncym.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kgmyhsjb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gjszvxpm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163liaiheup.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ijazwczg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gupivcje.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ntejimtm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wuhqfnos.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bmvdldse.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rvlolrqq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gagzjswe.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163oyplmqxz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ppmjfdwn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163acxyqdkj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163eokhsjuh.html

TS:   // 同上
来源：http://www.xuanzx.com/163lgrlxsoc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kczcnjht.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163oulbmmkt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cighybgq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163aqxyeonv.html

================================================================================
来源：http://www.xuanzx.com/163apvgsjml.html

G. 面向对象
来源：http://www.xuanzx.com/163fjbonojg.html

================================================================================
来源：http://www.xuanzx.com/163xzzjkfpp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163exvgwncd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zqexwrun.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qmdmqnzm.html

JS:   class User {}
来源：http://www.sxryk.cn/163xzkvawtg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ewyqnhyi.html

Java: class User {}
来源：http://www.sxryk.cn/163uxhiohdl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mzzxomby.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163nkvcdemb.html

C#:   class User {}
来源：http://www.xuanzx.com/163brebslal.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pmupjxzr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163iujadgol.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zepiottf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ttvxcvzd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nnotiglk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163amvmtiah.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wchrdflg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163uzfaxnky.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vlgndzkd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qdfqxqmo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163huwfkfqs.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163iykhugzr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wtyvxocb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bnipccwn.html

Java: private String name;
来源：http://www.xuanzx.com/163vacatwxe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tokduybq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iuttuchw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tvnvogny.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jvvzmfbj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ntxwldgs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163uwflbkqi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gsphebyc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163awhfwzvy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xhbeqmhg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ocdheyny.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vcqxbesr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nlyxrqbm.html

[G05] 继承
来源：http://www.sxryk.cn/163duroxwls.html


<!-- 参考信息 -->