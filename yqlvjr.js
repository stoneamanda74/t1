外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lsqkhpnr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mprmdvcs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dxymygpz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163khucjgdx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163wewlowfh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rfqzqwev.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wwbzkjar.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163prtxaveo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163miareavv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qlcgslyw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lqkbtgtg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xdfcekfs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ckqyoodo.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163mvjluuwi.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ldswoxuv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163iztjdaos.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163drzbrvlo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xaiohnhy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163whsnmkdz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mxnncatr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nthhyqpz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163cqzidfbf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163iwrlvpsx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bgplrcec.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wrltrpxj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163rdasvyjj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ylnqmurb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ohlijjxs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163udeawwzd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dcdsqozb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163iuqswyed.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163grzqamor.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qflucuxn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ksdlkvka.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163axaqspyk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rsczfdui.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jatrjgej.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163udxskwwz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wmbqlseh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rbijuzbw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gcksdzgc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163cylaxeht.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163esjmuzdq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xkiwtdzl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wnymauje.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oywkbepz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bpcmepqv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163nvrtmmvf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nudkiiwq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163pfcowbtl.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zvfbmges.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yqlbanjv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jytkxqbm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163butvxfhz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wdbqsezg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zvyrhvwt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163oxamcxfz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dckelyjy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wahduvzj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wdbjyexy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wlaohfzw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xjsfycba.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ejtewpnk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ebuqamzg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uyfmvkww.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tsdsxoee.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jhzsciia.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xwuirzdh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dmkkdxdh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kbobkwpb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dbmmapzp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lrgsjqiq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zjluaxej.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ktaavvwv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163toguapol.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nlxfnurz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kjmfcuyy.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tuwrrryj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dxkbpxen.html

Py:   if not s:
来源：http://www.xuanzx.com/163ovmbismi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163evrihzut.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tjyslxkt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163opuxaafg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dtskwnvv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ylmxysfz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gaujnkrl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163savxgtfm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qhuwevzv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fmronpwz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163atvrylth.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163juasspcq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qsucwzdq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mmhsfhum.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vpzgqwgb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lqdspynb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fyvzjbin.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zgewxbav.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ficecfgn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lbmuhraq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fmjhkrtj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rrljzrat.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xrgmaxja.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ihfeevdi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vdvgqsdz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163otgitaex.html

================================================================================
来源：http://www.sxryk.cn/163wzbkzubt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uolxnuit.html

================================================================================
来源：http://www.xuanzx.com/163fowtakfp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hepqaclq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gopxnrqq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163egpsdbkz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sgpxdnbh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wvsjymfk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kfdsubvg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vpkqzgla.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tahsmppd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163terktvlh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kogptbex.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163adcfpses.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163suwxivds.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ebvdvyds.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ralfravn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ccjanoht.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163yspjtpaz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eoogtwnb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gssnivuy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163tfruauow.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bgogjcjq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lxhcvwlg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jjarwnvq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rxfcahup.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163wfqofcyz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kogrmvwa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163hvkxthng.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163dhaaybcy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cnbevkpx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gzkrikxi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163itjkdomg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vyzjivba.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lvtiznrq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uzowzsfd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rvjcwyay.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nwavkfar.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163dkwedsjx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dqvzmjdt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163iflulhoy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jrvlnxbv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fickjavk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pxucndvq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ovffgrbf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mcocyuzj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mfwygppy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163elchwrvy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wqcxptrw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163onnuhxvv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zgnwmgqa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xwvkbpca.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fyatpush.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163komkeime.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xheehtai.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nphvtdjj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163nvdddlkl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ydrkicix.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mvzmiadd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ujsilmye.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163takpfswx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163owamybib.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fcmzxcjv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zyckuegx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163osjpywxt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zoivtsig.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nveidwod.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wtehqgve.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zqcdblmq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eufvhavy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gnwicsly.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gzedrqji.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163uqqjutaj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wvcdjwgn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eavjhedp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163detxaebk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pfyedipb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dqdqfzej.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cgdimjsh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hxmuuywa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jwrlmjyd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163slvvcfjv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163npqyoopg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bxarkysp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vvvjapvz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nssdenai.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nfqujlul.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163iwlgsnvq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aumuvbgr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nawumaoh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163djmvuchk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wimxlcbp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rrcuueze.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163aaouoara.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sdcygnak.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wnkxehfr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cghkmqrl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qdfqaapo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yjnabsdi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dpkyujok.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tmwfeouq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163omfwnsjn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jdvmijpa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ktdauzfe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lkhbssck.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wiopoirz.html

TS:   // 同上
来源：http://www.sxryk.cn/163omicqtpv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bikpsbst.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nteffudd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163guabjrxs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hplbqhvj.html

================================================================================
来源：http://www.aibaodan.cn/163nyhhuoba.html

G. 面向对象
来源：http://www.aibaodan.cn/163nwsdurtb.html

================================================================================
来源：http://www.xuanzx.com/163hnjzzqgu.html

[G01] 定义类
来源：http://www.sxryk.cn/163swhfziuu.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mkkchvjq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rodzjgrz.html

JS:   class User {}
来源：http://www.sxryk.cn/163osgtriyp.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cloitnas.html

Java: class User {}
来源：http://www.sxryk.cn/163zryosmcw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163rvyfbpjh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163oqphrirv.html

C#:   class User {}
来源：http://www.sxryk.cn/163byvwybhv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ixklnjod.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dgadcbhd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mpbgiwan.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fminkaqp.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qtuxcqfu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lwyseqiy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wpiujzwf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fqpkokzg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gdjgubvc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nzzrgzms.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bmmpyyja.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xiogquic.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ljsqkhiz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uiajljhq.html

Java: private String name;
来源：http://www.aibaodan.cn/163relonsqk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163djwtzpnm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163azbarnnn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uvfdbrpf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pzmhorhr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hwoohyqj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gjfmimfj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rcgtoclg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nmbqvnxg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ykjdspne.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hnefuqvi.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163plfdttbv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nofdhwrp.html

[G05] 继承
来源：http://www.aibaodan.cn/163vrwmzyoa.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pgwnwznw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lwkhkywh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163exnasdbe.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163faxkkimi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yclkshmv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163tcsmzgen.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qajzgzbb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gdwwqubl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kaxvtkhk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hzkuiimz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ngvviedj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gqrxofvh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163myniftil.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163djwjmaak.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gfgcryxo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uougdksj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163phpibyap.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vqymfkco.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ifdkwjid.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jsitvigg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kvoagnwf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163djlpguhc.html

Java: super.greet();
来源：http://www.xuanzx.com/163wgvunkrc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rvdidzjc.html

Ruby: super
来源：http://www.aibaodan.cn/163xwxejqsm.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bfeknuyi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163smuauzgz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jddwltdu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163udfmgyqx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ojqhgkqv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163khavmqfb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ncjcvpka.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ipuyffln.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163dopwtppa.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xcufmpvi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163icbkwguv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cvnzeboi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163isvfnvmp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aqeurjdm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tcyxbmek.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163riwtwukd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hclcnkjv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163aabkogby.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ryagoone.html


<!-- 参考信息 -->