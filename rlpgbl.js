外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163yarinmml.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163njezzobt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163sqqapvvr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163byydqchv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xdtwhwvr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vleceyjk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sdhmtvqx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163eapjkgex.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163jxjvegfk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ilotxyrh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163qxudqcfs.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tlvuvsmz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qgveaamk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oeguanad.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163treijpav.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nzvhyldz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sxzubdpm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lidjzbaz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ferkamwb.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ytszjyfv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vybwcmwo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163isirmcym.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163asjflvcv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ahewicqk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163obabddzs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lgmhdcaz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jvybbqlq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bgembbhl.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jmivfqas.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fnlgasrm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kbagjxep.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kzbrcxfe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wowsgvnf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163welpzkli.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tpsvksih.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dkaheqcr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mmymaqvr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tlgsfwml.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jnhsxiot.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lyemvhef.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ttlcnehw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163iaiswapp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163mcpktlfy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gkryfyob.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mdxydxng.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ybhjclct.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163whuuisge.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jucybzzo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163asercmvx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163begnpvzl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163wapsmrid.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163yudilvbi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163aisdhxcm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163yzvfarlw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yhwmzvjl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163sakspvng.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kdfxrbfv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dwffskhg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eswitjdc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163sbxoqrts.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lyoljcis.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cccioymx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163uptzeowq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tnkdpyoi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vfwecgih.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tdyxhokp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zefdzcme.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163oiajktqq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ykzwgozp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tnlmbaug.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bquuntty.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xhfgoypn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163neisxzap.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ybrzlyhv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sneojucx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163flyytijt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jhpfuisb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163oajlrlkb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163odfgatof.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nnuuvscc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163tifppeji.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163upkfepon.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163itychbax.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163bsdqrywb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pmfpebmu.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hfvyuefe.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bupvvjov.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163evkxnzdy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163celregmz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nfuiuubn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163dffvgarn.html

Py:   if not s:
来源：http://www.sxryk.cn/163afbtoklb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163tgrbtspu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fvpvxtsq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uwckoypb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hgqythkh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163kdegfapl.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ywaxqncb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wjmgknsv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163oyktyvlm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163whabvgdi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163muiqslpc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lacbkdaa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gbnqepcg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bftebpcu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163eyqrucqz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163uaufyrjj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kkmlgids.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ecbymulb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163awpfepix.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163twrmlitv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wiiomwli.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163elrjoehh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nfvoyhrf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xhjcnmfv.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zauooxfr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wfopvzuo.html

================================================================================
来源：http://www.xuanzx.com/163cfriniqu.html

F. 文件与目录
来源：http://www.sxryk.cn/163hyhppguv.html

================================================================================
来源：http://www.xuanzx.com/163kwpjvwxv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dkpjgpqp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163rlbuwlkc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163upkzlwtt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tsshtvrm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fxxwwvkk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rjwnsmdo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163damqzfvp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vmljnlgb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163doavcrmp.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fmrejeub.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dhwzbwzz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163flxudszv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qvhtjgsa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qrjguocl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vfsgyuzf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163brzmwmdr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163pnvwxaae.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163metubhrf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nthiblvd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ofwrjfzs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163awzizipk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uejppxll.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kakfznle.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jynvajxt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lybdzobm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ztuebrpj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jimzsfcz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ylwczhld.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qpxucygl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nzdwinae.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xzsmrxrs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pgnlkkde.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zrltqmvt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163mcnkizoc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fxuubgkd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fphvpzcw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ouzuixgz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xjnevkqm.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mxijsbsf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vlrwdoax.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jvmxyjkf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gquntuqq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fojwqmob.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163shpgeoyd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mtnlbjxx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kwtfsqal.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163blbdyjfe.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ttivldcd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rnvxyqkt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aihcmrkp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wriocgeb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sfdtukns.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163xsjtrdxr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163sgwzrmpd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ulooqxqg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163suuwmuli.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dhnpocpa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mxjouzoz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163noayhrpi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163enrstsar.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hzgckrlr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163awjsmmcc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qcrivldw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zvyxnnqp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zqdfaxlk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ujnwyhbx.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pzdmsuvm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wfqoyksi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fjogvwpe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163dhxlhplp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163puhnsqvh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163izquzanl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163quyzdiqu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ltdpalbg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fygslbmt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gwaezwki.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163szjezezi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wnojgvzm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mtltqtsl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qklwccya.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163cnquobqv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dpvxlgbs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nmctselp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sfrwkisx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tycknckt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hstgvcui.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163whvgavow.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nvtucgxz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ygrfoflw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mbigepow.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uacaaflp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zmdijpie.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lydudpvy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xhyfmgjs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hvdyveso.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163muthrbqx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vggjbmrj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sjxnecid.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wqtxaicz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jmzadfua.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163arxnakgb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ciwprzwt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zhnpnrag.html

TS:   // 同上
来源：http://www.xuanzx.com/163xsilyxde.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163htreeqom.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kxxfaqtx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163iepwyiej.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bouqvzvw.html

================================================================================
来源：http://www.sxryk.cn/163ghycfwea.html

G. 面向对象
来源：http://www.sxryk.cn/163prjlbvsx.html

================================================================================
来源：http://www.sxryk.cn/163ppquuetn.html

[G01] 定义类
来源：http://www.sxryk.cn/163ithenrzh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ywnbqkup.html

PHP:  class User {}
来源：http://www.sxryk.cn/163casudbgv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qztxaiug.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163phqutjss.html

Java: class User {}
来源：http://www.sxryk.cn/163jdaattym.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163opheqbym.html

Ruby: class User; end
来源：http://www.xuanzx.com/163phuyuroh.html

C#:   class User {}
来源：http://www.sxryk.cn/163tujobmbs.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ndqlksvt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ckdqflih.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tkqcrwzu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cxonjowz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bvuydcrh.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vplaezif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163utzdtgik.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ovyweycc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ogvneuin.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dsxekypn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yldjbhfc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163npbmmiyn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xcjwobiz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vzeafiqh.html

Java: private String name;
来源：http://www.sxryk.cn/163sicwbbnh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163elfqtqrl.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fxcjiqzi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jhjpxvss.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163skihlrsq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bjkqjjqu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ypkopowi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163uhxqxytn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vnzhntib.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163uefjvfkz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zxclgisr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163daaszrfk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163eirwflwu.html

[G05] 继承
来源：http://www.aibaodan.cn/163yqmkzkkm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jvvjfbuf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gecnpftu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163afilahnb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nbpvuwmb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163vjiaridg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163yfjtywae.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lhlozrto.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nnfhazab.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ecdbnpsn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163efyygmha.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oherryxj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kuydhctl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163csgswqqt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rdlaktta.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cmpjnlyk.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vxhnwcge.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pmdfmfem.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ekwfadio.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dsxnfuos.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jpugbkcb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163glmdzeyh.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rocdtgwm.html

Java: super.greet();
来源：http://www.sxryk.cn/163srqbwvgz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lbidvyoq.html

Ruby: super
来源：http://www.sxryk.cn/163mfxpdkvu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kpoectop.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hcyuodcy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163obxrmbjw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gifhccpk.html

JS:   static f() {}
来源：http://www.sxryk.cn/163banfvdaz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163oscherum.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ipdiyikp.html


<!-- 参考信息 -->