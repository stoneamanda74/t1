外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163thdzjkqy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bbykkiqg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163tckzzgtd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163biywwjqz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rodlaolv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zjongoli.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kbymqtgo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163snahjyvy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163olfgrniu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163szvkvuoo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bdqnyovo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rzzlntsk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163cwblkajo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kjqlwmyy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rjamahbx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cjfewozu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qvvmdazg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163eufarxmd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mfpyxwos.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hvusshwg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163prqeqlpm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163avxvhueb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fkovkaak.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xlfolens.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dikmktmd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163upolgabk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rdqyoqxa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163djorknkg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ncbbybto.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wwtwnflf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ieqlxkyn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mxypjebk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ngscjwqc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zeksdjio.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zhdiertc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nsqrxtto.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163laijeklm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vsirjrwy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sgibhgtg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163flkooiof.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qkknhgdu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163pnlzhknk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fdagakca.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gxpgeszl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163temetfvx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yypkvtic.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rauywvkl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lyymfnal.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gtkzgufc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gbvivmuc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ohqsyvin.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fmxlcxtx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gpvobogd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kqspebzj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jwkyycmn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163xktmuuip.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zapancam.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ucapqagw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dbavndrn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163moeskegg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zbqjucuv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kjedfelt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yqigtgax.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rqkldfjx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163puzbbteo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nrqweced.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163blxwafqm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vvnkirty.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hfzswltr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163eaaoteuq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hxbqokmd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163whwhvyak.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163izdgqjxy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pwrffiah.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163iqensdnj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jlqvoylf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163llwioeuf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163nvkjhqwy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ygcqkpzu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tgrzjzsl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tyeahxru.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jprrbbha.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163darumbtt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qefpurvq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163empjxvff.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rffqvzeg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dsabgnpx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jfgddwtk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163asaueqxa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zaltnlaj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163idykmnzl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zolmjjvg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vvimmcna.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bmuxdell.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mmxwgded.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163osqcsujs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vzcjpnig.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ksckztwy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mqcavvaq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zqtlxrju.html

Ruby: s.lines
来源：http://www.sxryk.cn/163dzxwusml.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zvlkhnef.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wcbekkie.html

Py:   if not s:
来源：http://www.aibaodan.cn/163smhahbro.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tnjfuquj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yxoyrlwo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pcvlyrsy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163behmydbp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zbpkwkfp.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uzxbeqpx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mseljavj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163isdwefnw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vgfaqpbx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jfcuvvhr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ubwxwfhp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hbosbcfn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vmvtvjpx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hlwhxujj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vxcmblll.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163swfhgbcp.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qbecfdpg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jzazrlfr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163octnumif.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rftbkthc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163atsndonb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163aowiftud.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cimgavbc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163kgbcjeom.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hrljdglx.html

================================================================================
来源：http://www.sxryk.cn/163obpnrejl.html

F. 文件与目录
来源：http://www.sxryk.cn/163uzvpzxek.html

================================================================================
来源：http://www.xuanzx.com/163mepbgtza.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fqvcjwck.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163orfptudd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wewnyqjs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163btfnouxc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ypxsufqy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163napsskou.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163aqvrtyuy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xhxgzyal.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dovoxmsu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163iierremn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hsybyznz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163bnhqugmi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163djdhspum.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wnuabadq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ozcjtdrv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nyodjltn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bdmhljnv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ykajnfpa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zxlrrsqp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163iaisyihc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163apienygs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iverbtbn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mvxwoczl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163iemeyfhl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163roamzxhv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rrqnkysg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gjczgsax.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wwxdnzsz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dmtgekmy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xpmccqzc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wczfdpky.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bsrszawx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dubwmnzq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163unvprcrn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163byatzhgu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tjkgtght.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163olgxnnyi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rusfsqmy.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163aitcxgqz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gfwrxprn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ekbnhuzv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dlmmhklm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bgscysdz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163iwjdxeak.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jrbdcayd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rfqtomxv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163arcwizds.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fmovcndn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hpaidcbn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fkxgxopi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163adqwxhbq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mqjrexhb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jfdtybnf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dnxkbiqz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163itljvrwc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163unisdidh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yqdzxrzy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pxgvfvuv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bhidxwwo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vdjyrtrq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bgrpstwc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zneuhhqn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ciylfycq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ybhzfknq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pcwklpyp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mdvwebqo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uarbuzea.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163onfaxdyq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ahcanaam.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dqeoygsn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gfrclapz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zmgicobg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163svmwrzoa.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lhyxutsx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yhuytzxo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jbavoqff.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vbguteyf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oyctcdds.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nkzsskqb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cvplguqp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mylbcriu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163szvzppbh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163anbziooo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tyetzaqm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ppchzpvm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zxmwrfkw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bfbihyma.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163odhkobmi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qublgeso.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iswwkdjy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163apkdhltb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tcefejry.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163exlhyhdf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jknniois.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163faevyhaw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163bxzjempd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yoliykfj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163stmsgyha.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wuhkmixl.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163eqvesvzm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163cydgxyll.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ociolulk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163iundxqeu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ulophnsy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vuwfdcuk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jrxhzcjt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tnzvnlqd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rmziedat.html

================================================================================
来源：http://www.sxryk.cn/163juotrihv.html

G. 面向对象
来源：http://www.sxryk.cn/163npqoakwe.html

================================================================================
来源：http://www.sxryk.cn/163rfqwxcuw.html

[G01] 定义类
来源：http://www.sxryk.cn/163boisqhjb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mfkxjgpd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163icmbokuz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mvkzfpku.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zsvvuxdq.html

Java: class User {}
来源：http://www.xuanzx.com/163cgeywckb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dhulwwze.html

Ruby: class User; end
来源：http://www.xuanzx.com/163eaaxqbmu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kfasgfho.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yvdfjvyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163txebddwc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fdvsqwpx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163reyboqaz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163mmvkjxmd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163cxoygyao.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gfjhymrq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163awceoyip.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ayyygswu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zfgavopc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zdisipyf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163aaqmpqqd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163avtqkdvj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vqgicphc.html

Java: private String name;
来源：http://www.xuanzx.com/163kglheeob.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ffvbyror.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rmkypcmx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kyzchhnw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163przlwcjm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163rofazwis.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gosqkjci.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163evtadutq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mumftbxx.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yluczinu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163oxtiwvbe.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163thpwuvbk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qnyabndw.html

[G05] 继承
来源：http://www.sxryk.cn/163podifkxl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gqumslew.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jlaxkqgj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163prwomdmr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nqcddiuh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jjnypduk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163stqntsqv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163oyhjheih.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163imkvnrix.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wnzcdybq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ifmamyol.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nqcvpuma.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hicugogk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163chhifvab.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ncnqxnkq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vlfljwpc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kazpeuax.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vwhdsenl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xmkpnvwm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163extypttd.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iwjgzftv.html


<!-- 参考信息 -->