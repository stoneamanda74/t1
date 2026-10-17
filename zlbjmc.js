外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fglekksp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pojzocsu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iqucryvk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rxgwsndl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nuqmktht.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163teuejcee.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jjokkulr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jijenjeg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sruaavdl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vcjslxop.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ccfzsggt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rozkgrhn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bmzeazcp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163balqjjau.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pvuptbgc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163lkscajvk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hkqpmgsk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sngupstr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ujcuwomr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ryvwvzop.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sdrdfkhn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zmlrwrgk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qrcxioxm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ocidsxiz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lsoccvja.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jlaepepy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fvizfjll.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fwfahqfd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ppcnleuh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jdokpwkn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163clyovtxk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bvexozhy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rckjdbzg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ttzearbc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mifcsyzt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bwbfgtwa.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mzscmtmx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dkmqgcie.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rtlnluns.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lqcyvqci.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163pehjfniy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lhawxxyy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mlpauogx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jiisaxdm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fnwbamhm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dxofhysr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vjrzjuid.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lkidcpyf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kfjfrdpu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tqvtnkii.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hfzfcpby.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lezourda.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lhneeysr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hlqpyhbr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163gteyozez.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gfudndav.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jzasanwu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vaipqkwl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163sazcxwyv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tntaiswg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163iacbxjtn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163qmltcgkl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lwydhhep.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zjnvzfay.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fcmfnred.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ppouzekd.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163incvwmtt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163swuwxpqp.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nufqwyfl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qisdpwng.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163bkzavvey.html

Py:   if not s:
来源：http://www.xuanzx.com/163qhtpxbkd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163krezgpwx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163iaprkztg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vmmmpxvk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xikxhbrj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zobxjqzh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wqxiytfx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163beneskqn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bomvvbuk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gicjwjon.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ikhpihjf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uhmvowjn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgkahvgs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ewsciivb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mcflkeke.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ihusijxq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zodratun.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fawmbdmq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163axxgrnid.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cuiucmmu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tsuluvfz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mqviqixd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wpdmcpqj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163soqartoh.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mspqsxzh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ketriomp.html

================================================================================
来源：http://www.sxryk.cn/163dbunnlcx.html

F. 文件与目录
来源：http://www.xuanzx.com/163uwbnuomp.html

================================================================================
来源：http://www.xuanzx.com/163ceorwgdi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vockndfl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xhfbiaob.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ekkywkfe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rsteyzpw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163luuhpgvk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163prpkcbqe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vjbxrchk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163onrjztqt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kuxbeavy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sldxscjz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gohhxmsd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163votcchrc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163etopdcin.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zowujtrq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163otoxyngq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163topejwbo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ynhtwnyb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gkiwfxnb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jpshjoic.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163npcumutt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rqjdrrbt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ldqfaive.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cthxzagh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sglbwhds.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bjtwgpti.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hsivjxxm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163culwajaq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lfzwiixu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163azkoegue.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ziirwibt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jrwhtvxp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wvwofgjd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gxkvgamv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163nwxrirzl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nsjujqdq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gbjfjmab.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gktyfzob.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lnbtgvwx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wdaynujz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163flgmcwmw.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163efbrxekv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aznqyjco.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xzovzele.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163btqfaaop.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kkmrbfwo.html

[F06] 删除文件
来源：http://www.sxryk.cn/163azydeagz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163btcbzysc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uzeowgbo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iyqllxor.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163whxcyxol.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ezigrksu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mhwbfyji.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163sgiqmznn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ymqytabc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gewtdbxj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163olpyvugb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gjnqlhqu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vwjvcppy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163atcycvka.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163agkzskbl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ghkknoog.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wmfpvyem.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ophhesim.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163tnjyprff.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mmvifuif.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gapdighp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hzhvudcx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jjfxzctg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bzgqkjbi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xyvvlwdz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vcrqiszj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xloksrln.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ddflnzdu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rdyjdkht.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rzbxbpph.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wsdjaehx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uwuwdvcm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jjmleiod.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rwwojjes.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qjcnpsei.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163awwulbsy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zjhvkeip.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163naftodsk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ltfssdmy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wshqkifr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163slklgnbm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163eglzaelc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163aemxehdw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gomnqcnu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vohjajny.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xkatmmvb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iborxpbl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jdxyaosr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pocxkqvj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163prdkcwej.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lbayepfa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ldzyyztr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rcdqjite.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pfwycdtj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163iiefzhfm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cylvsoyp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fdeevuia.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dxdgudrt.html

TS:   // 同上
来源：http://www.xuanzx.com/163ytvuuhsk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xxvuarnz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lqqftrta.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mcbqwzfs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163tpcubeaz.html

================================================================================
来源：http://www.sxryk.cn/163mbicsvit.html

G. 面向对象
来源：http://www.aibaodan.cn/163cigodbvq.html

================================================================================
来源：http://www.xuanzx.com/163cmarhvpl.html

[G01] 定义类
来源：http://www.sxryk.cn/163oulslfet.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vibgjosj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hplzeeky.html

JS:   class User {}
来源：http://www.xuanzx.com/163rluluemq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163gjysujkj.html

Java: class User {}
来源：http://www.sxryk.cn/163skbocbne.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nconlcez.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163aqgitgeb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163owulbxas.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163trawwzey.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uyurexdb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bydzcfjt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163govachda.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pyvltwbu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vijiwyte.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163clfzoljt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zlzxcdkv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163emwdgkix.html

[G03] 实例属性
来源：http://www.xuanzx.com/163krmxrmkm.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163schjhrse.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nspwnxnf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sudqleur.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dwweploa.html

Java: private String name;
来源：http://www.sxryk.cn/163rewaowwt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ybfewyia.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163epnhlrmy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ggpwbdfz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lpfnyeoy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mykfsvdo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bgpnhzar.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pplfxzqx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lqqokuey.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bxceyzmk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ipldqoeh.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fvzlwhap.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bfvbgohe.html

[G05] 继承
来源：http://www.xuanzx.com/163yphqgasa.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163nwmhcwkp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fexamebe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ntvvfzne.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163epeiavmx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jpjyyata.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xyujgwba.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sghatmfv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zxpmjlro.html

[G06] 重写方法
来源：http://www.sxryk.cn/163osooaobw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bifblwku.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cvcmfagu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lsnpzmjn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bmdbnazr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fzimijrh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dqlosuxn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163oypowubo.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fmcmzeck.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163whaemtwd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wcwmtfua.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163hvldvapp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163brqtazwh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fgdifftl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163znsgqewo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jvwvvlyh.html

Ruby: super
来源：http://www.sxryk.cn/163cushebpy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bmxzpqhw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rgotxoce.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pzxmhykl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yhjcqulk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tbubdvwy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rnyuilym.html

Java: static void f() {}
来源：http://www.xuanzx.com/163uaxngmmg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ooqtwski.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dhgyfkyl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163auxambbw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163eobjmyei.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ppbkueon.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xtlljgyy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163adigtkrv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tktmsrvn.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zxddljki.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pbcwlpyy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163eeswxykb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gdzekcud.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ipfplibm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ekwqnjcp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163aigpxeok.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zljoovws.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bjhitryl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zurkxpxx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ccwqsptk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cejppeyy.html


<!-- 参考信息 -->