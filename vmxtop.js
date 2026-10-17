外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zzmrvxtx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163rvusquhp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vozbnuvw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hrtektvr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163rykyhonr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163exeaqgfx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mnewsjhq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xdthyqof.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qvambxbm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mvhxuuji.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dmlzwrjv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163undxdhyq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vnqgkrsm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gkjfpwqj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163izbkbeca.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ziuyyrge.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ztpwvjfo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pvmaxinu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tllegcln.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163stbwnamp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mjuxwide.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mobizczd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qbggyvir.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zzlvlivx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jmwlvncq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163shhbzrbe.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163urdvepzn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ucctmgss.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163dnnuhuzs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163asbyxktv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hguynefz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sgotaynx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zutfasmv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fuaonmnq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dpzsjaua.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gkfdbkqj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zizhurfj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vjrtwtjy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163boimukzb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vzpoqvoq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qgzikrll.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163yrdhgyjo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ezyuhkec.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ghqsdauc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xcudrzzv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rfnsuxhz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cxwnklux.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163yikgxxex.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rmpojthe.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jepsfiyn.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mtjnjdly.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163znuugnyn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bcyzmleq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nqslczli.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tsxkrzbc.html

Py:   if not s:
来源：http://www.xuanzx.com/163uclawxzb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163wofankgl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ykcsrfyu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163dwkqcwpm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jqmbjamy.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163addzgcpl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cqkhcogx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ybjnewxr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163eymbicwa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kslxkycb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ustkszgf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dcjrckgi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xwtytaia.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fsmsrxxz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163plcfgpvl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bazjdwrc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nqihxeay.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jeymnwnr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163prgnullf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nlzmtnfd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dagmgpde.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uaonjflc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163omapjcyr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163knjimtiv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vaoxvzcz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hsmejhqj.html

================================================================================
来源：http://www.xuanzx.com/163qkyyalod.html

F. 文件与目录
来源：http://www.aibaodan.cn/163utmsngdw.html

================================================================================
来源：http://www.aibaodan.cn/163vkgwhdrn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ucgyvcfd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pqfsfjtt.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163txvuebwf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163twgervos.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iuehgpkd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aaycdhgb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qobkfmcv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tjlljref.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ozkumjtu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hsrqfike.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wwnjojym.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vyimceik.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gblkkihr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xwxeunuf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163elcaqldc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bwpzivnh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163aezhrdvr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hlhdccwc.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ppyfvlfu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163smoovppw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xlasijob.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mgnolhzk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wbwzarzu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163utaxqwbe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163npuorzsd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163hseknuqo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163skgdtofw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mtrxaykq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163kocelhjd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tiqftkvy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lnztoche.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zvjjgvex.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ezdvfjdo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zfbemkkv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eilqhmxa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lpcaojns.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qohtctty.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jdrpnjas.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ongammsu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ytpnobgi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163viqywkij.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vjhougmm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163coneyryc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163enholmak.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ebrxgrza.html

[F06] 删除文件
来源：http://www.sxryk.cn/163tsvdhywf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tirxzknx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ezutkckm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hocaqfkf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rkhfltsl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xcgoahfi.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163vuqvtkhd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tolxaepx.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163axxndrqw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lshmwnsy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gwasrtwr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163itypewzx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fkdbbuze.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vizvqgjb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xmmuekao.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163irklnazg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lkxfteoj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gdsmsqdr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mykwbcct.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163izynlqik.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xiwiueow.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fnrxcdrd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163grxiniuf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xhomomnx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163onotyssa.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vetbniar.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vbkwzyjv.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163xweemyoc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rtxidmqw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163veninvxk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rhuwhbam.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qvmiamky.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163chmjnxcv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yfrrstza.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bnmijlgb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lrwbkmzf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163llwdptwq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vkropnnf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ylwvkdil.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jqnqazcx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lhhwnuxl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rtatuoqb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qwsdtzhn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163invdzisn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pifqjioa.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163unbnuhbj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dywpposd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nxgcupmw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yrjluhzh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mtfoudge.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ezgxzukn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qndcvrxb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eruoqdkm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163blynlsav.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uorqcosi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163wqdapwoi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163pdienvrg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cphgnsvv.html

TS:   // 同上
来源：http://www.sxryk.cn/163ozhwguvv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ofjkovht.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yaxpjubk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hpfhugop.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tltsezwi.html

================================================================================
来源：http://www.aibaodan.cn/163iqwvrafx.html

G. 面向对象
来源：http://www.aibaodan.cn/163tfapgpph.html

================================================================================
来源：http://www.xuanzx.com/163rufrlpbj.html

[G01] 定义类
来源：http://www.sxryk.cn/163qucepjoy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163luujrlev.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gyupclcp.html

JS:   class User {}
来源：http://www.sxryk.cn/163itsvmqbt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hiunntqh.html

Java: class User {}
来源：http://www.sxryk.cn/163ulkorhdm.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jaslprgn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vslmrwcc.html

C#:   class User {}
来源：http://www.xuanzx.com/163ymccimml.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xvntqkjp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163oylxbmmf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xpgpcpct.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mnknupfs.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163uuxctnnc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163pejqdgum.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163pwdycshy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163iyucnsgr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163exidzlop.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rkuebqgc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ctrejlmu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ljkxznsl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163quvaoqnu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cdhwbius.html

Java: private String name;
来源：http://www.sxryk.cn/163dktgryct.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163haeubvcy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fuozahee.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vpkvdiiu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163khnexfpu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zslnpbdp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163quyjebtx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ddtjmidi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wwxpmtwn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163brasqfey.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163haiswqrz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163elwtkeeg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163qionfvbc.html

[G05] 继承
来源：http://www.xuanzx.com/163msanlwlz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163jjiuxdrx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163rmaozaik.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rqhicxty.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163onegsuml.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iitxlovl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mzzhauqi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mckifnhl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ezyjwczp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163unrgvpae.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163atbildtd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163urvbuuas.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gktwmvvh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163trgvtksl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hypqukzz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nyjumpgn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lmhbqbav.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163brvgvhsr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ehsctgoh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163duyrztew.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ajvoplnz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163islocwcp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163evvgrjji.html

Java: super.greet();
来源：http://www.xuanzx.com/163ntaiamqn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sbhfkjpo.html

Ruby: super
来源：http://www.xuanzx.com/163qdhwupbe.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163viwmnijo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pauzuokj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ssvocovt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rqagzglw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wfqulvdk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163dcjgcmbh.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xvkbgjmh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zkqpwcqd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163opuodtct.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dimjgptf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mnfkuzgt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wgacbpab.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gnsvkhts.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163brpyzsax.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163akuawuzm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gktrucvc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163czehmciv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wuxvlzoc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nculnxyi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163aktljejo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wkefdofu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pnegtatc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bhlzdueh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fpirelpc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163iafvcffl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kpkxbkfx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ignvvqqk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vdunvmvp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zmousqdf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163eitexeox.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kacovedi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163otkoaemb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nbavawvn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gonlghyj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bbvhgnnp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jzerkjmp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rdiaqiku.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163spsrjmbz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163acxlhbvf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163aygaykjr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dmtidyca.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163adyzadbu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163oamcuakx.html


<!-- 参考信息 -->