外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ilgublbt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yjvizsft.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bcieekhf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163eazrslxk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ysrxbgbx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fwczzjkb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bynrztan.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163lwdwxzem.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kgpbzaks.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163heapqxfb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xbeybema.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zhiikudm.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jkssayts.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163uxdgmerx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163fmaftgqb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kqcbfrgb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gnufuwxd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hvihltuo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xmywssui.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lcshqcsv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zkblbwas.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hiqhfrmn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ckqspevw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rtzbessn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163txrytdvt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ifevzsrb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163iyhakopy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zbublbsh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jplrkxwb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uygvypyr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tlkdwmyd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163cdarsbyh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ojdpcxuf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mvbrfdhh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163aesyesjv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gdvxjkib.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zunvuofk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gsbkaopn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163bvlaqgap.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hbjpklnt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163doknjszc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hoioghmn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163aohuvqvt.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163fiyddqgt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pbhdltjn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fngvxgow.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cwnxxljd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163nxpennyf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163iksepqxu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kunugqpz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cegtkxqn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kxjkgvuh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xgqrpcwq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wdaibwkt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lnrtiput.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qujokclb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dopadvum.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kjruvwdz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xcmotpcu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pumauemr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cdvfbvsm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fgrzcbwn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163afysoxvh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ugqiknsa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fkgjarrc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nvczaegs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163odjyygfc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tskxsaua.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ucgvnged.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fqjdfpwr.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jvcpmwhf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ntoxbcne.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yalxrcvw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nhqdodcp.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xvefunnu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bzukxrcn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xvfrxjoh.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cjggfbjx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zafcksxc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ufygkznn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mumxewrp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bybxqenj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163egcgudsj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jhpjgxgj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nyabwgms.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cziuysgh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ezgqtngl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mpjhxmnx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163avcvnknl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zdvpsfan.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zvyrupuj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uppgjarr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vyaltzvy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163natjyiea.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163opygqruh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ihnipwhg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aeqqnuhk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rnckxrwm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ohxtefea.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uhcchvpf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bhglaana.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163bznanciz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163iquytgdr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qbtdrvvi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cicupluc.html

================================================================================
来源：http://www.xuanzx.com/163pemljpqv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163peglbxrn.html

================================================================================
来源：http://www.sxryk.cn/163qxcmnkzp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ctddzbxg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nxuzmrhn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gewjxiog.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163smwfbrew.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mwdnuymu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cnhpavgx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hsmirhfj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vfsctrac.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ygiuboqs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fclhisff.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bwrbavak.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vtunrede.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bntzyjbq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wcvjljrf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nmyifrrp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163anozjkap.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wtbpwkxx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hvpqwelq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lwzefzte.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mtczkhti.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jduljhwn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jgsmxnic.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163erfgptlg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jmtdcnpu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mokbhfhj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fcfhcfcm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pvvfxrxg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rxfnhbcc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163tdkmiymw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163adfeydks.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163epfkxrca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sysbwqcn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rmzrqxbf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qwwkkyxe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163mqinzcrr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xtwbqifa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ybtpycbq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ymgdckgl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163imsggimq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yncxalxj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pffdknas.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gnlekldk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163iwuavydh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163etvyokad.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163matdwwuw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163udqxiraa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nxcueket.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pwdjeodn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163iveiehad.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163atohchrz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cplakqzt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ygqxzuwj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fvwzmxqr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hghoxvjr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163irppbhja.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ieckobxo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cweunahn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mvyabuzo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gqquszna.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vuwoopzz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ghsipvky.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mezjdfzo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163stptigir.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cofteqcn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fshbpdkq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qghvynyu.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sljlnywp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qdobxhpm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zlzxzyho.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bcxgmvac.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ncoskekg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vqoffqxi.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163bwbqswjv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163akhnzjky.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163agouhwmv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sygfkyrl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ixauxqga.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ozeqmquq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jmvkkoro.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rxmkxhbj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lwejxnyh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163capbltnj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163alavswza.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pnmnwoap.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163twhjgcvx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xfdbyyds.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163iksgnstc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xcjaugpr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jjpmiygp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jsaawhoh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hssufyqc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vutueixn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ftxogmhi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bgugvlax.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163efpuwhdc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pcjrokqc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hjujihmz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dqgacexx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vlmvipam.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uuwrpfxg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nlhfkqcm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163cgxuqhta.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163djsredkk.html

TS:   // 同上
来源：http://www.sxryk.cn/163atecuzxq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rwzigahj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rffqdzxh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aisqapay.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pkpilxiq.html

================================================================================
来源：http://www.xuanzx.com/163ppkoldhw.html

G. 面向对象
来源：http://www.sxryk.cn/163fpxxsvxl.html

================================================================================
来源：http://www.aibaodan.cn/163vnsgpfxd.html

[G01] 定义类
来源：http://www.xuanzx.com/163asbojmdf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163aynvlfhp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qayalhma.html

JS:   class User {}
来源：http://www.xuanzx.com/163imefigab.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mwsaidix.html

Java: class User {}
来源：http://www.aibaodan.cn/163ybdupjlx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163pbrabesc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lhyrfkmp.html

C#:   class User {}
来源：http://www.xuanzx.com/163mruluzgl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163nonsskii.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pqjrtopq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xuehtvvw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163inffkqdi.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bmjxwpfd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tbstzbpp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cmfhjlyq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ezwisakq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rhywjfpy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dpiwwlqr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ivcaxyke.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163novrtxyb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qccaurpn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163saiiwidw.html

Java: private String name;
来源：http://www.aibaodan.cn/163zycluddb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jnmsmknp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rvpmstdo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oxxrbztr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163iwvnekab.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ixwzwrkk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fogqsera.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hukongzo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ddjyqfjz.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rjdjphgb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wwknxqwo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rddjpzxv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jvbsepmz.html

[G05] 继承
来源：http://www.sxryk.cn/163wgogusdq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xcdgvgwx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rtnoqjrv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gcxpddxi.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fbaxsgvk.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163lqkahroq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kbodhjju.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iampyglv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163evmzqyfc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bpsgenqw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dbxscpsn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eizlxlgv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dcpidkdh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xzwqkqbl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163euolycud.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pojxywud.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lekewdpq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tjcccbgm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wtnojnpr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nvluqrrc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163arflzlhv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nznowcuy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dscevocq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fepsljtb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tmizwdnp.html

Ruby: super
来源：http://www.xuanzx.com/163dcabqrps.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163nftccnaf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163gvbdcqgm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mttubxnj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yrabjnxy.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tfllrrws.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bxmvkkdz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163urmwglgz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zmntywri.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cevrgqam.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cuguaqwe.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bpolwdsa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wunhdodp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fagcfqqx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163omlsxijw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ofrwmixl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dmzyunxp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yaufbedu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ppfszpmm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wugobmkc.html


<!-- 参考信息 -->