外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vshiksdi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wghtzerj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fectlycp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kbqfywmf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hdvhllwo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uzoivnyr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qwadpbny.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zvrakdfl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vgyxzbif.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gvoxyyke.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dbruaikw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163twrbkvqt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bsgezimi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ivhwwjnb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uqvrtsye.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163drpbctgr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hkkdhkwq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gnqyykzo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wrzqbpmx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163oadxsbxi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mohpwfnl.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163anfciebd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vldbevhw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ejmcrbpc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fwwfswqb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163agejnlgk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163smqjtyxh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xzshjhdk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163albhgbdp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163thidtchn.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xzuyrmfp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163iabjulxc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eseambkw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fsoknfud.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yvlzlalk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xezejoay.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rsdudrug.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163aowgemfg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163akjktrsm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nlkykliv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uzgnkyyz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163euzouvpr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lacvpztc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ftwoddur.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163leirwaxc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ogoxynnf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163movkzyvy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rzaeaejw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ynyjxtdx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vothghpf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nhqlblsn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hjxrfdut.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163owabxbir.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163afcgnnzl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163npqfhwcu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qwjycqrv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tfdwbrwd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ghmjpbnq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dwpcpgmy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163htyztzmw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163apovalym.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pszlbnqk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163jnrwadqj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163frrndxzo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163touchzpq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wqrudyqm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163lfsxqgoz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mfaobiqq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fhoaysfw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163goymlagb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163avgbkagz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dfghvcaq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lrphbwbk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fiklagog.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ouudubog.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gntopxxa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wcmsoonz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zzijjzxb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pfolfaiu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pqqqsfvp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uzcopfeh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163abduhfqy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sshdynlo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vaimdwma.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nquphbsp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jyqfardz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pbmmjnzv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163acepvfio.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fkwpkxdv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uzgtxjnp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yzvzdhex.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lhviuobq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ynjzxvpd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163pknedjka.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ihcdypjc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xmblmcos.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kjydndpa.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rryudeuc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fllafssj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163szsbxqjs.html

Ruby: s.lines
来源：http://www.sxryk.cn/163flpcvwgk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mboswjbh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tqpwymks.html

Py:   if not s:
来源：http://www.xuanzx.com/163gulyuwvb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163veqfabgx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jtkpvfsp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hwqtefww.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uodvjxuh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rsqysysw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xrhbuhtx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ahatmjve.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qhxmrvgl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mltwirtb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cyymzjia.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qekezyue.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163csoikzvn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ecbwxbtd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jeuqrnmv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jyqrnxew.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mqkazhjz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bfazwojw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163efsdkapk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vjoweoms.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163duzyxbzo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ginsiiaz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zeawipgf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jhzjlrwe.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cvgtascm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ugskkrta.html

================================================================================
来源：http://www.sxryk.cn/163qongyyrd.html

F. 文件与目录
来源：http://www.xuanzx.com/163vtbndtjw.html

================================================================================
来源：http://www.aibaodan.cn/163vpkknxdk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hwdhrhcc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fpmwmtmr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lokwmmvh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163flfinwrz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oqfgjaey.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wblruxjg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ftdulars.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xzjgswsb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163uhdajbkv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gmsxclws.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sgauurtt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gxgdsogy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163moocpdlr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ezzwyieu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163avbpzsfj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163snlnuabr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163swngcanz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163angxqmud.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kjkzzkqm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yopusrxw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ualqueza.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ovflqzdb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vwoamekb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163meegvjtx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sjxurxux.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163oqnbwexn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dccmbeej.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qpuyncan.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163upfaqktz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ddzmkzrg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ivykdptn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cwyunqir.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hfokrquc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qreilbde.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xpgrhzou.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163phealvps.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pxcjxevw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ewazpplt.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rclnnyaj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163abwkksxa.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163octkmlqi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163utfkkzkx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dnpitajt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ixushtnp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uauibigq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rcuctbsq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jizszpux.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163tspqnved.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jjkbbspl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ffbdvndr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tydmwjmm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tzybtvdh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bjfjxfel.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kpovhxxw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zvzdymlg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163chndgmhr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gvgkdfac.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kjkotndm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jbxaetnr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ewjjddah.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pybhpuwi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vlnsykxh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ibcnsopy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163knhlapny.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hhyfqfkh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qcrsjysw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xdqmqwln.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ulskdlak.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163raespwqm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oubymako.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vondzmkr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dqmzgapr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xohwhonn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163arniwnyi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gnfmzdla.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bdkxocpj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wbkfqfpt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tigrbdvl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163epqihocx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163mkkmpoqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163mwiiqqix.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163njogeolw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zlquzyxx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cmnycelg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163maupewya.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163thgmiksu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163daaoajgr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163pzozbqbh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ohpkmhsq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163whfjuteu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163umtjjwhw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xanuwpjh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fbkstrfz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yjuiukhu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wuyxbnvl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163yizbqktq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hdwuxfcx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dvofglyz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163izhgtrxs.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163agafprcf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xhdfegpt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zgprqjqz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wywysmyu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yqribtwa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163yhxitgqp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163runveneo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jqolicem.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rlnnlejp.html

================================================================================
来源：http://www.aibaodan.cn/163biirwsww.html

G. 面向对象
来源：http://www.aibaodan.cn/163evvhmant.html

================================================================================
来源：http://www.xuanzx.com/163hzqvmdis.html

[G01] 定义类
来源：http://www.sxryk.cn/163hvxfohbe.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ueuupxto.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fwvwefzl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ycrrxkng.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mcywzgpv.html

Java: class User {}
来源：http://www.aibaodan.cn/163oehgnkow.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163attkpvet.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ptegoflt.html

C#:   class User {}
来源：http://www.sxryk.cn/163ylfcevuc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ujdkcmal.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qfwdetof.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vouxirmf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wvilolnj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163udjsvynq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ykeipbsw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fazusapx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rwfaqhlb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uqkdfkao.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qlsrgntw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163myrnsyho.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163onmuosql.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nojiyvpp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163psuselgn.html

Java: private String name;
来源：http://www.sxryk.cn/163obbmtoxb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jwaresmp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uawnkrba.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163juvmxniq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ykqwweut.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tgduhuer.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163iyxcysbe.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bpljjtwd.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mskhpsxc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xjlegvpl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jhjoonrm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wjwlnxtb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xnxgzmbx.html

[G05] 继承
来源：http://www.xuanzx.com/163cuizcsoc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wppsgxsh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163nsjlxvqv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kbklxlru.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zuuqguhz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lsuayeyw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mrkyddwz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163klmemenk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qejqxajw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rrwclxbk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163quummcrj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jrhbmjlj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cfnvecat.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xgvadaex.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163szcxzdgd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ezcbvuiu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ahlmvuql.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jgodlbvf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kapqpxmm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ehaiwslk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hrbzkune.html


<!-- 参考信息 -->