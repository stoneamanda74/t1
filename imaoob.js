外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gfnupsai.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ewodcccx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163depvhuwb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jgcwwfsk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163iqjgigsc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bggrospo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pcgaaszk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163markghqr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163adbtlniu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iqmychjb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163erluhsed.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dvhgisqb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163eodmgifo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hvubhllk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163yfikxorl.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vdduvdea.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jwkvroso.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zryozsvw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eyoglehd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dydgncap.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rrkvudug.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pbsiunni.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qsdoxoju.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zqqwxsmf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dotwbxsv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hwwgcapv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zrhbyyva.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bxofvmro.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ylgwigyr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ekkrhmng.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vrqgsgni.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163skfqswrq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163onwltavk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163uanqynev.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ctkenugi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163skuddmrr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dvfommpz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jiqphnsu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bdmunyzn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xpsnduxw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163oxhxdbxn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sicewfxp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vzbhyvht.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kwnasqoa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jvfalyaj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ayxdjcvh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mhmmalho.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pebmgiqy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163cimymfeh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bmrxhzzs.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163monqgmvc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qvkgjhco.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xagbwkiu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gydntims.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163uvajexfo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bhvdvjth.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nxaumbyl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vmcfmbyn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163stnvejko.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pfomwmmd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163avfiksln.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163oggqjbpr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xluxjbty.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ossnyjod.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163awnqdyeg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vdokwfcq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dbfjgsog.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gtrikyia.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kcxhdjvg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dmwntppw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163okdabbtw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qnpefbho.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mzmcuouh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uvsknxab.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163woszdaol.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ksjcitjg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jummakbx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ibhzkaea.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lfldlhfz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wzzpflwd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cuiyyxzf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pxyzfxrh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tnzojpmo.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rvncpejz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fuoffdek.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cnizgtds.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163chmgbndr.html

Py:   if not s:
来源：http://www.sxryk.cn/163unmkwxbz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zlcgjcio.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dlmhbhip.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163bcrfhzes.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163giqmzriw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163hsolaeiq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vjvuzyvo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pklfgqlt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gxdnyqcz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xxfywrbj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gnqpjjoq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bwumjuru.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kcsrqadg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pgiwavjj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163flbrflvr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lkffkslp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iaqsjwka.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vpzmueyu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163phtdegdu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ykzhdeuw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ldqvtsyg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lpenwubh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gohtwtca.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xlkqnywp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ihqlhjtv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lgubtupx.html

================================================================================
来源：http://www.xuanzx.com/163xatmssyn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163thgztgsm.html

================================================================================
来源：http://www.aibaodan.cn/163xvorttek.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163noervvrd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rkpdotcx.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163glewxqko.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tsgmpsrl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zfrltleq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163teuxlotl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pfjuludb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wnvujklp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kuuembyw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xufyjtae.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mzvjdyhn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xsdzmhww.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vlevcpyk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bwnajbtf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vcgrxueh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163trvzummx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rvwbfyux.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mqgtrkba.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163liyiyjbw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163znwmuvpi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rweododm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163noqmegpo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163snvitoea.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kemdaqzi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163undwylme.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qnncxclu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163muswjfpe.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sgiqkcam.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163airetbbw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qivpovwt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fmzxfawd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rqqpuyrs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xijexpmy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cvrsatef.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163gajqnyxc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163szpmzdwj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ngyfslvy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qbnaqlra.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zeqcyzne.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163akefgryw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uwouwkrl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jzeozfdd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xteuywkx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163micdmyhm.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dxteidkp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163slwgfruv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ofzrfxfa.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ybkzdibi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163feymjpdz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dceytjbg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vizaqatx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ttbwkmrw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zxclcwgk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163obnhhltp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sothhpqx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163uqowvxkj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cusyyzbv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xrhtocri.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dxywcdyw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163oanibgjk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lshqqyja.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rhwjigjl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163oktszeeb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nfyynjtb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rmfyixne.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qcxofaoy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aolhuorl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163twgiakaw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cvafnrso.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163eqkixuip.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hqijimfu.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zlxwrbvz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xybyyhdg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ffgzvcts.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ainobjnn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163euirsfaa.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dwwhznkc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hpfidjbf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xcwyjyya.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163plnsoueu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zcugkves.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rxylmyds.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ahuyeijd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yirzdbqh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mwbswxpw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lrfbnhpy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vfbltjdi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cnngqmag.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kouwuqev.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qhlkxykj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kjqoshcz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163biedryuc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cxbgdkfv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ulcnyptz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tflqanlg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qyumvzxo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163myhclaez.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qbyqxqec.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tywwekpx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qpyyexxy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163riaomqfj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ncyasxyw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zfqmniiw.html

TS:   // 同上
来源：http://www.sxryk.cn/163xclvddgw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163toqwbgmr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163npyiyalh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163egrtlcak.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wrkodwiy.html

================================================================================
来源：http://www.aibaodan.cn/163ishqsfes.html

G. 面向对象
来源：http://www.xuanzx.com/163slauienp.html

================================================================================
来源：http://www.xuanzx.com/163gckfqfxp.html

[G01] 定义类
来源：http://www.xuanzx.com/163sylvltbz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fribrxbg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163eaikvngt.html

JS:   class User {}
来源：http://www.xuanzx.com/163mufbcpyl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fmcphkbq.html

Java: class User {}
来源：http://www.aibaodan.cn/163dhzuzoyo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163edcmirul.html

Ruby: class User; end
来源：http://www.xuanzx.com/163aseuqhga.html

C#:   class User {}
来源：http://www.xuanzx.com/163zezdoygn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163shkzxjpb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nyzzwlqt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ujzsrwlg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wuifxbjr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vpnveohg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lhxowykk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gdogdlwe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hjrcboth.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xiazlpiv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vhshqelx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uzffaflr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wcegxjoe.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zcnjgetw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xroupubs.html

Java: private String name;
来源：http://www.sxryk.cn/163mrmctpxi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ybqsblbs.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sojcwpjb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163femopaos.html

[G04] 定义方法
来源：http://www.sxryk.cn/163avzyovvb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wwpgeidh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vfngxsdg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rxzyntcf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jbmuhvcg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dttepelr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pxjdeuha.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163elxddurf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gddxoikg.html

[G05] 继承
来源：http://www.xuanzx.com/163murgkbif.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xtaxbjio.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pifklscq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163biusoyat.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xttukfyn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gwdussrs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wgogocch.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xsyxlrig.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vhoojhrq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zidoqzuc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jkkrjsaj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fycbncqw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uzvwvrja.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qfgdbzro.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163djnqikwf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yrtvmaum.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jxtscebw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hctopfdq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163znvajchu.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rwfjtchp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ojbhrrds.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xkvfkhln.html

TS:   super.greet();
来源：http://www.sxryk.cn/163arjqbodt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dyznyqdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ioxcixjt.html

Ruby: super
来源：http://www.xuanzx.com/163foivgsor.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cqmtndyp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163weydnrba.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lltrcqoy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163erdziqak.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fvaepqhg.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pcfoffvt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bxmbpsfi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wolwqhnh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ehdfvicc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rlioupck.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bifmiyhe.html


<!-- 参考信息 -->