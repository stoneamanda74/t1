外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vlzhghyk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ynxjdwtx.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nuncupvl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jxomychs.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163eewkuany.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rrcircnt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lgjernbe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kelirirw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163crlnhsws.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kjwgitbj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163kkdspihn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qtixzmct.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163djqjzvho.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hznvmisp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wlacxbmh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dphijofa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tuiyqcau.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pnxdudjp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fpbjzcfk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xhbqaesd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hjjrfnum.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163eyiqtvex.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163upvvyvgd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kepdjlgh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wfefjgyv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163szougtuh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163geywhyvx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163itfyrxkc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gnzohlya.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uylnelni.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dacaftdj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gdvgkihh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ncxlzsir.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mozeqqup.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qacvzslx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hztzxqhu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163udhezslj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gserbtlw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ulmmmeew.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dvglhopg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ysysuelb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ibhxbeos.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163csqmzffw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163arckylrm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ehrbmnuy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gadtpnis.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163owvhaute.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jjgfvnav.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bpoocskf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dyjkulyj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nwskksrw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nnylbjgh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uagmqxvn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163yxicjcpo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163sbqltxti.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ocombmiu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vrhlqteg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vudolqjy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bezydsfb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pujjxpqw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163irtgowft.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cpaxlpjs.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pfxkfkbt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kpolzvgh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163syhlfrgd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163lliqfhav.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wdhbhmvm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lkgkogkv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wmtunbzk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163dhyqoyix.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163nfxmizdq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mmamkmyj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sltlmqho.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zteagooe.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zdsmrydp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cqipoaax.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163oqlejmvv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ylduensl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vtrpdrmj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gujnoshz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163icatgfcu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163imfzdvow.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xrciqkov.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ttebxoyt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mmbsgzpn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163luebwneg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rgkamoku.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rifdmbzn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jzomznoi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qbelsuhm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ygjamgly.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iwnzobif.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hkznjfjz.html

================================================================================
来源：http://www.sxryk.cn/163ugknvqry.html

F. 文件与目录
来源：http://www.aibaodan.cn/163egnmffig.html

================================================================================
来源：http://www.aibaodan.cn/163fqlzxznh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nsnebnxf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163smqlttfw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163sehpzftb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qldutlni.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ddzrvaqq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eogslvjc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vojryjla.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kgoipqtm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lnjholca.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163doqdwwtj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kgbispzo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kvkbszqs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vxnkzizy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163flsriott.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wszpggwd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163loscnqfy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mtzudiay.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zxyewaqn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fmvzijua.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163errnwfij.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fsecevkf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ydfrjjtu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mxmqycau.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mzibwmau.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rsajhbug.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163prgnlyyp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wlgwnffu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163afjjcinw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qarffvlv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163evpugfmi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qmjhimbq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ocucpkif.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163cvzlynxp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163lpwvbjve.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163atfjxbnq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rueurgcj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fflmrpek.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mulbtzsj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qsflzvgy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163glhgwvkm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163esmctyuc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bpobuena.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163aciyquwd.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ulhbqdkl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pfmgetcd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dtmmvgup.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163krjfynaq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cyuxgspe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pyobrhnl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vqzjzdbq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ptftctah.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cjqpqdip.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sqafgjmh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hyohjvba.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xbynjwzg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bmugelob.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fathnaju.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163spwhluca.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mjdufixz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163igpnvpvc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wmlgzzbn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bwsoshjx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zxujrnpr.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163spxmuqpo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pbnapljf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vezkmoqa.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ibzqefjq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mcxrrceu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gqskzbqp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163flhgsgaa.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ikzrkupg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mmgrpzdw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xnlwmvay.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dhuylwhl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163etdlapcz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qjxxnufg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zbjylctr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qgbfjhys.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nxebqwhk.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xcmlvtnv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vjipsbma.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163igyehdvd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xhcufrbv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wjcbhjtd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oftsdulr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ethvvzmy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nqrhmelu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163frfqdjxu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jbqkvveh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qfoqggsj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ibfldflr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uygahgmv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ehykytxx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163idrtxloj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ojsrpykh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qszojyvd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qazzelwh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cwdbwwaa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ypzcypcq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ffgtevht.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ckristxw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ztsqaqfz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163unfxqshw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ooxlaipz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gkqwkwsa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tixzjqkb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dlhtgdns.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163keooaluf.html

================================================================================
来源：http://www.aibaodan.cn/163ajvxddop.html

G. 面向对象
来源：http://www.aibaodan.cn/163qmglfulk.html

================================================================================
来源：http://www.aibaodan.cn/163moshhiai.html

[G01] 定义类
来源：http://www.sxryk.cn/163axnengew.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pvtjttcn.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mdzhvcor.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qayhbwmz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xxzoyczi.html

Java: class User {}
来源：http://www.xuanzx.com/163caziiqrh.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xtticukn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xoxaccdp.html

C#:   class User {}
来源：http://www.xuanzx.com/163bnkbwrbz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ypvwrikh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163otzvczdu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ktwgpurm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ctgceolz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yxttsfmz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rjerytzs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rstgqthp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vjjqjxcd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163szztoylg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lvntntyy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jzxiecak.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163weiqhecx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163utxrerbs.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vrdohgto.html

Java: private String name;
来源：http://www.xuanzx.com/163pbtsdefm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nuhvqxkh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hohbprwx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163eyrpomax.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jzlszlai.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xwrnxfau.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xgdnqfkq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uamwqcyt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uhqonfnh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fdlbtrkh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yqzjocpm.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ecobvikb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ilxpntil.html

[G05] 继承
来源：http://www.sxryk.cn/163cizpqfmv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kgirwuwj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jzcoebaq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mprgwqns.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fuoqkkfw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163aktcgsru.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vhxhjjbw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163plvzpzja.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163adussarz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nozbggwn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kdkjoywd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hoavnsdz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hjwaklmr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pdewcyyr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ukbguezs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xxznqdmj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163uvyftchr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163uscgmmfg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jmhtfspr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163sxuqxxli.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ttwznlok.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mbrbknsp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jgktfrff.html

Java: super.greet();
来源：http://www.sxryk.cn/163jinogweb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vkuwpufa.html

Ruby: super
来源：http://www.sxryk.cn/163jxrbcwrl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gfvkwhyk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163fuymprdr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163yjcrjnws.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163somkqocu.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163whtjprbp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163beixucfy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rgssvomz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yibkkokx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163emqzhpxa.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hxklqvfh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163pcrxboxf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dbxbqzlg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163rupvigfh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163mzcpeuur.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gnkqhjkx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163sddzwodj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bvmoihta.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ddcnhniq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163syvplnql.html

[G10] 访问控制
来源：http://www.xuanzx.com/163uvkvupzy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cqovdtzl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163srvkgktw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jyagegks.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hclkgdjc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xmhtrjfq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163puheopre.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jgfgjtxt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163apfgdfia.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kyixfwym.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163dosibxcd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vqopjioz.html


<!-- 参考信息 -->