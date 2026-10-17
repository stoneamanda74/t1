外链999!wailian999！

Ruby: s.reverse
来源：http://www.xuanzx.com/163kmvjwbmr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ipbacivw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163habewndi.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bshrnjoo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eckylqvp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lsjqapjv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xsbpgawy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ihxpahde.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dzzmjebr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163stpfnwos.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rrigzbzz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xogluwqf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163drugwsiq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mikpuzvy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uytrgbfb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kzjjmzwc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vkzqzgmi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ansrivfn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163oaqgkcba.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163aupuusno.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mxvkovgo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ksdmmnfo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ggdvhjtq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mhivbzfo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dafgajdo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ybubagdb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vzbkvxlq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163coptilxn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jmzmocuo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dgmnatjg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ynwkvgvp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163etjzqffc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163booymhfu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163iqkfvrjm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ypuupxzd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xcopuxkq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163inrfdbgu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gfxysomc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nvimbnvd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cmgnvirc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hnoijuoa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tstvqyws.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163syclhvxc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163jiaxexdz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ilqaabgk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dzfwyiam.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bjwtytzn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xbhvytyt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rmkmhrnq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163omhryodn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ocgzacfm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ciqvosci.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zltyxadq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xhydpuqz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dmnisvuy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pxwipxck.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tnwxqapl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bllrfark.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tylttava.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eshfchfg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zlmcveyv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gwxhcjvb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163afdukbkq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163blgicqas.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gsxmazvy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163absrwfqt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dsyxoiqn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qjoxbzuo.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fdpgeemg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163feojictv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163avxrctfa.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163soajvguk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bhmmftfp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163whmtymmf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lgdijwrk.html

Py:   if not s:
来源：http://www.sxryk.cn/163tihjqgqv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163quckuimt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163onwtmnff.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163swikcoee.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163oovrogfv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zckvgnxw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vufjputz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sjgeakrz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dpmuohoy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xanqcfag.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gyrmhtdl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hwpvdbgi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eydhtsxu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qmeokjqb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163deqxfoes.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163aolbihvn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163huvayxow.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tylplrkk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163zdedlpfv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mlbcembs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cifkijva.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gmauchpi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163tlwzqpre.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ngobbzkx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tbobnylo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163yewsnltp.html

================================================================================
来源：http://www.sxryk.cn/163tlfmenwx.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ioqryxqs.html

================================================================================
来源：http://www.aibaodan.cn/163gzptkplk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rwznmuxu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kzlxborq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163emtktpmr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163eruptrwu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ncnpysrd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eyaoyrkv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rrruiuyi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pgyzimqy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163guxdefhc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wzahfbax.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lewsrohn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rsykmkyw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ktxgeqyp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wvaalxjp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kxkkfqew.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163jbqbwpzc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bpqntkia.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vukoegah.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gooavxca.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ccjqykvx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ezmzazmg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kfdrskit.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kgwgdmqt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163njcjuvsq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ppcltqtz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ayygfdjd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ojrfdyqb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wirsjlmi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163miunxwui.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ryhezwbq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ihioolwz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163enmizmzg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wfredngk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163gixxcwie.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xdqxwdge.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tyybypaq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kxrqhmyc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mtyagbzs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xtpehtrm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163itdphscg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lkyqsmby.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tzpvxukb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gfcvatgy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fwobjyei.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163oddejylf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fhqoevbt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vixzdvpw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163umiangoe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nxkubxny.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ygvqatyh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tqsysqtf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ppiudwxe.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ewrwueon.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vbcdpkma.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qayrkfse.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mmzgucjv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cqhevmbg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ntrmwztr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xnftqdqx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wpacmpmp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kkrvnsol.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hmnomshp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tnvnoxxv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gpdfdhsd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pceihasj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pxwwlsxk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wwnwnxok.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fvgfvtys.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zbrtfuaw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163chqbwsbt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ublbeeiy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ozbawccj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cyfqegmp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xwoyktby.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xocolrqt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ogymvcvp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rjphybit.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163juzcngtc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163doqamyho.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dxhdogre.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pnidgovp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ucxrcqfo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ovrivydg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bwamccyq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wsnncupj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ccarcjwy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pasqbqqg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rsgrshmm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dirzummu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163omnwztpw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tkfgiijb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nfapyqsu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dwmvdttv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fvdjvbwq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mnafnptc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dxcyfydi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ifsclwqh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bqmgdoyp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mqtyejav.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hywzjnif.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fxrlmnyu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163oumpetah.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ehweezbz.html

TS:   // 同上
来源：http://www.xuanzx.com/163ggmopkhq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rlhachaf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163biyrnvqt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mzevhdme.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163akqkhekl.html

================================================================================
来源：http://www.xuanzx.com/163lgstgtqm.html

G. 面向对象
来源：http://www.aibaodan.cn/163itjjyqoy.html

================================================================================
来源：http://www.xuanzx.com/163fafdznik.html

[G01] 定义类
来源：http://www.sxryk.cn/163mevgmhxi.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uezzdufm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163sisobuup.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mbovymhz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wchwzwbl.html

Java: class User {}
来源：http://www.xuanzx.com/163ctfxpyct.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dqvuielr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zhozudpt.html

C#:   class User {}
来源：http://www.sxryk.cn/163ezvewkwu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qizdjeiz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hfyrqzuw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ukyugpcf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lhxvutpr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zxpqonyc.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yafacrns.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hcxgalvv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ccdnztlq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163boponihv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cffggxwo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jqnjzcjm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163odmylmah.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163iiivopgf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163elhmnqqz.html

Java: private String name;
来源：http://www.sxryk.cn/163wnwclamd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mpdjtbqn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ypazbryo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gdofiaoh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mehoqmmz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gthtpwte.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fbsciizx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163iexkvpyh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vkboulwm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jkjfzsbr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163sglozqiv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pcaqbcjv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rwyhrgze.html

[G05] 继承
来源：http://www.sxryk.cn/163iajvxwvo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163norenprf.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mrfyubcd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tmoeyrux.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gyjfofmh.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163csflhxwy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163syjdqolr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mrqrcrgl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oceyjlut.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tdadivvq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163oehltcxa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dnmuxcbu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xzrczmhw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hlsiradd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hutiqplx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xiymanqc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gvqepudx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kyvygaiv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rejxvovs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163tfsnosjn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ohzoized.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wrzvhffu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iernuxkv.html

Java: super.greet();
来源：http://www.xuanzx.com/163rcnjfdov.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cjaovand.html

Ruby: super
来源：http://www.xuanzx.com/163mcyjscbh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ersrtfde.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mfuucvub.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kunsikrr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rzsrlmvb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ymseaonf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gnmmthgm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kywstolo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cvyxhbnh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ccxqayum.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fyehkljb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fvcckjnx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rmpfpmom.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hevmzsxy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tisulats.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wqzocdhl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163slfjwwfd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qkrqfbif.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163evbvqnlo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dytfqbya.html

[G10] 访问控制
来源：http://www.xuanzx.com/163iybbefvw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qtmeeann.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hdyswkte.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jozeoluq.html


<!-- 参考信息 -->