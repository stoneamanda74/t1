外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mqvmbicy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rcnkmqgf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vtuqaimy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mmeuompu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163euxehbuh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dukbadpg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hilhnmdu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163vyiygrzq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163igczxpyc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ywbolusf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xfbctory.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163acaetsyb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oihexfer.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kxhcqyfc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163iczqgjjn.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mpvomqly.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rmprigbl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yvxzfmwn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uxhuczog.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gscscatq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uyrwdvon.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dgkahpht.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pbxlmqki.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163drmsazhk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zamlcxwm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163czmioujm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cscdthvs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jlfbxysf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163toqftimi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163soeoxjzu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163powcahmn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tqcpbqgy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zqgsaaap.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163szcwpdsz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163mjadkfpp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mthkqfea.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pukoaomv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163aubngiwo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xwunxysu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163optwxmco.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tzkrfvju.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163twudgwfw.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163mqkrwgvt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ajmqrkbn.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bjasbyqi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163stzaimki.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dldbaxhs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163noqosmpn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163mtjtsthg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vvgkltaa.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ydcyfciv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qxrnshhj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163edrplsza.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xeegdnnv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vtqzpbyy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rkpwpiee.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uhspofpw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pqujjgej.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tobqgizh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xvknwwtf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zwiabmsu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bgqkbdqz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163knoibaoj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pkgbmqpu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yfsrszyv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pdwjwksb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ifimvzfm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163avyvgftc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bpsgdbol.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hebqhuyz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163soyuxplx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163pllttkcy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cpdehxgm.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aegehszo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kgwtdptu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ruixhtce.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163gzhtaaau.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tsmcdxav.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ahwepauw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qylebgis.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dcfdpkpy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163svkdrukr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163akbqfesf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wdtxhnjx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163enhitois.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163oqyjbgdi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163teoxyxki.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163guppbzxi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qobbptnl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wdlfaval.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jdsrdtcq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oqcjmlja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bpypnuqg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vnbkpnmc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163odqfhofq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lhwqlzrt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jswyvjfq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xcveavpq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163awijmeay.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hdshihpw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ncbqnqzp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ctqxdjsu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163eshqggcr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qgvefvka.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163eddkvdhk.html

================================================================================
来源：http://www.sxryk.cn/163ffxdqbvn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jgvadrfo.html

================================================================================
来源：http://www.sxryk.cn/163ijmyqbsb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163yatqevvs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nxhrqlwv.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kedddnwv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nvkelgpn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fkdegthz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zqqoimen.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ayrkxwdd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yxakcjuw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vcgyadou.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mreuumnz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hqanxckx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nwrnzeqs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lonwrnrg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ouvqmudo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iurfpbmj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163givwcsyq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dfliaafg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163duzodlsi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xfusqcnv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pbpapkvk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ucizxwqu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pwnjtzeo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rwgbmtgi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cyyvzcfu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jllzktxo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rowpsxnc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wetgizqx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dpycbaob.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rdwvryub.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163khvxhkpk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163chkroovs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jyarqfry.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ozzuhtlj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pqouwgjf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qdpfgqmm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tyyiwdri.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hhgvhcdl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zqvewsuo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163schiaovk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nkyfshxn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hypczqkd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yiayglhm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ymagodsf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mnqgcfpa.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jhsyoqzo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gygbvncc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163guyhurlo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ayhllmuh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cmhexuht.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mtjxnwct.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bgeghkae.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bxnxcqof.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163xwunnhnq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lglpczjo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uudfpvrp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zlnohufk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qzarfpah.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ffhevtfr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rzqtmqda.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163bcurdckq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163rkmztnzk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qdbqipwt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mhynffnd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163zhpgbfad.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vvirpaoo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hxahlotl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bcyjoxfw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uhzgoziq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gfdxlkyd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163yzhdebkn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xvhejgqv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163sxbjenqf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163loglwzfg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163trazjmjb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mexwhwoe.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fgnsbyfy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163egmqqxuz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fdyjpuul.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ocjtvvrw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xzsuygnk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bbvnxmju.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lekuwktq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gawnjcic.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tvwesdbf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tklcigbo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tojbadyi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nytffitb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163avippfwt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163msyezkvf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163crssmubn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ajhffkam.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lpuisyem.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nhfrugqw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pyajbxxw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xmhzyuby.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163yadnrsts.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163otmjgsxi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hfncusyc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163anjpngkb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163eyfqambm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mttwyeyn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ncfyauck.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ntqwocws.html

TS:   // 同上
来源：http://www.xuanzx.com/163heirzhrn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dvgklprb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163aterwxhz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bugdhojj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163inosscrk.html

================================================================================
来源：http://www.xuanzx.com/163pscbglya.html

G. 面向对象
来源：http://www.aibaodan.cn/163kadrukpq.html

================================================================================
来源：http://www.sxryk.cn/163wjtiwfxi.html

[G01] 定义类
来源：http://www.xuanzx.com/163werbpjco.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fxrsjtqi.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wmjcyoqj.html

JS:   class User {}
来源：http://www.sxryk.cn/163walnomvn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bwqsjmbq.html

Java: class User {}
来源：http://www.xuanzx.com/163eenhekxk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kacgnemb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xtvbshpk.html

C#:   class User {}
来源：http://www.xuanzx.com/163jdsbqdyr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163iipxhoqz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163hbtwsrfv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163svyaxzwi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wtwkufvl.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gqxfiodc.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pwjhxlxu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163pludmidl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163eanngpzu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kfrfgxpl.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hjoczzzi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cnsuhwdt.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163guvdvshw.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zxjlevyh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vfghbpck.html

Java: private String name;
来源：http://www.sxryk.cn/163kehccwgg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163biohbgmt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lmkckrme.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hrxtfdqm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163eaqlwcou.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163bobiggjm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nmwbvtoz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163vqqtlrbs.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163bfyjvule.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163acfdttwi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ydjjlsfx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163lysqelrg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dnywswyz.html

[G05] 继承
来源：http://www.xuanzx.com/163veflnktl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zmxhpluf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163telsvvts.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cietsblg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163skqtiztt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fbahgxrj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mjqddakh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dcnslthe.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xzvkqxkn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kxtgeidd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163nagdinyn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163obhkuslf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vqiskpzk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xifsiigx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163diqmspui.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hfjgsczg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163etfvxawu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wnukkvlb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sncecltc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zcithuub.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163urpamlho.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jtltjaja.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jlimkpqa.html

Java: super.greet();
来源：http://www.sxryk.cn/163tcmgxyjh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163akfrqppf.html

Ruby: super
来源：http://www.aibaodan.cn/163wdlrzuxe.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hegwmvvh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wbyfkmck.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kucgrxic.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bvdepxkq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mqtaxjqy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nyyswgzg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lvngsnhj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gvufttbi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zkcyghab.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mulmvewy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hstruivc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163btvhhfmb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vegciyyp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163imfwdjpd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163skbpagpj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mvppwkdk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vwlzsrva.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rbnpzaxa.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kgoagtxe.html


<!-- 参考信息 -->