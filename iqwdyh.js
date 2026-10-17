外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ktznzpry.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bgbklrdk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163uozkrvay.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ulvdfvkv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wzljkuit.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tjempmio.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kdipvwor.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163remahgws.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qbckayqz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zodkpkwo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mhhgvyek.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163sqvbfdla.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163cvmkyrhp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oduhsviz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cetmfrvi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gzqdsiwf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aumjlajh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rwogqlvj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hdvkrkai.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163iepzjzwt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kttlpggg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lcbwfpaf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xttunrer.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fjexwsly.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ioqqbeco.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vwvmtetd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hianwphf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mvkrdiwo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lghqtxcn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163amhoknun.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uordtmiu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qvdmvrss.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ntiocduq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163veufdqcx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vdqahmcf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kebbwfrz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mazflvaw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ojvbwezk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163pgewtlad.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ltpmirsd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163caxcnqts.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bvlzkpog.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tsxcuvzw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wdqydnbu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kwpbuhro.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pbguubjb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cmjidlkw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ldqlabxf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jreebmrj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163garolcoq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ojdwekze.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163futsdkjz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tluynzih.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jaqqvueo.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hkbwfbos.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163yazxnupo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zamfqtmc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vgovelbl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kmzgdxxg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qdhubabq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vsaqncuo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ywkapsrl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nfvdswhp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ybbsoego.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ndjkwqnb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gcgkwfmp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163biszpbzg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lgmchrax.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cotqrthy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rgfvqfgi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163iepbrwfs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sfdowdrw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163evyjoenk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ujranltd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163leuoernj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pkwelwcb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163goxxnmsj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ecqwkhda.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163npurnubo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163htpytmit.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zgzqakrg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qkowupvq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163sdszenae.html

Py:   if not s:
来源：http://www.xuanzx.com/163wodfljuq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163iwgtwxsx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dbafsqif.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ymfsumqb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163munpheli.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rwlmrrrs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ptudczea.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vobjetrm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xxbwjmjo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ihdbypxt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163tdurqazz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uqmanlyb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rkuvjjhb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kmdbnfmp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163twfanscu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jufrbxnp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ogdkkpgm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163wgyrfojf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pvblukgm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fmporxcg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163glvtfkjl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pemqmxnl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hqhgxkdj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jvkobqpc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163agplcaww.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wxiernzp.html

================================================================================
来源：http://www.aibaodan.cn/163hikyipmt.html

F. 文件与目录
来源：http://www.sxryk.cn/163iylgkdjq.html

================================================================================
来源：http://www.xuanzx.com/163pasnmbra.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ahunwgki.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163uevceafl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hcljzcqh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wmcwzlwx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163adtiiujn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163afvbsfkk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gmmuiucz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ntpjgvyz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wukzvemx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hvqdqtlk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163epmhebrp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bggpcyro.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163exchvwdk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dyppkgkp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163onpvzlqy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gsocwrwe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eqgncuud.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zdssxlsr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163iztpwsdq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rjphqysy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xcqtheni.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xfoubjxs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163erncmwbc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163aernounv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wjsowqjl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dkaivjcp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zucmqswa.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163udxrefog.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zbteqsgs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jconjkaa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jsjhuwaq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fwidzdrp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163auemmotr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gcmqyjsy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xneltmaa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jltpbeoy.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ugnzpvzy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mxztjuzq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vxrgswzv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qscdsphi.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eejnrevn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tphlqucm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cskmvazc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fcztqxaj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yajbwxyv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gajpblsg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yjtlybvy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qreunazp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dvymfecj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fkjvnegv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gfkwzrle.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hdzuiqnd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ayvnxnxp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jejpwrfc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kqnbhuwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163pdwxthdk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nnikgskk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163trkkvplf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sphbpjly.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163uteqtove.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mehocaav.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qeehjlqt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163iidkakgp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mzpdrodt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163yvyacsec.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uqwbifqd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qdyestoj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163byvkfhrn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163znlgqhrq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fmhpsdqr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163drqnxoxm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sczmtakh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yoethbrk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163oxvhhsuo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ucagkxai.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tinhxqgz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fhubeucg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fmpwfued.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163efdaluau.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163dmeaxpvb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163piqfftql.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ijezkmuk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qbwjghaq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163mewayoxk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xnprxuik.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ttetamvh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kkbzymfp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pdreugsc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tiypsjie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pgwboncq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163acirmede.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iyguphjn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163beuahcvc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ajfquwbf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qibmvgfi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163czdaeryq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tlylrjbg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qztgaokj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163aqualsah.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uypevybr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ojhkpykt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ptprdeev.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rclvkwhe.html

TS:   // 同上
来源：http://www.sxryk.cn/163yijvukso.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ozzpaqhk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jpyxrxpm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163evjkzmcg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rzvcteqg.html

================================================================================
来源：http://www.aibaodan.cn/163rpmholab.html

G. 面向对象
来源：http://www.sxryk.cn/163ztgraxhi.html

================================================================================
来源：http://www.aibaodan.cn/163itkhblde.html

[G01] 定义类
来源：http://www.sxryk.cn/163esoermju.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cdmfkpqb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bmrjvfyq.html

JS:   class User {}
来源：http://www.xuanzx.com/163afjfnwoz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zgrogtsl.html

Java: class User {}
来源：http://www.xuanzx.com/163ohoxqrxm.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dfasdqhi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gqxnvfsu.html

C#:   class User {}
来源：http://www.sxryk.cn/163psuabxgc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gthytxtp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wpvrhudx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rxrnjgfx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gtisphkv.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mgujrckg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163irpfdczy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fxmktyoj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163biymhsze.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163olhmdtox.html

[G03] 实例属性
来源：http://www.sxryk.cn/163slcwzgng.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uydjucdt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163alariuci.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163crbufkry.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163krjdopfm.html

Java: private String name;
来源：http://www.xuanzx.com/163ugrbhxvb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ibhfpzax.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163usdzdhcb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pilnfrwo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bmitnwmp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mzxodgog.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ahmnoczw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wyjarauy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zcqvqlyb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dbgnjhtg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ecbhcgim.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lupjjale.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xeyhpopf.html

[G05] 继承
来源：http://www.xuanzx.com/163vgwotdkx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wviinyht.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dfvfarbg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kiffaygl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oanijots.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oeuqjlqy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ryrgbbwd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fdjjzxor.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vznrhdta.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tjkkgkms.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ebbgtjrg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mhuttxpv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163xtvcipmk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sisrilav.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dgbzfgyx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163pkbrefbs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zxhxifuv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lplyjqmm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yqnodrem.html

Py:   super().greet()
来源：http://www.xuanzx.com/163sdjnlrzw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cexbfpmn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163sxgjqxop.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nqucreie.html

Java: super.greet();
来源：http://www.xuanzx.com/163gtyfqbrw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kftsfjeh.html

Ruby: super
来源：http://www.xuanzx.com/163qlzwpxwz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xazrrabk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fibjmnew.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dknbbrsm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lqrhbfra.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wgfxaazb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163btqnawrh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163drxzhmrm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163sldkpsrt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qfgmdipz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163kwrthpwc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ssmoweky.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tzmfexar.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163placxyxe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cdmquuur.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nkqagjxq.html


<!-- 参考信息 -->