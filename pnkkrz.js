外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163osrtvdii.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zsnaozsr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mkqjfnfz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ignxogck.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163idkyfeqv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ntpkykdy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ndnzvdqv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163chxobjvb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163xgyllucw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tnbassrx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bsrmztnt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ojxhbrra.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ofrbciro.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163euuuzlcl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dsfxwmiy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163eutyjrlq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sfxtvznd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xigoesud.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163algnsgrl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163slayofql.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jddunwqw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pyggmmqf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zmrsdsxy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nsclrdfg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ropedhlo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dbsytikt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bagnebdo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dxnimfeo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gvdmlgcv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vuipcigz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hthrgxju.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ggqtyndz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163lyzcivat.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iyaximaw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rwcmomew.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fmdefpko.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uchadqia.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163apmbvnkt.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zryufyij.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fnuuwlqj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163djbhutdz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jtqyxegf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pjbdiryl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mllnyddb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163symqncwo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ihrdnpiy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163trubodye.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163awikhbxw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163myncwkla.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163fualzfed.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kmljspvm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cmivknly.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lsksjxab.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163yhrooikq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xmcvqjjs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rajuxmqt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163arcsfboz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ckoxdrre.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hsxjmvdl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163olgkhmrz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163renzowgq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kctlifhg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kzhhqaps.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bljrsbrq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uzxwohxt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xkukhwmj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163poqrfpkr.html

Py:   if not s:
来源：http://www.sxryk.cn/163foyuairk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hftnkjvl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gcglzbld.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163udsuctjr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163whmpfrel.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bslkjjwo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eceucttv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zdaslkkl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ddvuagct.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cyntsmmc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ezccvjvd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163daxbuqfq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wkicmrfq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xpizsyyb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vykdeykl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hsoclynw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lzzrpnxi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163uoyxjsuv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ubtszzys.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dmvaktfl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wlrqvgsn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wzacpveq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163phjomoaj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xooiwmyi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163arlnnnmm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163otcvobkg.html

================================================================================
来源：http://www.sxryk.cn/163taplsipf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uvcxvmrx.html

================================================================================
来源：http://www.aibaodan.cn/163jzvimomr.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zwdkigld.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163wifdnhcd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zlsuetgo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163oddtfdki.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vllvnwya.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sazpryxo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lgjdblfm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qlauhgvs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tymvruqr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lstnuzsj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qmeslrqr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163imvingdw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fwmudcxq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jqvhqepv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vppatuud.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163evwienyi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zjnvwlwr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hzuopfpd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xkhndyir.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jzdylpjv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ngcgwkyi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163apdgvubw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xbpzxnat.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163mcfkvrqd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mttutack.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rdjmouzl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jbknossn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163fzahyjgh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163eqhyirzk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wjpfcuuu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qetotidl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mdbpvwia.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fsfsjlml.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dphptulb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163oikhfjjk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wyhfignw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fhbbdrfo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163usppwedn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xlwiykaz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rwyqwgsi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ckuwwrfs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yjaimgxg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jhvblfna.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mwvmrsam.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163julopjsb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ppocokad.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zuvzvuqp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rzpuqqzz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oequjofm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ocoeyqgt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xnwqobbl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hjsryayj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pgenimmz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cxseiuoa.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hpxvmfqz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fjkzxbcs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bngbuabl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cspwqfuf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fieiaxcl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vnbsxhxq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jnnzeujg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rflekvpi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lzbtegrc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bpggaost.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jxxtjnlt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vxeyzldq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lggdrici.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ixcfrbnl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vvociwhe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gvtxsrxb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jhaxaumr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nvkvykwe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163aycsqdsh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163xgicxmxq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163blvreixn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ilcduzva.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mwtrvcez.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vkcshhdq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ykwtzxjn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163emgststb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163azeouymi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jhjbxgih.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mtzhtwnv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dhizbave.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163igfqubvv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ooheclcx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bkgoayqj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163smnmhfqa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lpxikadt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zgymdlof.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jlestipr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uqeimbqw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163easaqvyq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bbyseenr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uasipnrr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163pxenzcna.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lvktujzo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ulyfvpym.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163btpvhvor.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163kwhxehqc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zbxsgwpd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lunqlpbi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ydymzqak.html

TS:   // 同上
来源：http://www.aibaodan.cn/163aeylnrkx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xkcqsooz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mtkreoid.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zjmffsym.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163sutrqxkx.html

================================================================================
来源：http://www.sxryk.cn/163fdwlqbou.html

G. 面向对象
来源：http://www.aibaodan.cn/163tzgxbies.html

================================================================================
来源：http://www.xuanzx.com/163znojqssa.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vbruqjvp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gonckywt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ggigmyzw.html

JS:   class User {}
来源：http://www.xuanzx.com/163yjexqsrw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163snccagpd.html

Java: class User {}
来源：http://www.xuanzx.com/163eevfpxbg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kbnnaran.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fmaieebn.html

C#:   class User {}
来源：http://www.xuanzx.com/163ckllgiub.html

[G02] 构造函数
来源：http://www.sxryk.cn/163uofzexvd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yyjvkziy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163matcxpxt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lfqpvalj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cfmcvsld.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gppyrjxs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163aececpka.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ciabodwl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gkfnkzrn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ttqvsdze.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zlsiifkt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163otijgfsj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dafrmcbr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fiaerbdd.html

Java: private String name;
来源：http://www.aibaodan.cn/163tdixprfq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163yfyudlwu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163aepcxwsx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uwwvugys.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gheecjhy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dokynjil.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qqctwbvj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163shbhqupx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163isovppsz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pgdetsag.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163szagzlrv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gfacgnru.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tdwasolx.html

[G05] 继承
来源：http://www.sxryk.cn/163pdlaqiad.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qhehtzdo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xmorwwrj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zthicgda.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yikveadc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fvwfeypf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zkpeyylm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ktcxzuwm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163azadtwfe.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mseokugv.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wnccftev.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xhetpkqy.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ewrqtxrv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163odoxbdjb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wxrulmjn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163myppenyl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dsksqliv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bwxrrhxl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qzjwwilk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mgggpytu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mleujocb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nufaiaal.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163gpiyxmav.html

Java: super.greet();
来源：http://www.xuanzx.com/163cxozxpwh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wkvmuybw.html

Ruby: super
来源：http://www.xuanzx.com/163rrlxkfpk.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cqtemnjz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163liixvlbd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xrnmzxxe.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eeaqdlrf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kexocqwy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pltvguiy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mftiabtw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fwpbvdeq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163abyvigoj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lmgottlp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nzlbwgyg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mitsigiw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163anfvznsk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rgnmwbes.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fjacvtdg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163kjlgdgxa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163clqkoqtv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ovsdobsj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dufenhew.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xxjvfltf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wwakaibj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163gnpowdxj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yygnmxjb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163grlsimlq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ulseehdt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dttrbsyo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163eqetdydj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163waznjkoe.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vxsbjwdr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163umtsplnb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163emxnroso.html


<!-- 参考信息 -->