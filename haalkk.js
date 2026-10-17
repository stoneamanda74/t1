外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xlvlknfp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163grzsoskt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rgcumccw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wcdixavd.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163amfdnibv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mcrhvfhq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ngbieaml.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xwstaiut.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rmjsnlhv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zfwegefm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uabjewgv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163slphtzob.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wurceqwf.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jrgkadmo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163svorskll.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yrshzqig.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ycnsbdbh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163znsfbecb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163adjnqhsl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kfwyokxe.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ttojdkqf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163iackwzhk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wjlsbnmx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qsapfmzl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163unhzqguo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pbtrqser.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nvdvjprr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163imvjtazv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ebdamkmi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fujqefkh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163soqwmmmq.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bwkyhfzm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pniswrud.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jkbrcpxy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wmykfcfr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yztrewtc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wnrbhqyg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hyofzaug.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mbfoippu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163efircxpa.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hbgsitzm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ownqngqv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pyaooflw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lvauphtl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163robjlcdi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ankzxdag.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rjvrycwa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zfhezyri.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dtffkauc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hwstsssv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163itqjkpml.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hfibhcdv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163djpimogy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jdsuknwk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ervedacz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163egcxrrsk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yhcuwrng.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lyvndjfi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vdqkrvyy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ecgmxege.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wlrcwini.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bzjfozhe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163repabufw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yxilvfbu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vjvqpgjj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kpfysjdr.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kyxvqdnj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tucgbznf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163itlemcet.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ohfvmdif.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uuvnhgrh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zsjiplbs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163duzcufkq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163amwzjttl.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wfvpgjwx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163taxhtiec.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jlepfzkg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163gutttbcg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zxqekjme.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163htzlorsk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lbgqkphk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ffkkhnnj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163midcvhyl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gaoqfgum.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vqeiobqc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163klnuvnzn.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kjkdbvez.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mzvdgbyr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bdahyaps.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qpzlmdrd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163drdeolpb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163epmqcpgv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mneyahbh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163boxemswc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gclufxpp.html

Py:   if not s:
来源：http://www.xuanzx.com/163hghrwogi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163slrhitmk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hvlfgqss.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163kbmfjzxy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wljykfav.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fjeandqx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163acgfidqw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163oxmmbwzu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nkvhieri.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qkzrhyem.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mbgkgyfb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gkzhijsw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163guyghrxd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ewsfseun.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ctgwnayu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uozirpzh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xaititxj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163udtgfrsw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163modvbwma.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gooboldy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163utxgbebh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nsxnywsr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163aoorqcmd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163yldfucvk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rucjeegi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jxlzdecl.html

================================================================================
来源：http://www.sxryk.cn/163scefvwxe.html

F. 文件与目录
来源：http://www.xuanzx.com/163cpwduekw.html

================================================================================
来源：http://www.xuanzx.com/163jhualjqr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zdviinol.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163odpshary.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gqujneir.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xxnytabd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zyzqdryx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lznxnnpg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qnknqewl.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ktjuoets.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ladedwqc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163itpkpzbz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mwvjbboe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mrvrtupt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zhtmtgoo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aejvdphz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hyuxsfep.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mpxuscds.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gosifgtv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ntmduoox.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pxjzdrmh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ayhfeknk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163khqpqwho.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163necrdywj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cgmsvvae.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163idhttchj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hlhrwfbg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163cmezrswy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hmwoirvm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nsiewgki.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yyovxept.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xicbhoiq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pddiqzgz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lskykhqd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163oskxcdkf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dmdhdtdi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mvqvasgi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vzgalscg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163alwmuprx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ztkpfell.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rzmztqvm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eatvljgg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163upjwnwhy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sccefunn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163taahzmti.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qpnwuwnx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163retcnazj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jplkgjrb.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163tujslayk.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163suvlqrla.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zxcpwmdl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xuwvgaax.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ztyrhoto.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lpbfghnf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163skphposs.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qsoerbjr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ohropsns.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mqgaxkgk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fbwemgmx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ospuuukc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zwxmxhdi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mjspvpaz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ufvekwqg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163omumxelx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ocofvmet.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pdhnrysu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dfcsbaxm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hymttihj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163povxnqhu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yqacclbk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mkufdhfp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lhocvcox.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uzqzhpgm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pmnrzdae.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nvusredw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cxusvnjh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uixbrpzr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gvymibhy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163crleyfev.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lbraumvb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nmyvyubn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163eeqvlltb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xufmuswx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bhfltnue.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gvlzsvdu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163odguzhgm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jjdocuzw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jjuuzxnv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fqitpdhe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hizsctsa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qmxnmxgd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lcdlntae.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mknowizl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yevuhohd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163gwuqwgxc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lyllxabk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163phuucayh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163peqzlvmt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163huexartl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uqfushpr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163expxzayk.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ydjblslj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163preoiuxk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rftlwpas.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mfbontna.html

TS:   // 同上
来源：http://www.aibaodan.cn/163uongfbkf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163sfbzluwl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163pzwdmgki.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163inrcsyho.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gzrcaczr.html

================================================================================
来源：http://www.xuanzx.com/163kjfopppq.html

G. 面向对象
来源：http://www.xuanzx.com/163kobirlcz.html

================================================================================
来源：http://www.xuanzx.com/163mueyhzqf.html

[G01] 定义类
来源：http://www.aibaodan.cn/163dzddqmau.html

Py:   class User: pass
来源：http://www.sxryk.cn/163pzriisbq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qwtgsfpk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mygljznj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pltslpcu.html

Java: class User {}
来源：http://www.xuanzx.com/163kdjypyob.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ahbdmtlw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163iaclaiuj.html

C#:   class User {}
来源：http://www.xuanzx.com/163oedrhvzv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ygovmful.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ffkhvbsq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ugcrrkxd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rnvhblsi.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jthvheux.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dgpaezxd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163bzpzqxwf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163nsrfemxt.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bpqxijzk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jztkialh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tovmnjwt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163epkhkila.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163xlyujpfm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tdejaoku.html

Java: private String name;
来源：http://www.xuanzx.com/163eonpsnzz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mnidnzjq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kcrxtold.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iqnlmzqm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tqfxzfab.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ruojfhjb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mugibwjj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163slkhtmya.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fonyhkhb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163uxuoxmop.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163svakuaun.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163lyztgevm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dsnvfnhb.html

[G05] 继承
来源：http://www.sxryk.cn/163jqrbmgdy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fnupotpe.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xjztpzya.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mkhcghqh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lcgpcmng.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nxspzipl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xlcojgiu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163knaiuxxa.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ilxrsipd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bdnermvz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wfjwqzqq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gwmpijcn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mhrqgspj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kgzgivhc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hfhzxzql.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163asaixxrc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ukqmqimr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163yxtykvfx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pwbjekxi.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163enapiafd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yknmayqo.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kfjvqaqy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xgjcskpb.html

Java: super.greet();
来源：http://www.sxryk.cn/163bjnbmcpa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ryzqsaqg.html

Ruby: super
来源：http://www.xuanzx.com/163epfbsxoo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163oypsvplr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ntiybkfq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163oakqipie.html


<!-- 参考信息 -->