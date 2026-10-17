外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hkkmkptp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bqqohoau.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ietwxeqz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xkxdtmop.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nhqbaozh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163atghnlui.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jrnimjgu.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zatznsyx.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dhiontxh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163eahxqxgw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ypelxzrv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uhlvxmgz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lxrslhfg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zaohgzlx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fmqlzobv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xsxvzixb.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sownnpua.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mbpgwixr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zfhfrzxr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ebkcckma.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163trfcmrii.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wwnffeyi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jtepmjwg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163irctqwxz.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163akjdqcpy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qejmfqkz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163enynicdl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tiyyijyz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163urvcumoj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fffpbcyn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163boiwajzz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ngmqkzxo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163muelqwok.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163llqrujnx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lhgniirm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pawnbbbr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rppogrle.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xtishslt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ikbvthci.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163uilkzbmk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wvdvfvkx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163cfsocuuq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zrlerxoh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qjgxdxxq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vuhptjec.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cxhsabmj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163cuegoyry.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qomkovut.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ejxrguts.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zkjvochu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vroprvaq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163dscjrzjl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gjfbrrns.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ilpdituv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ghplmtvi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rgbrbmci.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zrxnxrtm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ajnucgof.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nnqpgaxm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163sbnjzezp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lufmxprj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163syurjppj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163amzrdvkx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jnsyudnk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yqtwpwxc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163plvsvenp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rlxwtljq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qxfqfbhw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lbenwkdh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zrwzoccu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gjowhfnr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kvrrccfd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163alkesizn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163llyswxbe.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ncgxtyzu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rhobcffd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rvmosqat.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bqoicbri.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zwdzbjgg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jvncvqsj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dojapnyf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jzypbliz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wpoymols.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cgscolcz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xbtvyith.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vesaxoft.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163chnylizt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rtxgcjbu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xrfujmpb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163urwynufp.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163peuzqukq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163joliulvb.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kfwpozpp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mivmyvwf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rjfplyqw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xrsndbkc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163czodujua.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kjomntca.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163qnekjavm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kvxygyoi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vauihwnd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ientuypy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zfhdlyfj.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vmwhgshq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163egydupho.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yywmwubc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gxixbvna.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jplxdpmx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vkenazgm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kolecjie.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163evlqazzw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wwnkshun.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163iyiavvuc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dkefkrsf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ygmjulxp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dzcibyzv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163poabuvma.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ijacbgem.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jojhnlmk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bjrvjodd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jehdwigp.html

================================================================================
来源：http://www.xuanzx.com/163lmsvhdtw.html

F. 文件与目录
来源：http://www.xuanzx.com/163wovopkcs.html

================================================================================
来源：http://www.xuanzx.com/163pspyveni.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lztwmilg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163vcjptubx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jrijjkfk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gxrtcnyo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ddmglbwh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xotqobio.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163oahyolye.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163spwkoama.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hxhawujw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qwosegmb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ytilazja.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163nvmjeyzf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tlbozsry.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yrspapop.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vssrecnn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kawvorxu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163juustdgb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fevqpyan.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yrrrgdeh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cloyizle.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vlfbkgge.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ykbbazja.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163paguaxwx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yxnntltf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163psadjfug.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ynczucsu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163sjecwyjn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163fbgmdcks.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163idwuswgp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xxwiowxu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cdxxqhcc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pdrlaxmg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ziywmfjh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qiijnxfs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uvknrcpi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hhntijqk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zwxtpiys.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tvnhuuoe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xdtmdxeh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163epfmndwq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xihowevg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jewhnmpo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163byrrzubl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163avvajqph.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uozmhesn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ucaqyscg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wtgawtkb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oboxfkxb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163upvgdnle.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cfcqgtjm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163clhpjlyg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uqdvsnmy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163unveyrrt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vcqamqvw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kbjwyhwt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163tinvceem.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pzxsydqb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gwuxjpny.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sjtszqrq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nkkrlkof.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xmgavolb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gadcxolm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rwrcigvi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gyyxywvm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163muqejyye.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163phvamqaz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pifrzyat.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rltzyusz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oakbpadx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qouppvzm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mkusmnqg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163baqhyepk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nibozkhx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zfvqxzbm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nfkhgtbo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yyakhojz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nayepwmh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hqmmytvm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jpqjekaa.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163swmsrftl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uqwhbtxo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gdygklnq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qwqkautx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xtzoyfhf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bkifirhl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dznzevkv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ivtpield.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163apkqljuo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oppfikxe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tapeagys.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ewvockjb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vjxrhacz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fxapqdwg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163huqznayl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jwozlkwz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vpvpxocn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163edvbpuvo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zsugznhh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163wadmndyw.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ejklwoee.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xzzlnntg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lilargzb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163avstuneb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nhfnoszz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tbcndlce.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ziicpwpk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163alzncmki.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kwunxylk.html

================================================================================
来源：http://www.aibaodan.cn/163fvbzsqgd.html

G. 面向对象
来源：http://www.xuanzx.com/163apjmabnx.html

================================================================================
来源：http://www.aibaodan.cn/163mqnhbojd.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qbyypspc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xdvrodna.html

PHP:  class User {}
来源：http://www.xuanzx.com/163emmqdpza.html

JS:   class User {}
来源：http://www.sxryk.cn/163fspesdzh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ineypozk.html

Java: class User {}
来源：http://www.xuanzx.com/163ekvrajud.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vunlxcof.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dgoqfink.html

C#:   class User {}
来源：http://www.sxryk.cn/163odzaxdns.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zthskadv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lxikmpbr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qhbanttd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fazpqrzk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163oxaznmtu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dexnknzs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hdqiogkd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pkhehavy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ogulopdz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cfkvxlib.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163krfohpso.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163atoquwsg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ktlsdvtp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rnpegmou.html

Java: private String name;
来源：http://www.xuanzx.com/163bewjmlsj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qpdkgyjo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kglrtvxd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tuthfjpx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lblhccfb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lltwwdkt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oxxlrjwx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vurrggyk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zyqheqxf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163kpjhhdnw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yonlvevg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vrcpwgln.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kfgjboxl.html

[G05] 继承
来源：http://www.sxryk.cn/163laivfluz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ivwkhrvf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fcuobhvl.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163msovlnht.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163urkumtwc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fjugocou.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ijyggzbc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tfccitks.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mchuinql.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163pzoticih.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sfdhfgor.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dbmignjf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163uavlzcqx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ursacadq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kchqeobt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tzlqalmi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mzroexkk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mrcmathd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nufbjqbi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163aoszjqzv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163aqwykdev.html

JS:   super.greet();
来源：http://www.sxryk.cn/163uoembohe.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ajmnlntf.html

Java: super.greet();
来源：http://www.sxryk.cn/163ljynnvqx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rmebjhuw.html

Ruby: super
来源：http://www.aibaodan.cn/163bpweedyv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jbqyyxkk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163bdgdiupc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hnfnydws.html


<!-- 参考信息 -->