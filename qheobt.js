外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zlrmovno.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qacnwngg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163engnnzdq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cfgknznx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163eunqrqpi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mzbwdcgi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cxzmrzmd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xcayzmji.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163djbwkbhn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163koccyepi.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mcsjjray.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pdwgyhxm.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pirnetof.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ijusflhq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wonhocmx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jtdbywyn.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163rwoyseca.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lwxrckah.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163npuhgsyt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rfotxzej.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163aiklywxa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hsqqcooc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xakcbcii.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dmcchngv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dijbcllc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xlooxilk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jywmqyej.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ggxuttwe.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pkdsyshg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ivztdjdn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163afylhair.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tfckbzoh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163svflpmyb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163qyrjlgky.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163kunpyzln.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163krqonrfn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kjymuqef.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ojqgzwzw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hynpnisj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163roygvmwl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ismoykpf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163olkglfef.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nubnoaur.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xgiuklhk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xoaumyza.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rzdowqzp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kjpnlsyy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fysceosw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cadzbbww.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163juiuzwri.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163oguyhvyi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163biuxcmut.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rgfnqqlr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vlenprxv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fsrktdva.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163klzmqwou.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163iyvpcrxp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163sfflcomt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163lrsfcncu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163cqklbkej.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lusmgqlu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163fvqbyivq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vjkjkeux.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lvaejwvf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163khryqalm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rpssmexi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dfazjecq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163twobtltf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mtiwntii.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yrwiextp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pxwlhwyo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rsvqjkuq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hbitnpds.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wixostfg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163khfvxibk.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163osczxgvu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uijlgbla.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ncjoiwzt.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dlqxnfeg.html

Py:   if not s:
来源：http://www.xuanzx.com/163atgeryam.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bfpohaag.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mfagpoby.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163fwyqlbdf.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163atmklaze.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jnapsudz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163utcweokf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fdiestlz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qsxzdget.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163junqapac.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ptyzvdup.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zlrtrwht.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hxqltvvp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wdavkfqf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jidxxjuk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jfoupaeb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163amengkah.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ruvqzcms.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gnqwbfys.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gfuwubij.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ijsdmthd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ostuvtkn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nvvwhbem.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vvuohftx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ikrtzajz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163drbfrsuu.html

================================================================================
来源：http://www.sxryk.cn/163fphtfxxb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163gicqouxb.html

================================================================================
来源：http://www.sxryk.cn/163xpzzlgje.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ghbigvwr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dwdsurqh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qgvkdpmn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163emhfxddk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hylrvgjg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sxzamnqa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ibhztftp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bqupokhg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163wwasrekq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tjvhkyhi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tihrmqbh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sorgqtnu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163utnxlrrr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oirfkunv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tjfeakwv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163cclvogoj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qymhuozj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ywgpwaxn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163oruzzeoq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dqtrgecy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163grscosmz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rkwaqwkn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cxlzjgzu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pjbtzhyw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wzqipkqr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163clrjjzpg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dajruyxm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vncxlnlw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mxltlukk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tomxormn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jvfsdmnb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163isdybhzn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wekpfzbb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rrlumvzl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163arwtmwaw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163sgabtqzg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dycidaza.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nxekcrtr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xcevcmkf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zaqajpdf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kuyshixw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yykngglq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rwndmbxn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163skhbdbmz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mmhtwxuf.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xbhwvcsf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163itctlzug.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163byujmsuy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hemjeloa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lpngyynm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jicoeijq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jbyjpxrx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sunkxinv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nbnkckgj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fbduadva.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lajvmhuj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lswoelwi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sqhgfofh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vwuodcer.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ojieduxj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zydhrvhx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qalfyznp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ytszedfm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gaqfkqlb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bxtscjpu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gveqrqnd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163baucrfri.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ajpzgtic.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pzqkqqoi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ipbkwsav.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xpkifdza.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eipeqjed.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ojxedoac.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xvxtkrsz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kxnokrhw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xxwkmkwa.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qhjdcgml.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163semlegrj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uxcniheg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mkihswhv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yyozihmp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ydnisfdj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163plkgbdvu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ffnylnnd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163umauinhm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ujjmqtlc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ditvtcif.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zlyitzxs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tsekfyoh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yiiyvpxe.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nkriqvgp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zzqlizjn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vujzwgmv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wgulbckr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uqiutflw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kbjvcisf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jznmiqwe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kfyefpea.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jclthouh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ehfffrtd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rjbgmxyb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yfigyrov.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vbtdmqxb.html

TS:   // 同上
来源：http://www.sxryk.cn/163lktgavxp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163salrelhg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yhoyodbb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163eeilbrrp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163twmqgpew.html

================================================================================
来源：http://www.xuanzx.com/163zgnezpmq.html

G. 面向对象
来源：http://www.xuanzx.com/163rqyqrvkn.html

================================================================================
来源：http://www.aibaodan.cn/163dfyzscjv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163dcjednej.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hokgejbc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ntvhpsnf.html

JS:   class User {}
来源：http://www.xuanzx.com/163fwafnyej.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163shwqecbr.html

Java: class User {}
来源：http://www.xuanzx.com/163sjyacldi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aggymqgd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163yxzgwknl.html

C#:   class User {}
来源：http://www.xuanzx.com/163ahutmfyp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fuuufqoz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aukrsepp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zktdzfig.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dqubgrnn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163uhhzuxhs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163okniggif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jkhqmnii.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163azixttxa.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tndiurzz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163brdvjvod.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zfzbgqob.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163msfuofhn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gyyrmmvp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ayzngmqr.html

Java: private String name;
来源：http://www.aibaodan.cn/163csvcuhac.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jjqxdwas.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ijwattup.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163bunotkei.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tyoiqjco.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cfdpflwr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163idphcylk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163djtipxug.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ismvbiux.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nbuknzdp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rmqmwykt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qvctmiiw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gnvthujj.html

[G05] 继承
来源：http://www.aibaodan.cn/163mjwpahfz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vwnvserf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ogohuwyw.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ovbktfqm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yxiadyts.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jtgyiawe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163eooagccf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zkzljpbw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163dknawfbn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ycznadgo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qtqilzse.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cjjxiewg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vnxtfbhk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ifrdgfos.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kxbztcgm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163grshydja.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gpehviqq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vbyzjlxu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vbhwbsww.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gamrjuap.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wommevgm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zulfdtow.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ypbmijgv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xmeugoor.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163nqnvtzpz.html

Ruby: super
来源：http://www.xuanzx.com/163tshkennd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163twuafjrg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163agkyuliy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zzrajfga.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yojuznnd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163vmrptihz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tmnmtojk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cqqyosjj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xbtbacvr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dsntpkqq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zlivevcw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dvlaxgen.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163mdrjbbdj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163snmyvjyq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wxeijgcr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163drpyithe.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tivdkrkk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163aokcscdt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wcdhrbks.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dhhkjard.html


<!-- 参考信息 -->