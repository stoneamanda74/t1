外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cbfksywq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163iytcsxhp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163casbldlb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xbvgdzsj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163znyzfouh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dbbnjylg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163erkymvrz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163byntvqlk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tvejeroy.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fggpjtna.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fqvkmidr.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ilzmcork.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163evbltelt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ozernuqq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uoxlpwmu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163djczwubr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jsyylofe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yyslnqxw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ocgvoruu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bvviagmx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vkrmfruk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163idioccpm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jfmrnpas.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bzvkquwd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ciupbfor.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mulelpwv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tbwdqjvk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163svlyldpt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qikllvpk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163frqytgsa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mplobagb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fwlxslud.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163krwwhlbg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pozytksd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qcemhggr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ewqrqifp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jpatkrxd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163aodvasfc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163npqcynvi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jjuwfgfw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163plvzleed.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aremmtud.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yxdjebmq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163pkiqiduo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163oyxddnib.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mhjmsxir.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163stlflzxj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mpmbqara.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163duibtejq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163piuyigvk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cwrbjqwu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163drjfehqq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163efhsqqnm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xzdnvqyh.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163haeyewfy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163iebseotc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vrkrcgxn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yzatepin.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qjwelfiw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vvrylmzb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xfnsqqgb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xcdljctu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rxnmvvdi.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mtthjpcm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xpuypglt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163aboodmce.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mubojozy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ortvifuq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ctifjmqc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mgrbtzif.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yrnsatje.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163caoguuvh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qrbhjmvq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xxoqplyu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163oqjvsccs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bhvumbrt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163obtaxmrl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tyylihdu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163txwhgjja.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ejvwylip.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mwjoejwa.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cfcmxria.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zjqgnymm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163srpzzjus.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pqqacqng.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qfddifgy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163jtklkohu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bgqmiuuf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ugdbvzmh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tgahcwbe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163seuqkkdk.html

Py:   if not s:
来源：http://www.xuanzx.com/163yooheeoc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ydxpzdfl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lutvwpcd.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pjtoytgm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kwayfbgx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163prwuyuvf.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jifsrced.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163auzudlmv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ynuiflao.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qzhpgyfe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gkdnzose.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hweatngw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tnlptyak.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lwqsbhqm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163amipuwvm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mdluzpmh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zflqiraq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rektzdnu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rsgoveks.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xmtcazno.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qmpeeahc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sfxctews.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hawkqeze.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lkvuvrbe.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zeayvfpc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bukvrfry.html

================================================================================
来源：http://www.sxryk.cn/163mmgktdrd.html

F. 文件与目录
来源：http://www.sxryk.cn/163ybvekffk.html

================================================================================
来源：http://www.sxryk.cn/163xjyjesji.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163obqdzrvv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rdxihnqa.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ffzuspen.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rqzlladd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qinbktjk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xkxzgkla.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163tgkeigtp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gdgumqkc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xzsrdqbq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sbniqwvn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163twxogdso.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163luzgpjln.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ryyhogdi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nmsjcuia.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hrdiyxyy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163njaczkjt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163shcnkcyv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ogthsqan.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ewuukbup.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cvcmmmji.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ijqhyscm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ugexharl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lukgzjba.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cuitkknz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uhzykxbq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xxktntuo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qppoxxtw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zomgnltq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163txplgade.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zjbuidpb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cjnzeuel.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ugjteeio.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nqpjvcmr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xyrmfxet.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163olsqfztz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bmnrutej.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uxjyokcz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wskmuash.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163aanmalvn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qfdmoavr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jspxdvuy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kpxovgpu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163blfkkgda.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ujokbkpy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xssrtezm.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pwcshbib.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yqlxjmcu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ovaapwvw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gfahtsxj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163praejatz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nnmxdyea.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rxubqrni.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yvtpbonm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pkccbqbe.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qhcdwygq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163wvdwrgsa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hqylbrbd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qtknjsuc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163diqbixdw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xhqptebq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tleocyub.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163dykhxevb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dlafyfdv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mpfcpqcz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gixnmtbt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163owyrinpg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zsbowkwb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163azoosrwk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tugmhqya.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163twcylqye.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ociypzlp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iwztldpe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163psmmernf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cbuvuwbs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vvnpdpvt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zgfhdjsr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zjvsslyx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zztvrefr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ffcfolnj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lcrvzabu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163gtlumbda.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jkxmmipj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hxccclmw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zvnwjicn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aeemeylg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163etrhulza.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fdgsysot.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163gnemmnil.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nqczjecc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nwnumpjk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163wewytbyk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163leedoplc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163cvveqxey.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sqkatcbp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pxtudwtl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163crfigvlf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163hchppsfl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nynkybla.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tzohbyre.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wtilxyiq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rekyvkdf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ualffwqr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163adwlsndz.html

TS:   // 同上
来源：http://www.sxryk.cn/163npanrnyf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163utxhgvpy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kdjperlr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163yozofwmo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rzzwzelp.html

================================================================================
来源：http://www.aibaodan.cn/163otjtcoqf.html

G. 面向对象
来源：http://www.aibaodan.cn/163dqohdyoh.html

================================================================================
来源：http://www.aibaodan.cn/163hqwkodtf.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vaoqiuzh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163grtovmxp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163myxqihtn.html

JS:   class User {}
来源：http://www.sxryk.cn/163aivhkniu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rdjaliqz.html

Java: class User {}
来源：http://www.sxryk.cn/163ffxdzuso.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163loqefurw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dbvrcmzu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jcxgulbc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yzwyborc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gqsspkrc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pqcvoyij.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nhxxpgxv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gavaeicm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163krebwyyp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hombntfr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jqevwnol.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tjvasiya.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jtoqxuab.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rjrbqhyn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163orkddxoz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163witqycvj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163eebxebzo.html

Java: private String name;
来源：http://www.xuanzx.com/163wyeaknvh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jxljxojm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163frbocucw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163splnuqas.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pciwxnwc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gvzijzwv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163okgjvthj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dwsedmci.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dgvxoodl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vtrdqlme.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wdxgydrn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163idzgqtdt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vvwvqonc.html

[G05] 继承
来源：http://www.xuanzx.com/163sgougmjf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163clirxmxr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jgjicuzm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163isqdbiez.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wldsqrgf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wvjffatn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jdzgikrg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163eqqaelqp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vgmcgqbq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dxnpuxek.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ksglipjc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163crwymwlo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163utcawgaj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ivorechg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fyhsmfut.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tvwoxbit.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zszxxxnb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eeqmcblj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163iunpjlnk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rywcrutp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ulljgyjs.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mpmruwad.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ediujvba.html

Java: super.greet();
来源：http://www.sxryk.cn/163uavkxfpf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mxiagngj.html

Ruby: super
来源：http://www.xuanzx.com/163kbmtgmjz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gqcukxet.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hkmxwale.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163medpyfwn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qlaphzaq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lolwieid.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jxdgauck.html

Java: static void f() {}
来源：http://www.xuanzx.com/163loycfysb.html


<!-- 参考信息 -->