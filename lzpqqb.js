外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cmpvdjnx.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163muinxdqf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163idctzzkz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qeceapka.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163weishupt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lyhzxmmq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tcgqzmym.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mivufwkg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163lssqyvjk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eledzmyp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163abdgwpdn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uyvdeboq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wiofvljt.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cqxxqmbh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gcnbhenf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xocfhsgw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kndhgtkt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zpnxjizf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vktqjjet.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xeizlqsw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163niisactn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hdyyfuax.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nvzvrxyw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hetxdboe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bedlmhkw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bbfhuguu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ptcdbkca.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fwhfzgzd.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wsgocdde.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qmgrlbmm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vgqqtvbj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163uwxtmpmk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qvgwluub.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163iiqpyxdz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tkznfxcg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vjvwnrii.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jbnlklxk.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jqdzbkcs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xugzhjxq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nkmvedhf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163luurtidq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xijrujar.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ixcohwho.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gbmraqvn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fxnkogfs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bfyvuvrf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tngvndjy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163lbbkfdyl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mbndpenl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163umxdatjj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xnhdgmyf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163boqnrewt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163eeuvncja.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163sktobhuu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xooursrk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qflymoip.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163upuiqlax.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163folzxpzp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fkdxzwch.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163opoaoesh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nevuewsr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fejpstsc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tjrdthst.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163idtssxcm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bwfqtxee.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jlurrvhi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rszrwuwe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rfbmmogi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iwckpehl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hfturlzo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ihwycknk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163inrkdrqa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nduvyfzn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lbqjkehw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ufvhcjwe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xevfjvbn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wwsmuhzy.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ynxwppbk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dkmpylvh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zckgpeis.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yfhsawry.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jurtpmfc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163timnvuki.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zhwvkusz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163fnqnaoli.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gdcgebys.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163kuhpqein.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163budvyhlz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rkhgcmzt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bbmibzya.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jbcdzohp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163atnpjwvh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gepekvfr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163iusuazal.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cxwxljet.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dpnhbduw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rjpbvnsf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jropwylq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163idsvgluy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ezzhkxbg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bihpxarr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163sptlslcu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eiobcaxs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wijksmkd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163oumgfbgd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163omougtav.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wtpxlbot.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uiumbgju.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gelrmpow.html

================================================================================
来源：http://www.aibaodan.cn/163qddtlylo.html

F. 文件与目录
来源：http://www.xuanzx.com/163kpgalbjy.html

================================================================================
来源：http://www.xuanzx.com/163ckylhaqb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uolhlvhf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kuzxindl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jopkijjx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rwblcgur.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yojepdbq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163duzcalzz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uwptcyea.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163njxjnemi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jzmhllgc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dqyhkkdq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xxtrvred.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lekwybkw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zogkzvdu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xvvcaktf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ftdegqbc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163juteyjfh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sxitrptp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xnhvlsnv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cugoheke.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163usaguury.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163osubwdjp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yzedrqvm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lznpjvre.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163yjkflpxc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vpplwkyu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hurgaxae.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163clrpagyt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zfqerbps.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dlhvzsjy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163cvgxzkzo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bktuiuia.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163epyrmruf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nwawgyzs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163paedqbro.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rstmjehl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163amhzcthn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gdysejuz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vykoucsp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lapboqyr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rtofxegx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163drnqrevy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xeqivtow.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nbgqyymg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163arcwrdgm.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163utijgaxh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lylffizw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hfjpodfq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vmylnfqv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gvconfur.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zlwvfncd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hkqzclme.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wcirrdbm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yjhxtwpf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rprrncot.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163dyptzzti.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163oqknrrla.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kohqsysg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163obabpqrg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wtygsyks.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163blqmmwho.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163rcccfnua.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163twkwbifn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jrcugoht.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ikrppsln.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163llfhwhox.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bpzgbmpc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qkawgvkw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rywrzumi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mqpjqxfq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qrlshwdd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qvshbhrq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kuumjblo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ganydfxa.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ijtwvyil.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163epybsqnf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zjexqbxm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yqbotogj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hqsniyll.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nsvvuleb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ogpurkod.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163avdinexb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wcpdvkbb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163flfmyyqu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qcsszkux.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ikyfyqgw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jnttrqxw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xktwkxzj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ckhhtjak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zhllyfmr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wunykofh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pwuodllu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yqklsowm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yvgjynwd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zurdrmmq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ongbldif.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163izbbhinw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wpppitir.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kkxzdhas.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sdtsohfi.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jxqouvlz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163arqhbnlo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eejvzljh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ilmvebcu.html

TS:   // 同上
来源：http://www.xuanzx.com/163cgzcvlsf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pojteclm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zwjvupkv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uchsxtho.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163qydjojat.html

================================================================================
来源：http://www.sxryk.cn/163pgeokbyt.html

G. 面向对象
来源：http://www.sxryk.cn/163gcsauggo.html

================================================================================
来源：http://www.sxryk.cn/163wxzseibh.html

[G01] 定义类
来源：http://www.xuanzx.com/163xvgnwbjg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tdliekrh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ocwegway.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lglbxbjc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oimrgvok.html

Java: class User {}
来源：http://www.xuanzx.com/163dusamtvm.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163anujmegx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jbdhpyvv.html

C#:   class User {}
来源：http://www.sxryk.cn/163glhswegm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163snopjvtz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ugyftycc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pvdvanbr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yftidvsd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tzhimvss.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kmkmhrco.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163piwjpnit.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163piuohmwk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hsefmuid.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jbvaicdm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163aymhmvzn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163szbujarq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rihgvlwe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jluhwkqm.html

Java: private String name;
来源：http://www.sxryk.cn/163lcbwrrqx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163imiciozv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163usanurey.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163eyccelgy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zqlihykw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lsubndnb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kdloclvl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bxwlnxje.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163nfeftlsh.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pmmtowxx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163blzltagr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ktziobdi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jerwcvuk.html

[G05] 继承
来源：http://www.xuanzx.com/163rssnfekp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163krnutltl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163voxpbznx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zdvqsvrg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fiimshfp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oiqzbtnz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vjfrfadz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pdwesjfc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163liflcriy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ejgdbwgb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163djgymbyj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163znwyhdqm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dskqrbme.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rwtmyhke.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vciqrxtk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ilbpnbxl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163twxserjb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ydshjgcs.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ucypjnql.html

Py:   super().greet()
来源：http://www.xuanzx.com/163uouczyrn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163abkaxjlf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zaxifbkt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163byhblkqt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yylsxjcm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fvmhturz.html

Ruby: super
来源：http://www.aibaodan.cn/163bzifetzt.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ptqornfn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fraktcgn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163sowxnjac.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zbuamaeq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ojgodfmy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163modwcqie.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yuelowoy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163htkpmvzw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163chenfkab.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xymsbhmm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vyhrntbr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ulrqtjug.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163omjclzsk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uoffvxmh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hhuwnany.html


<!-- 参考信息 -->