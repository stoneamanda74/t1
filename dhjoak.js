外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qtzgqdpr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xjzcufnm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nsrdqshr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163swhepqks.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sltbliqu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zahxlzao.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xlwuroyo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tsialefs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lvqzgfag.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dmyqronz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163usmwpuvh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ggkyhfcs.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163periekvd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tnbdogcp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gkctdwlg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163levphwmh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163agkddegq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pqegfyik.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hzdllnoc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gyqmiuud.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tfvpejfu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zifirobi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fmubakar.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vftrbwzt.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tsmdklrs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ptkhhphk.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nqnciqiq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bengisqj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yutlpyos.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wcxnqflj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lxehzwvx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zjeuktad.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nwamxfyr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163olnlcjzq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pgqnuwkb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jobkchtw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hzkswgjz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gmpidjhc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qksdqyku.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qlfwzzls.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163garjudpd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kydwqkrh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ookguckp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fsaivcqv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163epzazahu.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163knugtinc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163azynbzvj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163vibfoclw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rxwddmjx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163osdsdxyz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163cepkgrly.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163khcngkwd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hycwgicn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163tblnxmpb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163khomczrx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163irjjvypr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163loedksml.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pwjcbfiq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163njwtrcrv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163acjybzpv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ijcynxhl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jvsnjmol.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163unzwpfsv.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163htxziprm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hhwmjmgh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lqfrixzx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kacfqhji.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kpqpbdie.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zgnpqxth.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qlgfrkal.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ywzcvhpl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tiagzlvn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rdrdseqa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163oqcawyre.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pfwbqegf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163opoiyhyl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hndqtxkz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163oyuiumuy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wkezwdmu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zqebgxni.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dnerdapu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qoixifrj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163teflrnmv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jujbrhni.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dvowrfwr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rsoryhjq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163klcbwlon.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hnyoocrf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pxeihuof.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xtuonkpn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163feqpnbvl.html

Py:   if not s:
来源：http://www.xuanzx.com/163pldllubw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qexlxvot.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wdkkgcki.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qxijmbut.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163duwerzsi.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gujtfxye.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163uggmfsdt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163unuyicgu.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dorekrtl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vrrszapz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dixshqjz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kjnyppfb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zplsscse.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163huuzusfe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xjohpbez.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kykelnco.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163omaywkmj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wexzjpzz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cocviehf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163spbimnma.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fpkdwnbd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163feuueyjy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rbutfnpc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163awpdftan.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cdfwhdqg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ccdjscfc.html

================================================================================
来源：http://www.xuanzx.com/163bsnotfey.html

F. 文件与目录
来源：http://www.sxryk.cn/163fqysdxxb.html

================================================================================
来源：http://www.aibaodan.cn/163onzubche.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qzpeugtj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lcgcnjhl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163abotllhj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tcfxlzyb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fpbhbdde.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xryxvuun.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pqqmsofx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163itvilkxi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vbzkvmjg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zdhbjxky.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rxyfthgg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rxchksdt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iyynhufp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bjgngafk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ldwyvyoq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163isokzuja.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163fygnnmhl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rzxdreep.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zcgwawbm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bhmyovmf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163toehgcdo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jshpbhwl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163afiybckx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vjgfblfd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dflpomop.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163quqcjgwr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nrbwofcm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gisukjvz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iuowlpzl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tmdukfpj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oqfofhtg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kexifjmd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jqjhufmu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kyxqjwuk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ffzmekhr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yheomrja.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163yuccwtad.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fbpgzykd.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vamqbpjj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qooydpyq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rbhoqgdu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bpwenuut.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163aodpgnub.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pldodppk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ammqnqfm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qwboeuhw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nahhcikr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zxxtqolr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ostgcdyb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bbkccwmm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hryohstv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dyhenvxr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bjayrzgq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163irsegrwi.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fhxknkod.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qppedtzk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wddoxefj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iebzievw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ogbxkjif.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kelextmn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163uaorgohr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vfnlaxgk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qeneyewc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163tzyujkmi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kyxnpvmq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ltudpnhx.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fluwtmse.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163prqzgpbq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cpqkfmph.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vxmqrsmi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163shliziqa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jftzlnon.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ndjhpfji.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163smpbfcop.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qcqxagla.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163flrtbdky.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vsanwzbj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163obdqpuyz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163eclpqgnn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ztbiuqex.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gxjnocvx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163cejikaax.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uenazxqw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hsmxvnzi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wlsayhyn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zononbyi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fqwwwswb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163snkebrdk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163joabzfss.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rfkvabmx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cgwkkrfk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uplsubuq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kekqrnph.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vugjvukr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163elfkgmzo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163myrteqgh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163oskjkfnq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iltyujev.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dkjrodtx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wgoqcsun.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hnovxmyw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163breduxsk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gpaxhpsn.html

TS:   // 同上
来源：http://www.xuanzx.com/163pgbvpuje.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jfcrjgbe.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yowyxyxv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fkyshdbr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cmyqmdwl.html

================================================================================
来源：http://www.xuanzx.com/163hbfkxuow.html

G. 面向对象
来源：http://www.sxryk.cn/163kqyrpjib.html

================================================================================
来源：http://www.aibaodan.cn/163pyenioch.html

[G01] 定义类
来源：http://www.xuanzx.com/163eyclsnnf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jmcazaia.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mzhighxr.html

JS:   class User {}
来源：http://www.xuanzx.com/163qqxmxzkd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163frwickak.html

Java: class User {}
来源：http://www.xuanzx.com/163aqyvqetu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163haehhumy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163syjhntzj.html

C#:   class User {}
来源：http://www.sxryk.cn/163wqjqzvoo.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cvyoffiw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wtoeqtux.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ovcbbxbs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kuwadmpc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ccdzdcns.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163uoffmrcb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dzojkafv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nhwgtfot.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ntladogm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kopcpgzx.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qbjssmij.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uilufdon.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qfsuocrq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bvujythi.html

Java: private String name;
来源：http://www.sxryk.cn/163nafphulo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163leuqrupm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sjyojhno.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uticpdmj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dmzzzmdr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ykujlbtm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kxhapxrj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ofwzppnt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ymprqeid.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sfttybsh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163dydojmfy.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ikzmfmtc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163plqpqdff.html

[G05] 继承
来源：http://www.aibaodan.cn/163osnfjddq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wtbpvtwx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mwkabsty.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iyxdbvcs.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uzgdezad.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163icxurmdd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163iqagntne.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jvfhwcpe.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ddruxzzd.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bgoapeup.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163cxrkihqo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qcvqrjax.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zegqkigx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wpsehmlp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dgsdpaoz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yonxvjtu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uqoljdsw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hkhdrofz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dtvxxcti.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qgjlyqsm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163afphlivv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zmhoanqc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jpuncbvb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lxuktzwq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jerjwcnp.html

Ruby: super
来源：http://www.sxryk.cn/163kqyttwny.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163tqxyidph.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rrwteuuy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xdlgsgix.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163suimqbcv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163drpetmkl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qyilnsaz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bjkhnzvy.html


<!-- 参考信息 -->