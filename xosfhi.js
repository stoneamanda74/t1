外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163knpizuio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163qvcvomdl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dkxammqg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tsmckivy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ozoucpae.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vawqtbba.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zlffilvc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bcbpfgit.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163adehtjbp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tdovmlov.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nydltaxr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163izcktfqm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hjkbjhuy.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dklrgqna.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cboctysl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163srfpzeev.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tcxzkran.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163usomzxuu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tdrbqqrp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ttvuoqcg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ejpxgwux.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kgarovgo.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163govcswpn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kjisabob.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163owfenosi.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oinyiwuy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qynxwfai.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163uqlkrute.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xgyuklzt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163anelhqqh.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163upcpgqca.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gmgivqnx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vyeakcco.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cmbyazbv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nnizjljo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zarjdfth.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gagwkmkj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dyurlywz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ggaibyaw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mnupfxct.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163yfnqgdom.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yitabeye.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zfjdskmd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hdfxrmcu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qjiarwod.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gwdkngsd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163djzjpgpw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nfukdjfc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tzozqyud.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vwoatzgj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vnzmwbsf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cwjmptyz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163juyfdkfx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mvzvbvng.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ncmwjszz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ynlrcoqu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xczlwegi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163empzanpy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ezmhdhzp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pnfnjoel.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dnhnoopq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gdreicfv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xlbkjpaw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163faagqhqo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gupetfvq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ctrsgwap.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ovkodwxh.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tqsaajjy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163sasgfjps.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163camnhklz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163saypexop.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yiydwjkb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163cqendfao.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qhpzreac.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tpiayxel.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jedsuewo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rftvwzhx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aatztmia.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163laftjphh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lbiclool.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zgcqxgkr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163knhijhfk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163havfkfvy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uwqwxduk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163gtbrghfh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pycqsylq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hrsegwku.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qwvbuobj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gcybevyb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iwolvktb.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163burpltkz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ljmdyjts.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xzrcmpnl.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kwclehyn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163iowqqgjq.html

Py:   if not s:
来源：http://www.xuanzx.com/163tamuxylt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163sduppgtv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wtysebpx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163muuybszj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163niwzpgph.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mwydkoop.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eysrnajj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xrxqpkwl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gjtzryoc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ofbktcej.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163kkohdicq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oulxxesk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ytfnnxwj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dvaxxjvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163labiwget.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ebiuqakg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163tkyfhudo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mklzymaq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wgqcfugh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qejtchop.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zoqqqnmv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rfjwwjyt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vlwpxzez.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163slzjnnxx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ykrppnfv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nilbmztv.html

================================================================================
来源：http://www.xuanzx.com/163vfguibfw.html

F. 文件与目录
来源：http://www.sxryk.cn/163axipetgk.html

================================================================================
来源：http://www.aibaodan.cn/163dlmfphwh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ykovkcun.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zlhwjmqi.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hmnfwmee.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ricnjemp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sscyrjne.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vcwmnwnk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gsdmwyor.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nculfptb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yapgjpii.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jexlwyah.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ttowetah.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tlcoifnh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yqfagnhj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gzmfdose.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yjfvgoti.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163odchhuba.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gejpyzid.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163acmlkdjq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mgmjyrzx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163iceejxqj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163enlggpzz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nunkthyh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uhuptojx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vrxnsgrs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ggwsckay.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vqovtlbl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163seawofub.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163sgxgrhfa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hkafxlac.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fjxrwftz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qzthqito.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ndpgqnys.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nnavffer.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163csjbultm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163szmyrdhf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zbfrpuqn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nmnlksro.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zcyyqxzk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163risiyzvk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163phzrvhhg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163quenfkea.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iqdscbpt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kkovyavt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mxqsexnh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163iohxtsyt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mbufupbg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163guqinfch.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ubtuvitg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vbwfzpoa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yyubbfuu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lgbdxmst.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163viauglme.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163gkmxlzsp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lalkieek.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wrkyxqin.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163touuyuie.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vbaqurdk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fyriwmlh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vstsfdgx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rvnlbxnk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qmozvlgc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iujdhoft.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qdzhjtsj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163rlakybfe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mwyszjxy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pifaeeqo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kxadsvrr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163baknzlda.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163znvyensl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163oimlpkgy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wxohmtfn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hncgjezr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gxnjvnlt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vhevuyjz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tfnmkvju.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tlbvkllc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mkomwzep.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kllntekl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163eiqmrgtn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jggzwdek.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ujnpovxl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nvnaabhp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163drsugvdx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rqogawyc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fnvgsyey.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xobuenld.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163cmtjfbxp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163txgsioch.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gqjjipxs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vcsnaoax.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wubntnff.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fzybricl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uhxronli.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lhrgrpgv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nhjfmfrt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ajbidufb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cfboqfcx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qkjoxavo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zicremzi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hphivxpz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163eldakwiz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ssitbhll.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tuzbsayt.html

TS:   // 同上
来源：http://www.xuanzx.com/163wmzdgeao.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163czocmkzs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xhlhmwxq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qizfpqge.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rpzscaya.html

================================================================================
来源：http://www.sxryk.cn/163ydgdfldk.html

G. 面向对象
来源：http://www.sxryk.cn/163ucymyjfh.html

================================================================================
来源：http://www.sxryk.cn/163lgpwabre.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wnsbltsz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vlkrgriv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wyjakvup.html

JS:   class User {}
来源：http://www.sxryk.cn/163bvdyxvxn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rouwmxlv.html

Java: class User {}
来源：http://www.sxryk.cn/163cjtoaxet.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rzjhlvfr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sddajoer.html

C#:   class User {}
来源：http://www.sxryk.cn/163wzrknjev.html

[G02] 构造函数
来源：http://www.xuanzx.com/163linjvdmj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163koeemmmg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kqhohqys.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uauwxxng.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dqgfbkuk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qqjpxktz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163eostxpmk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bqckyuid.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vzjkkacf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wjcwzzma.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wqbdhbuj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xkfurqos.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ybvzvsse.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mdidzpso.html

Java: private String name;
来源：http://www.sxryk.cn/163npfjyxzt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ikwresex.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xrrsniac.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ccajnvrb.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ordxzsxk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tbdrgqwg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rzibhjst.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gqbqtodr.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163esnttqwx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qasjezgy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pijyrbbx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ebkogtvb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xfvzyswr.html

[G05] 继承
来源：http://www.xuanzx.com/163ucsedsbo.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kkxtepsn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lrfxseft.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cprlrckl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lzppbaom.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163odcrrtxm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zzfzgoay.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tuahwhct.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wwbyuswr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163chpkfxib.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uaryfluh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nmtayhaa.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rttwlsyi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cqzfxfvs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163uckrusct.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yfyzejwl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qevsxyyw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ytlgzxhn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zedtetzl.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pwkgjmfc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163nheppcia.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ttlxceee.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yfrcppry.html

Java: super.greet();
来源：http://www.xuanzx.com/163urgcfgat.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jzxmibfm.html

Ruby: super
来源：http://www.aibaodan.cn/163bhiajsdd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bnkzquqs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xwpvrmfs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cvbaijps.html


<!-- 参考信息 -->