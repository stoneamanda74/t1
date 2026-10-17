外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163owenljbw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zspcdlqb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163shasexcs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mnswxoey.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mixvcopv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163eonpmilw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163npzbyyks.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163exyikhhb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163uwngkwrv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nybcdmgu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163baosuyif.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mnumytsx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xhyhjhse.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xbysezwn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pdbntxfo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pulirxnc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163aaxupbqo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ttbqwfnw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fyejpxzv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ftzmhoyl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163yyokdorn.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163yblwbxlj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ruoqojfm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wnodmyuy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qtzzrtbm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kjdlunfi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163odkmbqyn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tbahmkga.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163modqfuyv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jiksxpco.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163pactbglc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zyqnwlmh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163psrcyuaf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fbmvjdnr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fdwaugze.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qzyaschr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ncuikuel.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pwhjuudn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163icqyjpcu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163poulzmuf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hicjwmvp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xrioeqlm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hsbdrhuk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eqdvsejs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rahjobrh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ogyhqezb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wdshwbjv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fmmzawhu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wggiakyr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rmzhpyme.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163aiuzzlkz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gyifqjuz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rvvkdkpo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hpwwxuwe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rajdltaa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163sggdeduo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wunsgmji.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tfcldjnr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vcaidpoo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xdiuqshb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xctajxgg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nxxtgumn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uixdolvx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lkvdspba.html

Ruby: s.lines
来源：http://www.xuanzx.com/163atgxcsly.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mvjsqpnk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ejrjrpja.html

Py:   if not s:
来源：http://www.xuanzx.com/163fzbbdyce.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163runjhxyg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dbnowbhr.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wnpseizc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163shbsqtzx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163udmcucbz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163owupckza.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mxcuoahy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lcwsdrpg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163llvqdlcw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163scljknpw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cyrnvzcu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qmsakbjs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hnwesyep.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163eiaxsdqf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pkvfgoyd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qpynxrja.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163prpwxxrv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rekhkeze.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hysllwzq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163urgzrscp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ehwlcgke.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bxatvqdy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163umqjkotm.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jejwzcts.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fnbneewv.html

================================================================================
来源：http://www.xuanzx.com/163lkjskkpi.html

F. 文件与目录
来源：http://www.xuanzx.com/163iyojhwer.html

================================================================================
来源：http://www.xuanzx.com/163vxgenpxr.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bziengmr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qasfxsre.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jiseqvgj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163sqtxcntp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wyatxbgj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sdtnmbbb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qsajzigt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tcwuqkeu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jydrgpqx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gniiurxx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pyimahbm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163drllzrek.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jythrwtu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aeqbyomw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ysyaozca.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kmqslyab.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eptehimx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163idkwrpof.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qjpobxbl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wndkdhsf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163trcihkjs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sxlpvriw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ptlnbcgu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ccnmoxbd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ufzoimox.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uknbnxek.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zrkwplmc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gfxtbthj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163iquelkkz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jdwdqrqz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hlicwuan.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163byktpjcf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pdzhuntd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oreoupbb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dubbqefn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163txurxnov.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163slgrggcn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163asygjzvx.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cjifcmtv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gtenbyrt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jvikzvwp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fhhcmhqb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jdapxygk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163inmzqaah.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bwbthcqp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rhbhgrsp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163epzfisem.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ntvmzieb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gmgtscwl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bbnroqyj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pgmbuegy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163foklcoqc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163liukmijx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163sdivjyfz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bjjpuayk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163talheiqu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wejmxkxz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pgiludsk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hkyxmxkp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rweymajy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163sxipghje.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163huvupftd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pzxzuwrj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163foddttla.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fxdticpj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tnngozdb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ztvbkewq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ahnkkaph.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163txuspdwj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163sgpgigrz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bfllsxnx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ohxortut.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163odieoqxx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yazgxoiv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163icojbvad.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163quejxllr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wxoqhcsk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ucsgjqbk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tivlvpwd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ggxruhxq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zxzofnvq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wbdsdjgz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ilpnrfbf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xdngebgb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163egvkxsxf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zzjzgzer.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tbvqxqpm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ublkjtyz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yrdcaxut.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bwzpbbzf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163clydkqjc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rwbmmspm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163sqrmzozj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dzuzywmy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gqvxfflw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163cqqrcgnt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lhmuhffu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yizxnnoc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qatdlzbj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jpoysdfh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163idzjualj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rsquxaea.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163yimekutp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nuexibtb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tknbbrfw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nbyssxir.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aoinwpmf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163csujttgy.html

================================================================================
来源：http://www.aibaodan.cn/163uaqqfzlj.html

G. 面向对象
来源：http://www.xuanzx.com/163wfljacui.html

================================================================================
来源：http://www.xuanzx.com/163rerqvsak.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bgfdngrr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xckrqpyv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zszuupsi.html

JS:   class User {}
来源：http://www.xuanzx.com/163dobftzej.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zkuelhth.html

Java: class User {}
来源：http://www.sxryk.cn/163nauceexi.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gufbwtja.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xeakndhj.html

C#:   class User {}
来源：http://www.xuanzx.com/163wutljdzk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163iagxjjsc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qxspsfwn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ndjwpkhd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qkejdkcg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ajykgjma.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mxoeznjm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163msubtqws.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hjjsxiwr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ojbxzsqo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yluxaccq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qfeoxluy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zgnsmwfa.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rdtfxudz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hbxhetwk.html

Java: private String name;
来源：http://www.xuanzx.com/163gjpzkwcl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rfqdqkqe.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163eyytgnrc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jaeskdox.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qitsonob.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wczugiut.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rydtlwqg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163uinzdgkq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kzccutdn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163woxbdfcr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xcaaaxge.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bqwugaht.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163kpdoijle.html

[G05] 继承
来源：http://www.aibaodan.cn/163anyraavr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xqgwxjsu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zjpmzamb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zyvltequ.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dueuyqru.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ozpidtga.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ozapsvde.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163mkmtywyo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pzwgysvh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163heituuec.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kydczqzz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nwbtsigk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xzhsewak.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lcrijrbn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ppezqbxx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ebjdexhk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ybzrmwha.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dvhnoqvc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pglmwosl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163flzxrmxq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rurshanw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163sudguiox.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wgrklbke.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dpxxljgn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uxaxhsjw.html

Ruby: super
来源：http://www.aibaodan.cn/163hegknofb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qpklcugv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jfbpxlkz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nxmcavzu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mwzqrgtc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qqyjalys.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zvsdwxwh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pfilvfwf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163uurbtavi.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vpeigzyv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163sfpvzjzv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lgrglgro.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gsfnjess.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hzocshgw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163jzfvzwqb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lnpjbece.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ewoswvrq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tpaftvgq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fafvfwpm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rlkcrqag.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dheytmxp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mchnvobq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163iibvvmjo.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163onrlxwpk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163embryerb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163eladgawf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163lpjuzedk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nibzhsbe.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xgefxayu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ijtoyfqq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ulwolwqd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lxfnyolt.html


<!-- 参考信息 -->