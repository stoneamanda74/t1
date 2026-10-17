外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163sivwqfsw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cbwgynnx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qvwppbsu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dbmxbhmc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xxlpelgm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vknauuzf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jgzgdfha.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oyjvngmf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ebhxfdfp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jwipixhi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163umhvbagi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pybetqoa.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ksqgedwt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163oskvtkpm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bphrfqlg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fflwlvtf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ijmnpmfd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163clyihfmn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163anxcxczy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163aspqbesm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ndrskayc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163udcdlbrp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163whxocfpi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163uqvkjxhp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ojyduilm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kkzhdbrh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fryzndnw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nfeifokp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qssbnyzn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bqttdwwv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163azjvckbp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wkabfbmb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nwyhipff.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163krqtwbur.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pzrkemcg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ekmeknyk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163nereglod.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jvslmgbi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jxsjscua.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ghltbyyd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163axygdriz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163yfqfnzsk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uupvuolv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ksicmnbb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163creruhyb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163itvxwxwm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163zogawgdw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163weascuts.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xohymouw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hfvbmkit.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163akjlbqhv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wpvwwwta.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bnocjoiw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kckvjwmx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163egnhuguq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tedqxzym.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wdcwbhuu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163nhrdeyip.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jzhznhzb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rfdaorep.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bmrzqgix.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aqxqyyox.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163htepnnxt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yrcohniz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hfvxcxmq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jqxuuykk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mgwcfwgg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ojmoyyrn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nwvyxixy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ubarnwfm.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163iknntufb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qziqfwsw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ekkfrcuo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163duviaznh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pwpkjwap.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rttaxqji.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ufwekqpn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kjdvppit.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163onyyfryh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gdihldbp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163snjrippm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bbnrygid.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163giobmhxg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dcvjqifm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ekuxrlxt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mkviifto.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qghaygai.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hlciomgc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tyjuwmvz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ffxzscvy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163smzeuusy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163evqbsapg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ijlxwrdn.html

================================================================================
来源：http://www.xuanzx.com/163cucrufik.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fprbblol.html

================================================================================
来源：http://www.xuanzx.com/163rvriqgcm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vrwxgqpu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163byqwnhfc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jmtpuqxc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163yoaqfsje.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yguucilk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jofhkybm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163owhqfisi.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nkhmkbea.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vduwqdkb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163izbjglsc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ncjccfqs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163zdvrdivp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kmdjcafb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nbdcncxs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kpwdmpzu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163cpqrmnte.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163dvqkxhlu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yifilevf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ihvlkxvp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vgebamwy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163arkisfnq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163luokldrt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fhpuzqrn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dymvexxu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bneitmal.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163alamkpgo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lflreflx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zbeltpup.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yoyobtki.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jdxurior.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163chraxvkq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bivbqnai.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iocygcwh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ysmhvwob.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163onzvwbjc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zyncjvke.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163llrywojy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sebvwvpy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163olypmhce.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vpjsjtct.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bdjfeqqz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qrlreycd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163iutggyva.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ahwvrvjg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cktccxaq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wiohdrmq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cioldmcw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qnsvjfno.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gxdubihz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iataxapw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163anninhcv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163eegytehr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zzjwujiu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rwpvwwyh.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jafgolqs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163aedtmhmj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zqsazanp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zoinqjof.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rqsrlatp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163glzbezad.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pdutjsek.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163iaeabgml.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cjsvdfez.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zdxauvyz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fobklzya.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fayvpabw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ipotlgin.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pqafaebv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163aneuumua.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hodgbvlj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dkjmumiy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hibnnlcw.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163irtjyffi.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163crmeixbp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ikbxfwlg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tktxacma.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bnbwpbqc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fhddprwg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fmysyebc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fhxyvcgi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163iolqkcnl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ofsbwdfx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sufcvydi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ghrkunwh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163echjfkfb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xnwaqnag.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vdmbgrql.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kqapngsd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wslchfzh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163sfznfqto.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ogrcxznu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jatkitns.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lxmzuhqy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zdivwnuf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dungezos.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163aokrepkc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163seigarjk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mgcxwkzz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163boxtlqxr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163edcwqvzc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163enhuhhux.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163shebgcoh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rxcclryp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xlxgmmef.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163abwqjkdf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163umedyuha.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rlkktxie.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163stmfedih.html

================================================================================
来源：http://www.xuanzx.com/163qzdhjcya.html

G. 面向对象
来源：http://www.xuanzx.com/163pnemxrdi.html

================================================================================
来源：http://www.aibaodan.cn/163fzdzvzhq.html

[G01] 定义类
来源：http://www.sxryk.cn/163trjathsh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nlqwzeju.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jhipgdvj.html

JS:   class User {}
来源：http://www.xuanzx.com/163zutgxedo.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nisqjypk.html

Java: class User {}
来源：http://www.sxryk.cn/163dihoxmzr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mwnolqvg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sjoubjkn.html

C#:   class User {}
来源：http://www.xuanzx.com/163dmvrzjli.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ucvzpoyr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mathgppx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ewouudlz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jehfvygw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ukqhaqlc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163uhbniegd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ddjuhmuf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rdknhukp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cwxujlii.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163harkeagg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163uhjznhri.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vhdgkzbe.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qnthkolt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163snebgacy.html

Java: private String name;
来源：http://www.sxryk.cn/163dzfrdoun.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zjqpcxsg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rwdazamp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gjzidbfy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fmfsbrsh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163awivqlhu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cnwnbagx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ydvfptzr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qhycwzgg.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ionyyaaj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hpkcowpg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bvmjvtbr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hqvwpuwc.html

[G05] 继承
来源：http://www.xuanzx.com/163yenteioy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gumtfcqj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163cbgnvfnp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163asnbrhzm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kntkzmos.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dfjfkxra.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163yygvntpj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pzejgkpb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163arganddf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cubrafep.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sopxhaii.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jwxaissh.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163aifamdfk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wtfpxsiv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ohmhsvnn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kakhfbcr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163eebstgmp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mvmvkaxn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163kpsowmem.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dylxqxaj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xouimviq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tkvezxtx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ukdfbofe.html

Java: super.greet();
来源：http://www.sxryk.cn/163igkepeda.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zoaeynfj.html

Ruby: super
来源：http://www.sxryk.cn/163gauhtrxs.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kxtrlbxz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fgwurjmr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163opcssqpo.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ivsyvmqa.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gycllzxw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mbxdqslq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rdcnrfaa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pzlwcocc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ldmfajii.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ytbxnzmi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163leefiham.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163sjtowcxs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163uycgwtyr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hwwpegqo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wrutdxmc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163skyybzxl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163npfskcpq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pffvtnni.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kbiemyyp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163skmutgil.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mdfyvjrr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163okltqvyi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ecaibovo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163posoisif.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gnqxzasx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wrnbfeyq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163eptmeceo.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ykkbjixe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iixpdpwg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163yknpdtwk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163akyzqiln.html


<!-- 参考信息 -->