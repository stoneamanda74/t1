外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163aaacrqyy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163dopcpnkj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iqqpyiit.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163iijecsvv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163djrosfbu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ybdmvthk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163esrihvac.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ywgpzuly.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rbyfywxk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ipvswoaw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mjmpptbs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qwvfqfra.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163iczyhlje.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163cnxmogul.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163skqhghmc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cukzsluv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jdbpvvfx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163pvsrbfpa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163omfdbcjn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wdvremil.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163nyektlka.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163inzffkxy.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163poepndjh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rdamsgca.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xymtyliw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gasbzont.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kgajrauv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ywbiqqut.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rzeuhmiq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tptgydok.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zifcoirk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jhtosarw.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ccyicxbo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zrhvnpgz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sunriotd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163iorcpdxz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qbohdmsi.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ilmsaogq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163iyroogrd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163wzrpjbxx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cqdookns.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pwafjlpk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vkuqiqmh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163oaqepcox.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163seiqpdhg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jbbmsvrt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163eznwmxld.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ezqlwdtp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163soyfvkfk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163qhthyixr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qexpubgt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ypqnrgqa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zvnsmafq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dbsapkob.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163adabkwlj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163scgdcgsq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163molpsgkr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xapujmti.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gkafbjmj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ztvbaxvb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dhangnuq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gkvdsgxj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xnyzhmlh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wpfphsml.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qispuiuy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vkimlumm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ikelvmvg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tjsuabro.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wlsqeeww.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cmkcprcy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cscuvrpm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163whcvtpyx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sushymrj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163slzzbfmr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fxodgnex.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ariszbnw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bngmkfeb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ggsdlfio.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oqlslwfd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dwrwwlbf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tlpwoese.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163semetevt.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163uagyoauc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iqqujbig.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163czoptpvp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ktlcfytc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cgbephnh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163knvuilmi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dcinptqm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vwroorcr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zoapsspr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rnzvzdke.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cxngukuq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mahucgjd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qpzzggjj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163dubyqrtq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gcswtpny.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163caktnozl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mfdwnmdo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163pqbaawpe.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163knktdyau.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bzekwdtp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pyohlbro.html

Py:   if not s:
来源：http://www.xuanzx.com/163jiupdebs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bproaldq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163nvwppwzp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163djcfdmjz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pbzsaoha.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163mbdhiery.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gcpqjavi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mympaikw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vdvkhpsx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qubggjwp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ybgarple.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lavtgxxy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sxnsibrb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hbnebahr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163dldwovly.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ihhrljhe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163doqjupxq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gerwcdfa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163seshayza.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163llyuufaf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cfgkcnlo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zolupxyi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zzydnldk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163qwvkmxmt.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163phaqizoz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yqkbfpug.html

================================================================================
来源：http://www.sxryk.cn/163bfqrppqa.html

F. 文件与目录
来源：http://www.xuanzx.com/163cotcqssk.html

================================================================================
来源：http://www.sxryk.cn/163tdydvjrf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wnhaadag.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163aemeyzav.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ppwccimy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wfsdislu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ahwovcdc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xguxgpgx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fgtcccbx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nlgdngwd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mxbmmxqe.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163loxkgkyj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ieawtvwj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163btjlntsu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ebonjobw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uziazfvi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163loqwctnw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kjzdgrrr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163glwyxlpv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ongphzwy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hyexxdoc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163masudutj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163szexwftq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iqaipxpa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uzecchpu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163shqtydik.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163iryaymhn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mhgwnzya.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tpauwgwr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163fszyasbx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163adjonpjj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qagjmlys.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kbhwqhdy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kgvsjpmj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163kpqdcsvr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ugpfjgdi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ubyymqau.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jpvmasyh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rxtotgos.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cuoorlsp.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dbyuipjy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hiwjqnyf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vvmzpetk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163puifblmo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pefdvaob.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pxdgqiay.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163iuzxqjcd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163iwepwiib.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qepayknd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gjyutzyc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vdmfkdin.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lydfofhy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fyueihzc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163bqqdhaft.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xqasgibe.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ikxtonnn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ffavhqlb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hmygazfl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ogpqgyrp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ccqjuorx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lwnztvrp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163slgvgxif.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jpczvxmr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jlyswhnd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qwgwdlmm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ogbhldqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163botgcerp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bziysgmi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dszzrasn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sysbfxcf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163foactqvp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163utovwuql.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wajpuhwp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zaydnfoo.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163obppuifp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ytebftie.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vzwreebe.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zzhdxmnr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163siwvmlmv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jzurvulh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yiseiruq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163uoqmaezd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ymjjnqpr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163elbywmem.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pcwlatwi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163thlmnlvg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zhzooxuz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sgrvcxop.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rgdnjrcu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zequifdq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lbsxdkth.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163szuqpptp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163staefbun.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nwlxxsuq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qwgduhbh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mmabrnod.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ccwckfxa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sphbpxfo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dwoisyxs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163quheiwuy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163jozixaqx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ihkaegyt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163jkxavvzn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bxttvhzu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tjywizkt.html

TS:   // 同上
来源：http://www.xuanzx.com/163peztswaf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jdtbjywn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kcgxkmsa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kczfgzlr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ebmlfkwn.html

================================================================================
来源：http://www.sxryk.cn/163otebgter.html

G. 面向对象
来源：http://www.aibaodan.cn/163vophuifu.html

================================================================================
来源：http://www.xuanzx.com/163jonnspzh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ojilfskg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163njhdgand.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uebyvuke.html

JS:   class User {}
来源：http://www.sxryk.cn/163iycallhq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163agegjbet.html

Java: class User {}
来源：http://www.xuanzx.com/163zlfkecjw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bjmtylqn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163evjyflql.html

C#:   class User {}
来源：http://www.sxryk.cn/163ivinsouk.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163omsqizuv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qqnnpefh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163gnqnxfpc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dovjvhes.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163pdrzvgxa.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163isrxvlsg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zdvqryji.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pkaaawyr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mnuuotcv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uvtypgyf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bnqdiebj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163sqdwwkig.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mkvudxlo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lotmupmd.html

Java: private String name;
来源：http://www.sxryk.cn/163akunuzfh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vqagqupu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cvedvixa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163oozcduyt.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mtoaxnva.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nvksxjxz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163stvhwapx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163oppkcjfc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oqstnxcu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qospnsob.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tpanbuus.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163mikpiogf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mddyqrir.html

[G05] 继承
来源：http://www.xuanzx.com/163fvgowpki.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ocvqjoan.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jbruulna.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163auzxgdib.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yejwgglr.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163misbqxjp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163linjbvla.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hudpxoup.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tcdqosdk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tiwjmwdi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163fionjzfz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dwsyagfy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163smsnmceg.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oqrphzbd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hkrzvajk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163blzephes.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uhpwmxws.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wgdxweci.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tvembqdq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ftciscmw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yuprkgki.html


<!-- 参考信息 -->