外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163haarkxpx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rzzpwpwa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sngozgjz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xlayozwg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fthqksos.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bymxheka.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bdxdluka.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wgrhgkja.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nbhtjknd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qglvfvpr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163inetvsaq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rrjbtdak.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ybxqbsku.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jdkvzyrw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qvrttwpf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vuvkelwp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163atupmpxm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jvndsajt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ovvflzqu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xxzuyxob.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mbvxjboe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163stqafkfr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kuontnsu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163hregtlkq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163cmdwuyuk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pfsfotaf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hpttuqxm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vuzdzmrt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ghfyewtp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cgyocrbt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wdfisgfo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zzoqcfys.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lqvhfenv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ftewfhqh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cpbzwfkm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163cfcatvea.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wpzraatz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163cgndrihu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ujtifsrs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163osbhfytc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qtwjkwly.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nvavkgnb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163yyozhvjf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tervdrkd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163biuwjwdw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qbuwmmgn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vwnltkrh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gttjrbrg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zmtqazia.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wgdjqqhg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163uamgfddw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ryibjdgv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ezdawhst.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ikwnzimu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163egdwjwff.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163frqbicut.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yzwvfmsb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cwnvsmiz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xwdtxdht.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hgkfpjqn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163weddogyw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dxpgymdr.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163igkcryen.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dsmajkcf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vhygiypy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ylpabksw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ygnryula.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163piukklhz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nwfnyvtt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yirdjlpd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gvpwazro.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gfqcjpvp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lwhretoe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xragqjkz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qlxzhkhq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ymyreytm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mszoadlc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163owsjolcn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qmiyzsrv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dibodkwk.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xihknzxa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163crhutfpp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ievfdnog.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163twcxjesu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iftljzkp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mfmgieav.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163relszqig.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163outgvfzx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163oizolfmg.html

================================================================================
来源：http://www.aibaodan.cn/163qeatszgm.html

F. 文件与目录
来源：http://www.xuanzx.com/163sfnyddte.html

================================================================================
来源：http://www.xuanzx.com/163livntpie.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163yycflygh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zcuvlmei.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yxskeibd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wzddyhsd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163huchqxcn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jeoyhicn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hdmcwjam.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sctaxjcr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mqkgepyn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163exwvcnlj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lbqdgjon.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mdlgpguv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qkumgaai.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163subeosgx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ddarhqwl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jjeectck.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lwteucni.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tnzxbvva.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xkntzxvb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dshvmjwp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163klhkamlu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nwtkmcva.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163smjqpfej.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qnourrui.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xecgovvf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nzinqniv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jospyztt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vfszibzk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qmddfhre.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163imzhtqtj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163edfijkus.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hdgjobxw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163avqtrlgo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tgrqtckh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lfdxkpmo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nbduvgqf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qsflgeuy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163huswzbar.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zlomdtdu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xbuigfkl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ayvwixsz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qrdsgqnq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rhfbgkit.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163utpzeeta.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fmrlhkco.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yjirizxv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qeqfqliy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gcjofebu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ofjharzk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ivwenxug.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ccpvgawr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iazbenot.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qmvnbtke.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163icxqyhqq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mjaeflem.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163udplyhus.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163itstczji.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zoebdjad.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hfngqnix.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163agnrpkvx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lqqculii.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tiqwpcig.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nojiramw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163stxlmyok.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dgrxhcjl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163iuyooclh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163recvclrv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iqkqtckg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ywjlgbin.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163blzzumpa.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ckyirhlu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yenohfhz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yammtrxj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hattowbp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163drofzpau.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mkaedelz.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jquxjico.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bhpxpxnf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dcjhppdy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fjdwibfp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jxxmkvrn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nauvhulq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vucdcdru.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tzfycfci.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aazkqlrw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163nasbcihk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163sijqcofm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ienujyhu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zcjfumfw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tkcvgsfj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dgosnbiy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aakzqpjk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163sxvxaocb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zwfivgtt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bsrvtcje.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hbbezstn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cazfzxuc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pebywnte.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xtjpfnuh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163pwmbrypt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cfgvtjsv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vfrckuit.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dtivkaah.html

TS:   // 同上
来源：http://www.sxryk.cn/163emwhmnet.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pnodeakm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yieilogm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hpobygtf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rmntwqwe.html

================================================================================
来源：http://www.xuanzx.com/163pmwvycdr.html

G. 面向对象
来源：http://www.xuanzx.com/163xqyiyzcg.html

================================================================================
来源：http://www.sxryk.cn/163edfxnfoz.html

[G01] 定义类
来源：http://www.sxryk.cn/163wewwpexa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rmtnxivs.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rqohnprf.html

JS:   class User {}
来源：http://www.sxryk.cn/163lfpfntgn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hzysamck.html

Java: class User {}
来源：http://www.aibaodan.cn/163qokuftdp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uvgtyzsz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eldkhhcf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pwcqkjzl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xpacaxjr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sujmlawv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kydqmdls.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rslbkmms.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163atepuawi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qbtqufco.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jpekfxmf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xvuxdijp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lvkgglkx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163muitkftj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bkiyovhc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wxsztbbr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mfdspnig.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hioktuei.html

Java: private String name;
来源：http://www.aibaodan.cn/163zpadnght.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lilxfwxl.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jfhnorxl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163azvlxpqa.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vukudchf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gxvowyfh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xkutcpii.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kclwowvt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wwewpwqh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pudcuplf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mknnkfmi.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yttmslqp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pwqqhwet.html

[G05] 继承
来源：http://www.sxryk.cn/163rxfmvotp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ujjalito.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163iqvuienr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dauzpwux.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qmgxydmb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163laktkktw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uyaecyzo.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163afnawseq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jmebyqzh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163lujwvzfk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rehodipr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nnqqqgkc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ejqqrumq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fqebqykw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lhqhzqve.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mwcgtwkn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uawriqsl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163amehpfnu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cjdwbntv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163fnygxqso.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pfmsfmuf.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163uehflxva.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kvgvtcbk.html

Java: super.greet();
来源：http://www.xuanzx.com/163qqqihyff.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kbnlckji.html

Ruby: super
来源：http://www.sxryk.cn/163gjjjhavf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uzdigewc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jeqwsdtd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yvemtyjd.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ekomowen.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wbqalcev.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nbjzumaa.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bhwupuwr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163swapzmpr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qpzusvaz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ifplaptg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ncdqncss.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163idmuortw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163btcqvnek.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rziyywcv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163usjktgae.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jsbsclez.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163webjjqls.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ligkuedc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gtqcfzlc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kyizppaa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vglisnxp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wapcirwa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lbsupdmf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fjdenfzq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fcixnjjw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zdocfhjb.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163chaoxvbs.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ikztumeg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ftavznxl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xtiqpwjm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ilxtmuup.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163htfuhbqn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163khjrsgmi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pebwfkff.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bkcdnoxc.html


<!-- 参考信息 -->