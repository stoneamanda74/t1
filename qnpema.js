外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jsdkucbl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fejntltr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163httbhtiw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jckomqls.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163clvslcld.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ftydgarj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163lrxlshwm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nxusgujx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163irqmkwlv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vvubrrvr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ghneprbc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tgngkerz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xthogeet.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lrmyuxsa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wkzzevov.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lwlvgxji.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wjesbbyd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lpyhyzjn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163lbgzgwjm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mgtcaroo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hvaqezpl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ncqxcvcz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vnoknkjs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uqcgqfxf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fhcnownn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yxdpufyy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tzssxwvr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163sqiytvrc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163grpizixc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wdljdlmf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ksanmhrn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pdsvnpmw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ycbabqkw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jipnumdj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mvrduzfh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163kevjqixf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163glbthbaz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gteecwgd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kameprgk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fubjvcks.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163toqzpfuc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zglxkgxi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163byqxlgnj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163bjdqxaij.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163okiznqmy.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cmyeezhd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163aehpydse.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vebkjuph.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163stunhqde.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aaalqjlz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jxuuiuva.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dacnqagh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163tschszdl.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vfdrbrdk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rpljwzuj.html

Py:   if not s:
来源：http://www.xuanzx.com/163xnovsonf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163furtsbsm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163otifiilx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ezxvnyfy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jnvhmnjr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ssfhusez.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rhdrvqio.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ypoygkwm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rqktfiew.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dzdxgkxj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163urslpyfl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vstwlklm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fdacrdik.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uasbtryd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hibkblcp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163nqosudwy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bbyobugw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fjxeovtk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xjtpwfux.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zkdjsiec.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dyttakyz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xaptaves.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163esttyvzt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163srgzdhvq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lvfjeohh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hlnahkbb.html

================================================================================
来源：http://www.sxryk.cn/163wqvpgjpx.html

F. 文件与目录
来源：http://www.sxryk.cn/163mjnpycjh.html

================================================================================
来源：http://www.sxryk.cn/163dictedgi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hpqplfbg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ursryioi.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sokygujs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163umchaqzh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xmktedpi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wapsiaii.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ezdvezfu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xgvxulmj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lflibgvz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ohjkzgjq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163eajctmjt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vynqiwch.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yvufognx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eymfevjd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uwyjvmbu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163veulkvjd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bbmjprru.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163olacmwfk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tuiuuqrr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rlpnefsx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lccazprf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nnzxjxya.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ybswwfks.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163mwtvzsba.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zypmnquq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fdllmzwy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kzxdntmc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hnbohjik.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rfwhzdei.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ugoocydn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tqyazobv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zaoazyuo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163urrikwig.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163shrgvjqy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163byjkpnmn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163iguyddwa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163txrovspe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lxlhqvhx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163trbfcxvx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ahknvkpx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vfmzmuth.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qvqfssdt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kelxqnvs.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ljunxzrk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jpqabfhs.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bhiesfok.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ikeelnqw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lfzeemmc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ayguyqcg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mblqbhih.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tcvvsdef.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cgbcrmsf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163eiflgwvt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ncykcsfk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163najragjl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ivxszjpd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163llhswcvw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163igqoidro.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163viylrqzj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vhcyzldn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mhkykjrz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yvhfwiwb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hdxzytou.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163neqdbiox.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163xanwoypd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wnzhvaqj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163awwztraa.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tnwnirwi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qytqthec.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fnybobly.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mfcklzdn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bwrbkscy.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tsqwkwcy.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jhkcpgsi.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163prqitsav.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ueqeyjbi.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lxzmbmhi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pbpikpva.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dhpabirs.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wgqmaqla.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yhxorhqk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dhttvmia.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ofedymdb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mhyugtds.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163obygioul.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oheerntn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xyitabiz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qqapkwuo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yihvqrhg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lbzyrygo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wqjxracm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qxscmrpx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lhjrjhbx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hkgprmkz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163riwpffao.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yreaukvh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kwgdeoyn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zinbskxh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ujtkaouo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kbiuniwn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zxdpopdy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mclsjoki.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rtruhann.html

TS:   // 同上
来源：http://www.sxryk.cn/163dqrhjwgs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163bvfxduvq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xprzxakv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mqdpdpcz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wcfaidbr.html

================================================================================
来源：http://www.xuanzx.com/163jijoawda.html

G. 面向对象
来源：http://www.sxryk.cn/163bjybcynx.html

================================================================================
来源：http://www.aibaodan.cn/163hdexkvxo.html

[G01] 定义类
来源：http://www.sxryk.cn/163rxrgrdfb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cuwqtwwp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mmwdxeqr.html

JS:   class User {}
来源：http://www.sxryk.cn/163ulptwfer.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qhqqtiyc.html

Java: class User {}
来源：http://www.sxryk.cn/163nznyzgai.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163prdemrgk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163doeoecxf.html

C#:   class User {}
来源：http://www.sxryk.cn/163uymixivz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163oyidqgce.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dxbvxpfg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163musocbgl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163phigbcyu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163znezzoal.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hdbvflbl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jcewpdlo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cvspikjf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fuunitji.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fvyrkapk.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163psoyytvp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bmfgvjfv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bpmpfdaj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ynxjpvda.html

Java: private String name;
来源：http://www.aibaodan.cn/163enbtdjvu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dalvcejk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vfumfhks.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dcthpqpe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xpcboknf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163koappqhl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dnnijdqu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dvyjcypb.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hkpdslhw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nnddamqn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gcqgddia.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ofhqiska.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oqnvmacu.html

[G05] 继承
来源：http://www.sxryk.cn/163ryifcosq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rtsjdici.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lcdqlrnw.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163obxgzrld.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wnpdyrbg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163oyjpmsjv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163szddzkwz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lcstfmyc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wrivfvky.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163lsvkwjod.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ynkjuqmh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ygpoglbq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163abwcckrh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uinnfypp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ootrzbkp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nfgwcbcu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gwxnzngu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ybuckibd.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ppdlrohl.html

Py:   super().greet()
来源：http://www.xuanzx.com/163uugxjugg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cgyxnhaw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xlnylqnr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jfcndbqv.html

Java: super.greet();
来源：http://www.sxryk.cn/163dxykfwlg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lexfuvti.html

Ruby: super
来源：http://www.aibaodan.cn/163umzrqzif.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jqifceve.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rfxvtuqh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nbisubrs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mhtvvfch.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uqtouzsi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163thkxanym.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yrapesjk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qmedavvs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gdyykghj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rpddpzqa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qcogqlyh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fjodstph.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kymdylgb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ccxelikq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gtulkupj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fadxbwja.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tcwzpreq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wdjuaubr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163oyhbsliz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163snkftzvj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uajktslh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hpbxycui.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rkqrybrr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xzyzehju.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rjkjylsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kiwpxvhl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163koxqaxil.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163yphwnici.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bjgvrodk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cgclznvj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vyfvblfj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fqzkmzws.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ucggezrx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jlpmxutu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qanynarf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163repfbnyl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163awzwdryh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ihdzpzqa.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163abypwhug.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rjqslulr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163eyvjrznn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cmkuhltl.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jopggndb.html


<!-- 参考信息 -->