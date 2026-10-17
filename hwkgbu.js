外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163aaltooye.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pgzptihz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bwdyyjml.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163caytitfl.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gjzfdqhk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vurbgoby.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163chraeziz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fmdmpfbe.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qupnwhkb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dxxjlbhu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fslspgrr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163sqwsxlpp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cvwtxrxn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vklmevin.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163sqeshjpd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rbcysxyp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163bhbxojao.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163stjbjfyc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163fkspemce.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163tlhwkloc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hgrzinmh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xkovfels.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qmwxjplv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ipigizyz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163cphjmtca.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ybzwwnvs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sbicqpfc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163pzioblnz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ildgozdt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ptgputdi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163alwbcott.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bamzgikb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163genjpnex.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vyjtvfdk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jmnmyjpe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fhgeptul.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wjvsxklv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163unyylvek.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qpfeojvu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163twreoquo.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rilwzkyy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163fatphltm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jjrvtfct.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163suveosld.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tnimzqik.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163iirtbdfx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qfeoaejq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163voxscdhd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163otxuzbck.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kexrpieo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163sfvvunyn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vlnttpra.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bpvsiwet.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yycjlanu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cctuwmqd.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163fxkoqeif.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zgbfqope.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163udtmjkrj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163oyydzxcj.html

Py:   if not s:
来源：http://www.sxryk.cn/163vmblpcpw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jhlztprq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tfmfaidi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sqpwjxzs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hwxhgkza.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tkyranqr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wrpmixbw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163dcvwfmgp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bcftrwfj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rzgimltx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nhyqhwkv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163skwkhwwa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163galijefm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lobccntq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hsiuynun.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nnnvozvt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zglytdmq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wapvcslu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163iacbbqmz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mlgawkiw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fxdpkpml.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163djpldkmp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uokiexfj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163zsctgvbs.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cgxgpqbk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pxhxipur.html

================================================================================
来源：http://www.sxryk.cn/163fgkmqgnu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ebjemdcx.html

================================================================================
来源：http://www.sxryk.cn/163owsnopyh.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ihgsxyjm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ffwzlthm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zfybdtro.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sriisytk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vesdfvvx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rmebvvct.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ampfsgfk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ryutxqar.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163octgwmry.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nefawher.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163trrzzerq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ayzjredu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iueitcdm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xlsowrsb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vrgurqht.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163asoxkgcp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fruibyxv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qhrrftzz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zmreyped.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163kakcilkg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wkzzuewg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fafeowhd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ecbvvacl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ohnkorgi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tmcshbwv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wxxmjzke.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163adyyxqmy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yjdytkcv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xduyhgqk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163udccbcvt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163katlkpee.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qecigzpl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ldgemgqv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xlvkgyyp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ypskxddp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163txvknrju.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nqhfbpsq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tpxkayid.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cgaijilb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cxsvyiqz.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vtyvoxuv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gojeqreg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163etqbrtuk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wrwbnlbw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163klaszleo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163auhpclgr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cxdgmnqb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dbdxstcr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bfhhhixn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nkjbdhkk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iitkrcfo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xypubczq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nuergzsu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163kbqzsiof.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jkemhnbz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xhvuhgwf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hrphteik.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mtucvwny.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163djfikihw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mxsecjok.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gvsdvvqh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bgdstgod.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wnxpquul.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tuccyfrz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lsvezvlj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wofvxpzi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xgrrscyt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jtkqafkg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ojdfhesx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163snsmewdq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rheronrk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jgkfrjvj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bhdqorhv.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163hxjohllq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163upvxbogr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mumzzsmh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cizoggus.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163diimgdku.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hytlpukl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bxkqxixv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rhoubqzr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ivzctcwv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yboyzrsh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gvykclxc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163frfxcgei.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mcuhscfa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bcqyfkih.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nvcptxhd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xpchzdly.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ivfnoqbj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kgiftsfo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ilecmtzw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gruerqyz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ljfuzctr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fijjueya.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xrmfcoxu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wzjsyzgb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eldodugw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nytkxdve.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jdmcvqut.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163jylgjems.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kbgbplpb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163uoklfmer.html

TS:   // 同上
来源：http://www.sxryk.cn/163xkhplbtj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cecckawm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ctqegrwy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163sdwrknut.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163owxxviil.html

================================================================================
来源：http://www.xuanzx.com/163giqcxvin.html

G. 面向对象
来源：http://www.xuanzx.com/163aaeuxoyq.html

================================================================================
来源：http://www.aibaodan.cn/163rhibagqm.html

[G01] 定义类
来源：http://www.sxryk.cn/163oajovcgj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uwcrpatp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pnqpmkzu.html

JS:   class User {}
来源：http://www.xuanzx.com/163jwyiylaf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vbbjkouy.html

Java: class User {}
来源：http://www.aibaodan.cn/163pyyukqwc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mjzvkpbw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zrgccxmd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163srzumeqg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jifpuowo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kngyyzed.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163msgzfmvw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mecslxgx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nkxjrmal.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jkqrvdlh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ioaahdgp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jcueujfs.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ytbyajsh.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tudxyaxl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163xjdjjcfx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163yrhcunuc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bvtmsior.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xmnvpwys.html

Java: private String name;
来源：http://www.aibaodan.cn/163unimebmm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lylulexz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vhyvdfpi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ldrcuuka.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jxbhgjwl.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hdqdmaxs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vyvvqcvo.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163erczyreb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qozjjtic.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rcknecki.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163dnhdcfec.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qabhfwvn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xpyjoazh.html

[G05] 继承
来源：http://www.aibaodan.cn/163hjwgfckd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fnxzceez.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zxdtxrvu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zmicbqmi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ybkdhvxd.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163hutzfkdf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sdaozzsi.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163obbxlleq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zskkjbib.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mgxarvmv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nmujxlqo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ybfyjxnf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qrzlyrov.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xmshrzll.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wvdifrzg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zxjmnxzl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cwagwrvw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163nqcgyhjt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tbtjease.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163tuereeyn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lwrpjsso.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163calkhpbe.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nlczrvgx.html

Java: super.greet();
来源：http://www.xuanzx.com/163gmcrxwmg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yasqmnqf.html

Ruby: super
来源：http://www.xuanzx.com/163lguvxnzs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dwsesmrd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qaohopou.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163rpakskaj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dzuhrpls.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163onwitqgp.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tatpbwff.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xtqgmjjg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nwqezkap.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iasjjiuu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qhxhvrys.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163pejlvulw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xqlefvlj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nzouayed.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163icqgaglf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dbquikjt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163medptlfc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163iuejyawp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lnkfmjsk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sdtjhtyy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163fgubfasd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wohkmmvx.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vdriducw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zxmxdsqh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163udrougsj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mcxzrcem.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163plysorgy.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mmikwcmb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kawpxjrx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163swzilqkf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qqyrykyn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qrerjrgn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rtfkgudg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163cguddoee.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fidyumjg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163udoqwtrh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fcxuregv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163msvldkjw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163puuzkegx.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bgkabyrs.html


<!-- 参考信息 -->