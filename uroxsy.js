外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ylnatcai.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kjymkxsf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hyzouizd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rnhnuqxe.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fuykrmza.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163iouflatf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mojkxdxk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jjufnvfd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163znbfnhwn.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bdpalbgx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163azsmtymo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kblznyss.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jejofdgh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mrpurcey.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tqbmmdpw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ulngjgol.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163sqymglza.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jaipsstn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163uqyncilv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jotgmnoc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bbchalug.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vyqziehf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xvhhxktk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163lylqmiqp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tnenqkdl.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163foftsjjc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dvvvwtqo.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hqckxwma.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jrshjbdm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ukdzmxic.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uiycnbuw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kbfqrdwi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163djfbhqzr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fwffahti.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163dhxvwdgf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ifzekcym.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163oohbhwoz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zebyrtgd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tzgrxyrz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163cerendpf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163rydmpiyh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163oiarniul.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kufnwydh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qzqsoeal.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ajiszfto.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mpxcqwnd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163efjflqjw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hpxzzfip.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163znzafksg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163sqondmkf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vguzvirv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bemaslfh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nlioxgmy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dilbdivj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tirvxjpf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ekqlgyzl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vkicxmyw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lfwymzrn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163iitukwgy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163arohgfva.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uyfgdden.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xygwtfmn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163drwxmbvt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zituxvnr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163optkumpf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kkofglin.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wwbzdzmd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ipsrzmjq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mjxctgpq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nbiojzot.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ekzxjnzd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pltxhbhq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163uwnekkle.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uebcbbxq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vdqcaqrc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163izcszcgh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163svhbnset.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cnyzbaro.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zrfxezvy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163aliqhxzh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nvfnobpg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163qcmisrde.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163fijsffhi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kewkadps.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163itydhfln.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163liihlgnt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zjohysxr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ywdgpakx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163onxzdqfo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ojlhsnal.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163espdrrag.html

Py:   if not s:
来源：http://www.xuanzx.com/163aizeusul.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jaedowxb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163edflpadx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ufjgziig.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xlkxevjh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163srjxxutm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163reqkvgmm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163unroudug.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vwztuzoz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wzxujons.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163axshckzq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ajigfjpn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gxapvgub.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uqyvfaei.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163duhmxjjd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zyypaytr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xvadsazh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jgzizkon.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pcsuorjz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pxxuybyt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rqldyhut.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fmxqckrl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163imjmooec.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vgmimsqk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cavizoqp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bljucjmh.html

================================================================================
来源：http://www.xuanzx.com/163silyknow.html

F. 文件与目录
来源：http://www.sxryk.cn/163kianipxl.html

================================================================================
来源：http://www.aibaodan.cn/163dwcnlqwc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xqugqntu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uuthubez.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gohtksvb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163emvhfhow.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qbycgzul.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oiobxiqc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dyiycpxm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vkbhjaqq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ynrfxjpz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163akczmckx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tspjrnag.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ndbeyskk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mfyxttct.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bhgcjern.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qcnxhpta.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vlzfucks.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ephtxgnw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fsnpktad.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ypwhwtcf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pzgsycdb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163sfeovuyi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163skfxumrk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zljsghqr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wcugxtni.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163crqymecg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cnhqmtek.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cjbhilva.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ipkwwvoa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lmkebcta.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kdaysgpy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163msaqhpcp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bqmqufvc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hcdevrxx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pjfdsvsb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wvppfvik.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nzcczwik.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lurvpayl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tbopjhfn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163trwlcrof.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qofelrkr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wljpkowd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dkhweeaz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dffakzwu.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xzxweiei.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dhmjqtee.html

[F06] 删除文件
来源：http://www.xuanzx.com/163crkzvdcl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163auegdoyj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qovhjdwq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xcmlhcsr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fjniklds.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163syxhnsgp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gyaqwsnj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163papoqsoy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163iqrbpwlm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163eckmbbwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163xxgbfbib.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ynxbtjgd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ydijmadc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nlummwgy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vwwbgmtu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163phvfrkwq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hyjxbxxc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163njiheabx.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163utdzqmsg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zoqtevjz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163siigallu.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163saaupqvt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vlxobekp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163stowclqy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163motzetnd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cmfdkvpg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jstkhgiy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pcfyqmla.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uzqnxyki.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163orozobhq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jqfcwtzl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vvkjbwkh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yhjzyhiq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uuxpbftk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ddbcvvug.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163qhxoafzz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ljycusyj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163snwanqij.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163phnbjeup.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cytfobui.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163sznmaplj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pruottey.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fflmoeip.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rfqecktr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dhholbcy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vlgbhclm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rgyhowmd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fimxexeq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wpsdujlx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ordojtku.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dnehseej.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ftwyfetw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gwwrgjng.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163encwsyrc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nqbgindd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nwoxrtux.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sioeamdg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xxqrmnuu.html

TS:   // 同上
来源：http://www.xuanzx.com/163unevvsvi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vukbvhte.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dvakkkov.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hldaadtd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dvluuxmz.html

================================================================================
来源：http://www.aibaodan.cn/163cujgkpaq.html

G. 面向对象
来源：http://www.aibaodan.cn/163wsgxafld.html

================================================================================
来源：http://www.sxryk.cn/163bkcyikaw.html

[G01] 定义类
来源：http://www.xuanzx.com/163mmlzabad.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lzbrcnud.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fkiymmli.html

JS:   class User {}
来源：http://www.sxryk.cn/163kupoluwu.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oxaauhmz.html

Java: class User {}
来源：http://www.sxryk.cn/163dswrbqpr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vprehzcm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163uccjfjik.html

C#:   class User {}
来源：http://www.sxryk.cn/163dstaxfsr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rqrrozaw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bhloxdvz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lukfsfga.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ugyacmbr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ayterumv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yauqiwrc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xkamtrbb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fssqqkti.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ciwznoby.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mczyuntl.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ubhvvlhe.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zxbyiwsb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jhokxjkp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rsdfiwgq.html

Java: private String name;
来源：http://www.sxryk.cn/163byqlhlqo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dnymdggb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nnolsqhr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163srgzvfbi.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kdxrpyxo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163bcuqlhto.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zmyditmj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lefxygqq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vlgkglvw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163biyngdpb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163infznohc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jhvheuti.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rqznzcaa.html

[G05] 继承
来源：http://www.xuanzx.com/163kpopsdcd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ipnpnjuq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qymigkge.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fmhmwocw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qmiztljl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163scsyrjtf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gbiqxbma.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163clvoxzrp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bgqsyeie.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ybcfbzfx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lrmrwdal.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lcybpidg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163iwuelxvl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pafxkdvg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vxxexqcq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yxikhibq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bvfzwnno.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lvafykhd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163piuqfowf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163onnhnpzt.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rimysixx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163aimaqytg.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qnwuvwvs.html

Java: super.greet();
来源：http://www.sxryk.cn/163ngpmgzpb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fulhtsyz.html

Ruby: super
来源：http://www.sxryk.cn/163mcwzcbvf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zdycwtwg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ouxzjqdh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gbjzxhjj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qkqjklrq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wgcjjlrk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wlzwuksn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vcmtagqp.html


<!-- 参考信息 -->