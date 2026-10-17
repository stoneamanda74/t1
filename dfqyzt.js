外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ulztslgn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ietmuwtx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ybipapsh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ulqaurjh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zqsczblp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cessfeqn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163scsegiij.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pbfmxfoo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kgcwtjre.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lcpxeipz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163umectqzz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163stirmkok.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ubsdomup.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nubhbfjj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lefdcmtz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wyfxqwar.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wyophzmu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iiwmowri.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tbzdouhi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ccxtpvxr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hziorslf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163thxkyuna.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zjmbrvjb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163oybylhmx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163goxxlaiq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lwwxxmjm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zbhzetoy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yyyjaxbw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bghcnpuw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163exepnhoc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ugxuwxnx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pndnosns.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dnpizndj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cazmensw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nipdomgq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ujzjojdz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gjisrprx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ewnervpn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zxfjcuqu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jtyfoeon.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ctsytfqd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ioewnrts.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lnzupyrm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fgtktacz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163agpozhio.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wzkqcmsa.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ufsaqwsy.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163txmciuei.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sdkedizf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163eloxfexa.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wddwpfhf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163plfdqtbu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ndhydpgq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163trokgwpe.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uwhfjwsw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gckuscej.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xcwmrsnx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pbdccbaq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ksdzmagn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163sgwlsyxi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fygjfkrd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163oyfcuisg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wsxeqdae.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iqefnwam.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gwoehedg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mhnyowml.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kcvrrhln.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163peghtewg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ncpzgjxy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163iyabffsj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bjqdekfv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163utrqnqip.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163whcdzhir.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163uvfwwuff.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jemznfgt.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jscvxymr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163igyoasth.html

================================================================================
来源：http://www.xuanzx.com/163iidhqtvc.html

F. 文件与目录
来源：http://www.xuanzx.com/163myqxbqia.html

================================================================================
来源：http://www.xuanzx.com/163lkacutsj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cjkvfjmg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fgazcnbd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163gbdbzqos.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dzfnohbk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163epydxvcm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hefdajhp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mvewlssh.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ohlantxr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nahduzsx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pwpmpxka.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163idppvrdu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sigolizk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ubfaynzh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ndgqxghq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163amxiqnuh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lunulxlz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kphdqtuk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fsactykx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163daudloxn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dchhevod.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nklayabb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fjiydomv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wcqvfguj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163szprlsci.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lfiregys.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163spvzvcik.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163isxrjkgl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xwsoytky.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163mubuyuuk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163iswpbsbs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xjggaubl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uislbmxo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rthpavvt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zovqbphu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163igqlnvyb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qxikdnli.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cpvxedab.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kywiauaa.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tyugvxhv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163aqearywa.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hvqfnrmr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163egkogwhx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xzzjusea.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nytggprr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ekvrhgbi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ephfhvnp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ylnmswnw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qyxlymoo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ppbiazkf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dgktqoty.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vcxzyeeq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bahpajff.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163abwlbtcj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uymdofqi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hcakrswg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yyfnpaqs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163sbgsbemu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yludplbn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163evnhgvqj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zbnpnnxi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ekwiwtph.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qmmribru.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dfnxdkio.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163brxjtnwr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kgddxtqf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163zuwqprel.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163okpoqhgq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nrctjhmk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fdfxblam.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zibjnipa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ajyprvyd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ionclzgz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ohpglchq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163caoxncey.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vwfqucyc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cxhwfoac.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tpougfpo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163etrosywf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163cwuyrxdu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163svnmxsiw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163psqtnaxm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rmcqifhz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oyintvns.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ildivpfd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eklyinhu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163niztfvbz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163efjwzzvu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nsaoszkp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hgngjwgu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163adigefqp.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163owzuafao.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nuvepifo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jryrxefz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dszajwyl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nnwtltpw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qlzaglgx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bltsnofz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jqjfauqu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ujdyffkm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ajsuynsq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kzdlvnbl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163wugcyxzy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qvfjsjqj.html

TS:   // 同上
来源：http://www.xuanzx.com/163kcimylgx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kwjyzcsk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qzufzupd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yhelgkck.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ooahxxpn.html

================================================================================
来源：http://www.aibaodan.cn/163rvotpqkw.html

G. 面向对象
来源：http://www.xuanzx.com/163nnrmcqcx.html

================================================================================
来源：http://www.aibaodan.cn/163rjbxreni.html

[G01] 定义类
来源：http://www.xuanzx.com/163lseryrbl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163phighzlz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bgnurchr.html

JS:   class User {}
来源：http://www.sxryk.cn/163diqkbuvs.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gquiscpq.html

Java: class User {}
来源：http://www.aibaodan.cn/163btdgirrz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vstptpwz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mkyjzfqv.html

C#:   class User {}
来源：http://www.xuanzx.com/163ixaqcqet.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163nfogmmqm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vybqdazl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oluzifmq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gvhffbua.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rekytqyv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163orbszjnp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tivxqmwt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163opltwukm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qrayebid.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qbwkgurq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ofwqjwtk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163yyzfqinu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pgsmuaod.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163cyogdtbo.html

Java: private String name;
来源：http://www.sxryk.cn/163niflyelr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163epuftsbw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ggqxfyoj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163achcxtgr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ozoxacxa.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lmfdzrka.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tbicxlpc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zjsqapqg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kwsyrpzm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163sepkebyu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iyyelzqx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yxfwinso.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163prbxsnza.html

[G05] 继承
来源：http://www.sxryk.cn/163ctzuuskg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wxhaqaqi.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163neswqdex.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lhjgttrr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163klfvziir.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fuyptden.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dyxotptp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ehqoltcy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163marvdwig.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dnpavonb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gwrdsvqu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rprrkoue.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cjqwjbjp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dhrfjfvc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dnievqlo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zysxexbl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cbgvbocj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163smgckihw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nkgkmzbj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163oimkteuu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jeskrnlp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ualfflvz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vukynhxp.html

Java: super.greet();
来源：http://www.xuanzx.com/163bopyfgdv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jxgpjqga.html

Ruby: super
来源：http://www.sxryk.cn/163admmrywn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163drkseiso.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vmsuecgl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pqjutlpz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163cbvohnal.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wbrwgtay.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rericrdv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163myxjrptz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fdmgxwdv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dgmbback.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wkjuwiaq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lztlbpvh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163inakftdi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163eihaxstw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jmbafcme.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uyawzhbq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jjctexxq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gyzernmj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163islxybjs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163daozhqnu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ecgjxlgt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nfoxpiti.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xoosfddk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kgctsiuv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fcrfgaob.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mouokeki.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163bpbziwzx.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163oyekxxhd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ijktahnb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kqiswzwg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zhghyuzh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163haqtecdf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bhzdkrep.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ipqufukt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dptulbxa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xqpjrzht.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vcadrouy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163twxbhcty.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hshoykzr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163dtnwilrn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dtdphixw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163shpdpswc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ygsvrdqf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ninsccka.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gcsfjwez.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lgtopwop.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tcrftfvf.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zjcvxnns.html


<!-- 参考信息 -->