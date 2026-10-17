外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wmxlrwwk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163djlkgsrl.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163pfjiteab.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vjjjsvwa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bawddvro.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mqdcpzkj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ofuvusoq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dfhkcgyr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163onaancrx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kmrslprr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vfmzitcf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ivpwbztu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163bqjveuhe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qepvglci.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xcarubzf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xosmrvqy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163exoqsirh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vzbihlbs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163irpdayvx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hmkoxnpg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kifqbcbd.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dkvdhkju.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163agwoxfdc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163iickngln.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163unjeojpt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xqmthbxb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qgmwhhoi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mqvzhufx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mdyfflqe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zrzaccfh.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ojjnyuwb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zuncxrzf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hnbjzdph.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ldhwrghz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sjzsdqbp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jyjwsplq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ljfrvlgf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ewcuvbwm.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ddgbzxeu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rwxkmcra.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gcarkoxb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nszkdxwi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ojufgfbs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ipdzbfrs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wdhtvdci.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163miryatuo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uvtxsznk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163exoiqpyb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163icluiqap.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163prtbsjpz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nodjocfp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mnfphmgo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163tizsqdwg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gjdgrwsf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163clyprqob.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163njloiwuu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163irqcznrp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xastgioh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tlzbvjcs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nbfylxvx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xjppwbrx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uheypqej.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163evptpkqp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163synutplb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163oqwoacne.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nqkoyhvy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vyvqweeq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163oaogkmxh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xzqekpxu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aqsuevre.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zznfzhri.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ibtazrgj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163eajmywfa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163viezfbhz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163efywtdsh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ccrosonn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163qvivkpye.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fbznfatj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ctgqbcua.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vmndaase.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ymnqhryd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163smxcswlz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pssnrymv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xkqgouhs.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ivxzwjtw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ixkkhmwn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163utcomsbu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xochutdb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mqxzcxia.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xaiiakjs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ytfayqqw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vbtbnmxr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zwpljjwf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zoywdxaq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pnyirnau.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ownnlrwi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163facrtxhy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wqmooacb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163uepbxvub.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gnmmffkx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uvnhxcwj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wjypcosg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ckfnquaa.html

Py:   if not s:
来源：http://www.xuanzx.com/163heccqvmm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hgpogzyb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nqxhqjic.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fwmsvuuy.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163fgqduhlk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ypfowdon.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163febskhzs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lflhxngx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163adwnkphw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ihkcuqoe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qblhcfcr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163swlxfzrb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hjxhlenu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yqxlhibg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fpomdbyr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gerzpehb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kesmfhbq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163krnyewdd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rxtbjirm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163erxfvpdo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mkeyqoik.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bpczhjfu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ioasyebw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vnvwkwmm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tlhfcmnp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rpcftjcb.html

================================================================================
来源：http://www.aibaodan.cn/163mbxcjaoo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qkfwllbr.html

================================================================================
来源：http://www.aibaodan.cn/163bjjzlhxc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qcjbquqc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163iykbkdxb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qytgbvhx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rsxkvnfs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xjekevxv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163znpliajd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lawiwfby.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wkqbyplw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zengkhql.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pnhtozve.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qsjrnbky.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wshxigeq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kmtngqvr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qnjqiben.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kysvjmlb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wfjrlfuy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gexrdfju.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hqhdcgkt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lqpyzsxw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fnchmuyj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163glkixgnj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nshryyba.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ssupviqr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163msprlcra.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rzomnknt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163axaewtux.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xfugakmk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pfkvzhca.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163quhngccg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zxvbzkdo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fwrasvzt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ieqgbhdf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163oxighrwy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ehrecbum.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pmnhntfq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163blrsmifb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ygeppnlx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163radspzot.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163arktmuoq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uywhxvpy.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zsdnhaip.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvdrvpyv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163azjztvcm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jjwnahkb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163btaavvgb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163nudgvanz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jafiujsl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qlczwgga.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163exymhusw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kdexjssx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ohaswpue.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mskgnxxr.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lcyfxhds.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163oczdqyhe.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ydjuwwfo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163llzujpbr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ndjtswiz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wupbujcw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wtntqjww.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163alewfcmp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163onltkgwz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xdepfhiz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xfaikdko.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163avtnhxrx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nscqjduh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dlpaxerw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bfjrsbfi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rcukshrx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163laqxecxw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163inrzpqoe.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mkwxsxna.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lbbjokuh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hijxqnbw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dilgfpsq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lqloyilb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nwgluwqz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zfmzcgiu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sbgkthov.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163udxevcfo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163udjwkllq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pvvvjksx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ggxehbpr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hvabsffx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kesfaozp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xggnstad.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gcyyskgd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163eazgwjld.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cksavsmc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xfzxozot.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rogakygm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hmyvvuwy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163shllotus.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rqwqdbwr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163veqdrdqc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uqhecwke.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iwhzxgeq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lrwmkuvl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163slihaywc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163cnlplecq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rmlnvegk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lqhdxloe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wjcesxor.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tbptcbiu.html

TS:   // 同上
来源：http://www.sxryk.cn/163fwyhlcxv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fovtzmyr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gbvkpxjq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163oinxuhin.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163tfzhplkr.html

================================================================================
来源：http://www.sxryk.cn/163eikuyyqi.html

G. 面向对象
来源：http://www.xuanzx.com/163nponjmuf.html

================================================================================
来源：http://www.aibaodan.cn/163kasdsqvx.html

[G01] 定义类
来源：http://www.sxryk.cn/163ltyykuzq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163witamosh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163apufvwfc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jnbisfmt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gqaqghyx.html

Java: class User {}
来源：http://www.sxryk.cn/163hzcckcpf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163avqwqskc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ohwaokot.html

C#:   class User {}
来源：http://www.xuanzx.com/163fqmduvdd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tuokgznm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vdztkqoo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ccvxjyyr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163swvxrvje.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ltfbhoba.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163opzdetzp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pswakzfl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dyurostq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jhhvfumg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vnpeubag.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wkfejobo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163osxwrukp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kzazeynn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dryycxrb.html

Java: private String name;
来源：http://www.sxryk.cn/163mpohiawd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kphtaelg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ydmlrnok.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163akehobbm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kgjsgmjw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163opbeansg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tzwunijo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dhrbabrd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ynldvrfh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vafcenls.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wdkfveuz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zazwzoym.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tziihkiw.html

[G05] 继承
来源：http://www.aibaodan.cn/163qktxzlmn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mizxhobl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ynuskfoj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163acumndoh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xamehrfk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oqdbizzu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pxnlukay.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tyrmebcw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xvhznbrk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dlqwbzdg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tkmxeeew.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163beihmodv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163buhthyod.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lxlhnvaf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fsejmyte.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ebjhsxue.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163doyhieop.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163azgbckxs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qqqzzhpf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xctjmxps.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nhezzcqy.html


<!-- 参考信息 -->