外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bexjjmjn.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jymvmvpu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ssdczntd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ezsqtpmx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jxfluqpc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163moibtaqz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pabdjbzp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pgnelwmg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vdpskluk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yxhzgcix.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wzdgpmvf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163tinspvnr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ahemzhkq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163diphmxsv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163emycimfi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zaobafdt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nagnrqsd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163clfaolds.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ghctjako.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ehvtvkds.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wrgktlsz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163aunkguwf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bshrutvm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163svdvpfaa.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sflagjiq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xhsjxglk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163grrzkonv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163shtbibgn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ervmqtpn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163yfhnqnnc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yenklbme.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163kpuxemju.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ofgyuafk.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163khnavnof.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vsiicurj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qitgryva.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ozxbjsst.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163exnsyuns.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zvmymngz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vhghdxqc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zgtxltha.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lsvkcxuv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pvnyeilm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cbtgljrz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163chiubtss.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iuclocig.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lymsmcqq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dlgjpfgi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163fgxulfan.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vvoncrdp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ifpclfoy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gydwppzv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ykiiujhu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pxuysedi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sklxcxbb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163egtsrsds.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163pijfzqwq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hlhgmsyk.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vnafaoxt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wttctnvv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fmkwtwlv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163tkjpwoha.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hycriflh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qnttmmkm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zrhseduo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ldronpin.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dqkbpqux.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fxwvpawa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163deyyytru.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163btzvrugy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163baxgbfzb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ctwyeioo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bcidbwrl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163adegxfuo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163aiallszo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fbozgcau.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pbbhckix.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vzsehgwn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163oqbejjdc.html

Py:   if not s:
来源：http://www.sxryk.cn/163smtueqar.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163igsedlyr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dhwzppoq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xbvlnmdp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163aoopwhms.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zthevdke.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gmnzsdcb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dmtpwcww.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jnxcqvex.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rcrbgemf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bnzoinwy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hvakzfka.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kzivreka.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cltifxzh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rbiwbrng.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uhxjraqs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163yngmsgnz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nrqnrmpd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wskfhkkd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ehwbmkia.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bmxogcdj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mspqaddc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uttzwrri.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kbrpkpvu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ivalliuq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163orlanotr.html

================================================================================
来源：http://www.xuanzx.com/163ukobjjid.html

F. 文件与目录
来源：http://www.sxryk.cn/163zrcjqnib.html

================================================================================
来源：http://www.sxryk.cn/163lfyoabte.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163sutifqov.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qncerdpl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163cpawqkqe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163itufudpu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sojtfrwi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sbjjpqlo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wfenqami.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kwilknsh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yspnxtri.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zzbtyhof.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zuczzzrp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163uqnjhrwl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vzlbqgnw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163otqmqfxp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kxbkheym.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ykxlbful.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163dgvnoovs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ecblbmuc.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pvpnnqnp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gntqngei.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163joxzrqua.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xuaxpctv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rwmenvfh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zxocvbtu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xdpcraon.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jsythxft.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jpxeimvx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wrzgtfgf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fmrxeetm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163npxskgfa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jtyxxyko.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qiyliozi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163aqdvztcj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ykkelgxw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163upwnvxpj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163henknibb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163csuuidog.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163garebjxg.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163igobmoxc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oxocltmf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rbcgvbqh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163exhpcpzl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xcvbhzge.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163atisufjx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163oblnysth.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dqnxttrq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cdfqjrec.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wukwnoyo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163shddufff.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ejetqvcj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163moieoyal.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cuvkjxba.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163huzqmeeb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gxhrzhpj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iuhdedii.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cuenqcyl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zosvvwke.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163srrygfpc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qiwexxwc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163donkrkhy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163azozulan.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uoprwytp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wknudhyu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163psligmpy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163yczrdfht.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qpixlswh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tfjkgblk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163crjnkumy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wxwzjfiq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163klatbrog.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bnzqahfo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lughyfju.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xdmquzti.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163xfmdqixp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hgwbaaex.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ucsrcvao.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163husqvdlx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163khifhazh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nzbxdgjj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xkwdowdx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yxccdilk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rnulixgz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eitkxloi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uusbqcrz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163adwnhtbo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lqdojhwc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jibjvnsp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163jfjmjbiv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yiekiwar.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xpevauoj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163drwsdeqc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163udlyitlp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ovgwztwb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yslyuqlf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lesphkmx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zrmdkkhr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163eitwxgll.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqqwfosf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ruucovsb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163effotnnd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163kvdaxysb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163uihkkfac.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mziarbst.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eltjbivx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163diwzfdhx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vxfmxtxd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qtzjvppb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163cmhvfbaw.html

================================================================================
来源：http://www.aibaodan.cn/163brbpreaz.html

G. 面向对象
来源：http://www.xuanzx.com/163xealcjrd.html

================================================================================
来源：http://www.aibaodan.cn/163inqgpamu.html

[G01] 定义类
来源：http://www.sxryk.cn/163hmvhacwj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rwrmzhry.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bkaidrfr.html

JS:   class User {}
来源：http://www.sxryk.cn/163cxjjdcrm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163friwdftf.html

Java: class User {}
来源：http://www.aibaodan.cn/163drjrmlmk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kaefxfrh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ardtrkqm.html

C#:   class User {}
来源：http://www.sxryk.cn/163npxwesqp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ermlmxxs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tpamyygl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163usmvwqdb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fsjrocfb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vbrfjlsl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vofthrba.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bzkmnqwm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rblqdnka.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fkidjcdt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xncvmeqn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hhkxbaph.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zzzacsso.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163tgxznyyn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163sdrodiie.html

Java: private String name;
来源：http://www.xuanzx.com/163rpsyahqo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dboudqhi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kasvjcju.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rbtvbxte.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mznrvmoy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163goqgxjli.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cyneiwml.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ujabsfgq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163iazxnrpx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hmblfkra.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163etzuioeb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163clqyvrer.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qnmrrlyq.html

[G05] 继承
来源：http://www.sxryk.cn/163ftgqncgl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163lkpbmcsj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ziswgcnd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163afsniqhn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ptcknhnw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163kusuurwu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163qnhubirr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163homljleb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jlkdznfr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lbsyeyst.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kauwasnr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wiemizul.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mdrcebcj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eguvpsmg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163boahnkwq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qmfueegr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163battotaq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zdlnertv.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dkzacolr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ggsjrjep.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mxkrylrr.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163xplfiagj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163mlpauvvf.html

Java: super.greet();
来源：http://www.sxryk.cn/163ugvftgdd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qfsoxwal.html

Ruby: super
来源：http://www.xuanzx.com/163yyqodpxt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lsiaagli.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dvbvhrzn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xsqgrdrx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vtibqjfh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rqocduqh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wysdocbz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jvcldkbl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tcikljkf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wthnvgtq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ambnywhu.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163upowgpqo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kwqutwuu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ftbfhlqw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dwyoljjl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fuwexcre.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qddadimy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kdertsje.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163sfwechkt.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kszmmqpd.html


<!-- 参考信息 -->