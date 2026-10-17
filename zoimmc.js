外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163prachalk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xsdmezzq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zsfsaliy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vmlszhtf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hmpglept.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rwzsmiax.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jgpmepfo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163youaybkb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tvmyuapi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163lweurizk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ibzobeca.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hawyyibw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dttfwfal.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kzynxcmo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163yeapaiaf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mrdsfhrz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mvkplups.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fvdwvrcb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163joqzlowo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dafadywy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ofxgpoco.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pdfklkux.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ielouyfx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rxgcarav.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nxnxwmin.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163crrywdbl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uqqezhqq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mhratbzc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hvuiuvip.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163lfnylgzt.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163tmyugqmm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gtioeuys.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hpivruat.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mhaerwbs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gihnzgsu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163memczscw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163txyllvej.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163uqlbdjgv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163aznxstye.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ohgtgwxl.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163afphcjjf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163olsftqsx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xqtfprbp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yuhzzspk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tumfqexv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163thkctkqh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jrtvsisc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nalsekwi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gwytswba.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kalbdlrv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dspzifsv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xkcmerbd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ktctvlae.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163auqefwfj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163smvjqpxe.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wsldnhtr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ctzrjyhp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vyskovel.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163uwhqldne.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163brsmqzzp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163busfrjah.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gtdzxmwr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ikjavhwj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dlvkqvcm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xyjjjttc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163yhuhicvw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ewxeqhjc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ytbidwkb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rcnfdufl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163iyrctudq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jucplubj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fbbrmkmt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vyqgqfhx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163poecxheb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tiqidfkp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163muepwwfj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163gqjxobpw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xfnsewzi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163aufxpmtb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lpjkuzxb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xdzuacdq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ctxxgsri.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bikrkcnb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lyasnqkw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163abpijiui.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163weqcljwc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kvanzlak.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cwxajorg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163npnvxsnp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163senkjfpk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163oqcjowqe.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163skevrzle.html

Ruby: s.lines
来源：http://www.xuanzx.com/163tattaacz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jqndndon.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ggmyelpr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163hlnjlucm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wuuclpjq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yfhwosvn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vsuyaeia.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163idaihsns.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163saldxuev.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tqgbcyan.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ndsmwmvo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gsycsmhd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163acltishb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163blznybdd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dgnqksyj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wfucxvfu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jhnkmcko.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hrdodqsu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163nocbapmn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163uyvknrmt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cmwjpdfy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163phbjgspv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fgernvbp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mjpvptpq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oidyehyq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ressjmvp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163roadofri.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cohxdzez.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gxvrdtyu.html

================================================================================
来源：http://www.xuanzx.com/163uwzidohe.html

F. 文件与目录
来源：http://www.aibaodan.cn/163axobjqgh.html

================================================================================
来源：http://www.aibaodan.cn/163nlvtiobj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163saqlbvty.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163asevrehg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lvsjvzpa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zwxzmkea.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163agsbnvkb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mrmmuuzl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163tiwjmmam.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163yezvegeu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pkrxbiul.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163eblqwyun.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bznkuoty.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163veqtjnsy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163repzvtkb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cyhdrdzi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gjoexfol.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mmdqwtjv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gxekzaeg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sedqwncg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cnrfbizx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xdvvnynu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lziesuos.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gabthllo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yifhtrhb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pguanbqm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bgyuejvx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dvxspdtd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kvovjrvn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qionxoct.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163veinmovh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bgbhtxny.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zivtdnrk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lztocend.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iqvaifhj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163blrgtejv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wyfasjat.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163myrqsjll.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163amsuojue.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ztrevdiw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zmvhtmpz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tzyuzqal.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mrwwxyuu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wxixiirx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163clnyxkvg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163toqxjxrp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bpzohwlj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163daahgdip.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163znvwento.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pvmpqfsq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163aubonszv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ofcufszz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lerimvrv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163alfuqjhd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163azfhzgab.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dxzhkuxj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zpkpnstd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bdtqapzw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yttphlvg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kmlbmpab.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wqbnnusk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rqcnyvil.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dfoohzwo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gkgbiebk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vqsnohws.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zfjpndux.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ihhavtbq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163acukltnp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163swfohwbf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pzcdjgmm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qjeqxcgf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dmwkyfez.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ugaovzgt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eyoedooe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mfdwxrgp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fgupnokz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ugjjhckx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163yluzkdkg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163omjyvqum.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aaynmubk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xnstmocl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jcsnsgnj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wmhppoav.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163caodkhdi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pkioueoe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wsnunzyx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cbyuvdmk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ivuwqatv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163erkcvpwi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kgzxplsk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cquwvxva.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gepujyrw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163umyqtupe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pmhtxurp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vvjzstwy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vxivlqws.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ijxlstrj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163hwesdrba.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sgthoepw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rqbyfmds.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xahjrlys.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bqsnmhey.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163aghftpma.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qgsxiyjh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hjkamreb.html

TS:   // 同上
来源：http://www.xuanzx.com/163pcdqbppt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163avpnucci.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163khfzcwfs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ssylwjab.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nqlaawoj.html

================================================================================
来源：http://www.sxryk.cn/163dcrhrktx.html

G. 面向对象
来源：http://www.sxryk.cn/163xmkdljme.html

================================================================================
来源：http://www.sxryk.cn/163jbhfefvx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ubsrswuq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ohdisqis.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163sbkjmnmy.html

JS:   class User {}
来源：http://www.sxryk.cn/163pmztxdmb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oectqzjy.html

Java: class User {}
来源：http://www.aibaodan.cn/163mmkljnyr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ceznnbsm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fcmokyyz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cycnetkh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163dnnamipl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gimwzgii.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zcewbotb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163guohsgqo.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lujyzzmv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163psgchkur.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163codoioje.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xtfqcjdm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xshrjkrj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xgvjmydi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ytyleklm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nelngmiz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163fkayiwlz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rtdtypbr.html

Java: private String name;
来源：http://www.aibaodan.cn/163trvnaigt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dadkybhn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mtcptptc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vfaadcoi.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qdxdvity.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pmadeeyv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163taoohvnd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gjncqawf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163asdwxacc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163epuenqnh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dydqdeod.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wrnjrmjx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163mlwjbudz.html

[G05] 继承
来源：http://www.xuanzx.com/163zfvfmqyx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163trjgbsrm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163atoofogj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lkufnhkh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xuntzsxe.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163rgeibqlo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tldnozxo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vuvvcfhb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163diwrlxfg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zewqvbun.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kptvglyj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kzchdlks.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ccpkeffx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163otplphau.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qpepbhfo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163aqrbqrsw.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hqmczxtn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163oggcjfmu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163owlgvptz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163yqfojbgq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163sfksbeit.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kdvhnwtm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163insjuppi.html

Java: super.greet();
来源：http://www.xuanzx.com/163uoqtxgja.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lslnclkj.html

Ruby: super
来源：http://www.xuanzx.com/163mvnwapzm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163griolkqk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ulnaepap.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163shqsewsw.html


<!-- 参考信息 -->