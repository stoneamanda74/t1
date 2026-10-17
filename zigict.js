外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vbquwuge.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vzemjlcd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163eywntpiy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bkjnbawh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wigwwtzn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kdutvguq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qepggnfr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wniguyhe.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mynrnted.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jkxkrlte.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163urwfbiue.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hmmkuhbd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vxnjouds.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163qmdoatwo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163juwjyxyt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xiypvfus.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ltfcngat.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cpnpqreq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163hpeiowbr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kjnhffsp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ygovfqxc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pddbaulx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lmkxijht.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uepnbpvt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163cjgjtvsh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bqijdenn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sppvzixv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163iwyphqij.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kudtmxry.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vetigxuj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163polqxmjn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163uragokxu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163mmthdfej.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ccfmxyms.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wflaeqtf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uszyyptc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yxqwoynt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hdiwdyob.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bnizfwbp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bpjesixr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qhauhdga.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jjieebtj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lrpslrvn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163duoelarq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rgxnwtff.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163yjkboakx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vkekvurj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163obqcxfzk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163kszyqfjr.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qekuumur.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163fubuwktt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tlbpngqc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bcslnxgk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163witwsorr.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pdrdyxue.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163cqhkjqub.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lochgsch.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kvhvtwep.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ejysrlxp.html

Py:   if not s:
来源：http://www.sxryk.cn/163sppeswxj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bbjwsloh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qedvdvxk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cqcovrsf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163piabrdbg.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163mabghqzm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163sxanfmmf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bxififmv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zpodvaxu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kvziecvm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163viffwgrw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kehfgcax.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ygzfoufr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pmhjcpzq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163aaalbtwe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163axsakkhs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163khdrhxvw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163eguysmcv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vlmgfadj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qcyswevx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kqunxcys.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ikopzeos.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163muqxpmtl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163khqhxfoi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fgnptkoq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wbaksrgm.html

================================================================================
来源：http://www.xuanzx.com/163fmljlhxd.html

F. 文件与目录
来源：http://www.sxryk.cn/163xkmsjact.html

================================================================================
来源：http://www.sxryk.cn/163gcohpjor.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163oimkqcve.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xrejglsx.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163salxikru.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xghdzhsn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vyywwmzb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wriasmzr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163conuxiob.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rgvkcolb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qlnlaysn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163eahmjiyn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tfiuqhhm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fijqxqsz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wbanunhs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yrwbelmj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fwabzmoy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163iweeswoh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fshjkaht.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mqbnjhtn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nwfycspw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163daxfcpnd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163crcpotln.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iitzluay.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zzkyztim.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kspkepir.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yxnwppkc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dhxkwiem.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kkyqsggk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zzxbzwoz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dgfqrhwv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kvahugwj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kuunczlv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cvjbzcde.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rlnosmlf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163imrtspfb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mowrdyhi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163evqxwbap.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jlmehjsy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eokxcfnb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163maxiikrt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yfbvseqx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hjplhbxm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qznelzvw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163njsqrsux.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gfoceccn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sxxhnbxn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mnxmvyzn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163slhisqio.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163sfykrqob.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fcapvaxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nmbcwdsv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fmrqbvou.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ddzzuubf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163icbzkkzx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163urzxbidq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ugdzmgvb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mwcpzbyn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zwqlphwu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cpgtkxme.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gonngxwt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zufzhitb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zrnfxxtu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rxvdlbwp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kpjtgxaf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kxwqoohu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nfuwxquw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ztpccnen.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fetwsdyf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mtwsylci.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163puydltlx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gyqitwjk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cwpbtxsv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163binntvbo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lokyksju.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163anbtuiuc.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163clptwmtv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163knnjlcde.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qgfyyhen.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qlzjslqd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163healcvol.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163eenlyuhx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rufzuvax.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hvnnmnop.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wygrfrhf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163izmkrrcr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xyxwyuiw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163segutlex.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rkavfafi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vogxqlhg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mcoatsws.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mosuoyyr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163njjryyfj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dlrxnhru.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163upwoxmjo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xhtztriy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ivpiarol.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zcocghsf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163xwcnjfze.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ufsspnks.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bwepculy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ajfzfedl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163eunphivy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zhystvlt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163efvlxkhj.html

TS:   // 同上
来源：http://www.sxryk.cn/163zsrwandw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hqjgmceb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fiztqheo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vqwoycfn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pcyzmkax.html

================================================================================
来源：http://www.aibaodan.cn/163qqwrnxsx.html

G. 面向对象
来源：http://www.xuanzx.com/163daoibilj.html

================================================================================
来源：http://www.aibaodan.cn/163ikouvfix.html

[G01] 定义类
来源：http://www.sxryk.cn/163zonguxqs.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zrpajkgt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hjfawrbn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uboqffjv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fntedljr.html

Java: class User {}
来源：http://www.aibaodan.cn/163xkqgucbc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pmfjyxqu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tujnkrcb.html

C#:   class User {}
来源：http://www.sxryk.cn/163cwmqoozy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kelelnmh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ivlkvwzl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rihlhrsv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ezsgzukh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163upvktrtv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jabyglzk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163edvjckeq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163evdmwmyk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163domyqyvr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rvwdfhov.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fefoixxb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163telhqgmp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163klvpmjmo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jgccbrdz.html

Java: private String name;
来源：http://www.xuanzx.com/163vbrkihxj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ymblchyv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163inussxct.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pyljkque.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163onekizgi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163acqlmnri.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kpchtmxw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uyxlozco.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gnophfbz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mviifwjr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163aunqbxsb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163yytswgxk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yicaadgn.html

[G05] 继承
来源：http://www.xuanzx.com/163gffamjuh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163suyzuxif.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ykorrhkv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fykfmswv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fpnqwyxd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163nicdahrp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fyxvcthk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163etokfvna.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kaclizqc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163yyqepqrq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ygtrsahx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163scdmtdwb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163iamdrjfg.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dckyiard.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nctsnwia.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lzkohckh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163irkgqwlg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wynybyfx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ryubumjs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kgzmnems.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rgjddwik.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hlacglqm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rjgfyrdn.html

Java: super.greet();
来源：http://www.sxryk.cn/163ipkzzksu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ljkgfgss.html

Ruby: super
来源：http://www.xuanzx.com/163qfbkowkl.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zevdvfqa.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uyboiwzt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kjqjwvbx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163earpjqhf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163yncrposx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rizmjxxb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wbbppdce.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163qxydxljp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163aemuimuv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pkrjshgx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jipcnjak.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163visspgbf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xyoezgml.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xaizgjtx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163waaabpqw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163sattwwpe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pebukpzq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rvcjtsvw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jksxjbkb.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pbvqetjt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mizmwmza.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zswtodqj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163mywwbvgz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zurptwbn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cojgtynt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zostbuhl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163asvlgyqx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163abpiclba.html

[G11] getter / setter
来源：http://www.xuanzx.com/163udqnfmub.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bzkcujwn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163coecpnvp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163sdbgppcq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wqfbuufn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vvfipefg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vnswiiaq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ecpzkivr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fqzowfai.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163siudlhwl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ayqookgr.html


<!-- 参考信息 -->