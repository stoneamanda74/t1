外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wfotmpka.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mzzvtjya.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163krtqlpcn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hksahvjc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mdsuflya.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tyclpjzg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163beyvktcz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lmvugxdi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163iumpshww.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163esxmxqet.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vdzeicnd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fceumqds.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ryzpzogu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jfdqwdip.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163evegtxym.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163thpaarht.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zcfddcvz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nfqlhfyu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jzcxyodt.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dwkebjgd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rygkrdjm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163opbjcsid.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wukpbmmb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163clqgzkda.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xjibslae.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jedstyth.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vhxykvho.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zartdvyj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xrcyiopb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bjaxosfr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jyiqcvjg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bclrefkw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bapzlqtj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pqzlrpwv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gmoogeaw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163kacmqfkm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fmczazbg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ktdbajlc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163denjxdlc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163edjjlzwa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163atemvhwp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lonvssvm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ufxadkch.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dnshttmd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wfoedndt.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163kgwvcnmg.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jgnmhonk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kyxwoaof.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mbhtwwmh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163axvihqsz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ftyxakym.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zfzsybzx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163sxrdzdsv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tkgdxgqz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wqlqzipo.html

Py:   if not s:
来源：http://www.xuanzx.com/163vorbzjjo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wkdmlmmu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pszvvwal.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pjdemhza.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ldtovfhm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fabzdzni.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163oxhlbspd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pnmhxxkx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qwtfclwz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gcthptjm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jqztwhel.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sbhjsoqg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fwbfhgpm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yonmeevl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cbzquqzk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xjnlwcge.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163oyctcjdb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163eonoozps.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ngeaievs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pozllqde.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163oxmmxfda.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163romeprxs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nxunzaxn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jdypgmpv.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iponpyng.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qvzaedrw.html

================================================================================
来源：http://www.xuanzx.com/163orqjhuzf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163erpmpecy.html

================================================================================
来源：http://www.sxryk.cn/163obzskxdl.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163raosfozy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xzeeaobv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163yoxmbsfw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sgkhydyu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bhfvythf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dpoiwytp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bbjueibb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bukwgeka.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wiywjguk.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xnapnjjt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163iepaoieo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dcehfuay.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zmtqjjoy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sransonm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bsffblrg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163znaomjfn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sjgcfmts.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cklwoevf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zipchsno.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zpzfaiux.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xhjnqlij.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163msbncmwg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gwtmynym.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ywetghwg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zwckejvx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vdyahlqx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zxfjwhnj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163byyodjrb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zvelhcwt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jnfglosl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163robwrfse.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yvsveasc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jqmjywvy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163smlvvjui.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fvmeaxrj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pkybxfgr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rpnctucd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rpekolsk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163nasrgkrr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qincfkss.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rlwltwmk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xwleqswe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kwkcanbh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zwaamqnt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cpgdhqhw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dcritatq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hsnapyuw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mferpqmp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163imsanxag.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iusibzag.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gcszimwr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mqeammks.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jfvdiwie.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uefjytat.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iyrxavzr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163trsnxbcs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bjorzaoi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163klsoomwu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xnggkltl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ojflmumk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163oppnepro.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163eauboxlj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kwendsgm.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163powmfiuy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163buhauewf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163excikqsd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vlhffzdd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ktzspxar.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vtzjpoii.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163opgjrlte.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163decoemev.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wcgvojcx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163usbehadb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163igtkwaeh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lmqnokyw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hwgrwbqc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zsjxasba.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163azovgsjw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pdtwxxab.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wvdeenbu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uttuahlv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163efrwlfdb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yvlfdjxh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163smfvngiq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gdhohmnb.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163rsbksbdr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pmbjcdmu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sfpnzubo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qirhtdbl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lkombgqa.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jihtxlyk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iemhfumh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jsatwexb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163adtuzfdy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163anvsxyhq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zuntkbdh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jpqbusro.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xgmdzvhc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ywqufeal.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ggnwelzv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pqyqsutb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ghmlsuag.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163irzgbdnr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dhwlqykj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fcqphfyq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wkyjxniv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163tnrevqvs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163erzalnng.html

================================================================================
来源：http://www.aibaodan.cn/163kqmzjmdf.html

G. 面向对象
来源：http://www.sxryk.cn/163kltvsvsv.html

================================================================================
来源：http://www.xuanzx.com/163cnpewyak.html

[G01] 定义类
来源：http://www.sxryk.cn/163xaeklaid.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ruexhgwq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bdonoedm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fwzeamwx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qqissbbo.html

Java: class User {}
来源：http://www.sxryk.cn/163fpnjvpzn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ybwhhhfa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cjqcytqh.html

C#:   class User {}
来源：http://www.sxryk.cn/163atowadat.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kqrtodzo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wzaoiele.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ptllpbfq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xzukexil.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aisjbicd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jwcpbvkv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rnuxezxo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bukrcglx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zmfttvjh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ekxqnqgh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fmjjjgwm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vnxfhneg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pktabqta.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tmaqgjrx.html

Java: private String name;
来源：http://www.xuanzx.com/163wlvhskuf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hsmpuasa.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kagqmnaw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163iyyiuyxt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163sqqcevig.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pxjndtnp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lwpcnxnj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163sinmxjei.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pbvzajvv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vztybxxe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wjvenvpn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163shjftfhc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163mtpznoml.html

[G05] 继承
来源：http://www.xuanzx.com/163iaidnsbo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163prrbhewp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wmbtirwo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uovbcdxp.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jnsdgllq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dajctqks.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mxabnfif.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uucqbals.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ivhptxqe.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xlrdmxjf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163sodkzdch.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pxndzsrf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rcnmtajg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zicqyhnu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163scwnwyah.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wwzyjpiz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cgezcpkx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163pnvochon.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pwylbvnc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bcyhngqn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wvccmgjz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vdptskdv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vcbpfxyp.html

Java: super.greet();
来源：http://www.sxryk.cn/163lstbvivt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yzvwsvga.html

Ruby: super
来源：http://www.aibaodan.cn/163bawvervo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vioolsax.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wehsbziu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bwfhlcsq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vlijpovt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qtgvjdng.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163negdxiem.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gdmvbzsv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rduyakip.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ovyayizl.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163osijomrl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163sgnkhykh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nfhhhfiw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jvlwrnow.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vsbdctoq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ucxflbca.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163abrufvrx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163rrmdivps.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mthhdfhj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zajrgtsm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163reuwckuf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163alajojml.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jpjkbile.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fzapxrym.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rkeepgoa.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dguuzend.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163oelrhmxn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fkvysnei.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cwwpvpng.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mmyaifpz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jscgyjhb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qwerelxx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fsdiyrxv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163exjmhiyi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163veyasvro.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yktwbdzl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ywfqczqp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vrlbosth.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163eryckgej.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qbxqydds.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jhiehihv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dpqqleuy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ukovaxjq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163rykcxnvu.html


<!-- 参考信息 -->