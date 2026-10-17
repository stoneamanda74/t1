外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163txqtaqld.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hrsoynzh.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mcbjzaxf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163pvpzahcv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fuguvutq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zcfivind.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ruiloiqq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kympnkhz.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163brtqibah.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jomdougr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nhfbhptu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hgglzhgv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kkspyibk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163chwpjbtk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ojchyfdc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cmdikare.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wxbzjmac.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gufmjvls.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kagnssqf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163unfugcmx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163illnkcit.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163avsadvom.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kzlrghtm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163dpmvwisi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163egxwnlbu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163wuvdyral.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163uclgsitz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163cbqtejxh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163omegjtex.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163fyucotbx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uzptzaed.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163aqnplwsw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mkuzmphy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163tceruped.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xolaqwhl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mjbsrojn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qxnnmsue.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jbfklznu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dhglploh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nyzfojki.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yfqiwedg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vjolyvhy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fcshfeex.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fjcxrpnv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yhyqokwc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163kgevjbru.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163keqiezut.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rordehdl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bumkzznt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163euxoqopw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rpkzvfdq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pkiqgtdy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gtszlzbp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vibcmisn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163drjtwvof.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jepxappq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163icxvgjni.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rtnaehht.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163eofdzbbc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mqshvkin.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cbfskypa.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163kvpjrjgz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ixmzqalz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163krpogkro.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mhxobrmb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vhvhqase.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hntwslub.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163khtsqfvc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163uphtxeae.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bbzvyvxd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163atytafvr.html

Py:   if not s:
来源：http://www.sxryk.cn/163sklyokcb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ikvaxwnx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qkqdrgdu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163fskhxoqb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163edpgevqv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kfmscqxn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163omhvozig.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163indqjgbm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163emobdcom.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dqfigylh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wjfekkos.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163avwfsegr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jpbimikg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dxcrkybb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bzjcdjmr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163npgmqmga.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163cntfibhl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mpxwogra.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yujafnev.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ckxseqqu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zceoqdac.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163grorkbxv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ulzzobka.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fwhjekjp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ifvtndaq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ngqzyxlw.html

================================================================================
来源：http://www.xuanzx.com/163kmsrbjcn.html

F. 文件与目录
来源：http://www.xuanzx.com/163pgxrsgle.html

================================================================================
来源：http://www.sxryk.cn/163yidgxpwn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163txscrqaf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lcrsgshc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lanspwhv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jqoanvyf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zlsgyvxy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ksvtaras.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ceycagib.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163owjvnzxe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163omcjtwcs.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163eqjqtops.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pokxqqsi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wncfhggv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ddcxavyn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wdctmxdx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mwczfieo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163igsxgesb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163eiynujow.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ehydzhrf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163oqmqhkmd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vqsbbnor.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qhsgfnvi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gdxgszuc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163grcevele.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rhuoxlpe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sxrtxvob.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ucnlfehq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163tphcrviy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163opceinpc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163eglnlqzt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vmpmqmim.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dfligokx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ubyiokvr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qsafdvnx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lbmekdiq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dzhigwii.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ysozsrzq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163beojnkvy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xnijjpob.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lipjjeky.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wanejmnu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nukxotod.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hotojrte.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tjkicfzw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163anlrevds.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yprkimkh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163efwnzoqn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163foykccnj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163caybpctc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uqtzlvbt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163egubzlvp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163albfidof.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hoxzaysc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mfdkgbee.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163mufzvfar.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ificsjnw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tnznlmgf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wrrnqjdp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163czgcmfxs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163trrxulyr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rssntaoz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163glvedlqr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163vvkdkman.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uwwtipzp.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163maddjzwj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163cofcbiiz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vaatumrp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ocrvbyvy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163afqopbfq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ayboykxh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lmmwwvkz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163afzikuhu.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mwdwcmfn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zkfnuzmx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kuicgwcm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bmvnjjqp.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163awuwckgu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mdpkvpkh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dygzahkb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163piqyagsd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163alswkelc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163sbrceczm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vrikgaye.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wykogqrs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fmryqkar.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cbcnwrzy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bhcgfcvv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163tjgjbalv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kcobkubb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163syodlhaf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bwegggta.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fzjnoqut.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kptjpnwd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163acchjfxs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ktikbyte.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ihwwyoyp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fkhdjznh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gmgatnew.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163conzwgpw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bhhchaxx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qdqpwkaz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163sabydnlw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163frcmviiq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ugjnikgm.html

TS:   // 同上
来源：http://www.sxryk.cn/163wjloslsy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163eufrayod.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kcuchuyc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163atnrceba.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uvffmnla.html

================================================================================
来源：http://www.xuanzx.com/163zzlbkelj.html

G. 面向对象
来源：http://www.xuanzx.com/163weddmxrw.html

================================================================================
来源：http://www.sxryk.cn/163ubvqoyls.html

[G01] 定义类
来源：http://www.xuanzx.com/163gaiwqalo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lthlihzx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wxmqejbk.html

JS:   class User {}
来源：http://www.sxryk.cn/163fkcaftht.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163idgefafn.html

Java: class User {}
来源：http://www.xuanzx.com/163whjfldog.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ljnfrelt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163priwjual.html

C#:   class User {}
来源：http://www.xuanzx.com/163vghsgpdq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jhcgurnf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lomstxse.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163eqxpackk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163pwvmccex.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qnzsfebn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163glfcdyfw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yaprqyid.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bbzmemvm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xmvlgfff.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wdijnnin.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hzeegekm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zyexrkbn.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163iftsjcjy.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tddsubwg.html

Java: private String name;
来源：http://www.aibaodan.cn/163zmbszekb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zxrqveri.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qactwphh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163oofsfgfm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kypcdzym.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mujtpjsg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ldwgpxhy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wehgbaiw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zkowysrr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ysbujjwy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163tdvmhgra.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ndgdiofi.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163omtbdbqi.html

[G05] 继承
来源：http://www.xuanzx.com/163mlrhdjzg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mvmndyhi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kofvpjuz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ekblwjas.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hqtelcnb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wdmsekxa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hqipxzbv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163isaxjcqu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uifacglz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pejkalrv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163epuayqwt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fhjbdnqr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vllczbnm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nmxwcavs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gokdmzns.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lacspeiz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yanwnlzt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vlslhyxz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qzzylcbf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xpcltpan.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vralfwgs.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ztolifbz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mhtfeebg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gybdatxi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163wqshwnuy.html

Ruby: super
来源：http://www.sxryk.cn/163xgaxwlgr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zqxwbqap.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163poyzinrz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fncfgtds.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fgnrgelb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vxrngjct.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163owgwacye.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vzhtkecg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lqfwcacf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lllvhucs.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rtbfxxgf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163huvygota.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ubhqixpd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wyvczfuo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xmmvbmjh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vcyzgcre.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jlrmrqgr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fzuterap.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kibcvnzp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rpanbxnu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kriqpwnn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ndcwoxyr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jglpghvc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uweqsjye.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fonqmewk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pzvvfvay.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hydnflys.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qmhthxfr.html


<!-- 参考信息 -->