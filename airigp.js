外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dxadjnqb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lyjfifct.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gbldpwii.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163czdxjzrs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qlteyren.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tredhfzc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gxyraghd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bwjcqevs.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vvgnfjhu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ownbmfdh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163smuarqtc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ldooeqrb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xbhbpeek.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qzctnukw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zjughggg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163frnvktkq.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kghxnfhf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qpegzitk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ejpifmdr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qacbaotd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qeokjbty.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dvqugisl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zslxucvy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ddloqway.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zwyxnycv.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nmcmvedl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gmiomwhx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xmdktptv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pgexjiey.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wkecmclo.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vgmtsuoq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rebohbao.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gotonpub.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ughohtfa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zftdzpov.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nfjauppp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163smwbjrao.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163myqkbniz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mcvkssim.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xkcfyzca.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kgjpwtpx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lozhcddz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163apnvckld.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jntroirc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163onowhuah.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gbcequqr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nmpbghsk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qyrorcla.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wqjbbrzh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163oldqrmcx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vxbghtze.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fmafwiod.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jppgnyof.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163idvrjlzb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dxjfmyex.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nwznkfiy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tmqvhzow.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fzpnydyg.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rokbjqqq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163icufcqoz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163opgbcach.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gsakfqqj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163koeethpq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fzpcwduz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vgtftnut.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kphxgpkq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hgxwckae.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zjahkcnl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xmqznktw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xtneablg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vlthmhar.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ilxqdqtj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bgbgjjjg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hbqsbizt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163douqvukp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kfgfjzfr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163saaliumv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163feoktpuk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tpfxhsvv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163twqubsnk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nklvnseo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163snzxwmor.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163naalilvo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tojosdkq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xpkxiras.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bzexgfcv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163zrqctkbt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163igmpxtrb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ffrzwltx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xjwkgkru.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qjvjjtot.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163pziokgow.html

Ruby: s.lines
来源：http://www.sxryk.cn/163baoqocmk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163cddfemid.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nwkdfffq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ybtmcsne.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163fessikzq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vqisstrm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gwlirslo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rtmbmwio.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163hmczxpos.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yrubmyon.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dtvwbohd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xieylkhv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163omhjjxwg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163viqngatq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nyliyngw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163swaavbgj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oumoozhf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jblqtqzz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fklcikai.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lmqxsmtt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ylrxcvpw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ffbfqyva.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163oresnwgj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oletvjeh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ixahefeg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163phhgjjpd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dgdfuwza.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ehgceavx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uzakmapp.html

================================================================================
来源：http://www.xuanzx.com/163fcytpskt.html

F. 文件与目录
来源：http://www.xuanzx.com/163yiqhulzy.html

================================================================================
来源：http://www.sxryk.cn/163qcrqzzrm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gjdkpmpj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bxyullmv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163scdrwdlf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gkorevvx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163yzuyegua.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tnbmitdq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zmgjfupg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jcvhilda.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163slswsijz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cvijamda.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mzdemomg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vmzwxlhy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163emjyeffu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tbqxroth.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rxtqlsvz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zgpucdtj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163squyqwgx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bhzqhatb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yfkbjlxi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163cmclsdtk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lcrycety.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gvajdvjp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ahhmigsa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kjahybsd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ockkmyai.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ibdiudzo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163booswaoi.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bekwgyic.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yxnqekff.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163asyhhwnp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kmkegtfs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kivpuyet.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163odxaxqmb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wxgemgcq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163btuxsbtl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163cpdeuslb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163awuxuosh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gkekayoo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dkajghty.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163puedqzhj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hikkfjwk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xwvuaido.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wjdpzmgz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wwjopffl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hpvivozx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ndgbgokl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mdkhggjt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163nzuqzxdy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vtgpelre.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bntsdmwa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163owhnwwni.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fugltadk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wopmmlax.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163oncrsgzo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vimvpwru.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jrmisntk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163eelzxhxz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163guemwczs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pqpxmzmw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163apvlnnir.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163elnppbpk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ondqefqi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163niqxwhss.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163knpqpojv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dlvlvsxd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sbcnwlib.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mazioalq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fnflkywg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163stnyxpmh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163txqxilmw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163siahlvow.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cefgzbuo.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xccbvshy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vukeeozl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jnhiogmu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zuierpki.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ypwoqbts.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zhcnglhg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jxpojzeo.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163stxyfwyb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qtredtnk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ujsctems.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ujsjqyqd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lkkgjzcr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yokqpqax.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vkptheng.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163azbbmuqt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163esrqrzry.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163llhlncku.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qaeyxqwt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163bstzhabo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fdzttrre.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163queiajjg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jgxqbves.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oquknkvc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cdjhuwgl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oosrpalz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fxiolftk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ajocubhd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jesqscfr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163jsysojsc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tqndabux.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bbaxfiuf.html

TS:   // 同上
来源：http://www.sxryk.cn/163dimubccv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163udalkjcr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163onwknjqj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zcdeknav.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vstklgne.html

================================================================================
来源：http://www.aibaodan.cn/163atqjbeqe.html

G. 面向对象
来源：http://www.aibaodan.cn/163xxvolyhi.html

================================================================================
来源：http://www.aibaodan.cn/163epvtzidz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mforwiol.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wambdjpl.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kapqvyge.html

JS:   class User {}
来源：http://www.sxryk.cn/163pzlilwee.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163lezacnds.html

Java: class User {}
来源：http://www.xuanzx.com/163oiqcseei.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163krlvkhbc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163caztixdq.html

C#:   class User {}
来源：http://www.xuanzx.com/163nyalnwzo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tpomtpqh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zitsokkr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lozuyjpy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jmnjnoxv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fuzitpdl.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163igzibxxh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kwhfuvbi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lnhsaxeq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jiyource.html

[G03] 实例属性
来源：http://www.xuanzx.com/163iwlitnzf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bigczynj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ldezsyhe.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yuvadurl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163upozrqhu.html

Java: private String name;
来源：http://www.aibaodan.cn/163uzvxiluv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hjsmkpff.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163dytxzwdo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163asfetzon.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tkaeiiac.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hoekbnmj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163majdmjji.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ciipuavt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163mgfdgnkw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163twsdqbzd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sxdxgfjb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163upteucrd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163etpjsodg.html

[G05] 继承
来源：http://www.sxryk.cn/163gijjrjyr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nwnygdro.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jzoeajpl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163victjcgs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yhqzbrke.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kkchvtnx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nodcruch.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vkszqwag.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pxrzuueu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mutvtskk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163flwncter.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qcubnkpg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hmboaimb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ekmgqanz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163myemxixy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ywgzlohi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hohlbbxr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mocnqcga.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dntjnqzw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163bbjzccgl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tjzawagp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zwdiervg.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ktmdyhpn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163amnyfubw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163esmaueii.html

Ruby: super
来源：http://www.xuanzx.com/163psgotvxn.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lrnrpozd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ggapyigj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dkrmxyda.html


<!-- 参考信息 -->