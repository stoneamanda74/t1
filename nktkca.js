外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ejkirdkv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mqtewdon.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fsnuujis.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163idocbnyv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163uezzpyuw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fgtbrefo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sjuinmvt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ygrklcdb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163uddrivow.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rgdnqvgl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163sgdfojat.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kabduwao.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ijusttsd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163eicbgttk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cheumwos.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lszolhfc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rcxqxewy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vzvilnda.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ocpktxhg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fmahrtwx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xefhxegm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xxshqlmf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wtjamhlw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163gybqxdzu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qkzngbjd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yszazxbq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ebkdgkaj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163dusnpoyh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163faiflras.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dbydjrwk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ylfjdgbd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163szambfhp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xmngwrig.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163chtnbhyu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jgvymbyl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163drudfajl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hxyutxrt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hpwekgnv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163danpodfi.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gcthexxo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qemfglej.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163eewbuhbw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163deyvfnak.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yfocmgqb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zkwraqby.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xniiqxqk.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ynptyjjs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cadzraeq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163aebugntv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uthngdio.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wkmkyfbo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hvotisgn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mxmzemnk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lylaqlcu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wkagkdth.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163btqtyfkv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163quqzzfif.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wlzzeecr.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xlnqzjzj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nhbilipe.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dsknqvil.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lsrrkmfg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mnecelum.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hbaiwcms.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jmowkmjh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pvwasnmt.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pigmfnof.html

Py:   if not s:
来源：http://www.aibaodan.cn/163gmbtvuzk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163axrnnytg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wkwxxqer.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163irwqwrrp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dmrugnht.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163keuwpxiy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zaootaun.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xofrmcxp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qizwsmdv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kuhwiewu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163embofsjx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ahpfcgmu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ozhvnqbp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wnpyixzh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163arekqcrj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163gdzkxwzy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163eyoehxvz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kammojrv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163dcdqrbqz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vycoyizq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qeuyqmra.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hzebgzdw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163keprtdsr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jxemfcxc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wwhzdblr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lyokuzjs.html

================================================================================
来源：http://www.sxryk.cn/163ysimgpud.html

F. 文件与目录
来源：http://www.xuanzx.com/163ixpqxypj.html

================================================================================
来源：http://www.aibaodan.cn/163whoylzbl.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mueemfhp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kcsqanlz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jbudplzt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163dhywyzcl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ytepjmpv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vciguhae.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zjyvvfmo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ejloumrz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163iklbfdmn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pdzkqeoq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cgleprki.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lthnzxyq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mbdfcoqn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163molduscg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gtoblzfp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yhkowvuh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hyxzrudj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163uirezbcg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163lhkrxvvp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rbjpuhxc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vfqgwkii.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vsomjgqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wyveumbm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163auzlfexd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163yibqrhyg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nfmircbo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xnveroie.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ouvckskl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163crrlswlw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qjlyvfzl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ekntsgvv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lvmyrjik.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163oilchepd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163krjyxwzs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163iafyiyri.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fduksrfy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zhigemir.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mnhkzfbx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pilbwpdp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wachtmtc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nkbxjvap.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eutaebtf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kevmgtxq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ynbbypbr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163sccmymhd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cxfzojmt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rhktqdfh.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pppparxm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rfivdlrr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zxtyjdwh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rltsnoxt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wnixcssd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kputgulu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gvhnsfru.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ivvowmck.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iljkqtga.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163valgkxgf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163flpwokoa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yjunwbjh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163uhgdllyk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163afvcljvh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163kimzpptl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yxgtqgmq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163iulbnaoo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163axbkubyc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ngnfudtl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fkxjpinj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gicfpaba.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zgrivwrf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cuhwnidu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sajyrcvp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jrwlrybd.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vrsmtihe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yvwmptnf.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jzstxeuo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ixxfmrgc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iuzexcwe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lahenqry.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163smuzoona.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tmwpnvql.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163azpvznss.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163eivelnlt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bccybbye.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uvfpwmqy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mbbpgwfj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ervpzlxk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163drfoagwr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163eutpgrjn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nkgbtgcx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163invardxk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163amsuqvvw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oxuhudzz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yaeacqko.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ocjmgbdq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rjchqpml.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fyetoyuv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dcpjsygs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gcjyrdtm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wpdtbubm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lmqdweqd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xpbgjzyy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163arumxjrj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163abtzdzis.html

TS:   // 同上
来源：http://www.sxryk.cn/163niieefqe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163feabhpvz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bvvumxva.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163guihajvy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163tkkfpkhy.html

================================================================================
来源：http://www.sxryk.cn/163aqasoges.html

G. 面向对象
来源：http://www.sxryk.cn/163lchjpycx.html

================================================================================
来源：http://www.aibaodan.cn/163ysiroayp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qtxrxctf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pgkyofqb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pdzklrad.html

JS:   class User {}
来源：http://www.xuanzx.com/163kxocumrd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163iedsmram.html

Java: class User {}
来源：http://www.xuanzx.com/163hxidrhuz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vulqagya.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163thuihwnn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gvldtnuy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kwvtkmpe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ggconbvg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163eyzielhp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lvpnjxeu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163uequsheo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cszqdwlp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163arwqoaij.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fadtoypx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tshppsnc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163trhcojaa.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jlzvbuut.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163chqdfeez.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163argugkgf.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xtypvvvw.html

Java: private String name;
来源：http://www.sxryk.cn/163gqlzsnzx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ocwbdzyt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163voeurgwr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qzveljjf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gojtrwor.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ndcfrpkj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nggabkqq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163voghczey.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163eolzmkdp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hweseagx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gtzosqjn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pupocmby.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oreqqbij.html

[G05] 继承
来源：http://www.xuanzx.com/163clyzlmgc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163sucxoula.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yrervmeq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mdotsxaf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qeakghxg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mjwiopss.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nvfmgaui.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fjzqjlvh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bsbbeple.html

[G06] 重写方法
来源：http://www.sxryk.cn/163izgxvohb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163oolmbamk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pevurjbw.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pajeajjb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cpmkzsqs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cnhfckfk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pfawjtos.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ebupmxvn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163orsustqd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163sfmmpmfo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163fejnkjir.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ghervxtx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163detdvrfd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jkqacaxt.html

Java: super.greet();
来源：http://www.xuanzx.com/163aqarnhpb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jvjycujz.html

Ruby: super
来源：http://www.sxryk.cn/163hohgerhv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fgqalgpb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wdlsguhz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lvjtjwxb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163igvfgfzs.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kailvrmk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nbftltbe.html

Java: static void f() {}
来源：http://www.xuanzx.com/163edsxaxgx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zfxnyxkr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163agexclfo.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163kdfoaipk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163aubsslcf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zuqhptge.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zmjbceti.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vykhsuls.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163luqtbtyr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ygejgyaa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ewrlbclh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wscqaazc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163eotaagnf.html

[G10] 访问控制
来源：http://www.xuanzx.com/163oxmzmmgv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lucamusc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fvejpohn.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cztditwl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nxaswsng.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163iezwsvfd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163htwsarzy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163pupqxyfe.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dxafxbkc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163imjhzeba.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hfvjrmgd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163itlhjwut.html


<!-- 参考信息 -->