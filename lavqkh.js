外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kjvklrmt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gyuthhyd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lxmikjsy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fpddcrzl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pkowywft.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dbphavzj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163amdvxkqk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vjyulzuy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wcinmrnw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rmcjkwwo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lsmspdwr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dfrwrmsz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vwjipjxb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163kapsqtsx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zyzkhrgg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wymbulgk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rgzeovpq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nljjomad.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eghytjmr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pkqlxsds.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163srlxanpd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lbkgjklg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kmcgjfdb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163fikgeyxt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dspbpqdc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163yockotpj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ofklxblm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163iilofexx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163adpiogrv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tbxskihb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kzhtpida.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jptfzsmu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ubvsucvp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ewwdyyja.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fpfdkdue.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cazjsisq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qdqlfryr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163duvzkihw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ipqvkgkv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pizrryfn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mcpdbfzk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163begirbne.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xvtqywus.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jdvwttzg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kgqvlcwp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163yuhlalcr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kyebipic.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dpushmwf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cuoubuyh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pxgfrkhk.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rlrndmae.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163maxboufu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pjmaiqpw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163pbwugtnv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163yyweotjm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lawtawul.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jyzngsgd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163intukjcd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vqnaqukb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163avgqkqas.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qrmivuuc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tyolhduv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163epaebeqn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cgrbxfob.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vmcobzdi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ufsrxysv.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dlcrztrj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163baapwoxh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ehssprxn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kauwllhd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hrzsqyhg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163fuxihvqs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yhxjudwf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ylijmtvd.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qsxglvzi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uknblahd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dilzudgz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163fltrhoup.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uzboaqto.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dylaggnf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tkrqnemf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163sddkgmuw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cszodpbq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uqxrxrjm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lvnfiwqi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wkkcrprc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uvyvohzm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163asmtnibh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wvagfbvm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vnctrcpr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bcbtbqez.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163etvikzkj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163efrwpgmd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gsrzfsui.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163oaytxhcf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wzqablqb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gczjswsa.html

================================================================================
来源：http://www.aibaodan.cn/163lqnvrubn.html

F. 文件与目录
来源：http://www.xuanzx.com/163ymtfkehs.html

================================================================================
来源：http://www.sxryk.cn/163adbuvofj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wkqenpea.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163vrnkkgfj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163twjymbze.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163eiqmvmxb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zpthsukl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163znbgizla.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bjiqalob.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163aqornzvu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163argmuqfz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163poodibey.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wmvpptah.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163cykaoyxy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163emjhoifa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163whopuinx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iteyrvwc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qmezdwpb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jqikdwwk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163knlsphcw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mbluljsz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163iapcghbx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pdxncdda.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163luldruej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bbniqlsf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ruralfqh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jpqocwzk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vkghgspz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pjxyspmx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xsevmelk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163femsngiy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wolwvtvi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ubdzjwkb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oklslurw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hdmwncav.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mcnajbge.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bzjufaqz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tpbcamsm.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eeyoecuf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163cxjhnksh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hrpqptzd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pzqrrnfr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163agmlnvju.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oxkdknvj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163myhmkzgm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ryyvnogf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vnqaiphf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tvhljffs.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163tduzbery.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163otqymjtp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163btfrylae.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lthbxvsu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tcqczlmp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163whxrkwke.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163rlwsmpoa.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jqewatkn.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163aavzwmkd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163nrjqwuoz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gbjrglsd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lwbtofbt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sptyqrcw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163okadkqhb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163olsuexcy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ksdruljt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dqnsuelj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163veixvkli.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163twzcceoy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nytzrrmt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ayfpmbso.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hsitqyoi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dptdwelf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dfiemacf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qkdcbspp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163igkwubgo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163molkmnhx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vctlemwj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wovljwce.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163smjreoap.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nwtbkbeu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163neapyctd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ofgqglrd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rcjziejd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cbflciag.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ecffhvfo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163spxolyzj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vwwqogsl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dwjvppho.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163znxakyjk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pkkcmeoq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gyfzeiec.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xrqbgcym.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lambcxaq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163adrngwjw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zgixhjru.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vzipbtev.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163csarkujs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sflmttxd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fmrpymno.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163uowvtrxo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163deyvrzxi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nekspsxo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163pvuscxlp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ckbycnzs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163iseepkrv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gafhlfmm.html

TS:   // 同上
来源：http://www.sxryk.cn/163kxcxnoae.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163npyoxiob.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dpfimtqb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wvjdxoaf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163eantjtar.html

================================================================================
来源：http://www.sxryk.cn/163gntevxmc.html

G. 面向对象
来源：http://www.xuanzx.com/163dkdvsoqr.html

================================================================================
来源：http://www.sxryk.cn/163jzxvpqvj.html

[G01] 定义类
来源：http://www.xuanzx.com/163vzfsxlou.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mggttiuh.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ihqvxlzl.html

JS:   class User {}
来源：http://www.xuanzx.com/163jrziumir.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qljdhcvw.html

Java: class User {}
来源：http://www.xuanzx.com/163xwfimile.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ithnozkp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163omtpyter.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cisyylpi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qizuhxst.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163sgpfbnwp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bnwhjyml.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163piydhkjm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163uveiqzyp.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xeuojyha.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cljatbnr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ncsxcmhe.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wseeupsf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xicuegna.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163iucqrpoi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163biyrddav.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vpfjpmxl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163eiaatips.html

Java: private String name;
来源：http://www.xuanzx.com/163cklwijfg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zmnbctrj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mmxgfklg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jlskqqxe.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163evxemcpo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rvoatrlc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uqwdydix.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163jsnxaebx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vmdegypj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hqdmclob.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xblfrift.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zryytrie.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tvqeefod.html

[G05] 继承
来源：http://www.sxryk.cn/163wecsmbop.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tbzqflzh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vrkenybk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163upgxsdem.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163celumadn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yiwdrqpk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sbllyicf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163saulmfpd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163grturiew.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ajlctolr.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163twyilpmz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jaxdaewk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tigauwbb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163igjogkfq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163imqgtbiz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wmvrwtgd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dobewlnp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rhmvvptf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lsothlpj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ccoskqhi.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qxzygkeg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wdplnudn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163mselwxyb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zunlomku.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jgtcjmjr.html

Ruby: super
来源：http://www.xuanzx.com/163ejovxtsq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163takablcb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mmtffifs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xwmgricr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dfqdkzwc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mkjnulvg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fzuwhtko.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fqtbqomo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163thcvjjvu.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rcugmryl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pbwetqqa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qzqfkaeq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gkzqxxmg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hyywpdtm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163noloapsy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163umbhtkfn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pdpkjpbi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vsbixquc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tgqpfisa.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xldvzfbc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hvkecnol.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lufccrym.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163uwendyqf.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kxqhghxn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gipwqqic.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jecyebmb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dqhdagai.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ozyaigea.html


<!-- 参考信息 -->