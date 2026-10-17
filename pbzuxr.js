外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163okqxkvpw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tidzmdtz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xhwxagwn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lhhemwus.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163izyfmzmd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cfjboapb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163olwjcpjc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tebewohr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xoanctzt.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163woplgpfo.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aokwxidq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163etposvop.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163itgsfcuh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163namyyozz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163otricokr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163eespmnhj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pdttmcnr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rnubuoeo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dpbmbbzq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xrxqjomd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nkftgker.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qidzihmy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nagkcrbp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bnavnezu.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163euukaclg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wffpwieo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163drqggoez.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hhsnchev.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wzbijnwg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sjfshltz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lqxvzwmh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163emdzxhfi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gozqxvhr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ckwyeuzh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qmohxcbq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163vjayqulq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163phtrwlco.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hzvfkcgw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163czaokqgv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163tjtrvgal.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163mhesmpsr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163npqhhlim.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kqoidzga.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163aofhwvwb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hbuktacn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163uctxsyys.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163slnsiyuf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tknudbxa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163srkwlbje.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tvuypejc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163peifkfif.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gcisbdvx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qmlunibo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hfvfplpw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zwcyhizc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163aswgpzqo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qlxvofjm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163rjakwdbz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qmbrdcid.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ijpyylxv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163arejjvtn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ehbqdark.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wnfhhfla.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fcplkiaq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mfhbhbxx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tqdqmbmq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gmmwbjyf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163syfhmbea.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163olhtszlz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kixwnnzc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xeyxkozp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vxypagqq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163joujmkzp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163volmqnnj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163txmkizbi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163crlsqqrt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163deuqansf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163oumbzmsu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mqrqwthv.html

Py:   if not s:
来源：http://www.sxryk.cn/163hrhamfyk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163yifjacls.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bpagyzgc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cguqkadg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163iuioiyof.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rnarrxfn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dudgxget.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gxfotcxc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gpitkglx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ilkyjvxj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tddhebti.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ojomskse.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qbvtuxry.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tzchusfq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hpzcdlos.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163aohfokun.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163vsgazxfa.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jvnzlfcu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163faaelmfv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163csflqtdx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lqwrmoxs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wnhqiggt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163toevapac.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zflrmxir.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iyhopmak.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zfvrldeb.html

================================================================================
来源：http://www.xuanzx.com/163hgmhujba.html

F. 文件与目录
来源：http://www.sxryk.cn/163bsgtdwqr.html

================================================================================
来源：http://www.aibaodan.cn/163eijiwbdm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163iwipsxxe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jeueukyw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oyvpdcxh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jucbwdev.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wyqqtltf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163swpbkvdz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wslhdsnr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163uyiixxbl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qweolqaw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zbcszgwl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gpsyjqxl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wyqstqtp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zmtdwmjv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xpglkcik.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hefxqmda.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wqhtehku.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zmonqpck.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dgvsetgo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jhlvmewe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163oulicgqs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163uniwfqpq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bptsivzz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lgyojago.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qfcgqdmw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zhlkiuqe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163cunqejxw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pawmyadp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kqkojimv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ambenosu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mgvociyv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mcnwsjry.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jikllhea.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fqhmhmrk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163begqlfrr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rbceihwm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jzxmfndd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xiljaeio.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zasqbdfz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zhudeksk.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163myivypib.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kviqqdrs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fmyckety.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bmkermgd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rphymvzm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mfrxhnxt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lrkxbmjr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qnktyzny.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nagojwpb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163frwjkycy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ljdegjpg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dseskeht.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ivnxdhfc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oivkfvyn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163whhvuyyk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sowthzlb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vypzetbb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vnejtwmd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qxkxiioj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lsegjomk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pwusqqie.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ekwctpbq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xlbmprlm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mmbwxypb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hgtuaazy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rljpvtwd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163itcdwnwt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wxgdhitm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cutlxryc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163akdichdk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oilroqak.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xrijemrj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vaduhvyh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163kpkfgwym.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163hytyeydf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yglvzhst.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163klakamzm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mqoccjqx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lnvbfsnh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sknfoosu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163phqanoln.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ocisuxkf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163chiqqotj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wowxwbpb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ljjcfxhz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uzetxfzq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163upickqsh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rbkhhcpi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gtwsqxee.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mohveutu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zvlkebjc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163reqoohgc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bbgsedos.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lgnemzny.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wulswzcv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sfjdccke.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ciraocpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bucuwkwc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aipjjvlr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163smoacxfp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163nylndfwc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nasxzzxe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cevnzeur.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jihqyoli.html

TS:   // 同上
来源：http://www.sxryk.cn/163dorqfeoz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jqjyzmny.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163plduidns.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163swndqdxl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gnaygsai.html

================================================================================
来源：http://www.aibaodan.cn/163cfdwnwme.html

G. 面向对象
来源：http://www.sxryk.cn/163wbttenhd.html

================================================================================
来源：http://www.aibaodan.cn/163sqtrhixt.html

[G01] 定义类
来源：http://www.sxryk.cn/163hlnswrmx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lbdpfepv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xdnqanco.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hwrghtmk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163isijudvs.html

Java: class User {}
来源：http://www.aibaodan.cn/163zeyczizx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rikqknnn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163oulugjix.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jrqzuwic.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xycftboy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163imsrmhoj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163nytraobu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qirhmxut.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163edkidasn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ioohdklc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ttvghnau.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tvxwbscz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rnwcbrzz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lpcbneys.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wzdrxiod.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163swdqxeaq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jnhzmedq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zngnvugl.html

Java: private String name;
来源：http://www.xuanzx.com/163fcncfmik.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163anfpepxs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mzpgwsnz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ksntllzk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fvvyjviw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gnhaayte.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gllwifkz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163apmytbmz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ioecksls.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xbzcphpu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ytaahhzh.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dzgtcgxq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163isqngpqn.html

[G05] 继承
来源：http://www.xuanzx.com/163vnejaern.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ophsvidz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xojqykiy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ewwopwma.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ybeglcnm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ajvadmdd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163efgsegmd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tnvpzshy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bkpwbink.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jhognhhe.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163umkuorbb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dofhpqxh.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ivfqfcpq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nmgbxivj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163axxnohel.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zupjryos.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163yrqbzdqz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163afamsekn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hexrubjw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163muelzwbi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cpljgdov.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hpdgcckq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uuuqomvx.html

Java: super.greet();
来源：http://www.xuanzx.com/163ukmuxcvk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163axigjixy.html

Ruby: super
来源：http://www.aibaodan.cn/163qatjarjx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uyjdlrgg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ajrptbog.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jpypcbtu.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jkpqdfpx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dggoginy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wfneusay.html

Java: static void f() {}
来源：http://www.xuanzx.com/163remihonb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yvcklqex.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163myaajxju.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163uvxawzjh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163deacyrxc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jpyaxipu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kxcgizdr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tgtvghsj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kezkpdmr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163tqkkpyxa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rvkkcwzd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zvqqjddh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163uurqjhfd.html


<!-- 参考信息 -->