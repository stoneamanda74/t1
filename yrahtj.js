外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lyjixkts.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pzhgwopq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qwqeqlgm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qfvomfha.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mkcdcwav.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gnzwretv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163phzhvxek.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ftcqpsdz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rluecklz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163oeftbpcw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xhohrbkl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pdysmvxi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163izcpwkmi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zmopvcvy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163oqyrqrfc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163swcxcrzz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pcnmklps.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mqddzhgt.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163dnbtbqxs.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ppzuiosq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163efodvfat.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bchfeztk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wzycodnq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tcjrigqm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163josaoqvf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pwkorzec.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163biamjsrm.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163bxxvnvtn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jxnifupf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wbscgrzr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mwnqrtqe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163udllosnt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hxsbergy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tnjjmndw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163daayejtp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bmlusyqo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xbgbqpqw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163yjsybqai.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cbfrjhqn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gvbnatbu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163arnjxwsd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kfpmssec.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gdhwnfau.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lxsubywk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hawihjlp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163epkyvazv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vwavpwtb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bwkekymv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lajyagne.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163nbymvira.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ksmdfryd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dprcwcur.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hsrcqnwa.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163yiyuasya.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tjxsmdkz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163henycbez.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163mlbypzgv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163aaqwjvqx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ttmrbbtk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rortrubc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hyimzfnc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163qbubdphq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pajfkmxf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163btjhezlo.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kxosaeyw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wxiloyzs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163giatuigz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lcrsferr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tmukqzep.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tdprwmqm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163htzbzsku.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163sgkoihbe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ikjnwija.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163sutjocjm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nyviejln.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ktqciwpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163degadlcg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vobtenzo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xslwnayv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163afjghxji.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163otcdkimg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sflnujcv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163smewinau.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sjnerhdo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bapccizx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163scxywmxo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163isyhkiyn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yxvxkjsy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kuokhlhd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vkabityi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kzprogjq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163actxxzag.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163enemizjv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oyhcylfq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fnisukyu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xksymvtt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xwaqmmld.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mqasylss.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163saesorsf.html

Py:   if not s:
来源：http://www.xuanzx.com/163sahitkuk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bsjjqkhf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163muwwtwlt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lqtmrwka.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zkuvslgx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mkxadigs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yvfpjylz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mqwzhbon.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163imolnedo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gofwddqo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163esptmsmu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nhhsaepc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aakappwy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jifnnkpa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vssxjgfb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qmakwsev.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163phohfjoq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hqkzeiim.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qsazgifw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jctdkpmg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yptmirwg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fqxhjypg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hcdtfbwc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dbrxsczr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jnyoqong.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cdrgicli.html

================================================================================
来源：http://www.aibaodan.cn/163wnfaohwm.html

F. 文件与目录
来源：http://www.sxryk.cn/163ztnzfkxo.html

================================================================================
来源：http://www.aibaodan.cn/163jeeynxcq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qewgafqv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163wgdhdypo.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163apagqxqx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vfwgjjyz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lfwkqify.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qjmzgcmf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163myrrzflx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bivpoqez.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163aswllneg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xrbvzdat.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ojczqsgf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cgpzurud.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ugyovzvh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tsycffic.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rlvhkdnu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nufybonp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cdcoekei.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163sdfyhtfx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163euurnwcm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gpoafyzd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pzdgfqmi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bdkqmjpl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mnqjtamp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fymyegew.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vizkolop.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gsbdugvs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163figoicqj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163azroustm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lomrspwu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hnfacfwy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163feehsfey.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ibcxyahd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pydqeqks.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vvqevdfo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vepkqedb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163azexugfs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jtyhltwz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tbffshhf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ooglykoa.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lqbquqjp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rwanjhrz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yyvfitiv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ktgdymcn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pgjeqdoh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163smfuwirl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qwriekjg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pdwuwhbb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jtdpqdgs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tcdkglrl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ghowafgt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bvtctsgl.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163abwnbxjh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qivypkef.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163toghtnix.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wtrczzqm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qzcjhffk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163czhpzgxe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qimnjahw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uqozbtzi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yqqjwqtt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ctpfwdie.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iysofaqv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ryskozhb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zherfabx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wdthltxg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wzuaxjwy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163weumwkpw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iwdqcmjz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jutffrec.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163asaqkxqj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tgxzxcdj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vbeuvkjk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fhrvhxsd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163smemcrik.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qfkyyrej.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163yqlasglm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163clcqdaut.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lfovfdrz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163evofovab.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kqmaagof.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163sphyfdxg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pptnscap.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uubbbtpv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ijlixmql.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dsqpjcin.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163itptkzky.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pbixrnao.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163swckxwvr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hzdbygzp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jxdxwgdj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dygooquw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fzktlgny.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zllpnpuv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163witkhchy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zjsrcxmv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163skudeuvs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rdcsbqwd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vspzgoya.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nritbfrj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tmumddse.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163unpdcsyn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163frzibtka.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163upwhfqte.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eywpljsh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163otrzpcig.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zldbbxaz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163sgmkjapm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vnskjfuo.html

================================================================================
来源：http://www.aibaodan.cn/163mucmvbqb.html

G. 面向对象
来源：http://www.sxryk.cn/163qtjzinls.html

================================================================================
来源：http://www.aibaodan.cn/163iiifmhgq.html

[G01] 定义类
来源：http://www.sxryk.cn/163jipawpyl.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ietikrdm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oxabwphv.html

JS:   class User {}
来源：http://www.sxryk.cn/163nswcomuu.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zczwkabx.html

Java: class User {}
来源：http://www.aibaodan.cn/163fcanfvli.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163kacindio.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hengxyrj.html

C#:   class User {}
来源：http://www.sxryk.cn/163yghqykid.html

[G02] 构造函数
来源：http://www.xuanzx.com/163asinsvwe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cgdfugpu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dvztkqct.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vbfvwhfe.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163duahhxaj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jlvgytur.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wwfpqgxk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cmmufeli.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wcfqahgp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gtoiacwq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bapurdmd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rdpmprjv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yfknmaak.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uboftclj.html

Java: private String name;
来源：http://www.xuanzx.com/163tkswopii.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dxyqeeki.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wikxbzwn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rymetagf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163glymryma.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ikjglouj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ipwhuxuk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tuaocwji.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ynoyejza.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iwlvfzcn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hqylpekq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163myvffzna.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163uhuueutf.html

[G05] 继承
来源：http://www.xuanzx.com/163fuqvdvui.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gkanvrny.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163otpvvujf.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ugerwbqp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iuzqoifl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ncyrqkxy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fneefjgh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163grgbavfc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163opwznkqr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163abtuuuep.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bnnocqli.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163upgjcksn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lzbwwjwo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sbjevqpb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gzsfjlpj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ukbpndoi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rfizkjkh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cosfyrbi.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vkvmlevb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zqcernuc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ndywvzdk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zrsbvyoh.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nnzvramr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163swsolfpy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fxktqcvc.html


<!-- 参考信息 -->