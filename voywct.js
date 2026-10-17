外链999!wailian999！

[E06] 替换子串
来源：http://www.aibaodan.cn/163eegpfriu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163scxdmxex.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tnvkvvkr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zjijlqfb.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fdpljuoe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163atkdmsru.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163msdazspi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nwzbtuep.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vwuusbwo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163buwytfcw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tenavizh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ovvoistz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ycegrtxk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163siizjwmg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oywvmjqz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163hfaytglq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163adnpiuio.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163yzubibcd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tmonrktd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163rbzdbyiq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fojlmlrv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163usqechiq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ukxxglux.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zmvhgytb.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bpbkjkhi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163whbkzesb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rewrsszz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bizrxgpb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163djcpmczg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ieavymme.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163imlyaxqk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163btxrsfkh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ggavjdsw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163oysackow.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nyvjenog.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lxxkvpqd.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163eetlvpto.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jmruaknb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yycpgnnn.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qjffpbtm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hujkhyux.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wwnjprte.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xrxukgcl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xmyammsu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ouyethep.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xjdonfij.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cplfwtcx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163uspgaxfh.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qbgcptfj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gmwvmdwi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163hkerizfs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kjboslxg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ffjzaqyf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163suwsmlcj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jegskgnx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xjgqzzzk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ybyyxzvl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ojnvesuh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163twkcoany.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tvllqlld.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iphgxdqv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vkevvuju.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xagibttw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kuontzjm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163knurirbi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hayadamk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qflkmogu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mlfbtkpz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uidigejg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mjrzptjy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ocujcmwo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163pugwwgpm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163myfhbgyn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163bikpktmt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nmuuzlvu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163cpvbufmt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gxtulwus.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tvyirroy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uhekiuyg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xvcrpphy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kkgajjoi.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163yncrupcx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zhcbpzqc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mlstgwmc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ixyygvwp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rstjurzb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163txikqqpw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wdwcapwm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fkkedwxw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pxivuwjj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uvprtqlc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ezxwkwjd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lpqdirmh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kvjgqauj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rjzsuvtu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yooapkjs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uppparjp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ltzgqlrk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163pxckqlgu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163guilkvrn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163chzhyzmq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rfdpuylv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jxfoxsdq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gglarjdm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163modewgso.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mhhkzmvj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kpvkyrli.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ammbjytb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sbfirfpw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163fvlbywry.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dftuiptu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ufjfqonr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ggswovoo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lgmusisj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163evbihbmd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163axfzdtzp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zihpasfm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xwlikies.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xdlxqhrq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zjxlarna.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zzfbmrea.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163abfgyyif.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qehdcqog.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163elxtxgna.html

Ruby: s.lines
来源：http://www.sxryk.cn/163suneyjtj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tbtmqiyr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hktaqyrk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163olusldxc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163myxinoyu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163czjepkmb.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163onrbjnwy.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mbifuene.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jdvnfyop.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ucyzctdl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pusebygk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ztgvokiz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bbodwzxa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dcvdfbhi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jevbelma.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jszryrvy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ajvunnkd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pbqtlhiu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rsvigjmz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163nskoayfv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tigjrurj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fkohtaud.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tqadrzjy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163njtehlgy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163arfynssi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fzqpufks.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gxdnwmdc.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wowpkqaq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rgwvmjkz.html

================================================================================
来源：http://www.xuanzx.com/163aexehiwo.html

F. 文件与目录
来源：http://www.sxryk.cn/163dnkrodgi.html

================================================================================
来源：http://www.aibaodan.cn/163uarbhkqg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qwdrfvvg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163vmhhcthz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rgyfftdt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fushimeu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zkvvvzom.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163phxqmcue.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fwpfkird.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xmtmeopn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xagqfrik.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ixtmeebv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fnydbctq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163usoerbae.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163juorgjmk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cszatyug.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163npufijpc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ehxrrarn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mudsjtvx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jwysefte.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163peqwnjft.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163oskdyfxk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163sphbeyvh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jfkbkjys.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zkkmovlg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fnuntopl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fyhbmmmc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xhsuhylc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xqgiqdoz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mepzxmmm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nfjsaupd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uflijazg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rnalwiaj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dnnrpzep.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rqfgejfu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vhnbzglz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rjirgkjd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163twakomln.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ekfcktom.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163lomvfiyp.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163eirwifnt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rxhkjvji.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163noimtage.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ictfdjja.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mzjxwoti.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163nvrwrfav.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rvyvisqe.html

[F06] 删除文件
来源：http://www.sxryk.cn/163heieaqox.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ubdtzqcv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pddlurcq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uayrbxxg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nnidlqft.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nvldfxth.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163eecljczt.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fbusevun.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lfwhucsd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yyolvviz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lcnkvipr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tlgyrvjh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gjtzreaj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kokdgdoo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qprigkuk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tioidnwn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163surazsay.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163platvsam.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163zcplsckc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163isluvvfn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163etugccuy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163txgnualf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fkpxsasf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bhlhbhhe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163sumhjfuk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163cjadohqh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kxuccaka.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mqudwnbk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zrbtdkku.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wjbsyiht.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cjwqxhvs.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163htlrjoon.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bhwfxchp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fekkdbiy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ngvnzmqw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vvlhrrsq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cwrvspfj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mioxxpql.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163eiuhzeyq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ipptkfky.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163apjlndik.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ngwqwges.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cpztlspn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163suigmfse.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163yglrlwiu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jkrvycrv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lgnpyzfj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bscxbfjg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dattbjlf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163biwsxqvf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xahssxhe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163koqskuot.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gviylgcx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dhirvffv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wptoewgi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dqcwsjpq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163doiiielr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wchesnms.html

TS:   // 同上
来源：http://www.sxryk.cn/163jasbdjma.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mgvidnrx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zlrvgvkf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xqnmwaij.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163obzhitgx.html

================================================================================
来源：http://www.sxryk.cn/163kseiqpcg.html

G. 面向对象
来源：http://www.sxryk.cn/163vrnlzyrh.html

================================================================================
来源：http://www.sxryk.cn/163nvcjyobn.html

[G01] 定义类
来源：http://www.xuanzx.com/163fzdmzdbt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tvjvrvsb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hntsxvwd.html

JS:   class User {}
来源：http://www.xuanzx.com/163uguqztid.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zgsqocwl.html

Java: class User {}
来源：http://www.xuanzx.com/163xqipvzcp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163svhpygia.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bvfmochg.html

C#:   class User {}
来源：http://www.sxryk.cn/163durleeih.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zrnstfhm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tieeafvz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vccxpoxl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rmxgkebe.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rfysytmt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ccgdlqjc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vkepajdb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163uffdpsgo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lpztlydw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163eikroqgw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wpsmhsir.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ojzlllez.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ssvvzgzx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163brpfcxpp.html

Java: private String name;
来源：http://www.xuanzx.com/163smwhtgif.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hhmxfiny.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ttffybxa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ilemzwuw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163spmnsdmo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yxmhvlgy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aqhvjoqu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163idhfxmqh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zmrfaxbj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rszdlrlx.html


<!-- 参考信息 -->