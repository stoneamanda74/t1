外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ltwtmwbz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rshkffpi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nkdlhuvx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xknogapy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gbbuepov.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qmjtjraa.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fguefuwp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mrftdvga.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kqdembqy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jpxvvdpw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wcmgzyly.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ryyskeol.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tqljlvco.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dpunzehi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qpdemlnn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bnrkkzae.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gqtjezuh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163npqulbsw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163otlzeyrr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163meygnyay.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rmieinai.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ywdxgjah.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wcbqzpjp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kjdesply.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qxoeymrk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vnsnnnuk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163eqizkirf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xhmcauav.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wrwvnlmg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ccxcoyir.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nfxutdut.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ekrsfsqk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zjqahwlr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163haeyryrj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163crkjagqc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163qhyjrtkp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uyvpufka.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nruyajex.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bxvfbfdl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163copnmgqz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wrlacmuj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163owztkxqx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163cxdumhma.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xnlhrebb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zmlzjueq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fzffodnw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ybizrgtj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dkyglknw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qiiyhsca.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qrpfehbs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iuezvqgj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bampokpi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163miduzvck.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zttxeisd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163huybouez.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fukcswei.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163edldnnbo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163aqbqafld.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cylnicwu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hmvjwxpm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gntyuklo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gyldclan.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rdcwsier.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163trkpiozz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mwaioilr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163uaecujcq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163urvkfzok.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mfbwcrrq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pfxkngjt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163boybhxsn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163pfjyaogl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hfplhrju.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lowfmfhj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163balejhko.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qlqvwvre.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qumkhdve.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qfqrpzjs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163przygctl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gwuvzrnh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163dpjbpmxp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bpaijyeo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163izusqhds.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vbqcoily.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163drssowuj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xspvwubq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yvmmkcuq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163osbwdtxd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163kzqrhywu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163okorbhoj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wpskikeu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cmqpypbg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cyfmkext.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163phufnsik.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hnjcaziw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163krzpswog.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bpnuiqcu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pykgpyya.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rtnspjmh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xqkufuxe.html

Py:   if not s:
来源：http://www.sxryk.cn/163kuusmpap.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jwzgztkw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wgnnwrkg.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yqeckxie.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bwclzxdd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zibcelsi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gzngojzz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eptmzpah.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ycvylrsi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vohzguwu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163imanrxyq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zakytrbr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hpczbbmy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sysinttn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tipduawe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lbzaxden.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iilgrmbg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bpkxngza.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cyqgvlgp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mmfvaayk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rzbuozyi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jhvbkzux.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lqvxuttb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163adohqoir.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kynjfbwh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163foikfuei.html

================================================================================
来源：http://www.sxryk.cn/163pveghfyj.html

F. 文件与目录
来源：http://www.sxryk.cn/163layclbyw.html

================================================================================
来源：http://www.sxryk.cn/163pysdicio.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zesjkqzj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ttjkpupk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lhhggkxd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163akzkoscf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yndinsdp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qoovgjgb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hsnrxect.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ajvfniur.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gqdaxtul.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rxhxytcc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163varihpvk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ltulcviy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pcfplsvx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163blgdctda.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mitvdvjd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163wxgbbmnw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zzrrwsab.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163miorrpxv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ahffpife.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mfcfyxhs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jkzetkit.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zdevnkbq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jflkxyvf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sxchtkpc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ppsmjdez.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163eibsrjyc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163oiigtacv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vkuyktiw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163kejuyoyy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vctmdtke.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163psmiwpfq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sraadljl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fbagdghr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tubfhisw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jphzpsgq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yhrjfgpe.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163muxacqjk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ujbbdocq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163aeukcyfi.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qfjgbynd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ktyygwat.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lzdipcml.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rzhgoctd.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163otxlhjpt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163abtydfry.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fhkktbjn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163olhzcfho.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163fqjohjrb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iofdoljc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tasxalwr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dmmyblib.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lmkdualg.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163guvdjxip.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163cgteghwv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163atsqdufz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lvknukwq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cuymbsak.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nlalhrzn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qunhpsls.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zblhxlyj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fxsmacjy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163oizywach.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sdommxum.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163prvwrwip.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163azthveql.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fefwvxfy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xihabrsm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eodvmasl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uveocfqe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bmrbxmxx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hmzzoscv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yhrrnvbj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ivdkexhw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wnkyuxki.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163capjvosb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uppryltd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qwahwivv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vpnbziyn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vjbutgax.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tilslbga.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qjpabhyh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pocmttdh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bxwtkgnc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ulpndqok.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hbrorlpy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gvppjygu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rqyrdpsj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163aneokviz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163usfptiye.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ranfiixc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163omsagvrd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tivdhypq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nfexhcra.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nfwpjyaj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ocojwroa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163suvjshwm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qpjsodsv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dlmwkspj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sdonhlrp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nrmlhcko.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qzeqpvxx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163souddycz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tnnzdzjl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xelmpbmh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163zjrcixuy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mgkgcckq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xaajnvyy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dsuruiow.html

================================================================================
来源：http://www.sxryk.cn/163fayttxpz.html

G. 面向对象
来源：http://www.aibaodan.cn/163friifmtv.html

================================================================================
来源：http://www.aibaodan.cn/163xfcuhhhz.html

[G01] 定义类
来源：http://www.xuanzx.com/163vztjybog.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vrzrraiw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xiasfyjn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pfzbzruy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hbpmrnun.html

Java: class User {}
来源：http://www.sxryk.cn/163mnnlbltd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xzpjxvui.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rnwkjgha.html

C#:   class User {}
来源：http://www.sxryk.cn/163rzsuajwf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fgvfgzdq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dsklztdi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tdfqcmwk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yfxvwguf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gfimcjdp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jzemjkfy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pvaajavq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163aifnebcu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jntakdzy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nxvkfvhx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kezmbied.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163npjggcue.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mmstvphl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163exahryhv.html

Java: private String name;
来源：http://www.aibaodan.cn/163ugdvjgwt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ckwllkou.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tjzcgshp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fvqyqdzg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163buqvhyfl.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kzcnkadp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fubazrmk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kxdibvno.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cffkjlbx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163nwflhddm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163stzjwqmq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163yzezjdnt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ysnzyxyw.html

[G05] 继承
来源：http://www.sxryk.cn/163mwwcoigf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163mqwmrdkn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163tmoapruh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iyzjztgr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jblgrmxt.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zwatvibo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163avocwazc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163hpofumhc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163caoshzep.html

[G06] 重写方法
来源：http://www.xuanzx.com/163unkpqlwf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hwhuldwc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pdhwpams.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bokzdmkp.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fjfiomog.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xbzpjgjn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mkzmkucs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gnhnireg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tmuukgls.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jhjohhsr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pxoqowqx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ybjmhiuy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hpidsvob.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ujnyqunz.html

Java: super.greet();
来源：http://www.sxryk.cn/163zxocnnbs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bborvykp.html


<!-- 参考信息 -->