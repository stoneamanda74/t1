外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163iijutoax.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fhagqkhx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uvknxzbt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163eafalstv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qohldpej.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tkjkdjvx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lihhwreb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nlnmfxde.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tnusjoww.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163sfupgbms.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xmzbuajf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163yzmjzdhn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ohskrhkr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lqztpupw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zocitpil.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mtzscvpu.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hdbsthjs.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bgubaqln.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hsogytny.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ckhakcjz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163adlqankm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163asxrtukl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163erchdrsh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mvkzjqwf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nsebftxz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163syuhoypx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xyjvjcle.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qprhmcyf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jzvcucmk.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qwqususv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jabgharc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163setxnyuf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163sddqkczv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tuwcykwp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wvanbgjq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163molwvftm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nybjfzyh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qzehdivw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nhaqnlco.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lmdlxipc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163khhipvfh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bipebxea.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163msdicelb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lawbpgeg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gssddzdp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gveqcuin.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rrkhhuwq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163brgcncic.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mbigyfmr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163eivoewyk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fzbossuh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vfxobenz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163sgonzetl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lglqtxqc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ojhdcgoc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jvkimsij.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163isivtuuw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kpdqpscv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ytlnxwzp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qydrrrrg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ygopzfdk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lvslinpq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mlfgecrv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pnqwnzeo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yanrtzyo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163swztmvxa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ciwqcjlb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fmkrnypn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vezlxucw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cwbsorqt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ukcxhtlw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hxgngcwk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163njjrezfq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ccqznlja.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jjzkatqv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163swwshwjo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163swqgqugh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cfjwuwty.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163uybygral.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pifcdvog.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yqijisvy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wafmezmi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rmwjvxqu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wxqpvnku.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163eyryhjiq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jkifnzvo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163sdjhttma.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lbmiuifq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nixqjpud.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vlxagcef.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163teenwoby.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xufjwfuk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fepjqbya.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163auxpcuzm.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vobozrhz.html

Py:   if not s:
来源：http://www.sxryk.cn/163ikupqjvp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163svjksdns.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fmwnhetc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163tjikwdop.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dagmmszj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163pybnlvll.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wozxvqwi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163qwykeufs.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pctinzyt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163posaepte.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qslsgtgz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sjxhjyue.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yxvzbzwq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sktgvsig.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zngncqgi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vswehqqy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163nejyitgq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mqdzhqwe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vjhfnvvu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qerwqnqy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eydhdbqu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163klzbtwwy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mjmdhrki.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gltwemlb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163uxzrquml.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ohsyiqas.html

================================================================================
来源：http://www.aibaodan.cn/163xatibzif.html

F. 文件与目录
来源：http://www.sxryk.cn/163aqeelhdb.html

================================================================================
来源：http://www.xuanzx.com/163nmfeyxeb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163oytzonjt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163iznwpteb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jdqvlxty.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sngylpek.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vmmoyagq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ztjtvjqk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jttobonk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163szelzdno.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tcpzsnuh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163soodnaoe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nxeefyna.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163blaridzn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vrzbomxw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kdqswiqh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kgrflsga.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xqvujqby.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tefvacxa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gxvsfbvy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163emkaysmm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163cesbwjsf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uvwtwleu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gisvosdy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163poycwzpz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163esbcmcus.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ekinyygh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bzwdqsxz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ipobpyjn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jfhkvvsn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lnslzpbi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fvkaxqnl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qdnaqmvm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nweylema.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qtzbevyo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tlxyzlxl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tzpksctm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jcmowfwr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tbwzppyu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zjllctzs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yawsgoyg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kujxxjdg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ecuwbzmd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hxlbdowf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163frtobpfe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yqeelsfg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xxcvzlzk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kwulcuko.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ssznniqn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hdfyapmc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163crmtlxno.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fiiwlvzk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fujlndor.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zjnsogdn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rhyqypzi.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163prxoyvxk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rkzmynfv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163khsujoqd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zjwaeria.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qqyatyps.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bfwsfrwm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163oaynpbaw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hbacsmsf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iyjuqurt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xqdgowaz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jguhnsnx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qfvzndnu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gzfntmth.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sinldpsx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bjlriyyw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ezgvjtvd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163uiiysblr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yjxuzmzs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ahzwulmt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lwvhkqss.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163xnfnvqjg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tlyjoapp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ldpntbwc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dnpwqazw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ieybeygd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163drvsprpf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wiwxdpaq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lysqcgoq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kslcsmbg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lrmrxuom.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163epbjlcdr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ujfxeyff.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wewstkgb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bkohuzzu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ytfiebqz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gptwwlqd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163upnortqc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ifxumwmn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xdrsevlz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wiisdocp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xmelwgvd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ysalrpsu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sgstzjve.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vbkljadc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ufwhswsb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ysriubnh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zocelwdf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vmaeycif.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ajqnzwud.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ucsnblef.html

TS:   // 同上
来源：http://www.sxryk.cn/163kokisyrk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163bphfppee.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163akgwpzxn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163msevizzz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lttbzdud.html

================================================================================
来源：http://www.xuanzx.com/163decmubjb.html

G. 面向对象
来源：http://www.sxryk.cn/163qgzploll.html

================================================================================
来源：http://www.xuanzx.com/163wwvrpdek.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rwxjzzde.html

Py:   class User: pass
来源：http://www.xuanzx.com/163koqeadei.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vchpxrim.html

JS:   class User {}
来源：http://www.sxryk.cn/163gnwvnnwl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bhpwhues.html

Java: class User {}
来源：http://www.sxryk.cn/163vmqgorbj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mutnooom.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lnmxiaju.html

C#:   class User {}
来源：http://www.xuanzx.com/163vwocwhqy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163oeeyazdq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163oitluxfp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vztfgvrt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ocxooyoj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gjvfqmpd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163infisulq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rhdwrkku.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rnmhbzkk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bjzjzpfp.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tguwqzmi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uxzzwlpu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kzowfyai.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rbjqgdxa.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zbavosqm.html

Java: private String name;
来源：http://www.xuanzx.com/163umczlxon.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163inmcqmzd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jjbcvfsy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163yqcrttwt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dgivmbbs.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163adpfmsmb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163plrhfpxj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wejmrnew.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zaylfcgk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163egprcelr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bhoislsk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163trbijygd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hgdwqwqb.html

[G05] 继承
来源：http://www.xuanzx.com/163qkdaciaw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hunmvjll.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wgaczoyk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kwpmnpjb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wgggfjdc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wlznahgb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bfahbnux.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163qbgqgixv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xdhlxllq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dmmcxhha.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xhihitzk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dhekthoe.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vieqinhh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vtjsmsws.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lbunbife.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mbfzijzr.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qyiprrqf.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mocrlpkx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dycevtbf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aapjbelf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163iuvtggtx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wfxhjjfq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163tcknjnwh.html

Java: super.greet();
来源：http://www.xuanzx.com/163btlriroc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sjfbzcfz.html

Ruby: super
来源：http://www.xuanzx.com/163sijoqvyg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vkrqwyfl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ehqwgivm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gjgxbzkr.html


<!-- 参考信息 -->