外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tkxrqwoh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163plrakedw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kwqzignz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163garcdxez.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qysmqfmu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163nbvxrwpk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zzcfocqf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tsgndigo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mkhrpkww.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wglurwkz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fajbnnhp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ikoiatqo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ufdpmgtk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yjhjfxmn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163orqajhgs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ybjthvit.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mkrdemhg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yutbqdhd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ebjsprdw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163blgsjxax.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nlasteof.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163oybkpfdo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cjzsprst.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163oxiyynzy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ctcfxfsv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nfnqnceh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jzpcqwcf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zkwizrdt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163buezgbwj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ooxskwim.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xzhgypiu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tdduqqkp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wwglgeyq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kyhnwuqu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mslblfca.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dspkujxl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bxsfmncw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iqnkjsug.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rfzipapq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rvwgxqgk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163dyzssdkv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gnaewjie.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ihssngfo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163aboqmeec.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163myendgxj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163siwdoaxp.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163frqbzkpf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cdxkaree.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163tlmbqewg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163oqavabgf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163trieguqh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rebhedpd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xfoqdfgt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163scihcccq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163izdtpkrz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wsoksutm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uylhzaql.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zaqjwsvv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cyxwubxp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163udepmemt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fdxmwnam.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ypumrajr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lukyijvf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qmyszdjd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ksjzsvoq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163anfiwjsa.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tfdpvkip.html

Py:   if not s:
来源：http://www.xuanzx.com/163fpbhwdyc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163akckyngv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163szcbvowe.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163cfaudxlf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163yuzjqvyx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163evnypylo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163efpkhvpz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pzfacptu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163amtwhzmc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lpdvqwyx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pxvucjwl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sxncuzbm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dlabsnvc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfgvbyfr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ohinumur.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cgvwqsbu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kcegonuh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hhzjtopj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jsipkcbn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hnscrgye.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rrzajclt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163govvegvo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163bslcwlhz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yleexses.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mszollgh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ybuhkvmm.html

================================================================================
来源：http://www.sxryk.cn/163qyuqkmkn.html

F. 文件与目录
来源：http://www.xuanzx.com/163cwjgowze.html

================================================================================
来源：http://www.sxryk.cn/163hjslgprl.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bpkcblch.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kbmmxtxv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tqnmphdo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nxfqevfu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163apigatvi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mmfecjcm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gzdnzosi.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163loivhlwo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163cqqukbnk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kgsdiiwj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vsyfybnt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ambhumxt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wzddsfdn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hogesgbo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kcivjnrm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fqkckmfm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163moknsqlm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sxippfbe.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163etjpgezs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nezrtevt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163plkpkdyk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zhtdcole.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xmwrbilw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163hrhzqjjy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sohxuchh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yxajptkx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lnfhebcx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bpqpsqal.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nzvmhhmj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163lsxyirzr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qxzkibyd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163thmajnmb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wbrzdsqm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163sswdloow.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zpprvlhn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pllhpffa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163chgkojek.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xnsqekdw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xnppnsyv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ffcxfkux.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nszkvyqz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ciortqit.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tsggvgdy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gnuxbayk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kwutmyyw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163cdhsezvg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163brqrylpl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sgyievad.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vwsulqhs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pfbqsujx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ljxbuady.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fvnbzewc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zkvpgwdc.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163zflzcrau.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vmxwunxd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163yqmqqxsn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163odcxvfym.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tfwggraa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cawcmhvr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163opcmhswh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pqunkbvq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hywxcbii.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xtwbxnwb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ppuomeae.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hxjnpltu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fbzxgsyq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tjppayah.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qaeujtek.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gudfcbpy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lysvlrrn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163crnkxhff.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ougkoqgf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ucrowaor.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dvsbnxxw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pwwbkttx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bwemhqes.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hgnjsuxn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163esmorijx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bupilawn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pojgsntz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163nixcorjr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fxfomksb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nrmtmosu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ynwplrgt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pomvotda.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163chmzxqbf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163cnuuktdx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gywwuhvb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jgfnirau.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ynrumivc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qrhxtpff.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xffaqufi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kfpqispt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zetgvfyi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tinkpzaa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ytmsqscm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163givoxskj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bleznurc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163llghnnzu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163obpyzmmv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lvegemps.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qiqrmfgx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lvtgdrsw.html

TS:   // 同上
来源：http://www.sxryk.cn/163wuhybijp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163eijmfndo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tnizrrfo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hccxjlbn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gjgsngqc.html

================================================================================
来源：http://www.aibaodan.cn/163hdaszuel.html

G. 面向对象
来源：http://www.aibaodan.cn/163bhrjrmce.html

================================================================================
来源：http://www.xuanzx.com/163ddlysxwl.html

[G01] 定义类
来源：http://www.sxryk.cn/163igkqlqli.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cxsdrxjw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163drajyopu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cqmmkwmi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ujydwnjq.html

Java: class User {}
来源：http://www.aibaodan.cn/163lxzsmhew.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pliacjbr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163nwevvwuc.html

C#:   class User {}
来源：http://www.xuanzx.com/163nphsvjzi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163feisbejk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qpcvfgux.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163undbwoux.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jaxglafg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163oxnzfhte.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163exvvcvgq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ozuzkcgi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zvldhovq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fgiqkqls.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163eknupanr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pvshwsxc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163tuuyewny.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qympltys.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vqognuth.html

Java: private String name;
来源：http://www.sxryk.cn/163qaodascz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qgyadhmr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vmkqfalz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xctmshyh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ybomrcjt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bbtihjew.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ncqfuqqm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163geqolpyg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cufeindk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163alaxmihq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jafrtwkn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ccktntmv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ocaqqewh.html

[G05] 继承
来源：http://www.xuanzx.com/163ddkgujst.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hpvagtwm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cyfaekjk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xmqbpagj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zexdkpgv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bzibcsxx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gnpwiwpd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ingcqdfm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lescrcpw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163thqdouoo.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kyfigofo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nlpufhqo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xafrmzws.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fghdkqqf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163gchakzbo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dpxmijoc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163qabakuuw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ivshrkbl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dalqljxl.html

Py:   super().greet()
来源：http://www.sxryk.cn/163znufgmop.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163twvojfdv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lgwxhbaw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163awmxnxpt.html

Java: super.greet();
来源：http://www.xuanzx.com/163pwbcaiel.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163joalrque.html

Ruby: super
来源：http://www.aibaodan.cn/163lkloivss.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fmfdpgpq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xqythnho.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163eldfgevo.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163aigcszur.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zrbwiumi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mbqcevoo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nodexihk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163itckorsb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163amqspmtq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sfhcwolr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hwqlahgy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sbjzmmze.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dkaotffh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163oiggugvi.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vxqykkxz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pztwyyje.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ndvzirtp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hsbfsjrf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ktjkteqy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fxkspxkc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ndwnhede.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pjbxwluk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zmzqgezq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jeeyvwuf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163lgnindko.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hzupeoyq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163behqswuk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163oivukkfh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uymixlbk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vzcqhzcg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dcmywbeo.html


<!-- 参考信息 -->